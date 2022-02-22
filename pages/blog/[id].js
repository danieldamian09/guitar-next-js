import Image from "next/image";
import Layout from "../../components/Layout";
import {formatearFecha} from "../../helpers"

const EntradaBlog = ({entrada}) => {
	const {titulo, contenido, imagen, published_at} = entrada;

	return (
		<Layout>
			<main className="contenedor">
				<h1 className="heading">{titulo}</h1>
        <article>
          <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`}/>
          <div>
            <p>{formatearFecha(published_at)}</p>
            <p>{contenido}</p>
          </div>
        </article>
			</main>
		</Layout>
	);
};

// Para obtener las rutas estaticas y poder usar getStaticProps
export async function getStaticPaths() {
	const url = `${process.env.API_URL}/blogs`;
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
	const url = `${process.env.API_URL}/blogs/${id}`;
	const respuesta = await fetch(url);
	const entrada = await respuesta.json();

	return {
		props: {
			entrada,
		},
	};
}

export default EntradaBlog;
