import { Icon } from "#components/icon/Icon";
import type { NextPage } from "next";
import { Button } from "#components/button/Button";

const ComponentsPage: NextPage = (): JSX.Element => {
	return (
		<>
			<div className="section top-section">
				<h3 className="section__head">Иконки</h3>
				<div className="section__body">
					<div className="group">
						<Icon name="circle" />
						<Icon name="square" />
						<Icon name="apple-whole" />
					</div>
					<div className="group">
						<Icon type="brands" name="whatsapp" />
						<Icon type="brands" name="autoprefixer" />
						<Icon type="duotone" name="alien" />
					</div>
					<div className="group">
						<Icon type="regular" name="circle" />
						<Icon type="regular" name="square" />
						<Icon type="regular" name="apple-whole" />
					</div>
					<div className="group">
						<Icon type="light" name="circle" />
						<Icon type="light" name="square" />
						<Icon type="light" name="apple-whole" />
					</div>
					<div className="group">
						<Icon type="thin" name="circle" />
						<Icon type="thin" name="square" />
						<Icon type="thin" name="apple-whole" />
					</div>
					<div className="group">
						<Icon type="duotone" name="circle" />
						<Icon type="duotone" name="square" />
						<Icon type="duotone" name="apple-whole" />
					</div>
				</div>
			</div>
			<div className="section top-section">
				<h3 className="section__head">Кнопки</h3>
				<div className="section__body">
					<div className="group">
						<Button iconName="circle">Кнопка</Button>
						<Button iconName="square">Кнопка</Button>
						<Button iconName="apple-whole">Кнопка</Button>
					</div>
					<div className="group">
						<Button iconType="duotone" iconName="circle">Кнопка</Button>
						<Button iconType="duotone" iconName="square">Кнопка</Button>
						<Button iconType="duotone" iconName="apple-whole">Кнопка</Button>
					</div>
					<div className="group">
						<Button iconType="light" iconName="circle">Кнопка</Button>
						<Button iconType="light" iconName="square">Кнопка</Button>
						<Button iconType="light" iconName="apple-whole">Кнопка</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ComponentsPage;