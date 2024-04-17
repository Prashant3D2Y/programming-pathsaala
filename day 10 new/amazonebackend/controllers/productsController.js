const getAllProducts = (req, res)=>{
    res.json({
        status: "sucess",
        results: 0,
        data: {
            products:[],
        }
    })
}

module.exports = {
    getAllProducts,


}