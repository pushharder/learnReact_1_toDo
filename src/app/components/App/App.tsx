import * as React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';
import { List } from './../List/List';

import { AppWrapper, ToDoWindow } from './AppStyles';
import GlobalStyles from './GlobalStyles';
import BackendServie from './../../services/backend';
import { IDefaultProps, ITask, EFilter } from '../../interfaces';
import { IAppState } from './interfaces';

const backendService = BackendServie.getInstacne();

export class App extends React.Component<IDefaultProps, IAppState> {
	constructor(props: IDefaultProps) {
		super(props);

		this.state = {
			tasks: [],
			filter: EFilter.All,
			isInputEnable: false
		};
	}

	componentDidMount = () => {
		backendService.getTasks().then(
			(taskList: ITask[]): void => {
				this.setState({
					tasks: taskList,
					isInputEnable: true
				});
			}
		);
	};

	render = () => {
		return (
			<AppWrapper>
				<ToDoWindow>
					<Header
						allDone={this.isAllDone()}
						switchAll={this.switchAll}
						addTask={this.addTask}
						isInputEnable={this.state.isInputEnable}
					/>
					<List
						tasks={this.state.tasks}
						toggleTask={this.switchTask}
						isInputEnable={this.state.isInputEnable}
					/>
					<Footer
						tasks={this.state.tasks}
						filter={this.state.filter}
					/>
					{this.state.isInputEnable ? null : 'loading...'}
				</ToDoWindow>
				<GlobalStyles />
			</AppWrapper>
		);
	};

	switchAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ isInputEnable: false });
		backendService.swithcAll(event.target.checked).then(
			(taskList: ITask[]): void => {
				this.setState({
					tasks: taskList,
					isInputEnable: true
				});
			}
		);
	};

	switchTask = (
		id: number,
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		this.setState({ isInputEnable: false });
		backendService.switchTask(id, event.target.checked).then(
			(taskList: ITask[]): void => {
				this.setState({
					tasks: taskList,
					isInputEnable: true
				});
			}
		);
	};

	addTask = (val: string): Promise<any> => {
		this.setState({ isInputEnable: false });
		return backendService
			.addTask({ text: val, isDone: false, id: Math.random() })
			.then(
				(taskList: ITask[]): void => {
					this.setState({
						tasks: taskList,
						isInputEnable: true
					});
				}
			);
	};

	private getFooter = () => {};

	private getList = () => {};

	private isAllDone = (): boolean => {
		if (!this.state.tasks.length) return false;

		for (let i = 0; i < this.state.tasks.length; i++) {
			if (!this.state.tasks[i].isDone) return false;
		}

		return true;
	};
}
