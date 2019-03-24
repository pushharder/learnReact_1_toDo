import * as React from 'react';

import ListItem from '../ListItem/ListItem';
import { IDefaultState, ITask } from './../../interfaces';
import { IListProps } from './interfaces';

export class List extends React.Component<IListProps, IDefaultState> {
	constructor(props: IListProps) {
		super(props);
	}
	getList(): JSX.Element[] {
		return this.props.tasks.map(
			(task: ITask): JSX.Element => (
				<li key={task.id}>
					<ListItem
						text={task.text}
						isDone={task.isDone}
						isInputEnable={this.props.isInputEnable}
						toggleTask={this.props.toggleTask.bind(null, task.id)}
					/>
				</li>
			)
		);
	}
	render() {
		return (
			<div>
				<ul>{this.getList()}</ul>
			</div>
		);
	}
}
