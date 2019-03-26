import * as React from "react";

import { HeaderContainer } from "./HeaderStyles";

import Checkbox from "../common/Checkbox/Checkbox";
import Input from "../common/Input/Input";

import { IHeaerProps } from "./interfaces";

const Header: React.FunctionComponent<IHeaerProps> = ({
	allDone,
	isInputEnable,
	switchAll,
	addTask
}: IHeaerProps): JSX.Element => {
	return (
		<HeaderContainer>
			<Checkbox
				toggle={switchAll}
                checked={allDone}
                value={'SFDSDFS'}
				isCheckboxEnable={isInputEnable}
			/>
			<Input handleInput={addTask} isInputEnable={isInputEnable} />
		</HeaderContainer>
	);
};

export default Header;
