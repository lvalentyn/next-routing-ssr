import Link from "next/link"
import MainContainer from "../components/MainContainer"

const Users = ({users}) => {

	return (
		<MainContainer title='Users page'>
			<h1>Users Page</h1>

			<ul>
				{users.map(user => (
					<li key={user.id}>
						<Link href={`/users/${user.id}`} legacyBehavior>
							<a>{user.name}</a>
						</Link>
					</li>
				))}
			</ul>

			<style jsx>
				{`
					.navbar {
						background: tomato;
						padding: 15px;
					}

					.link {
						font-size: 20px;
						color: white;
						text-decoration: none;
						margin-right: 20px;
					}
				`}
			</style>
		</MainContainer>
	)
}

export default Users

export async function getStaticProps(context) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await res.json()

	return {
		props: {users}, // will be passed to the page component as props
	}
}