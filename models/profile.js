
module.exports = function(sequelize, DataTypes) {
    // let Profiles = sequelize.define("Profiles", {
    //     email: DataTypes.STRING,
    //     pass: DataTypes.STRING,
    //     firstName: DataTypes.STRING,
    //     lastName: DataTypes.STRING,
    //     monthOfBirth: DataTypes.INTEGER,
    //     dayOfBirth: DataTypes.INTEGER,
    //     yearOfBirth: DataTypes.INTEGER,
    // });

    let Profiles = sequelize.define("Profiles", {
        email: DataTypes.STRING,
        theName: DataTypes.STRING,
        DOB: DataTypes.STRING,
        symptom: DataTypes.STRING
    });
    return Profiles;
}