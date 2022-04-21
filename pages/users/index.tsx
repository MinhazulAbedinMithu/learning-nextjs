import React from "react";
import { Layout, Meta } from "../../components";

interface IUser {
	id: number;
	username: string;
	name: string;
	email: string;
	phone: string;
	website: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const Users = ({ users }: any) => {

	return (
		<Layout
			meta={
				<Meta
					title="User List"
					description="User List from jsonplaceholder rest api"
				/>
			}
		>
			<h2>users: {users.length}</h2>
			<div>
				{users.map((user: IUser) => (
					<div key={user.id}>
						<h2>{user.name}</h2>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Users;

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	const data: IUser[] = await response.json();
	return {
		props: {
			users: data,
		},
	};
};
