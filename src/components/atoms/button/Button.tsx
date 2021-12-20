import { FC } from "react";
import { TProps } from "./types";
import classNames from "classnames";
import style from "./button.module.scss";


const Button: FC<TProps> = ({
	theme,
	size,
	className,
	text,
	children,
	...props
}): JSX.Element => {
	const classes = classNames(
		style.btn,
		style[`btn--size--${size}`],
		style[`btn--theme--${theme}`],
		className,
	);

	return (
		<button className={classes} {...props}>
			{
				text ? text : children
			}
		</button>
	);
};

Button.defaultProps = {
	type: "button",
	size: "middle",
	theme: "alpha",
};

export { Button };