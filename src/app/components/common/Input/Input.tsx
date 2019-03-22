import * as React from 'react';
import { IInputState, IInputProps } from './interfaces';

export default class Input extends React.Component<IInputProps, IInputState> {
	constructor(props: IInputProps) {
		super(props);
		this.state = {
			text: ''
		};
	}

	render = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					value={this.state.text}
					onChange={this.setText}
					readOnly={!this.props.isInputEnable}
				/>
			</form>
		);
	};

	setText = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({
			text: event.target.value
		});
	};

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.props.isInputEnable &&
			this.props.handleInput(this.state.text).then(() => {
				this.setState({ text: '' });
			});
	};
}
//TODO: pass promise to the component and manage state once promise has been resolved
