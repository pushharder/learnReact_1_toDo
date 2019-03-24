import { ITask } from '../../interfaces';
import { ChangeEvent } from 'react';

export interface IListProps {
	tasks: ITask[];
	isInputEnable: boolean;
	toggleTask: (id: number, event: ChangeEvent<HTMLInputElement>) => void;
}
