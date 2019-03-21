import { ITask } from "../interfaces";
import { IGetPromise, IBackendService } from "./interfaces";

export default class BackendServie implements IBackendService {
	private static instance: BackendServie;

	private constructor(private taskList: ITask[]) {}

	static getInstacne(): BackendServie {
		if (!BackendServie.instance) {
			return (BackendServie.instance = new BackendServie(defaultTasks));
		} else {
			return BackendServie.instance;
		}
	}

	getTasks(): Promise<ITask[]> {
		return getPromise(this.taskList);
	}

	addTask(task: ITask): Promise<ITask[]> {
		this.taskList.push(task);

		return getPromise(this.taskList);
	}

	removeTask(id: number): Promise<ITask[]> {
		this.taskList = this.taskList.filter(
			(task: ITask): boolean => task.id === id
		);

		return getPromise(this.taskList);
	}
}

const getPromise: IGetPromise = (val: ITask[]) => {
	let pending: Promise<ITask[]> = new Promise((res, rej) => {
		setTimeout(() => res(val), 2000);
	});

	return pending;
};

const defaultTasks: ITask[] = [
	{
		text: "defaultTask",
		isDone: true,
		id: 1
	},
	{
		text: "defaultTask2",
		isDone: false,
		id: 2
	}
];
