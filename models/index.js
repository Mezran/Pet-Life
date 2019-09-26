'use strict';


// function Models (mongoose) {
//     const User = require("./Users");
//     const Pet = require("./Pets");
// }

// module.exports = Models;

// module.exports = {
//     Pet: require('./Pets')
// }

module.exports = {
    User: require("./User"),
    Pet: require("./Pets"),
    PetSitterMod: require("./PetSitterMod")
};

