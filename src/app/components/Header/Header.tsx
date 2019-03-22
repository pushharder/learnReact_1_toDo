import * as React from 'react';

import { HeaderContainer } from './HeaderStyles';

import Checkbox from '../common/Checkbox/Checkbox';
import Input from '../common/Input/Input';

import { IDefaultState } from '../../interfaces';
import { IHeaerProps } from './interfaces';

export class Header extends React.Component<IHeaerProps, IDefaultState> {
	render() {
		return (
			<HeaderContainer>
				<Checkbox
					toggle={this.props.switchAll}
					checked={this.props.allDone}
				/>
				<Input handleInput={this.props.addTask} isInputEnable={this.props.isInputEnable}/>
			</HeaderContainer>
		);
	}
}
