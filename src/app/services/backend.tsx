import { Task, IBackendService } from "../interfaces";
import { IGetPromise } from "./../interfaces";

export default class BackendServie implements IBackendService {
	private static instance: BackendServie;

	private constructor(private taskList: Task[]) {}

	static getInstacne(): BackendServie {
		if (!BackendServie.instance) {
			return (BackendServie.instance = new BackendServie(defaultTasks));
		} else {
			return BackendServie.instance;
		}
	}

	getTasks(): Promise<Task[]> {
		return getPromise(this.taskList);
	}

	addTask(task: Task): Promise<Task[]> {
		this.taskList.push(task);

		return getPromise(this.taskList);
	}

	removeTask(id: number): Promise<Task[]> {
		this.taskList = this.taskList.filter(
			(task: Task): boolean => task.id === id
		);

		return getPromise(this.taskList);
	}
}

const getPromise: IGetPromise = (val: Task[]) => {
	let pending: Promise<Task[]> = new Promise((res, rej) => {
		setTimeout(() => res(val), 2000);
	});

	return pending;
};

const defaultTasks: Task[] = [
	{
		text: "defaultTask",
		isDone: false,
		id: 1
	},
	{
		text: "defaultTask2",
		isDone: true,
		id: 2
	}
];
