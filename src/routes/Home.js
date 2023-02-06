import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from './Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(data => {
        setMovies(data.data.movies);
        setLoading(false);
      });
    }, []);
  
    return (
      <div className={styles.container}>
          {loading ? (
            <h1 class="loader">Loading...</h1>
            ) : (
              <div className={styles.movies}>
                {movies.map((el) => (
                  <Movie
                    key={el.id}
                    id={el.id}
                    year={el.year}
                    coverImg={el.medium_cover_image} 
                    title={el.title} 
                    summary={el.summary} 
                    genres={el.genres} 
                  />
                ))}
            </div>
            )}
      </div>
    );
}

export default Home;