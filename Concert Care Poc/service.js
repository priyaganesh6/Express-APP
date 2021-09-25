'use strict';
const { saveUsers, getUsers, updateUsers, deleteUsers } = require('./dao')
const saveUserDetails = async (data) => {
    let response = await saveUsers(data)
    if (response && response.error) {
        return { "statusCode": 400, "statusMessage": response }
    }
    else {
        return { "statusCode": 200, "statusMessage": response }
    }
}
const getUserDetails = async (data) => {
    let response = await getUsers(data)
    if (response && response.error) {
        return { "statusCode": 400, "statusMessage": response }
    }
    else {
        return { "statusCode": 200, "statusMessage": response }
    }
}
const updateUserDetails = async (data) => {
    let response = await updateUsers(data)
    if (response && response.error) {
        return { "statusCode": 400, "statusMessage": response }
    }
    else {
        return { "statusCode": 200, "statusMessage": response }
    }
}
const deleteUserDetails = async (data) => {
    let response = await deleteUsers(data)
    if (response && response.error) {
        return { "statusCode": 400, "statusMessage": response }
    }
    else {
        return { "statusCode": 200, "statusMessage": response }
    }
}
module.exports = {
    saveUserDetails,
    getUserDetails,
    updateUserDetails,
    deleteUserDetails
}