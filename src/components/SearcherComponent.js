import React, { useState } from 'react'

export const SearcherComponent = ({movies, setMovies}) => {
    const [search, setSearch] = useState('');
    const [noResult, setNoResult] = useState(false);
    const executeSearch = (e)=>{        
        let value = e.target.value;
        setSearch(value);
        let result = movies.filter(movie =>{
            return movie.title.toLowerCase().includes(search.toLowerCase());
        });    
        if(value.length < 1 || result.length === 0){
            result = JSON.parse(localStorage.getItem("movies"));
            setNoResult(true);
        }else{
            setNoResult(false);
        }       
        setMovies(result);
    }
    return (
        <div className="search">
            <h3 className="title">Search: {search}</h3>
            {(noResult ===true && search.length>1) && (<span className='no-result'>No results for your search</span>)}            
            <form action="">
                <input type="text" name="search_field" id="search_field" onChange={executeSearch}/>
                <button>Look for it</button>
            </form>
        </div>
    )
}
