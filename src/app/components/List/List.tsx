import * as React from "react";

import ListItem from "../ListItem/ListItem";
import { DefaultState, ListProps } from "./../../interfaces";

export class List extends React.Component<ListProps, DefaultState> {
	constructor(props: ListProps) {
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
