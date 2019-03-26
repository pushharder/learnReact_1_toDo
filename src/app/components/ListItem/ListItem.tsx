import * as React from "react";
import Checkbox from "./../common/Checkbox/Checkbox";
import { IListItemProps } from "./interfaces";

const ListItem: React.FunctionComponent<IListItemProps> = ({
	text,
	isDone,
	toggleTask,
	isInputEnable
}: IListItemProps): JSX.Element => {
	return (
		<>
			<Checkbox
				toggle={toggleTask}
				checked={isDone}
				isCheckboxEnable={isInputEnable}
			/>
			<span>{text}</span>
		</>
	);
};

export default ListItem;
