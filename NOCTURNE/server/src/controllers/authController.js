import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== "admin@nocturne.com" ||
      password !== "admin123"
    ) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        role: "admin",
      },
      "NOCTURNE_SECRET",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
