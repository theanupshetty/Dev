const userService = require('../services/user.service');
const userModel = require('../models/user.model');

/**
 * @description Create a user with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function createUser(req, res) {
    try {
        const userDTO = req.body;
        const userServiceInstance = new userService(userModel);
        const createUser = await userServiceInstance.insertUser(userDTO);
        return res.send(createUser);
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports = { createUser }