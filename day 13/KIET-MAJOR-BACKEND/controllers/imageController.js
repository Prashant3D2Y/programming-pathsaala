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
    "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjY3NTQ2NjcsImV4cCI6MTcyNjc2MTg2N30.dlybMsVxhJYmFLassUn41tVNE_yXpaDkXlutWoOJWnc",
    "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryGgth06iWjPBlOabo",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://hotpot.ai/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-B2iTXuOuxmcOW0b\r\n------WebKitFormBoundaryGgth06iWjPBlOabo\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-B2iTXuOuxmcOW0b.png\r\n------WebKitFormBoundaryGgth06iWjPBlOabo--\r\n`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  // "body": `------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-bPj6y4henFG6r1x\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-bPj6y4henFG6r1x.png\r\n------WebKitFormBoundary3z4BCJDY97RXmf2F--\r\n`,

        // n${searchText}\x
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
