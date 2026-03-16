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

    //USE STATES
    const [moviesList, setMoviesList] = useState(films) //Salvo l'array in una variabile di statao il maniera tale da renderlo dinamico
    const [filter, setFilter] = useState(moviesList) //Assegno un valore alla variabile che filtrerà tutto il render della pagina tramite il select (assegno il valore 'neutro' dell'array)
    const [selectedValue, setSelectedValue] = useState('') //Salvo in maniera dinamica il valore dell'opzione selezionata
    const [newMovieTitle, setNewMovieTitle] = useState('') //Salvo in maniera dinamica il titolo dell'elemento aggiunto
    const [newMovieGenre, setNewMovieGenre] = useState('') //Salvo in maniera dinamica il genere dell'elemento aggiunto
    const [findByName, setFindByName] = useState('') //Salvo il maniera dinamica l'input del tool per cercare gli elementi tramite il titolo






    //USE EFFECTS
    useEffect(() => { //Use effect che si attiva quando cambio il valore del mio tag select

        //Imposto una condizione per controllare la sua prima esecuzione
        if (selectedValue === '') { //SE il il valore del select è vuoto
            setFilter(moviesList) //Il mio filtro sarà uguale all'array 'neutro'

        } else { //ALTRIMENTI 
            const filtred = moviesList.filter(item => item.genre == selectedValue) //Filtro e salvo in una variabile un nuovo array che contiene gli  elementi che hanno un la chiave title uguale al valore del select
            /* setFilter(filtredGenre) */
            console.log(moviesList);


            setFilter(filtred) //Imposto la mia varaibile di render uguale alla variabile filtrata di prima

        }

    }, [selectedValue]) //Applico la logica quando questo elemento subisce dei cambiamenti.

    useEffect(() => { //Use effect che si attiva quando digito nell'input per cercare gli elementi dal titolo

        //Imposto una condizione per controllare la sua prima esecuzione
        if (findByName === '') { //SE l'input per cercare gli elementi è vuoto
            setFilter(moviesList) //Il mio filtro sarà uguale all'array 'neutro'

        } else { //ALTRIMENTI

            //Filtro e salvo in una variabile un nuovo array che contiene gli elementi la cui chiave title incluede il carattere (valore dinamico) digitato nell'input
            const finded = moviesList.filter(movie => movie.title.toLowerCase().includes(findByName.toLowerCase()))
            setFilter(finded) //Imposto la mia varaibile di render uguale alla variabile filtrata di prima
        }

    }, [findByName]) //Applico la logica quando questo elemento subisce dei cambiamenti.


    //FUNCTIONS
    function getDynamicForm(e) { //Funzione che si applica al submit del mio form, mi servirà per aggiungere degli elementi alla lista

        e.preventDefault() //Blocco il comportamento naturale del mio form

        setNewMovieTitle('') //Imposto il valore del campo per aggiungere il titolo del nuovo film come una stringa vuota
        setNewMovieGenre('') //Imposto il valore del campo per aggiungere il titolo del nuovo film come una stringa vuota

        //Creo un nuovo variabile che contiene un clone di del mio filtro + un nuovo oggetto che avrà le chiavi 'title' e 'genre' 
        // uguali ai valori inseriri nei campi per aggiugnere un nuovo film
        const newFilm = [...filter, { title: newMovieTitle, genre: newMovieGenre }]

        setMoviesList(newFilm) //Ilmposto il valore del mio array neutro uguale a a newFilm
        setFilter(newFilm) //Stesso meccanismo, l'ho impostato ad entrambi in maniera tale da non perdere il valore di new film nel caso cliccassi 
        // il select per filter o l'input per cercare un element otramite il titolo 

        /* console.log(newFilm); */


    }





    return (

        /* Main */
        <main className="container mt-5 rounded">

            <h2 className="text-black p-5 text-center">Aggiungi un film alla lista.</h2>

            {/* Add movies form */}
            <form className="d-flex p-5" onSubmit={getDynamicForm}> {/* Applico la funzione al submit */}

                <input className="form-control" type="text" placeholder="Aggiungi titolo" value={newMovieTitle} onChange={(e) => setNewMovieTitle(e.target.value)} /> {/* Rendo il value rattivo */}

                <select className="form-select" name="add-gnre" id="add-gnre" onChange={(e) => setNewMovieGenre(e.target.value)} value={newMovieGenre}> {/* Rendo il value rattivo  */}
                    <option autoFocus value="">Seleziona genere...</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>

                {/* Bottone per il submit, si attiva solo se è stato scritto almeno un carattere ed è stato selezionato il genere */}
                <button disabled={newMovieTitle.length === 0 || newMovieGenre === '' ? true : false} className="btn btn-danger" type="submit">Aggiungi</button>
            </form>

            {/* Section movies list */}
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
                    <input className="form-control-sm" type="text" placeholder="Cerca per nome..." onChange={(e) => setFindByName(e.target.value)} value={findByName} />
                </div>


                {/* List */}

                <ul className="list-group list-group-flush text-center">
                    {filter.map((film, index) => ( //Uso il map per ciclare il mio array di oggetti.

                        //Ad ogni iterazione restituisco questo markup con le relative proprieta' 
                        <li className="list-group-item" key={index}><h4 className="my-3">Titolo: {film.title} </h4> <p>Genere: {film.genre}</p></li>



                    ))}
                </ul>

            </section>


        </main>
    )
}