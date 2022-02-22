
const EntradaBlog = ({entrada}) => {

  console.log(entrada)

  return (
    <div>EntradaBlog</div>
  )
}

// Bring in API Data
export async function getServerSideProps({query: {id}}) {

  console.log(id)

	const url = `http://localhost:1337/blogs/${id}`;
	const respuesta = await fetch(url)
	const entrada = await respuesta.json()

	return {
		props: {
			entrada
		}
	}
}

export default EntradaBlog