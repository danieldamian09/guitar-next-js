import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({guitarra}) => {
	const {nombre, precio, imagen, descripcion} = guitarra[0];

	return (
		<Layout pagina={`${nombre}`}>
			<div className={styles.guitarra}>
				<Image
					layout="responsive"
					width={180}
					height={350}
					src={imagen[0].url}
					alt={`Imagen Guitarra ${nombre}`}
				/>
				<div className={styles.contenido}>
					<h3>{nombre}</h3>
					<p className={styles.descripcion}>{descripcion}</p>
					<p className={styles.precio}>{`$${precio}`}</p>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({query: {url}}) {
	// utilizamos un filtro para poder tarer las guitarras, ya que por principios de REST API se viene por ID
	const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
	const respuesta = await fetch(urlGuitarra);
	const guitarra = await respuesta.json();

	return {
		props: {
			guitarra,
		},
	};
}

export default Producto;
