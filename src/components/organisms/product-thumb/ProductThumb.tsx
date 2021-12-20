/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import classNames from "classnames";
import { TProps } from "./types";
import { Button } from "#components/atoms/button";
import { Spacer } from "#components/atoms/spacer";


const ProductThumb: FC<TProps> = ({
	...props
}): JSX.Element => {
	return (
		<div className="product-thumb product-slider__thumb">
			<div className="product-thumb__image-wrapper">
				<a href="" className="product-thumb__image-wrapper-link">
					<img
						src="https://xn--d1aqfge4d.xn--p1ai/wa-data/public/shop/products/58/01/158/images/20/20.750x0.jpg"
						alt=""
						className="product-thumb__image product-thumb__image--primary" />
					<img
						src="https://xn--d1aqfge4d.xn--p1ai/wa-data/public/shop/products/60/01/160/images/18/18.750x0.jpg"
						alt=""
						className="product-thumb__image product-thumb__image--secondary" />
				</a>
			</div>
			<div className="product-thumb__content">
				<header className="product-thumb__header">
					<h4 className="product-thumb__head">
						<a href="" className="product-thumb__head-link">
							Название товара
						</a>
					</h4>
					<a href="" title="" className="product-thumb__category">Категория</a>
				</header>
				<div className="product-thumb__summary">Далеко-далеко за словесными горами в
					стране гласных и согласных живут рыбные тексты. Предупредила
					строчка, свой города себя имеет дороге своих переписывается, языком,
					злых от всех деревни переписали вдали назад вопрос использовало
					правилами раз!</div>
				<ul className="prices prices--row product-thumb__prices">
					<li className="prices__main">300 р.</li>
					<li className="prices__crossed">360 р.</li>
					<li className="prices__discount">-10 %</li>
				</ul>
				<Spacer>
					<Button text="Купить" />
					<Button text="Заказать" />
				</Spacer>
			</div>
		</div>
	);
};

ProductThumb.defaultProps = {};

export { ProductThumb };