import React from 'react'

export const EditComponent = ({movie, getMoviesFromLS, setMovies, setEdit}) => {
    const title = "Edit Movie"
    const update = (e, id)=>{
        e.preventDefault();
        let title = e.target.title.value;
        let description = e.target.description.value;
        let moviesFromLs = getMoviesFromLS();
        let index = moviesFromLs.findIndex(movie => movie.id === id);
        let peli = {
            id,title, description 
        };
        moviesFromLs[index] = peli;        
        localStorage.setItem("movies", JSON.stringify(moviesFromLs));
        setMovies(moviesFromLs);
        setEdit(0);
    }
    return (
        <div className='editForm'>            
            <h3 className='title'>{title}</h3>
            <form onSubmit={e=>update(e, movie.id)}> 
                <input type='text' name='title' className='editTitle' defaultValue={movie.title}/>
                <textarea name='description' className='editDescription' defaultValue={movie.description}/>
                <input type='submit' className='edit' value={"Update"} />
            </form>
        </div>
    )
}
