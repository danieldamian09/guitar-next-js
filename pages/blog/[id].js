import {useRouter} from "next/router"

const EntradaBlog = () => {

  const router = useRouter()

  console.log(router.query)

  return (
    <div>EntradaBlog</div>
  )
}

export default EntradaBlog