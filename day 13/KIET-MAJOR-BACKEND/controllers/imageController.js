const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9,hi;q=0.8",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc2ODUxMjMsImV4cCI6MTcxNzc3MTUyM30.nQWwn5ZFiy1xLVEAi3ozsK-jpxSK5nFuPd6M2ZM1t1c",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryKc8yP46oZYdqtp3L",
              "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n178\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nHotpot Art 11\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-Cxx55T37ZTY2Ia7\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-Cxx55T37ZTY2Ia7.png\r\n------WebKitFormBoundaryKc8yP46oZYdqtp3L--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
        imageUrl  = await res.json();   

        await imageModel.create({
            searchText: searchText,
        });
    }
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}