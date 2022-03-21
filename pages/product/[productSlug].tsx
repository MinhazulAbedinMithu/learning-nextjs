import { useRouter } from "next/router";
import React from "react";
import { Layout, Meta } from "../../components";
import { IProduct } from "../../utils/types";

const ProductDetails = () => {
	const router = useRouter();

	const slug = router.query.productSlug;

	return (
		<Layout meta={<Meta title={`${slug}`} description="Product Details" />}>
			<h2>Slug: {slug}</h2>
		</Layout>
	);
};

export default ProductDetails;
