const joinNames = namesObj => {

    nameObj.map(e => e.name).join(",");

};

module.exports = joinNames;