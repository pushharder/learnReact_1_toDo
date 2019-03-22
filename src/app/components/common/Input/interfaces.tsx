export interface IInputState {
	text: string;
}

export interface IInputProps {
    handleInput: (value: string) => Promise<any>;
    isInputEnable: boolean;
}
