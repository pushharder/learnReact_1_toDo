import * as React from "react";
import { FooterWrapper } from "./FooterStyles";

export class Footer extends React.Component<{ tasks: any }, {}> {
	render() {
		return <FooterWrapper>{this.props.tasks[0].text}</FooterWrapper>;
	}
}
