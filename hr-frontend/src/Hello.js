import React from 'react';
const default_color = "green";



var styles = {

	"dataStyle": {

		"marginTop": "20px",
		"marginLeft": "40%",
		"marginBottom": "20px",
		"color": "blue",
	}
}


class Hello extends React.Component {
	render() {

		var color = this.props.color;
		if (color === undefined) {
			color = default_color;
		}

		return (
		<div style={styles.dataStyle}>
			Welcome to HEART RATE CENTRAL {this.props.name}

			<div>
				~~~Where we got all the beats all the time~~~
 			</div>
		</div>
		);
	}
}

export default Hello;
