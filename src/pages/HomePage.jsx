import React, { useState, useEffect } from 'react';
import { fetchTrends } from '../components/Services/api';
import { Link, useLocation } from 'react-router-dom';
import { MovieList, MainHeadline, MovieLi } from './Home.styled';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrends();
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <MainHeadline>Trending today</MainHeadline>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList>
          {trendingMovies.map(({ id, title }) => (
            <MovieLi key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </MovieLi>
          ))}
        </MovieList>
      )}
    </div>
  );
}

export default Home;
