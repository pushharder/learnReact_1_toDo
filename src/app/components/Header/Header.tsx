import * as React from "react";

import { HeaderContainer } from "./HeaderStyles";

import Checkbox from "../common/Checkbox/Checkbox";
import Input from "../common/Input/Input";

export class Header extends React.Component {
	render() {
		return (
			<HeaderContainer>
				<Checkbox />
				<Input />
			</HeaderContainer>
		);
	}
}
