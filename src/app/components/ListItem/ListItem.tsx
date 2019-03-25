import * as React from 'react';
import { IDefaultState } from '../../interfaces';
import Checkbox from './../common/Checkbox/Checkbox';
import { IListItemProps } from './interfaces';

export default class ListItem extends React.Component<
	IListItemProps,
	IDefaultState
> {
	render = () => {
		return (
			<>
				<Checkbox
					toggle={this.props.toggleTask}
					checked={this.props.isDone}
					isCheckboxEnable={this.props.isInputEnable}
				/>
				<span>{this.props.text}</span>
			</>
		);
	};
}
