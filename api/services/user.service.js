module.exports = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async insertUser(data, callback) {
        // models available throug 'this'
        console.log('mongo log for insert function', data)
        return new this.userModel(data).save(callback)
    }
    getUser = (data, callback) => {
        console.log('mongo log for get function', data)
        this.userModel.findOne(data, callback)
    }
    updateUser = (data, updateData, callback) => {
        console.log('mongo log for update function', data)
        new this.userModel.update(data, updateData, callback);
    }
    getWithProjection = (data, projection, callback) => {
        console.log('mongo log for get function', data)
        new this.userModel.find(data, projection, callback)
    }
}