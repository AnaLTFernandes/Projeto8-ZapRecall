import "./Form.css";

export default function Form({ children, ...otherProps }) {
	return (
		<div className="form-wripper-main">
			<form {...otherProps}>{children}</form>
		</div>
	);
}
