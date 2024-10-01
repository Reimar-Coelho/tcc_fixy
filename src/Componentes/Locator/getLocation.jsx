/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function App() {
  const [geoInfo, setGeoInfo] = useState({});

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org');
        const ip = await ipResponse.text();

        const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoResponse.json();

        setGeoInfo(geoData);

        console.log(geoData);
      } catch (error) {
        console.error('Falha ao buscar informações geográficas:', error);
      }
    };

    fetchIPInfo();
  }, []);

  return null;
}

export default App;
