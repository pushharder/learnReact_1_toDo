export interface IDefaultProps {}

export interface IDefaultState {}
export interface Task {
	text: string;
	isDone: boolean;
	id: number;
}
export interface ITaskInterface {
	tasks: Task[];
}
export interface IAllDone {
	allDone: boolean;
}
export interface IAppState extends ITaskInterface, IAllDone {}
export interface IListProps extends ITaskInterface {}
export interface IFooterProps extends ITaskInterface {}

export interface IBackendService {
	getTasks(): Promise<Task[]>;
	addTask(task: Task): Promise<Task[]>;
	removeTask(id: number): Promise<Task[]>;
}

export interface IGetPromise {
	(val: Task[]): Promise<Task[]>;
}
