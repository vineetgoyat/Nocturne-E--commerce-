import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    console.log(req.file);

    const result = await cloudinary.uploader.upload(
      req.file.path
    );

    res.status(200).json({
      imageUrl: result.secure_url,
    });

  } catch (error) {

    console.log("CLOUDINARY ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};