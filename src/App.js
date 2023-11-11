import { ContentMoviesComponent } from "./components/ContentMoviesComponent";
import { SearcherComponent } from "./components/SearcherComponent";
import { AddMovieComponent } from "./components/AddMovieComponent";
import { useState } from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const getMoviesFromLS = (_) => {
        let lMovies = JSON.parse(localStorage.getItem("movies"));
        setMovies(lMovies);
        return lMovies;
    }
    return (
        <div className="layout">
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Movies</h1>
            </header>
            <nav className="nav">
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Movies</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
            </nav>
            <section className="content">
                <ContentMoviesComponent movies={movies} setMovies={setMovies} getMoviesFromLS={getMoviesFromLS}/>
            </section>
            <aside className="sidebar">
                <SearcherComponent movies={movies} setMovies={setMovies}/>
                <AddMovieComponent setMovies={setMovies}/>
            </aside>
            <footer className="footer">
                &copy; Gohkada - <a href="/#">gohkada.com</a>
            </footer>
        </div>
    );
}

export default App;
