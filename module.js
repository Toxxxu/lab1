const moment = require('moment');

class MyModule {
    _name = "";
    _date = "";

    constructor(_name, _date) {
        this._name = _name;
        this._date = _date;
    }

    getGreetingMessage() {
        return `Hello, ${this._name}!\n`;
    }

    getBirthdayMessage() {
        var date = moment(this._date).format('DD.MM');
        return `Your birthday is ${date}.\n`
    }
}

module.exports.MyModule = MyModule;