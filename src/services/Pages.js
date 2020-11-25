const Pages = require("../models/Pages");

class PagesService {

  create(data){
    return Pages.query().insert(data);
  }

  find(params){
    return Pages.query().select("title, body")
  }
}

module.exports = PagesService;
