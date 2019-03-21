export interface IDefaultProps {}

export interface IDefaultState {}

export enum EFilter {
	All = "All",
	Active = "Active",
	Completed = "Completed"
}
export interface ITask {
	text: string;
	isDone: boolean;
	id: number;
}
