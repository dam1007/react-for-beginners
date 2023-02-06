import { useState, useEffect } from "react";
import Movie from "../components/Movie";

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
      <div>
          {loading ? (
            <h1>Loading...</h1>
            ) : (
              <div>
                {movies.map((el) => (
                  <Movie
                    key={el.id}
                    id={el.id}
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