export type TProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	text?: string
	size?: "small" | "middle" | "large"
	theme?: "alpha" | "betta"
}