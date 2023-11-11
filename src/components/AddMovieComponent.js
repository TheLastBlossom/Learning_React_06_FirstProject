import React, { useState } from 'react'
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';

export const AddMovieComponent = ({setMovies}) => {
    const componentTitle = "Add new Movie";
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    });
    const {title, description} = movieState;
    const saveDataForm = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;        
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };
        setMovieState(movie);
        setMovies(copy=>{
            if(copy !== null){
                return [...copy, movie]
            }
            return [movie]
        });
        SaveLocalStorage("movies",movie);
    }
    return (
        <div className="add">
            <h3 className="title">{componentTitle}</h3>
            <strong>{title && `You have created ${title}` }</strong>
            <form onSubmit={saveDataForm}>
                <input type="text" name="title" id="title" placeholder="Titulo" />
                <textarea name="description" id="description" cols="30" rows="10" placeholder="description"></textarea>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
