//IMPORTS

import { useState } from "react";
import { useEffect } from "react";

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
    const [selectedFilm, setSelectedFilm] = useState('fantascienza')
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
                    <label htmlFor="gener">Filtra per genere</label>

                    <select value={selectedFilm} 
                    name="gener" 
                    id="gener"
                    onChange={(e) => setSelectedFilm(e.target.value)}>
                        <option value="fantascienza">Fantascienza</option>
                        <option value="thriller">Thriller</option>
                        <option value="romantico">Romantico</option>
                        <option value="azione">Azione</option>
                    </select>

                    
                {selectedFilm}

                

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