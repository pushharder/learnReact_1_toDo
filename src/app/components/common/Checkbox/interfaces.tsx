import { ChangeEvent } from 'react';

export interface ICheckboxProps {
	checked: boolean;
	isCheckboxEnable: boolean;
	toggle: (event: ChangeEvent<HTMLInputElement>) => void;
}
