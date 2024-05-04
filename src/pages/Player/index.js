import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/jordan-sousa/cinePlay-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video) {
        return <NaoEncontrada/>
    }

    return (
        <>
            <Banner imagem="player" />

            <Titulo>
                <h2>Player</h2>
            </Titulo>

            <section className={styles.container}>
                <iframe
                    key={video.id}
                    width="100%"
                    height="80vh"
                    src={video.link}
                    title={video.Titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscree
                >
                </iframe>
            </section>

        </>
    )
}

export default Player;