import Link from "next/link";
import React from "react";
import { Layout, Meta } from "../../components";

interface IProduct {
	slug: string;
	title: string;
	description: string;
}

const products: IProduct[] = [
	{
		slug: "tomato",
		title: "Tomato",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
	{
		slug: "potato",
		title: "Potato",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
	{
		slug: "onion",
		title: "Red Onion",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
];

const index = () => {
	return (
		<Layout
			meta={
				<Meta title="Dynamic Products" description="Learning Dynamic Routing" />
			}
		>
			<h2 className="text-center">Dynamic Routing</h2>
			<p>Total Products: {products.length}</p>

			{products.map((product: IProduct) => (
				<div
					key={product.slug}
					className="p-5 border-2 border-emerald-500 my-5 rounded-lg shadow-lg shadow-emerald-500"
				>
					<h2 className="text-xl">{product.title}</h2>
					<Link href={`product/${product.slug}`}>
						<a className="text-white bg-yellow-700 py-1 px-2 rounded-lg ">
							See Details
						</a>
					</Link>
				</div>
			))}
		</Layout>
	);
};

export default index;
