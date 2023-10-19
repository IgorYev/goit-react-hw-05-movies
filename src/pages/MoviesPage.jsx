import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';
import { MovieList, MovieLi } from './Home.styled';
import { findMovies } from '../components/Services/api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const fetchMoviesByQuery = async query => {
    try {
      const movieData = await findMovies(query);
      setMovies(movieData);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  };

  useEffect(() => {
    const query = searchParams.get('searchQuery') || '';
    setSearchQuery(query);
    if (query) {
      fetchMoviesByQuery(query);
    }
  }, [searchParams]);

  const handleSearchSubmit = query => {
    if (query) {
      setSearchQuery(query);
      fetchMoviesByQuery(query);
    }
  };

  return (
    <div>
      <SearchBar value={searchQuery} onSubmit={handleSearchSubmit} />
      <MovieList>
        {movies.map(({ id, title }) => (
          <MovieLi key={id}>
            <Link
              to={`${id}`}
              state={{
                from: location,
              }}
            >
              {title}
            </Link>
          </MovieLi>
        ))}
      </MovieList>
    </div>
  );
};

export default Movies;
