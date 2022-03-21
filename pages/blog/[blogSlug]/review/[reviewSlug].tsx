import { useRouter } from "next/router";
import React from "react";
import { Layout, Meta } from "../../../../components";

const ReviewDetails = () => {
	const router = useRouter();
	const { reviewSlug } = router.query;

	return (
		<Layout meta={<Meta title={`${router.asPath}`} />}>
			<h2>Review Details: {reviewSlug}</h2>
		</Layout>
	);
};

export default ReviewDetails;
