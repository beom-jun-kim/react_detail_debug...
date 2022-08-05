import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
          </div>
        ))}
    </div>
  );
}

export default Detail;
