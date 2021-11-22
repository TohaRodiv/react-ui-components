import styles from "#styles/fontawesome-v6.module.css";
import classNames from "classnames";

type TIconProps = {
	type?: "solid" | "regular" | "light" | "thin" | "duotone" | "brands"
	name: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export const Icon: React.FC <TIconProps> = ({
	type,
	name,
	className,
	...HTMLProps
}): JSX.Element => {

	const iconType = styles[`fa-${type  || "solid"}`];
	const iconName = styles[`fa-${name}`];

	const classes = classNames(
		iconType,
		iconName,
		className
	);

	return (<span className={classes} {...HTMLProps}></span>);
};