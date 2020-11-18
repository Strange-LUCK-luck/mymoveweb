const ApiModel = require('../models/ApiModel.js');
let movieapidata = new ApiModel();

class ApiContorller{
    constructor() {

    }

    async movieapilist(req, res){
        let moviedata = await movieapidata.FindMovie();
        res.send(moviedata)
    }
}

module.exports = ApiContorller;