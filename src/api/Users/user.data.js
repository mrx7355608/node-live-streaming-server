class UserDataController {
    constructor(userModel) {
        this.model = userModel;
    }
    async createUser(userData) {
        const newUser = new this.model(userData);
        newUser.save();
        return newUser;
    }
    async getUser(id) {
        return await this.model.findById(id);
    }
}
module.exports = UserDataController;
