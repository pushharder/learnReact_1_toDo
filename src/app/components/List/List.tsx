import * as React from "react";

import ListItem from "../ListItem/ListItem";
import { ITask } from "./../../interfaces";
import { IListProps } from "./interfaces";

const List: React.FunctionComponent<IListProps> = (
	props: IListProps
): JSX.Element => {
	return (
		<div>
			<ul>{getList(props)}</ul>
		</div>
	);
};

const getList = ({
	tasks,
	isInputEnable,
	toggleTask
}: IListProps): JSX.Element[] => {
	return tasks.map(
		(task: ITask): JSX.Element => (
			<li key={task.id}>
				<ListItem
					text={task.text}
					isDone={task.isDone}
					isInputEnable={isInputEnable}
					toggleTask={toggleTask.bind(null, task.id)}
				/>
			</li>
		)
	);
};

export default List;
