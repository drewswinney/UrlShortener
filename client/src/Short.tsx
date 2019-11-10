import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface IShortProps {
    url: string;
}

const Short: React.FC<IShortProps> = (props: IShortProps) => {
  const [longUrl, setLongUrl] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://localhost:5001/api/shortener/getlong?short_url=${props.url}`)
      .then(async res => 
        setLongUrl(await res.text()))
      .catch(() => setError('Woops! Looks like there was a problem shortening your url...'))
  }, []);

  longUrl && window.location.replace(longUrl)
  
  return (<span>Loading...</span>)
}

export default Short;
