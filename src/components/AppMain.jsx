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

    const [newMovieTitle, setNewMovieTitle] = useState('')
    const [newMovieGenre, setNewMovieGenre] = useState('')




    useEffect(() => { //Use effect che si attiva quando cambio il valore del mio tag select
        /* console.log(moviesList); */
        if (selectedValue === '') { //Se il mio valore equivale ad una stringa vuota (quella del filtro disattivato)
            //Imposto la mia variabile di stato  che renderizza in pagina come i film
        }
        else { //Altrimenti
            const filtredGenre = films.filter(movie => { //Filtro il mio array inziale con solo gli elementi che hanno il genere uguale al selected value
                return movie.genre === selectedValue
            })

            console.log(filtredGenre);
            setMoviesList(filtredGenre); //Imposto il valore della variabile di stato che renderizza uguale in pagina uguale all'array filtrato

        }
    }, [selectedValue]) //Appiclo la logica quando questo elemento subisce dei cambiamenti.




    function getDynamicForm(e) {
        e.preventDefault()

        const newFilm = { title: newMovieTitle, genre: newMovieGenre }

        const updatedList = [...moviesList, newFilm]

        setMoviesList(updatedList)





        setNewMovieTitle('')
        setNewMovieGenre('')
    }





    return (

        /* Main */
        <main className="container mt-5 rounded">

            <h2 className="text-black p-5 text-center">Aggiungi un film alla lista.</h2>
            {/* Add film form */}
            <form className="d-flex p-5" onSubmit={getDynamicForm}>
                <input className="form-control" type="text" placeholder="Aggiungi titolo" value={newMovieTitle} onChange={(e) => setNewMovieTitle(e.target.value)} /> {/* Rendo il value rattivo */}
                <select className="form-select" name="add-gnre" id="add-gnre" onChange={(e) => setNewMovieGenre(e.target.value)} value={newMovieGenre}> {/* Rendo il value rattivo  */}
                    <option value="">Seleziona genere...</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
                <button className="btn btn-danger" type="submit">Aggiungi</button>  {/* Bottone per il submit */}

            </form>

            {/* Section film list */}
            <section>
                <h3 className="text-primary">La lista dei miei film</h3>

                {/* Filter select */}
                <div className="filter-tools p-3">


                    <div className="find-by-gnre">
                        {/* Selected/options */}
                        <label htmlFor="genre">Filtra per genere: </label>

                        {/* Ascolto quando succede qualcosa e imposto il valore dell'input di select uguale al valore dell'elemento che ha scatenato l'evento. (OPTION) */}
                        <select className="form-select form-select-sm" name="genre" id="genre" onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue}>


                            <option autoFocus value="">Nessun Filtro</option>
                            <option value="Fantascienza">Fantascienza</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Azione">Azione</option>

                        </select>

                    </div>

                    {/* Find by name */}
                    <input className="form-control-sm" type="text" placeholder="Cerca per nome..." />
                </div>





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