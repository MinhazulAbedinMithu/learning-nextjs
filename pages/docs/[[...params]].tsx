import { useRouter } from "next/router";
import React from "react";

const AllRoutes = () => {
	const router = useRouter();
	const { params } = router.query;

	if (params?.length === 2) {
		return (
			<div>
				<h2>path: {router.asPath}</h2>
			</div>
		);
	} else if (params?.length === 1) {
		return <div>Path: {router.asPath}</div>;
	} else {
		return (
			<div>
				<h2>Docs Home Page</h2>
			</div>
		);
	}
};

export default AllRoutes;
