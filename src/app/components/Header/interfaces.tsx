import { ChangeEvent } from "react";

export interface IHeaerProps {
	allDone: boolean;
	switchAll: (event: ChangeEvent<HTMLInputElement>) => void;
}
