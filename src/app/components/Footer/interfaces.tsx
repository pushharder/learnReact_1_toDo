import { ITask, EFilter } from '../../interfaces';

export interface IFooterProps {
	tasksLength: number;
	filter: EFilter;
	changeFilter: (filterVal: EFilter) => void;
}
