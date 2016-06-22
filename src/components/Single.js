import React, {PropTypes} from 'react';

class Single extends React.Component {
  componentDidMount() {
    console.log(this.props.onClickSingle)
  }

  render() {
    return (
      <div className="single">
        <h2>{this.props.interest.text}</h2>
        <button type="button" onClick={() => this.props.onClickSingle()}>Delete</button>
      </div>
    )
  }
}

Single.propTypes = {};

export default Single;
