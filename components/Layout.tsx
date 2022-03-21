import Link from "next/link";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type ILayoutProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Layout = (props: ILayoutProps) => {
	return (
		<>
			{props.meta}

			<Header />

			<div className="container mx-auto my-10">
				<Link href="/">
					<a className=" mt-10 bg-slate-300 py-2 px-3 rounded">Back to Home</a>
				</Link>
			</div>

			<div className="container mx-auto">{props.children}</div>

			<Footer />
		</>
	);
};

export default Layout;
