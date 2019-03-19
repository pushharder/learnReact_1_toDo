import * as React from "react";
import { IAllDone, IDefaultState } from "../../../interfaces";

export default class Checkbox extends React.Component<IAllDone, IDefaultState> {
	render() {
		return (
			<input
				type="checkbox"
				checked={this.props.allDone}
				onChange={() => {}}
			/>
		);
	}
}
