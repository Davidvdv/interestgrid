import React from 'react';
import TextField from 'material-ui/TextField';

class InterestCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <TextField value={this.state.value} onChange={this.handleChange} hintText="JavaScript ES6"
                 onKeyDown={(ev) => { if(ev.keyCode == 13) {
      this.props.onInterestCreation(this.state.value);
      this.state.value = '';
    }}}/>)
  }
}

export default InterestCreation;
