import Link from "next/link";
import { INextLink } from "../../utils/types";

const NextLink = ({ slug, title, style }: INextLink) => {
	return (
		<Link href={slug}>
			<a className={style}>
				{title}
			</a>
		</Link>
	);
};

export default NextLink;