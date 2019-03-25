import { ChangeEvent } from 'react';

export interface IListItemProps {
	text: string;
	isDone: boolean;
	isInputEnable: boolean;
	toggleTask: (event: ChangeEvent<HTMLInputElement>) => void;
}
