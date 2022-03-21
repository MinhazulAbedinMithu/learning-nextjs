import { useRouter } from "next/router";
import React from "react";
import { Layout, Meta } from "../../../components";

const BlogDetails = () => {
	const router = useRouter();
	const blogSlug = router.query.blogSlug;
	return (
		<Layout meta={<Meta title={`Blog - ${blogSlug}`}/>}>
			<h2>Blog Details: {blogSlug}</h2>
		</Layout>
	);
};

export default BlogDetails;
