import { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import { Card } from './components/Card'
import { Paginacion } from './components/Pagination'
import { Navbar } from './components/Navbar'
import { RickAndMortyFooter } from './components/Footer'

function App() {
	const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')
	const [totaPages, setTotalPages] = useState([])
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0 });
	};

	useEffect(() => {
		const getPersonajes = async () => {
			try {
				const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
				const data = await response.json()
				setPersonajes(data.results)
				setTotalPages(data.info)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		getPersonajes()
	}, [currentPage])


	const totalPages = totaPages.pages;
	const totalCount = totaPages.count;

	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)


	return (

		<>
			{/* Navbar */}
			<Navbar filter={filter} setFilter={setFilter} logo={Logo} />
			{/* Navbar */}



			{/* section personajes */}
			<div className='container'>
				<figure className='logo'>
					
				</figure>


				<section className='lista-personajes'>
					{loading ? (
						<p class="text-center text-muted">Cargando...</p>
					) : personjesFiltrados.length > 0 ? (
						personjesFiltrados.map((personaje) => (
							<Card key={personaje.id} personaje={personaje} />
						))
					) : (
						<p class="text-center text-muted"> No se encontro personajes con la busqueda {' '} <strong>"{filter}"</strong> en esta pagina. </p>

					)}
				</section>

			</div>


			{/* Paginacion */}
			<div className="container mt-4" >
				<Paginacion currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} totalCount={totalCount} />
			</div>
			{/* Paginacion */}
			<div>
				<h1>My Rick and Morty App</h1>
				{/* Otro contenido de tu aplicación */}
				<RickAndMortyFooter />
			</div>
		</>

	)
}

export default App
