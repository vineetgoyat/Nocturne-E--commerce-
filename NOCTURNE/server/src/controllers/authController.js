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

export const registerUser = async (
  req,
  res
) => {
  try {
    res.json({
      message: "Register Route Working",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (
  req,
  res
) => {
  try {
    res.json({
      message: "Login Route Working",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
