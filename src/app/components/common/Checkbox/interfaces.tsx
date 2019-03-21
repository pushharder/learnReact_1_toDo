import { ChangeEvent } from "react";

export interface ICheckboxProps {
	checked: boolean;
	toggle: (event: ChangeEvent<HTMLInputElement>) => void;
}
