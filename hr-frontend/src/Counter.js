import React from 'react';

import Button from 'material-ui/Button';
var styles = {
        "dataStyle": {
                "marginTop": "20px",
                "marginLeft": "44%",
                "marginBottom": "20px",
                "color": "blue",
        }
}
class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			"count": 0,	
		};
	}

	incrementCount = () => { 
		this.setState({"count": this.state.count + 1});
	}

	render() {
		return (
			<div style={styles.dataStyle}>
				<Button variant="raised" onClick={this.incrementCount}>
				Press for IMMEDIATE fun: {this.state.count}
				</Button>
			</div>
		)
	}
}


export default Counter;
