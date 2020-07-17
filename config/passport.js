var passport = require('passport');
var User = require('../models/user');
var UserPermission = require('../models/user_permission');
var LocalStrategy = require('passport-local').Strategy;
 
passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    })
})

passport.use('local.signup', new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done){
    console.log("req:", req);

    if(req.body.password != req.body.repassword){
        return done(null, false,req.flash('error', "Please confirm your password!"))
    }
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min:8});
    var errors = req.validationErrors();
    if(errors){
        var messages = []
        errors.forEach(function(error) {
            messages.push(error.msg)
        });
        return done(null, false,req.flash('error', messages))
    }
    User.findOne({'username':username}, function(err, user){
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: "Username is already in use."})
        }
        var newUser = new User();
        var count = 0;
        User.find().exec(function (err, results) {
            count = results.length  
            newUser.userid = count+1;
            newUser.username = username
            newUser.password = newUser.encryptPassword(password);
            // console.log(newUser)
            newUser.save(function(err, result){
                if (err) {
                    return done(err);
                }                
                for(let i = 1; i < 5; i++){
                    var newpermission = new UserPermission();
                    newpermission.user_id = newUser.userid;
                    newpermission.permission_id = i;
                    newpermission.save();
                }
                return done (null, newUser);
            })        
          });
        
    })
}))

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true

}, function(req, username, password, done){
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        var messages = []
        errors.forEach(function(error) {
            messages.push(error.msg)
        });
        return done(null, false,req.flash('error', messages))
    }
    
    User.findOne({'username':username}, function(err, user){
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: "No user found."})
        }
        if(!user.validPassword(password)) {
            return done(null, false, {message:"Wrong password."})
        }
        return done(null, user)
    })
}))