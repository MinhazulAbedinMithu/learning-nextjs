import Link from "next/link";
import React from "react";

interface INavItem {
	slug: string;
	title: string;
}

const NavItem = ({ slug, title }: INavItem) => {
	return (
		<Link href={slug}>
			<a className="text-xl text-yellow-300 border-b-2 border-transparent hover:border-yellow-300">{title}</a>
		</Link>
	);
};

const Header = () => {
	return (
		<div className="w-full bg-teal-800 text-white py-2">
			<div className="container mx-auto flex items-center justify-between">
				<div className="font-bold text-2xl">Learn NextJS</div>
				<div className="flex gap-5">
					<NavItem slug="/" title="Home" />
					<NavItem slug="/about" title="About" />
				</div>
			</div>
		</div>
	);
};

export default Header;
