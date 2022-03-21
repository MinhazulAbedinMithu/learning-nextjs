import { ILayoutProps } from "../utils/types";
import Footer from "./Footer";
import Header from "./Header";
import { NextLink } from "./utilities";

const Layout = (props: ILayoutProps) => {
	return (
		<>
			{props.meta}

			<Header />

			<div className="container mx-auto my-10">
				<NextLink
					slug="/"
					title="Back to Home"
					style="mt-10 bg-slate-300 py-2 px-3 rounded"
				/>
			</div>

			<div className="container mx-auto">{props.children}</div>

			<Footer />
		</>
	);
};

export default Layout;
