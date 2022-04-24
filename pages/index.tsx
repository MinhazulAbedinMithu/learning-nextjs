import type { NextPage } from "next";
import { Layout, Meta } from "../components";
import { NextLink } from "../components/utilities";

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
			<div className="my-5 bg-gradient-to-br from-pink-900 via-teal-600 to-rose-900 rounded-md p-5 text-white">
				<h2 className="text-4xl font-bold text-center text-yellow-300">
					All Routes
				</h2>
				<div className="py-10 flex gap-10">
					<NextLink
						slug="/product"
						title="Dynamic Routes"
						style="text-2xl font-bold text-teal-400 bg-purple-900 p-5 rounded-xl"
					/>
					<NextLink
						slug="/blog"
						title="Nested Dynamic Routes"
						style="text-2xl font-bold text-teal-400 bg-rose-900 p-5 rounded-xl"
					/>
					<NextLink
						slug="/users"
						title="Show All Users"
						style="text-2xl font-bold text-teal-400 bg-orange-900 p-5 rounded-xl"
					/>
					<NextLink
						slug="/posts"
						title="Show All Posts"
						style="text-2xl font-bold text-teal-400 bg-pink-900 p-5 rounded-xl"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
