import Link from "next/link";
import React from "react";
import { Layout, Meta } from "../../components";
import { NextLink } from "../../components/utilities";
import { blogs } from "../../utils/FakeData";
import { makeSlug } from "../../utils/helper";
import { IBlog, IReview } from "../../utils/types";

const Blogs = () => {
	return (
		<Layout meta={<Meta title="Blogs" />}>
			<h2>Blogs</h2>
			{blogs.map((blog, index) => (
				<div
					key={index}
					className="p-5 border-2 border-emerald-500 my-10 rounded-lg shadow-lg shadow-emerald-500/50"
				>
					<h2>{blog.title}</h2>
					<p>{blog.description}</p>
					<NextLink
						slug={`/blog/${makeSlug(blog.title)}`}
						title="See Details"
						style="text-white bg-yellow-700 py-1 px-2 rounded-lg"
					/>
				</div>
			))}
		</Layout>
	);
};

export default Blogs;
