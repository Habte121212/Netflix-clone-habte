const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const Request = {
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTVMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
   fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
     fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default Request; 
