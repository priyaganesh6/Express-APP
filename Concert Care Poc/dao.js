const userManagement = require('./models/userManagement')
const saveUsers = async (data) => {
    const user = new userManagement({
        userName: data.userName,
        email: data.email,
        address: data.address,
        loginName: data.loginName,
        phoneNumber: data.phoneNumber,
        isUserActive:data.isUserActive
    })
    const response = await user.save().
        then(res => { return { "User details saved successfully for user id": res._id } }).
        catch(err => { return { "error": err } })
    return response
}
const getUsers = async (data) => {
    const response = await userManagement.find({}).
        then(res => { return res }).
        catch(err => { return { "error": err } })
    return response
}
const updateUsers = async (data) => {
    let paramToBeUpdated = { isUserActive: true }
    let filterParam = data
    const response = await userManagement.updateMany(filterParam, paramToBeUpdated).
        then(res => {
            return { "Number of records updated": res.modifiedCount }
        }).
        catch(err => { return { "error": err } })
    return response;
}
const deleteUsers = async (data) => {
    let filterParam =  data
    const response = await userManagement.deleteMany(filterParam).
        then(res => {
            return { "Number of records deleted": res.deletedCount }
        }).
        catch(err => { return { "error": err } })
    return response;
}
module.exports = { saveUsers, getUsers, updateUsers, deleteUsers }

