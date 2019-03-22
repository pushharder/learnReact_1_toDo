import { ChangeEvent } from 'react';

export interface IHeaerProps {
	allDone: boolean;
	isInputEnable: boolean;
	addTask: (text: string) => Promise<any>;
	switchAll: (event: ChangeEvent<HTMLInputElement>) => void;
}
