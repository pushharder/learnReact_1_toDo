import * as React from "react";
import { FooterWrapper } from "./FooterStyles";
import { IFooterProps } from "./interfaces";
import FilterPanel from "./../FilterPanel/FilterPanel";

const Footer: React.FunctionComponent<IFooterProps> = ({
	tasksLength,
	filter,
	changeFilter
}: IFooterProps): JSX.Element => {
	return (
		<FooterWrapper>
			{tasksLength}
			<FilterPanel activeFilter={filter} changeFilter={changeFilter} />
		</FooterWrapper>
	);
};

export default Footer;
