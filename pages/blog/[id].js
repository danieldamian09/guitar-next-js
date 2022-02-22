const EntradaBlog = ({entrada}) => {
	console.log(entrada);

	return <div>EntradaBlog</div>;
};

// Para obtener las rutas estaticas y poder usar getStaticProps
export async function getStaticPaths() {
	const url = `http://localhost:1337/blogs`;
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();

	// Paths de las rutas iteramos todas la entradas para retornar los ID (cuando tenemos pocas rutas)
	const paths = entradas.map((entrada) => ({
		params: {
			id: entrada.id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

// Para obtener toda la informacion que va a colocar en las vistas
export async function getStaticProps({params: {id}}) {
	const url = `http://localhost:1337/blogs/${id}`;
	const respuesta = await fetch(url);
	const entrada = await respuesta.json();

	return {
		props: {
			entrada,
		},
	};
}

export default EntradaBlog;
