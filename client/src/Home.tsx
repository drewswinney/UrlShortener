import React, { useState, useEffect } from 'react';
import TextBox from './Components/textbox';
import Button from './Components/button';
import Logo from './Components/logo';
import CreateFontAwesomeLibrary from './font-awesome-library';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [longUrl, setLongUrl] = useState();
  const [shortUrl, setShortUrl] = useState();
  const [error, setError] = useState();

  const GetUrl = (long: string) => {
    const exp = `^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$`;
    var regex = new RegExp(exp);

    if(long && long.match(regex)) {
      setError(undefined);
      fetch(`https://localhost:5001/api/shortener/getshort?long_url=${encodeURIComponent(long)}`)
        .then(async res => 
          setShortUrl(await res.text()))
        .catch(() => setError('Woops! Looks like there was a problem shortening your url...'))
    } else {
      setShortUrl(undefined);
      setError('Please insert a valid url');
    }
  }

  return (
    <div className="App">
      <div className={styles.background}>
          <div className={styles.main}>
            <div className={styles.logoname}>
              <Logo />
              <div className={styles.shorten}>Shorten</div>
              <div className={styles.it}>It</div>
            </div>
            <div className={styles.slogan}>Enter a url below to shorten it!</div>
            <div className={styles.inputGroup}>
                <div className={styles.urlInput}>
                  <TextBox placeholder="Enter a URL" width={455} icon="sparkles" onChange={(value: String) => { 
                      setError(undefined); 
                      setLongUrl(value); 
                  }} 
                  testId="TestInput"/>
                </div>
                <div className={styles.shortenButton}>
                  <Button text="Shorten" onClick={() => { GetUrl(longUrl) }} testId="TestButton"/>
                </div>
            </div>
            <div className={styles.urlOutput}>
                {shortUrl && <span>Your url: http://localhost:3000/s/{shortUrl}</span>}
            </div>
                {error && (
                  <div className={styles.error}>
                    <span>{error}</span>
                  </div>
                )}
          </div>
      </div>
    </div>
  )
}

export default Home;
