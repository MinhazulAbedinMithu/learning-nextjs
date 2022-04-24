import { Layout, Meta } from "../../components";

const PostDetails = ({ post }: any) => {
	console.log(post.id);
	return (
		<Layout meta={<Meta title={`${post.title}`} description="post details" />}>
			<div className="w-2/3 mx-auto">
				<h2 className="text-3xl pb-5">{post.title}</h2>
				<p className="text-xl">{post.body}</p>
			</div>
		</Layout>
	);
};

export default PostDetails;

export const getStaticPaths = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

	const paths = data.map((post: any) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const { params } = context;

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await response.json();

	return {
		props: {
			post: data,
		},
	};
};
