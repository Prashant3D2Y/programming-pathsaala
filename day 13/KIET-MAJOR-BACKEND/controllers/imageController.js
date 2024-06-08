const imageModel = require("../models/imageModel");
const {downloadAndUploadImage} = require("../controllers/downloadAndSend");
const generateImage = async (req, res) => {
    let imageCloudURL;
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
          "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,hi;q=0.8",
            "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc4MTcyODQsImV4cCI6MTcxNzkwMzY4NH0.FlZKwPoqsu8ZiNSLEOpu8W_TpklRSH24ATSM3Sv6wtM",
            "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryiUa83SYFRrUdiYw5",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
          },
          "referrer": "https://hotpot.ai/",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": `------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-HSu0YCYyTkOd0R8\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-HSu0YCYyTkOd0R8.png\r\n------WebKitFormBoundaryiUa83SYFRrUdiYw5--\r\n`,
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        });
        imageUrl  = await res.json();   
        let imageUrlForMongodb = await downloadAndUploadImage(imageUrl,searchText);
        imageCloudURL = imageUrlForMongodb;
        const imageMongoDB = await imageModel.create({
            searchText: searchText,
            imageUrl: imageUrlForMongodb,
        });
        if(!imageMongoDB)
            {
              console.log("not saved at mongo db");
            }
    
    }   
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageCloudURL,
        }
    })
}

const getAllImages = async (req, res) => {
    try {
      const images = await imageModel.find();
      res.status(200).json({
        status: "success",
        data: images,
      });
    } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to fetch images",
      });
    }
  };

module.exports = {
    generateImage,
    getAllImages
}