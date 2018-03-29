import React from 'react';
import Hello from './Hello.js';
import Counter from './Counter.js';
import Button from 'material-ui/Button';
import ButtonData from './ButtonData.js';
import EmailResponse from './EmailResponse.js';

class App extends React.Component {
  render() {
    return (
      <div>
		<Hello name="Kathleen"/>
		<Counter name="Kathleen"/>
		<ButtonData />
		<EmailResponse />
      </div>
    );
  }
}


export default App;
