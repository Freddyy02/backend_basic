const { response, query } = require("express");

const userGet = (req, res = response) => {
  const params = req.query;
  res.json({
    msg: "GET",
    params,
  });
};

const userPost = (req, res = response) => {
  const body = req.body;
  res.json({
    msg: "POST",
    body,
  });
};
const userPut = (req, res = response) => {
  const id = req.params.userID;
  res.json({
    msg: "PUT",
    id,
  });
};
const userDelete = (req, res = response) => {
  res.json({ msg: "DELETE" });
};
module.exports = {
  userGet,
  userDelete,
  userPost,
  userPut,
};
