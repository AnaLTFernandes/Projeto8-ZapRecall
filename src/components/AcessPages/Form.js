import logoIMG from "../assets/images/logo.png";

import "./Form.css";

export default function Form({ children, ...otherProps }) {
	return (
		<div className="form-wripper">
			<div className="logo">
				<img src={logoIMG} alt="ZapRecall" />

				<h1>ZapRecall</h1>
			</div>
			<form {...otherProps}>{children}</form>
		</div>
	);
}
