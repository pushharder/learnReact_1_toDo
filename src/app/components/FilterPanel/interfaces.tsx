import { EFilter } from "../../interfaces";

export interface IFIlterPanelProps {
    changeFilter: (filterVal: EFilter) => void;
    activeFilter: EFilter
}