const fsPromises = require("fs/promises");

const getUser = async (req, res) => {
  res.json({
    status: "501",
    results: 1,
    data: {
      message: "under work",
    },
  });
};

const postUser = async (req, res) => {
  res.json({
    status: "501",
    results: 1,
    data: {
      message: "under work",
    },
  });
};

const deleteUser = async (req, res) => {
  res.json({
    status: "501",
    results: 1,
    data: {
      message: "under work",
    },
  });
};

const updateUser = async (req, res) => {
  res.json({
    status: "501",
    results: 1,
    data: {
      message: "under work",
    },
  });
};

const changeUser = async (req, res) => {
  res.json({
    status: "501",
    results: 1,
    data: {
      message: "under work",
    },
  });
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
  updateUser,
  changeUser,
};