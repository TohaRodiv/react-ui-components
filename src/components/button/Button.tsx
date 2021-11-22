import { Icon } from "#components/icon/Icon";
import classNames from "classnames";

type TButtonProps = {
	iconName?: string
	iconType?: "solid" | "regular" | "light" | "thin" | "duotone" | "brands"
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC <TButtonProps> = ({
	iconName,
	iconType,
	className,
	children,
	 ...HTMLProps
}): JSX.Element => {
	const classes = classNames("btn", className);

	return (
		<button className={classes} {...HTMLProps}>
			{
				iconName && <span className="btn__icon">
					<Icon name={iconName} type={iconType} />
				</span>
			}
			<div className="btn__text">
				{children}
			</div>
		</button>
	);
}