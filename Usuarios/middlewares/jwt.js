const jwt = require('jsonwebtoken');

const CreateJWT = (data) =>{
    const {id, email} = data;
    const token = jwt.sign({
        id,
        email
    }, process.env.AUTH_JW_SECRET_KEY
    )
    return token
};


module.exports = {
    CreateJWT,
}