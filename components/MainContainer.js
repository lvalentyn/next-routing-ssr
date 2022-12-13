import Head from 'next/head'
import A from "../components/A"

const MainContainer = ({children, title}) => {
  return (
	<>
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className="navbar">
			<A href={`/`} text="Main" />
			<A href={`/users`} text="Users" />
		</div>
		<div>
			{children}
		</div>
	</>
  )
}

export default MainContainer