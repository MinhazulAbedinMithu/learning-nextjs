import Link from "next/link";
import React from "react";
import { Layout, Meta } from "../../components";
import { blogs } from "../../utils/FakeData";
import { makeSlug } from "../../utils/helper";
import { IBlog, IReview } from "../../utils/types";

const Blogs = () => {
	return (
		<Layout meta={<Meta title="Blogs" />}>
			<h2>Blogs</h2>
			{blogs.map((blog, index) => (
				<div key={index}>
					<h2>{blog.title}</h2>
					<p>{blog.description}</p>
					<Link href={makeSlug(blog.title)}>
						<a>See Details</a>
					</Link>
				</div>
			))}
		</Layout>
	);
};

export default Blogs;
