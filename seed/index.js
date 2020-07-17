var seedValue = require('./seed');
var categoryModel = require('../models/category');
var directoryModel = require('../models/director');
var fCategoryModel = require('../models/film_category');
var fDirectoryModel = require('../models/film_director');
var filmModel = require('../models/film');
var permissionModel = require('../models/permission');

async function seed() {
    var mongoose = require('mongoose');
    const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/film';
    mongoose.connect(MONGOURL, { useNewUrlParser: true }, async err => {
        console.error(err || `Connected to MongoDB: ${MONGOURL}`);
        await mongoose.connection.db.dropDatabase()
        let keys = Object.keys(seedValue);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let values = seedValue[key];
            console.log('Seeding for ', key, "table ....", values.length)
            for (let j = 0; j < values.length; j++) {
                console.log(j, values[j])
                switch (key) {
                    case 'category':
                        await categoryModel.create(values[j]);
                        break;
                    case 'directory':
                        await directoryModel.create(values[j]);
                        break;
                    case 'fCategory':
                        await fCategoryModel.create(values[j]);
                        break;
                    case 'fDirectory':
                        await fDirectoryModel.create(values[j]);
                        break;
                    case 'film':
                        await filmModel.create(values[j]);
                        break;
                    case 'permission':
                        await permissionModel.create(values[j]);
                        break;
                }
            }
        }
    });
}

seed()

