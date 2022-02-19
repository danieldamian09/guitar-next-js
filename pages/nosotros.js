import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
	return (
		<Layout
      pagina="nosotros"
    >
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>

				<div className={styles.contenido}>
						<Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="guitarra" />
					<div>
						<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nunc eget pretium est. Donec vitae ligula vel ligula malesuada porta a nec nibh. Curabitur maximus turpis eget pellentesque vehicula. Maecenas finibus nisl augue. Suspendisse luctus libero nec pretium interdum. Integer lectus arcu, mattis vitae dui vitae, dictum interdum felis.</p>
						<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nunc eget pretium est. Donec vitae ligula vel ligula malesuada porta a nec nibh. Curabitur maximus turpis eget pellentesque vehicula. Maecenas finibus nisl augue. Suspendisse luctus libero nec pretium interdum. Integer lectus arcu, mattis vitae dui vitae, dictum interdum felis.</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Nosotros;
