var categoryModel = require('../models/category');
var directoryModel = require('../models/director');
var fCategoryModel = require('../models/film_category');
var fDirectoryModel = require('../models/film_director');
var filmModel = require('../models/film');
var permissionModel = require('../models/permission');
var userModel = require('../models/user');
var userPermissionModel = require('../models/user_permission');

var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

class mainController {
    async index(req, res) {
    }

    async getusers(req, res){
        var users = await userModel.find();
        res.render('member', {userdatas: users, message: 0})
    }

    async updatePermission(req, res){
        var userID = JSON.parse(req.body.data).userID;
        var data = JSON.parse(req.body.data).data;
        await userPermissionModel.deleteMany({user_id:userID})
        for(let i = 0; i < data.length; i++){
            var permission = new userPermissionModel;
            permission.user_id = userID;
            permission.permission_id = data[i];
            permission.save();
        }
        var users = await userModel.find();
        res.render('member', {userdatas: users, message: 1})
    }

    async userPermission(req, res){
        let userID = req.params.userID;
        var permissions = await userPermissionModel.find({user_id: userID});
        var category = await categoryModel.find();
        var director = await directoryModel.find();

        var data = {permissions:permissions, category:category, director:director};
        console.log(data);
        res.json({data})
    }

    async getPermissions(req, res){
        let userID = req.params.userID;
        var permissions = await userPermissionModel.find({user_id: userID});
        var user = await userModel.find({userid: userID});
        res.render('permission', {csrfToken: req.csrfToken(), permissions: permissions, username: user[0].username, userID:userID})
        
    }

    async getFilms(req, res) {
        var films = await filmModel.find();
        var result = [];
        for(let j = 0; j < films.length; j++){
            var film = films[j];
            var category = [];
            let category_ids = await fCategoryModel.find({film_id: film.id});

            for(let i = 0; i < category_ids.length; i++){
                let category_data = await categoryModel.find({id: category_ids[i].category_id});
                let category_name = category_data[0].name;
                category.push(category_name);
            }

            var director = [];
            let director_ids = await fDirectoryModel.find({film_id: film.id});

            for(let i = 0; i < director_ids.length; i++){
                let director_data = await directoryModel.find({id: director_ids[i].director_id});
                let director_name = director_data[0].name;
                director.push(director_name);
            }
            let res={};
            res.film = film;
            res.category = category;
            res.director = director;
            result.push(res);
        }
        var data = {result:result, user:req.user}
        console.log(data);
        res.json({data})
    }
}


module.exports = mainController;