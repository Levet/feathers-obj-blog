const NAME = require("../models/NAME");

class NAMEService {

  create(data){
    return NAME.query().insert(data);
  }

  fetch(params){
    return NAME.query().select(params)
  }
}

module.exports = NAMEService;
