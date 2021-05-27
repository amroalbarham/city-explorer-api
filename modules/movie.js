

const axios = require('axios'); 

module.exports = moviehandler;

    class Formovie {
        constructor(item) {
            this.title = item.original_title;
            this.overview = item.overview;
            this.avgVotes = item.vote_average;
            this.totalVotes= item.vote_count;
            this.imagePath =`https://image.tmdb.org/t/p/w500${item.poster_path}`;
            this.popularity = item.popularity;
            this.releaseDate = item.release_date;
        }
    }

let inmemory={};    

function moviehandler(req, res) {
    
    let key1 = process.env.MOVIE_API_KEY;
    let city = req.query.searchQuery;
    // let lat = req.query.lat;
    // let long = req.query.long;
    // let e = true;
    if(inmemory[city]!==undefined){
        console.log('get the data from the Movie Memory')
        res.send(inmemory[city])
    }else{
        console.log('get the data from the Movie API');

        let url = `https://api.themoviedb.org/3/search/movie?api_key=${key1}&query=${city}`;
        // let url = `https://api.themoviedb.org/3/search/movie?api_key=e36cdf3c2b2019fad98b1fe0bb3b9f1c&query=amman`;
    
        axios.get(url)
            .then(found => {
                const movieArr = found.data.results.map(elemnt => {
                    return new Formovie(elemnt);
                })
                inmemory[city]=movieArr;
                // console.log(movieArr);
                res.send(movieArr);
            })
    
    
            .catch(error => {
                console.log(error);
                res.status(500).send(`Sorry, cant find that so please don't write irbid ${error}`);
                
            })
    }

        
}