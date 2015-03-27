var AppData = {};

AppData.busse = function busse() {
    return fetch('http://lissu-api.herokuapp.com/').then((response) => response.json());
}

module.exports = AppData;
