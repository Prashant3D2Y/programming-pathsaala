const productModel = require('../models/productsModel');


const getAllProducts = async (req, res)=>{
  const q = req.query;
  console.log(q);
    const data = await productModel.find( );
    console.log(data);


    res.json({
        status: "sucess",
        results: 0,
        data: {
            products:data,
        }
    })
}
//   const addProduct = async (req, res)=>{
//     console.log(req.body)
//     res.json({
//         status: "false",
//     })
//   }


const  addProduct = async (req, res) => {
    try{

    
    const { title, price,description } = req.body;
    const product = await productModel.create({
      title: title,
      price: price,
      description :description
    });
  
    if (product) {
      console.log("product registered");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    } 

    } catch(error){
        res.json({
            status: "fail",
            result: 0,
            data: {
                meassage : error,
            },

        })
    }
  };


  

        // const replaceProduct = async (req, res) => {
        //     try {
        //       const reqId = req.params.id;
        //       const data = { ...req.body, _id: reqId }; // Assuming req.body contains the new data for the product
          
        //       const result = await productModel.findOneAndReplace({ _id: reqId }, data);
          
        //       console.log("Product replaced:", result);
        //       if (result) {
        //         res.json({
        //           status: "success",
        //           result: 1, // Assuming you want to return the number of replaced products
        //           data: {
        //             product: result, // Return the replaced product
        //           },
        //         });
        //       }
        //     } catch (error) {
        //     //   console.error("Error replacing product:", error);
        //       res
        //     //   status(500)
        //       .json({
        //         status: "error",
        //         result: 0,
        //         message: "Internal server error",
        //       });
        //     }
        //   };
          


        
const  replaceProduct = async (req, res) => {
    try{

    const  reqId = req.params.id;
    const data = {...req.body,reqId};
    const result = await productModel.findOneAndReplace({_id: reqId}, data);
    console.log(result);
     
    if (result) {
        console.log("product replace");
        res.json({
          status: "success",
          result: 0,
          data: {
            product: result,
          },
        });
      } 
      else{
        console.log("hi");
      }
    } catch(error){
        res.json({
            status: "fail",
            result: 0,
            data: {
                meassage : error,
            },

        })
    }
  };

  const  deleteProduct = async (req, res) => {
    try{

    
    const { title } = req.body;
    const product = await productModel.deleteOne({
      title: title,
      
    });
  
    if (product) {
      console.log("product delete");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    } 
    } catch(error){
        res.json({
            status: "fail",
            result: 0,
            data: {
                meassage : error,
            },

        })
    }
  };

module.exports = {
    getAllProducts,
    addProduct,
    deleteProduct,
    replaceProduct
    // postProducts,


}

