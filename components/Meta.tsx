import Head from "next/head";

type IMetaProps = {
	title: string;
	description?: string;
};

const Meta = (props: IMetaProps) => {
	return (
		<Head>
			<meta charSet="UTF-8" key="charset" />
			<meta name="viewport" content="width=device, initial-scale=1" />
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default Meta;
