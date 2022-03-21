import { IBlog, IProduct } from "./types";

const products: IProduct[] = [
	{
		title: "Tomato",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
	{
		title: "Potato",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
	{
		title: "Red Onion",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui atque a!",
	},
];

const blogs: IBlog[] = [
	{
		title: "Next Tailwind Stater",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam quo totam atque consequuntur distinctio!",
		review: [
			{
				title: "Awesome Blog",
				stars: 5,
			},
			{
				title: "Very Helpful Blog",
				stars: 4,
			},
		],
	},
	{
		title: "CRUD with Node-Mongo in NextJS",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis veniam quo totam atque consequuntur distinctio!",
		review: [
			{
				title: "Awesome Blog",
				stars: 5,
			},
			{
				title: "Very Helpful Blog",
				stars: 4,
			},
		],
	},
];

export { products, blogs };
