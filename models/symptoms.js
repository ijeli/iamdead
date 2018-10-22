

module.exports = function(sequelize, DataTypes) {
    let Symptoms = sequelize.define("Symptoms", {
        symptom: DataTypes.STRING,
        selected: DataTypes.BOOLEAN,
        disease_1:DataTypes.STRING,
        disease_2:DataTypes.STRING,
        disease_3:DataTypes.STRING,
        disease_4:DataTypes.STRING,
    });
    return Symptoms;
}