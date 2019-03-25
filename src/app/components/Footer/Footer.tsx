import * as React from "react";
import { FooterWrapper } from "./FooterStyles";
import { IDefaultState } from "../../interfaces";
import { IFooterProps } from "./interfaces";
import { FilterPanel } from './../FilterPanel/FilterPanel';

export class Footer extends React.Component<IFooterProps, IDefaultState> {
	render() {
		return (
            <FooterWrapper>
                {this.props.tasksLength}
               <FilterPanel activeFilter={this.props.filter} changeFilter = {this.props.changeFilter}></FilterPanel>  
            </FooterWrapper>
        )
	}
}

