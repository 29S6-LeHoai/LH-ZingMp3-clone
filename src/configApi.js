const tmdbEndpoint = 'https://api-zingmp3.vercel.app/api';

export const tmdAPI = {
    //  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_ey=${apiKey}`,
    getHomePage: () => `${tmdbEndpoint}/home`,
};
