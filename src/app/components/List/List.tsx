import * as React from "react";

import ListItem from "../ListItem/ListItem";
import { IDefaultState, IListProps } from "./../../interfaces";

export class List extends React.Component<IListProps, IDefaultState> {
	constructor(props: IListProps) {
		super(props);
	}
	getList() {
		return this.props.tasks.map(task => (
			<li key={task.id}>
				<ListItem />
			</li>
		));
	}
	render() {
		return (
			<div>
				<ul>{this.getList()}</ul>
			</div>
		);
	}
}
