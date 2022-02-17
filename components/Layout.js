import Head from "next/head";
import Header from "./Header";

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Guitar LA {pagina}</title>
        <meta name="description" content="Sitio Web deventa de guitarras" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout