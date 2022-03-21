import React from "react";

const Footer = () => {
	return (
		<div className="text-center mt-20 bg-slate-600 text-slate-200 py-1">
			&copy; Copyright @{new Date().getFullYear()} reserved by{" "}
			<a
				href="https://minhazulabedinmithu.vercel.app/"
				target="_blank"
				rel="noreferrer"
			>
				Minhaz Mithu
			</a>
		</div>
	);
};

export default Footer;
