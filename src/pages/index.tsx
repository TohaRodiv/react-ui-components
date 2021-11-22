import { Icon } from "#components/icon/Icon";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<>
			<div className="section top-section">
				<h3 className="section__head">Компоненты</h3>
				<div className="section__body">
					<ul>
						<li>
							<Link href="/components">Компоненты</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Home
