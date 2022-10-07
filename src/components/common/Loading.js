import { ThreeDots } from "react-loader-spinner";

export default function Loading({ size, color }) {
	return (
		<ThreeDots
			width={size}
			radius="9"
			color={color ? color : "#FFFFFF"}
			ariaLabel="three-dots-loading"
		/>
	);
}
