import Head from "next/head";

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Guitar LA {pagina}</title>
        <meta name="description" content="Sitio Web deventa de guitarras" />
      </Head>
      {children}
    </div>
  )
}

export default Layout