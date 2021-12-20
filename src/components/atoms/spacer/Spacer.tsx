import { FC } from "react";
import { TProps } from "./types";
import classNames from "classnames";
import style from "./spacer.module.scss";

const Spacer: FC<TProps> = ({
	className,
	children,
	...props
}): JSX.Element => {
	const classes = classNames(
		style.spacer,
		className,
	);
	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
};

export { Spacer };