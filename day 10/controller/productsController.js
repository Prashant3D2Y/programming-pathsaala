const fsPromises = require("fs/promises");

const getAllProduct = async (req, res) => {
  const data = await fsPromises.readFile("./data.json", "utf-8");
  const arr = JSON.parse(data);
  res.json({
    status: " 200",
    results: arr.length,
    data: {
      products: arr,
    },
  });
};

const addProduct = async (req, res) => {
  console.log(req.body);
  const { id, title, description, price } = req.body;
  if (!title || !price) {
    res.json({
      status: " 400",
      results: 1,
      data: {
        mess: "title and price must be provide",
      },
    });
  } else {
    const data = req.body;

    const db = await fsPromises.readFile("./data.json", "utf-8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;

    if (len == 0) {
      newProduct.id = 1;
    } else {
      newProduct.id = arr[len - 1].id + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));
    res.json({
      status: " 200",
      results: 1,
      data: {
        newProduct: newProduct,
      },
    });
  }
};

const updateProduct = async (req, res) => {
  const data = req.body;
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
  const reqId = parseInt(req.params.id);

  const newArr = arr.map((elem) => {
    if (elem.id == reqId) return data;
    else return elem;
  });
  fsPromises.writeFile("./data.json", JSON.stringify(newArr));
  console.log(data);
  // res.send("done");
  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
};

const deleteProduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));

  const reqId = parseInt(req.params.id);

  const newArr = arr.filter((elem) => elem.id !== reqId);

  fsPromises.writeFile("./data.json", JSON.stringify(newArr));

  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
};

const patchProduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));

  const reqId = parseInt(req.params.id);

  // const newArr = arr.filter((elem) => elem.id !== reqId);

  let updatedProduct = req.body;

  if (reqId !== -1) {
    arr[reqId] = { ...arr[reqId], ...updatedProduct };
  }

  fsPromises.writeFile("./data.json", JSON.stringify(arr));

  res.json({
    status: " 204",
    results: 1,
    data: {
      newProduct: null,
    },
  });
};

module.exports = {
  getAllProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  patchProduct,
};