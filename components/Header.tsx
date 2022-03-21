import { NextLink } from "./utilities";

const Header = () => {
	return (
		<div className="w-full bg-teal-800 text-white py-2">
			<div className="container mx-auto flex items-center justify-between">
				<NextLink slug="/" title="Learn NextJS" style="text-2xl font-bold" />
				<div className="flex gap-5">
					<NextLink
						slug="/"
						title="Home"
						style="text-xl text-yellow-300 border-b-2 border-transparent hover:border-yellow-300"
					/>
					<NextLink
						slug="/about"
						title="About"
						style="text-xl text-yellow-300 border-b-2 border-transparent hover:border-yellow-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
