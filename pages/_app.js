import {useState} from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
	const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    
    // Identificar si un elemento ya esta en el carrito
    if (carrito.some(articulo => articulo.id === producto.id)) {
      // Producto duplicado
      console.log("producto duplicado")
    } else {
      console.log("nuevo producto")
    }

		setCarrito([...carrito, producto]);
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
