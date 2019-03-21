import * as React from "react";

export default class Input extends React.Component<{}, {text: string}> {
    constructor(props: {}){
        super(props);
        this.state = {
            text: ''
        }

    }
	render() {
		return (
			<form
				onSubmit={(e) => {
                    e.preventDefault();
                    console.log(this.state.text);
                    this.setState({text: ''});
				}}
			>
				<input type="text" value={this.state.text} onChange={this.setText}/>
			</form>
		);
    }
    
    setText =(e: any) =>{
        this.setState({
            text: e.target.value
        })
    }
}
