const axios = require('axios');

module.exports = weatherhandler;


class ForCast {
    constructor(item) {
        this.date = item.valid_date;
        this.description = `low of ${item.min_temp}, hight of${item.max_temp} with ${item.weather.description}`;
    }
}
let inmemory = {};

function weatherhandler(req, res) {
    let key = process.env.WEATHER_KEY;

    let city = req.query.searchQuery;
    // let lat = req.query.lat;
    // let long = req.query.long;
    // let e = true;
    // if (inmemory[city] !== undefined) {
    //     console.log('get the data from the weatherhandler Memory');
    //     res.send(inmemory[city]);
    // } else {
        console.log('get the data from the weatherhandler API');

        let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`;
        // let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=amman&key=989b3581ea7b480981843ed67b5214a6`;

        axios
            .get(url)
            .then(found => {
                const weatherArr = found.data.data.map(value => {
                    return new ForCast(value);
                })
                inmemory[city] = weatherArr;
                res.send(weatherArr);
            })


            .catch(error => {

                res.status(500).send(`Sorry, cant find that ${error}`);
            })
    }


// }