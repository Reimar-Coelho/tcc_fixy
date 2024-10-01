import { useEffect } from 'react';

function Home() {
    
    useEffect(() => {
        // Função para buscar o IP e as informações de geolocalização
        const fetchGeoLocation = async () => {
            try {
                // Primeiro, busca o IP do usuário
                const ipResponse = await fetch('https://api.ipify.org');
                const ip = await ipResponse.text();

                // Usa o IP para buscar as informações geográficas
                const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
                const geoData = await geoResponse.json();

                // Exibe as informações de geolocalização no console
                console.log("Informações de localização:", geoData);
            } catch (error) {
                console.error('Falha ao buscar informações geográficas:', error);
            }
        };

        // Chama a função para obter a localização
        fetchGeoLocation();
    }, []);

    return null; // Não renderiza nada na tela
}

export default Home;
