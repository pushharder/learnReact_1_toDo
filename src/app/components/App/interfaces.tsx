import { ITask, EFilter } from "./../../interfaces";

export interface IAppState {
	tasks: ITask[];
    filter: EFilter;
    isInputEnable: boolean;
}
