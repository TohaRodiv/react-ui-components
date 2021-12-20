import { Button } from "#components/atoms/button/Button";
import { Divider } from "#components/atoms/divider";
import { ProductThumb } from "#components/organisms/product-thumb/ProductThumb";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<ProductThumb />
		</div>
	);
}

export default Home;
