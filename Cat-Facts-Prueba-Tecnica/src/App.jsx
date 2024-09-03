
// Recuperar de la api https://catfact.ninja/ de random cat facts un hecho aleatorio
// Con las tres primeras palabras de ese hecho, recuperar una imagen de un gato.
// Mostrar la imagen por pantalla

// 1. fetch a la api de random cat facts
// 2. guardar el hecho.
// 3. recuperar las tres primeras palabras del hecho.
// 4. fetch a la api de random cat images con las tres palabras.
// 5. guardar la url de la imagen.
// 6. mostrar la imagen por pantalla.

import { useEffect, useMemo, useState } from "react"

const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_IMG_ENDPOINT = `https://cataas.com/cat/says/`

export default function App () {
    const [fact, setFact] = useState('this is a fact')
    const [imgUrl, setImgUrl] = useState('')
    const [count, setCount] = useState(0)
    
    const sum = useMemo(() => {
        let length = fact.length
        for(let i = 0; i < 1000000000; i++) {
            length += i
        }
        return length
    }, [count])
    
    useEffect(() => {
        const fetchFact = async () => {
            const response = await fetch(RANDOM_FACT_ENDPOINT)
            const data = await response.json()
            setFact(data.fact)
        }
        fetchFact()
    }, [])

    // useEffect(() => {
    //     fetch(RANDOM_FACT_ENDPOINT)
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then((dataJson) => {
    //         setFact(dataJson.fact)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     .finally(() => {
    //         console.log('fetch done')
    //     })
    // }, [])
    
    useEffect(() => {
        const threeWords = fact.split(' ').slice(0, 3).join('%20')
        setImgUrl(`${CAT_IMG_ENDPOINT}${threeWords}?width=300&height=150`)
    }, [fact])

    return (
      <main>
        <p>{fact}</p>
        <img src={imgUrl} alt="cat image retrieved from cataas api using three words from random fact"></img>
        <button onClick={() => setCount(count + 1)}> {sum}</button>
      </main>
    );
}