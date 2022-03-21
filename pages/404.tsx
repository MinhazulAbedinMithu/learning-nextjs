import { NextLink } from "../components/utilities";

const NotFound = () => {
	return (
		<div className="w-full h-[100vh] flex items-center justify-center flex-col">
			<div className="text-9xl font-bold text-rose-700">404</div>
			<div className="text-5xl mt-10 font-bold text-indigo-900">
				Page Not Found
			</div>
			<NextLink
				slug="/"
				title="Back to Home"
				style="mt-5 font-bold text-2xl px-4 bg-rose-900 text-green-400 py-2 rounded-lg"
			/>
		</div>
	);
};

export default NotFound;
