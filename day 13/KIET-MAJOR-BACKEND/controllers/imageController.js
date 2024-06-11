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
    "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTgxMjA5NjEsImV4cCI6MTcxODEyNDU2MX0.YTNZreMH1KZ2x4m2Ei-XCc-T4YtfmaGF1zrIDL22G_Q",
    "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryaMjjh4nsT3bYKuuY",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://hotpot.ai/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n77\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nConcept Art 3\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-9T2ArfIrRELBDI7\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-9T2ArfIrRELBDI7.png\r\n------WebKitFormBoundaryaMjjh4nsT3bYKuuY--\r\n`,
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