import Link from "next/link"
import MainContainer from "../../components/MainContainer"

const User = ({user}) => {

	return (
		<MainContainer title={`${user.name}`}>
			<Link href='*/..'>Back</Link> <br />
			<h2>User id: {user.id}</h2>
			<p>Name: {user.name}</p>
			<p>City: {user.address.city}</p>
		</MainContainer>
	)
}

export default User

export async function getServerSideProps({params}) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	const user = await res.json()

	return {
		props: {user}, // will be passed to the page component as props
	}
}