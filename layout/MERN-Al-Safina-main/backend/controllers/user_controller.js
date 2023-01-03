const userschema = require("../models/userschema");
const HttpError = require("../models/HttpError")

const register = async (req, res, next) => {
  const { name, password, email } = req.body;

  let exsitingUser;
  try {
    exsitingUser = await userschema.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Sign up Failed Please try again later", 500); // for Sync function
    return next(error);
  }

  if (exsitingUser) {
    const error = new HttpError("Email Already exist", 422); // for Sync function
    return next(error);
  }

  const newUser = new userschema({
    name: name,
    password: password,
    email: email
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Signup Failed", 500);
    return next(error);
  }

  res.status(201).json({ message: "Signup Success" });
};

const login = async (req, res, next) => {
  //console.log("hello")
  let user;

  try {
    user = await userschema.findOne({ email: req.params.email });
  } catch (err) {
    const error = new HttpError("Login Failed Please try again later", 500); // for Sync function
    return next(error);
  }
  //console.log(user)
  if (!user || req.params.password != user.password) {
    const error = new HttpError(
      "Invalid credential, could not log you in.",
      401
    );
    return next(error);
  }

  res.json({
    message: "Logged in!.",
    user: user.toObject({ getters: true }),
  });



};

const getUser = async (req, res, next) => {
  let user;

  try {
    user = await userschema.findById(req.params.id);
  } catch (err) {
    const error = new HttpError("Could not find a User for that id", 500);
    return next(error);
  }

  if (!user) {
    return next(new HttpError("No User Found", 404));
  }
  res.status(201).json({ user });
}

const getAllUser = async (req, res, next) => {
  let users;

  try {
    users = await userschema.find();
  } catch (err) {
    const error = new HttpError("Could not find", 500);
    return next(error);
  }

  res.status(201).json({ users });
}

const updateUser = async (req, res, next) => {
  // console.log(req.body)
  const { userid, name, phone, address } = req.body;
  try {
    await userschema.findByIdAndUpdate(userid, {
      name: name,
      address: address,
      phone: phone
    })
  } catch (err) {
    const error = new HttpError("Update Failed", 500);
    return next(error);
  }

  res.json({ message: "User Info Updated Successfully" });
}

exports.register = register;
exports.login = login;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.getAllUser = getAllUser;
