import { ChangeEvent } from "react";

export interface IListItemProps {
	text: string;
	isDone: boolean;
	toggleTask: (event: ChangeEvent<HTMLInputElement>) => void;
}
