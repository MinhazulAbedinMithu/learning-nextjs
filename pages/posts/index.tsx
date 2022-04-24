import Link from "next/link";
import { Layout, Meta } from "../../components";

const Posts = ({ posts }: any) => {
	return (
		<Layout
			meta={
				<Meta title="All Posts" description="All posts from jsonholder api" />
			}
		>
			<h2>Total Posts: {posts.length}</h2>
			<div className="my-10">
				{posts.map((post: any) => (
					<Link href={`posts/${post.id}`} key={post.id}>
						<a>
							<div className="border-2 border-lime-600 p-2 my-5 rounded-lg hover:bg-sky-400">
								<h4>{post.title}</h4>
							</div>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	);
};

export default Posts;

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

	return {
		props: {
			posts: data.slice(0, 10),
		},
	};
};
