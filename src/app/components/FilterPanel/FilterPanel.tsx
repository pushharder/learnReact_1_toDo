import * as React from 'react';
import { IFIlterPanelProps } from './interfaces';
import { IDefaultState, EFilter } from '../../interfaces';
import { FilterPanelWrapper } from './FilterPanelStyles';

export class FilterPanel extends React.Component<
	IFIlterPanelProps,
	IDefaultState
> {
	render() {
		return (
			<FilterPanelWrapper>
				{Object.keys(EFilter).map(key => {
					return (
						<button
							key={key}
							onClick={this.props.changeFilter.bind(null, key)}
						>
							{key}
						</button>
					);
				})}
			</FilterPanelWrapper>
		);
	}
}
