import { ReactNode } from "react";

type ILayoutProps = {
	meta: ReactNode;
	children: ReactNode;
};

interface INextLink {
	slug: string;
	title: string;
	style?: string;
}

interface IProduct {
	title: string;
	description: string;
}

interface IReview {
	title: string;
	stars: number;
}

interface IBlog {
	title: string;
	description: string;
	review: IReview[];
}

export type { ILayoutProps, INextLink, IProduct, IBlog, IReview };
