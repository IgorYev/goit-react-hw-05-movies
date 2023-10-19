import { fetchMovieCast } from '../Services/api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : !cast || cast.length === 0 ? (
        <p>Cast not found.</p>
      ) : (
        <ul className={css.list}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li className={css.item} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="120"
              />
              <h4 className={css.nameActor}>{name}</h4>
              <p className={css.nameCharacter}>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
