const User = require('../models/User');
const mongoose = require('mongoose');

const createUser = async(req, res) => {

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    });

   await user.save();
   res.status(200).json(user);
}

const getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

const getUser = async(req, res) => {
    const id = req.params.id;

    const user = await User.findById(id);
    res.status(200).json(user);

}

const updateUser = async(req, res) => {
    const id = req.params.id;

    const user = await User.findByIdAndUpdate(id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    }, { new: true});

    res.status(200).json(user);
}

const deleteUser = async(req, res) => {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    const message = "Supression effectuée avec succès";
    res.status(200).json(message);
}

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };