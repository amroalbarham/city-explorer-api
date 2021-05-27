'use strict';


require('dotenv').config();
const express = require('express');
// const weatherData = require('./data/weather.json');
const cors = require('cors');
const axios = require('axios');


const server = express();
server.use(cors());

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`server lisin ${PORT}`);
})
const moviehandler=require('./modules/movie');
server.get('/movie', moviehandler);

const weatherhandler=require('./modules/weather');
server.get('/weather', weatherhandler);


///////////////////////////////////////////////////////////////////////////////////////////
// class ForCast {
//     constructor(item) {
//         this.date = item.valid_date;
//         this.description = `low of ${item.min_temp}, hight of${item.max_temp} with ${item.weather.description}`;
//     }
// }

// function weatherhandler(req, res) {
//     let key = process.env.WEATHER_KEY;

//     let city = req.query.searchQuery;
//     // let lat = req.query.lat;
//     // let long = req.query.long;
//     // let e = true;

//     let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`;
//     // let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=amman&key=989b3581ea7b480981843ed67b5214a6`;

//     axios
//         .get(url)
//         .then(found => {
//             const weatherArr = found.data.data.map(value => {
//                 return new ForCast(value);
//             })
//             res.send(weatherArr);
//         })


//         .catch(error => {

//             res.status(500).send(`Sorry, cant find that ${error}`);
//         })
        
// }


//////////////////////////////////////////////////////////////////////////////////////

// class Formovie {
//     constructor(item) {
//         this.title = item.original_title;
//         this.overview = item.overview;
//         this.avgVotes = item.vote_average;
//         this.totalVotes= item.vote_count;
//         this.imagePath =`https://image.tmdb.org/t/p/w500${item.poster_path}`;
//         this.popularity = item.popularity;
//         this.releaseDate = item.release_date;
//     }
// }

// function moviehandler(req, res) {
    
//     let key1 = process.env.MOVIE_API_KEY;
//     let city = req.query.searchQuery;
//     // let lat = req.query.lat;
//     // let long = req.query.long;
//     // let e = true;

//     let url = `https://api.themoviedb.org/3/search/movie?api_key=${key1}&query=${city}`;
//     // let url = `https://api.themoviedb.org/3/search/movie?api_key=e36cdf3c2b2019fad98b1fe0bb3b9f1c&query=amman`;

//     axios.get(url)
//         .then(found => {
//             const movieArr = found.data.results.map(elemnt => {
//                 return new Formovie(elemnt);
//             })
//             // console.log(movieArr);
//             res.send(movieArr);
//         })


//         .catch(error => {
//             console.log(error);
//             res.status(500).send(`Sorry, cant find that so please don't write irbid ${error}`);
            
//         })
        
// }

///////////////////////////////////////////////////////////////////////////////////////




    // let found = weatherData.find((element) => {
    //     if (city.toLowerCase() == element.city_name.toLowerCase() && lat == element.lat && long == element.lon) {
    //         // console.log(element);
    //         // e = false;
    //         return element;
    //     }

    // })
// console.log(found);
// try {
// date = found.data[0].valid_date
// `low of ${found.data[0].min_temp}, hight of${found.data[0].max_temp} with ${found.data[0].weather.description}`
// let forcastArr = [];
// let date;
// let description;
// let forcastData;
        // for (let i = 0; i < found.data.length; i++) {
        //     date = found.data[i].valid_date;
        //     description = `low of ${found.data[i].min_temp}, hight of${found.data[i].max_temp} with ${found.data[i].weather.description}`;
        //     forcastData = new ForCast(date, description);
        //     forcastArr.push(forcastData);

            // let forcastArr=found.data.map(value=>{
            //     return new ForCast(element)
            // })



    //     res.send(forcastArr);
    // // } 
    // .catch(error=>{

    //     res.status(500).send('Sorry, cant find that');
    // }) {
    // }
// })