/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Controlador de usuario
 * Este archivo define los controladores de usuarios
 */

const {response, request} = require('express');

const ShowUsers = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const AddUsers = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de agregar usuarios"
    });
};

const ShowUser = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditUsers = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const DeleteUsers = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};


module.exports = {
    AddUsers,
    ShowUsers,
    ShowUser,
    EditUsers,
    DeleteUsers
};