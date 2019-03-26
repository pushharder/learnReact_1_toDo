import * as React from "react";
import { IFIlterPanelProps } from "./interfaces";
import { EFilter } from "../../interfaces";
import { FilterPanelWrapper } from "./FilterPanelStyles";

const FilterPanel: React.FunctionComponent<IFIlterPanelProps> = ({
	changeFilter,
	activeFilter
}: IFIlterPanelProps): JSX.Element => {
	return (
		<FilterPanelWrapper>
			{Object.keys(EFilter).map(key => {
				return (
					<button key={key} onClick={changeFilter.bind(null, key)}>
						{key}
					</button>
				);
			})}
		</FilterPanelWrapper>
	);
};

export default FilterPanel;
