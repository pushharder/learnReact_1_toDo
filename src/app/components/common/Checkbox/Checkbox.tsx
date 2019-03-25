import * as React from 'react';
import { IDefaultState } from '../../../interfaces';
import { ICheckboxProps } from './interfaces';

export default class Checkbox extends React.Component<
	ICheckboxProps,
	IDefaultState
> {
	render = () => {
		return this.props.isCheckboxEnable ? (
			<input
				type='checkbox'
				checked={this.props.checked}
				onChange={this.props.toggle}
			/>
		) : (
			<input
				type='checkbox'
				checked={this.props.checked}
				readOnly={true}
			/>
		);
	};
}
