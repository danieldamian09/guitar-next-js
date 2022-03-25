import {useState, useEffect} from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
	const [carrito, setCarrito] = useState([]);

	// Obtener de LocalStorage
	useEffect(() => { 
		const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
		setCarrito(carritoLS);
	}, []);

	// Enviar LocalStorage
	useEffect(() => {
		localStorage.setItem("carrito", JSON.stringify(carrito));
	}, [carrito])

	const agregarCarrito = (producto) => {
		// Identificar si un elemento ya esta en el carrito
		if (carrito.some((articulo) => articulo.id === producto.id)) {
			// Producto duplicado
			const carritoActualizado = carrito.map((articulo) => {
				// Identificar cual articulo vamos a actualizar
				if (articulo.id === producto.id) {
					articulo.cantidad = producto.cantidad;
				}

				return articulo;
			});

			setCarrito(carritoActualizado);
		} else {
			// Producto Nuevo
			console.log("nuevo producto");
			setCarrito([...carrito, producto]);
		}
	};

	return (
		<Component
			{...pageProps}
			carrito={carrito}
			agregarCarrito={agregarCarrito}
		/>
	);
}

export default MyApp;
