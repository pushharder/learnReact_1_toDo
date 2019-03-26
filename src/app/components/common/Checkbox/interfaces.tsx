import { ChangeEvent } from 'react';

export interface ICheckboxProps {
    checked: boolean;
    value: string;
	isCheckboxEnable: boolean;
	toggle: (event: ChangeEvent<HTMLInputElement>) => void;
}
