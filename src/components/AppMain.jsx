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

    const [moviesList, setMoviesList] = useState(films) //Variabile di stato contente i film da renderizzare

    const [selectedValue, setSelectedValue] = useState('') //Salvo in maniera dinamica il valore dell'opzione selezionata

    
    useEffect(() => { //Use effect che si attiva quando cambio il valore del mio tag select
        console.log(moviesList);
        if(selectedValue === '') { //Se il mio valore equivale ad una stringa vuota (quella del filtro disattivato)
            setMoviesList(films) //Imposto la mia variabile di stato  che renderizza in pagina come i film
        }
        else { //Altrimenti
            const filtredGenre = films.filter(movie => { //Filtro il mio array inziale con solo gli elementi che hanno il genere uguale al selected value
                return movie.genre === selectedValue
            })
    
            console.log(filtredGenre);
            
            setMoviesList(filtredGenre); //Imposto il valore della variabile di stato che renderizza uguale in pagina uguale all'array filtrato
            

        }
        

        

    }, [selectedValue] )



    return (

        /* Main */
        <main>

            {/* Section film list */}
            <section>
                <h2>La lista dei miei film</h2>

                {/* Filter select */}
                <label htmlFor="gener">Filtra per genere</label>

                {/* Selected/options */}
                {/* Ascolto quando succede qualcosa e imposto il valore dell'input di select uguale al valore dell'elemento che ha scatenato l'evento. (OPTION) */}
                <select onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue}>
                    <option value="">Nessun Filtro</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>





                {/* Film list */}

                <ul>
                    {moviesList.map((film, index) => ( //Uso il map per ciclare il mio array di oggetti.

                        //Ad ogni iterazione restituisco questo markup con le relative proprieta' 
                        <li key={index}>Titolo: {film.title}, Genere: {film.genre}</li>



                    ))}
                </ul>



            </section>

            {selectedValue}
        </main>
    )
}