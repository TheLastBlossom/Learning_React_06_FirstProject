import React, { useEffect, useState } from 'react'
import { EditComponent } from './EditComponent';

export const ContentMoviesComponent = ({ movies, setMovies, getMoviesFromLS}) => {   
    const deleteMovieFromLs = (id) => {
        let moviesLs =  getMoviesFromLS();
        console.log(moviesLs)
        let deleteMovie = moviesLs.filter((movie)=> movie.id !== id);
        setMovies(deleteMovie);
        localStorage.setItem("movies", JSON.stringify(deleteMovie));
    }
    const  [edit, setEdit] = useState(0);
    useEffect(() => {
        getMoviesFromLS();
    }, []);
    return (
        <>
            {movies ? movies.map(movie => {
                return (
                    <article className="movie-item" key={movie.id}>
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>
                        <button className="edit" onClick={()=>{
                            setEdit(movie.id);
                        }}>Edit</button>
                        <button className="delete" onClick={() => deleteMovieFromLs(movie.id)} >Delete</button>
                        <div>
                            {edit === movie.id && <EditComponent movie={movie} getMoviesFromLS={getMoviesFromLS} setEdit={setEdit} setMovies={setMovies}/>}                            
                        </div>
                    </article>
                );
            }) : <h2>No movies</h2>}
        </>
    )
}
