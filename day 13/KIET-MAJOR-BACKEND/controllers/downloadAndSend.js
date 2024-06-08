const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
const crypto = require("crypto");





function generateRandomChar() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = crypto.randomInt(characters.length);
  return characters[randomIndex];
}


const downloadAndUploadImage = async (imageUrl,searchText) => {
    const randomChar = generateRandomChar();
  try {
    // Download image to local folder (uploadimage)
    const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
    const writer = fs.createWriteStream(imagePath);

    const response = await axios({
      url: imageUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    console.log("Image downloaded successfully.");

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "img-gen",
      public_id: searchText + " " + randomChar,
    });

    console.log("Image uploaded to Cloudinary:", result.secure_url);

    // Delete the image from local folder after upload
    fs.unlinkSync(imagePath);
    console.log("Image deleted from local folder.");

    return result.secure_url; // Return the Cloudinary URL of the uploaded image
  } catch (error) {
    console.error("Error downloading/uploading image:", error);
    throw error; // Handle error appropriately
  }
};

module.exports = { downloadAndUploadImage };