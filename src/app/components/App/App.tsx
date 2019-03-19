import * as React from "react";

import { Header } from "./../Header/Header";
import { Footer } from "./../Footer/Footer";
import { List } from "./../List/List";

import { AppWrapper, ToDoWindow } from "./AppStyles";
import GlobalStyles from "./GlobalStyles";
import BackendServie from "./../../services/backend";
import { IAppState, IDefaultProps, Task } from "../../interfaces";

const backendService = BackendServie.getInstacne();

export class App extends React.Component<IDefaultProps, IAppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			tasks: [],
			allDone: false
		};
	}

	componentDidMount() {
		backendService.getTasks().then(
			(taskList: Task[]): void => {
				this.setState({
					tasks: taskList
				});
			}
		);
	}

	render() {
		return (
			<AppWrapper>
				<ToDoWindow>
					<Header allDone={this.state.allDone} />
					<List tasks={this.state.tasks} />
					<Footer tasks={this.state.tasks} />
				</ToDoWindow>
				<GlobalStyles />
			</AppWrapper>
		);
	}

	private getFooter() {}

	private getList() {}
}
