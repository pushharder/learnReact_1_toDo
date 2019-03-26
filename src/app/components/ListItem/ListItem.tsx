import * as React from 'react';
import Checkbox from './../common/Checkbox/Checkbox';
import { IListItemProps } from './interfaces';
import { TestContextConsumer } from './../App/context';

const ListItem: React.FunctionComponent<IListItemProps> = ({
	text,
	isDone,
	toggleTask,
	isInputEnable
}: IListItemProps): JSX.Element => {
	return (
		<>
			<TestContextConsumer>
				{value => (
					<Checkbox
						toggle={toggleTask}
						checked={isDone}
						value={value}
						isCheckboxEnable={isInputEnable}
					/>
				)}
			</TestContextConsumer>
			<span>{text}</span>
		</>
	);
};

export default ListItem;
