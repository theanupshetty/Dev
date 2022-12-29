const awilix = require('awilix');
const UserService = require('../services/user.service');
const UserController = require('../controllers/user.controller');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
    container.register({
        //controllers
        userController: awilix.asFunction(UserController),

        //services
        userService: awilix.asClass(UserService),
    });
}

module.exports = {
    container,
    setup,
};