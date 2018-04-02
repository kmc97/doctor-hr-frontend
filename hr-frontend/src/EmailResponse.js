import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';



class EmailResponse extends React.Component {
	constructor() {
		super();
		this.state = {
			"tuple": [null],
			"usr_hr": [null],
			"timestamp":[null]
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
			//console.log(response);
			//console.log(response.data.all_hr)
			//console.log(response.data.timestamp)
			console.log([response.data.timestamp, response.data.all_hr])
			this.setState({
				"tuple": [response.data.all_hr, response.data.timestamp],
				"usr_hr": response.data.all_hr,
				"timestamp":response.data.timestamp		
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
			<Button variant="raised" onClick={this.getData}>
				Click HERE to retrieve data
			</Button>
		
		</div>
	
		<Table>
			<TableRow>
			<TableCell>TimeStamp</TableCell>
			<TableCell>HeartRates</TableCell>
			</TableRow>
			<TableBody>
				{this.state.tuple.map(n =>{
				
				return(
				<TableRow key={n}>
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
