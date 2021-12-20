import { FC } from "react";
import { TProps } from "./types";

const Divider: FC<TProps> = ({ ...props }): JSX.Element => {
	return <hr {...props} />;
}

export { Divider };