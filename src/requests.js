const API_KEY = 'c999ef7e21594a0265bdfd168532bc84';
//const urlBase = 'https://api.themoviedb.org/3/';
const lang = '&language=en-US&page=1'

const request = {
   fetchLatest: `movie/latest?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `movie/top_rated?api_key=${API_KEY}${lang}`,
   fetchTrending: `trending/all/day?api_key=${API_KEY}${lang}`,
   fetchAction: `movie/popular?api_key=${API_KEY}${lang}`,
   fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
   fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genre=2`,
   fetchRomance:  `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`

};

export default request; 

