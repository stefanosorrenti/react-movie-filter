//IMPORTS

import { useState, useEffect } from "react"


export default function AppMain() {
    //DATA
    const films = [ //Lista di film
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
    const [filmList, setFilmList] = useState(films) //Variabile di stato contente i film da renderizzare

    function prova () {
        console.log('evento successo');
        
    }

    useEffect(()=> {
        console.log('Il componente è stato motnanto');
        
    }, [])

    return (

        /* Main */
        <main>

            {/* Section film list */}
            <section>
                <h2>La lista dei miei film</h2>

                {/* Filter select */}

                <form>
                    <label htmlFor="gener">Filtra per genere</label>

                    <select name="gener" id="gener">
                        <option onClick={prova} value="null" autoFocus>Seleziona Genere</option>
                        <option value="Fantascienza">Fantascienza</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Azione">Azione</option>
                    </select>


                </form>

                {/* Film list */}

                <ul>
                    {filmList.map((film, index) => ( //Uso il map per ciclare il mio array di oggetti.

                        //Ad ogni iterazione restituisco questo markup con le relative proprieta' 
                        <li key={index}>Titolo: {film.title}, Genere: {film.genre}</li>

                        
                        
                    ))}
                </ul>



            </section>
        </main>
    )
}