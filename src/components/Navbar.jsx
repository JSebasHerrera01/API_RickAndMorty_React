import React from 'react'


export const Navbar = ({ filter, setFilter, logo }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (

		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container">
				<figure className='logonav'>
					<img src={logo} alt='Logo de Rick & Morty' />
				</figure>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					
					<form class="d-flex color-primary" role="search">
						<section className='filtrar'>
							<input
								type='text'
								placeholder="Character's name"
								name='buscar'
								onChange={handleInput}
								value={filter}
							/>
						</section>
					</form>
				</div>

			</div>
		</nav>
	)
}
