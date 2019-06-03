let movies = [
    {  
        id:1,
        name: "Star Wars - The new one",
        score : 1
    },
    {  
        id:2,
        name: "어벤저스",
        score : 8
    },
    {  
        id:3,
        name: "대부 1",
        score : 99
    },
    {  
        id:4,
        name: "로건",
        score : 2
    }
];
export const getMovies = () => movies;
export const getById = id => {
    const filteredMovies = movies.filter(movie =>  movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }else{
        return false;
    }
}
export const addMovie = (name, score)=> {
    const newMovie = {
        id:`${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    console.log(movies);
    return newMovie;
}