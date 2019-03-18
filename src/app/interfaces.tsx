export interface Task {
	text: string;
	isDone: boolean;
	id: number;
}

export interface AppState {
	tasks: Task[];
}

export interface ListProps {
	tasks: Task[];
}

export interface DefaultProps {}

export interface DefaultState {}
