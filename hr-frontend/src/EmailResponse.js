import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';
import Table, { TableBody, TableCell, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';



class EmailResponse extends React.Component {
	constructor() {
		super();
		this.state = {
			"usr_email": null, 
			"data": [null],
			"usr_hr": [null]
		};
	}

	onNameTextFieldChange = (event) => {
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}


	getData = () => {
		var url_base = "http://vcm-3738.vm.duke.edu:5000/api/heart_rate/"
		var email_lookup = this.state.nameTextField
		var url_lookup = url_base.concat(email_lookup)
		axios.get(url_lookup).then( (response) => {
			console.log(response);
			console.log(response.data.all_hr)
			this.setState({
				"data": response.data,
				"usr_hr": response.data.all_hr
			});
		})	
	}	

		

render() {
	return (
	<div>	
		<div>
			<TextField
				value={this.state.nameTextField}
				onChange={this.onNameTextFieldChange}/>
			<Button onClick={this.onButtonClick}>
				Click HERE to enter data
			</Button>
		 
		</div>
	
		<div>
			<Button variant="raised" onClick={this.getData}>
				Get Data
			</Button>
	
		</div>
	
		<Table>
			<TableBody>
				{this.state.usr_hr.map(n => {
				return(
				<TableRow key = {n}>
				 <TableCell>{n}</TableCell>
				</TableRow>
			);
			})}
	
			</TableBody>	
	
		</Table>
	</div>
	);
	}	
}


export default EmailResponse;
