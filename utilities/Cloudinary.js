const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileToCLoudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log("File uploaded successfully", response.url);
        return response;
    } catch (err) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

// cloudinary.config({ 
//     cloud_name: 'dyvtawzwn', 
//     api_key: '543436271846836', 
//     api_secret: '***************************' 
//   });

module.exports = { uploadFileToCLoudinary };