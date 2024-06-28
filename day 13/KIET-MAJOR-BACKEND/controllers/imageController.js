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
    "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTk1NjczNzMsImV4cCI6MTcxOTU3NDU3M30.KO2gZ5hN3ZXXiEEZ8MDXnz7LdK2XFWVmTVeJo55iCMs",
    "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryb7twkbYXEduqQiXp",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://hotpot.ai/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-hKkKNrEZS16bmff\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-hKkKNrEZS16bmff.png\r\n------WebKitFormBoundaryb7twkbYXEduqQiXp--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
        // n${searchText}\
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
