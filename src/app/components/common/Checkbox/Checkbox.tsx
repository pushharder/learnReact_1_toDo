import * as React from "react";
import { ICheckboxProps } from "./interfaces";

const Checkbox: React.FunctionComponent<ICheckboxProps> = ({
	checked,
	toggle,
	isCheckboxEnable
}: ICheckboxProps): JSX.Element => {
	return isCheckboxEnable ? (
		<input type="checkbox" checked={checked} onChange={toggle} />
	) : (
		<input type="checkbox" checked={checked} readOnly={true} />
	);
};

export default Checkbox;
