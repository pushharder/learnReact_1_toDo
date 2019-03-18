import { Task } from "../interfaces";

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

export default class BackendServie {
	private static instance: BackendServie;

	private constructor(private taskList: Task[]) {}

	static getInstacne() {
		if (!BackendServie.instance) {
			return (BackendServie.instance = new BackendServie(defaultTasks));
		} else {
			return BackendServie.instance;
		}
	}

	getTasks(callback: (taskList: Task[]) => void): void {
		setTimeout(() => {
			callback(this.taskList);
		}, 3000);
	}

	addTask(task: Task): Task[] {
		this.taskList.push(task);

		return this.taskList;
	}

	removeTask(id: number): Task[] {
		this.taskList = this.taskList.filter(
			(task: Task): boolean => task.id === id
		);

		return this.taskList;
	}
}
