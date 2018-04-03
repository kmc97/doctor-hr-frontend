import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';

var styles = {
    "dataStyle": {
    "marginTop": "40px",
    "marginLeft": "30%",
    "marginBottom": "40px",
    }
}

class EmailResponse extends React.Component {
    constructor() {
        super();
        this.state = {
	    "tuple": [null],
  	    "usr_hr": [null],
	    "timestamp":[null],
	    "max_hr": 0,
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
	var data = []
	var final_data = []

	axios.get(url_lookup).then( (response) => {
      	for (let i=0; i < response.data.all_hr.length; i++) {
	    data.push({
	         "all_hr": response.data.all_hr[i],
	         "timestamps": response.data.timestamp[i]  
		});
 	}
			
	for (var i = 0; i<data.length; i++){
	    var final_Data = ["Heart Rate (BPM): ", data[i].all_hr, "--time recorded at:  ", data[i].timestamps];
	    final_data.push(final_Data)
	    }

   	    this.setState({
	        "tuple": final_data,
		"usr_hr": response.data.all_hr,
		"timestamp":response.data.timestamp,
		"max_hr":Math.max(...response.data.all_hr)		
		});
		console.log(this.state.tuple)
	 })
			
    }			
	

render() {
    return (
        <div style={styles.dataStyle}>	
  	    <div>
	        type user email here: <TextField
		    value={this.state.nameTextField}
		        onChange={this.onNameTextFieldChange}/>
	        <div> 
 	            <Button variant="raised" onClick={this.getData}>
 		        Click HERE to retrieve data
		    </Button>
    	        </div>
	    </div>

	    <Table>
	        <TableRow>
	            <TableCell> Heart Rate Table (max HR: {this.state.max_hr})</TableCell>
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
