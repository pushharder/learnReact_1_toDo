import * as React from "react";
import { FooterWrapper } from "./FooterStyles";
import { IDefaultState } from "../../interfaces";
import { IFooterProps } from "./interfaces";

export class Footer extends React.Component<IFooterProps, IDefaultState> {
	private getFooterContent(): JSX.Element {
		return getFooootre(this.props.tasks.length);
	}
	render() {
		return this.getFooterContent();
	}
}
// temporary function to try JSX
const getFooootre: (val: number) => JSX.Element = val => {
	return val ? (
		<FooterWrapper>{val}</FooterWrapper>
	) : (
		<FooterWrapper>{0}</FooterWrapper>
	);
};
