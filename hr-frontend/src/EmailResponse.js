import React from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';


class EmailResponse extends React.Component {
	state = {
		name: 'Kathleen'
	}

	handleChange = name =>  event => {
		this.setState({
			[name]: event.target.value,
		});
	};










render() {
    const { classes } = this.props;

    return (
            <TextField
            hintText="User Email"
	    	/>   
      
	);
	}
}
export default EmailResponse;
