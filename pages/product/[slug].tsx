import { useRouter } from "next/router";
import React from "react";
import { Layout, Meta } from "../../components";

interface IProduct {
	slug: string;
	title: string;
	description: string;
}

const ProductDetails = (props: IProduct) => {
	const router = useRouter();
	const query = router.query;
	console.log(props);
	return (
		<Layout
			meta={
				<Meta title={`Product - ${query.slug}`} description="Product Details" />
			}
		>
			<h2>Product Slug: {query.slug}</h2>
		</Layout>
	);
};

export default ProductDetails;
