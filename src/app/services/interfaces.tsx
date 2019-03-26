import { ITask } from "../interfaces";

export interface IBackendService {
	getTasks(): Promise<ITask[]>;
	addTask(task: ITask): Promise<ITask[]>;
	removeTask(id: number): Promise<ITask[]>;
}

export interface IGetPromise <T>{
	(val: T): Promise<T>;
}
