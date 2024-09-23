const CryptoJS = require("crypto-js");

const Encrypt = (data)=>{
    var ciphertext = CryptoJS.AES.encrypt(data, process.env.AUTH_AES_SECRET_KEY).toString();
    return ciphertext;
}

const Decrypt = (data)=>{
    var bytes  = CryptoJS.AES.decrypt(data, process.env.AUTH_AES_SECRET_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

module.exports = {
    Encrypt,
    Decrypt
}