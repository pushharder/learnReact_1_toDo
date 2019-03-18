import * as React from "react";

import { Header } from "./../Header/Header";
import { Footer } from "./../Footer/Footer";
import { List } from "./../List/List";

import { AppWrapper, ToDoWindow } from "./AppStyles";
import GlobalStyles from "./GlobalStyles";
import BackendServie from "./../../services/backend";
import { AppState, DefaultProps } from "../../interfaces";

const backendService = BackendServie.getInstacne();

export class App extends React.Component<DefaultProps, AppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			tasks: []
		};
	}

	componentDidMount() {
		backendService.getTasks(taskList => {
			this.setState((state, props) => {
				return Object.assign({}, state, { tasks: taskList });
			});
		});
	}

	render() {
		return (
			<AppWrapper>
				<ToDoWindow>
					<Header />
					{this.getList()}
					{this.getFooter()}
				</ToDoWindow>
				<GlobalStyles />
			</AppWrapper>
		);
	}

	private getFooter() {
		return this.state.tasks.length ? (
			<Footer tasks={this.state.tasks} />
		) : null;
	}

	private getList() {
		return this.state.tasks.length ? (
			<List tasks={this.state.tasks} />
		) : null;
	}
}
