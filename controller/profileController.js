const db = require('../models');

module.exports = {
    findAllProfile: (req, res) => {
        db.Profiles
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    
    },
    create: (req, res) => {
        db.Profile
        .create(req.body)
        .then(function(profile) {
            res.json(profile);
        });
    }, 

    // findNumber: (req, res) => {
    //     db.Profile.findOne({
    //         where: {
    //             name: req.param.name
    //         }})
    //         .then(function(info) {
    //             res.json(info);
    //         });
    // },


    findAllSymptoms: (req, res) => {
        db.Symptoms
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    
    },
    findOneSymptoms: (req, res) =>{
        db.Symptoms
          . findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

};