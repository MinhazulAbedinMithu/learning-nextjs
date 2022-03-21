import { Layout, Meta } from "../../components";
import { IProduct } from "../../utils/types";
import { makeSlug } from "../../utils/helper";
import { products } from "../../utils/FakeData";
import { NextLink } from "../../components/utilities";

const index = () => {
	return (
		<Layout
			meta={
				<Meta title="Dynamic Products" description="Learning Dynamic Routing" />
			}
		>
			<h2 className="text-center text-4xl">Dynamic Routing</h2>
			<p>Total Products: {products.length}</p>

			{products.map((product: IProduct, index: number) => (
				<div
					key={index}
					className="p-5 border-2 border-emerald-500 my-10 rounded-lg shadow-lg shadow-emerald-500/50"
				>
					<h2 className="text-xl">{product.title}</h2>
					<NextLink
						slug={`/product/${makeSlug(product.title)}`}
						title="See Details"
						style="text-white bg-yellow-700 py-1 px-2 rounded-lg"
					/>
				</div>
			))}
		</Layout>
	);
};

export default index;
