import type { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Layout, Meta } from "../components";

type IMainProps = {
	meta: ReactNode;
};

const Home: NextPage = () => {
	return (
		<Layout
			meta={
				<Meta
					title="Learn NextJS"
					description="Learning Next JS following Codevolution"
				/>
			}
		>
			<div className="my-5 bg-gradient-to-br from-indigo-600 via-pink-900 to-teal-500 rounded-md p-5 text-white">
				<h2 className="text-3xl font-bold text-center text-yellow-300">
					Next JS Routing
				</h2>
				<div className="py-10">
					<Link href="/product">
						<a className="text-2xl font-bold text-lime-400 bg-sky-800 p-5 rounded-xl">
							Check Dynamic Route
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
