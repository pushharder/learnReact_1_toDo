import * as React from "react";

import { HeaderContainer } from "./HeaderStyles";

import Checkbox from "../common/Checkbox/Checkbox";
import Input from "../common/Input/Input";
import { IAllDone, IDefaultState } from "../../interfaces";

export class Header extends React.Component<IAllDone, IDefaultState> {
	render() {
		return (
			<HeaderContainer>
				<Checkbox allDone={this.props.allDone} />
				<Input />
			</HeaderContainer>
		);
	}
}
