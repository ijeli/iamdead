const db = require('../models');

module.exports = {
    findAllProfile: (req, res) => {
        db.Profiles
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    
    },

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