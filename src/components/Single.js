import React, {PropTypes} from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="single onLoadAnimation">
        <h2>{this.props.interest.text}</h2>
        <p>{this.props.interest.importance}</p>
        <div>
          <button type="button" onClick={() => this.props.actions.incrementImportance(this.props.interest.id)}>Important</button>
          <button type="button" onClick={() => this.props.actions.deleteInterest(this.props.interest.id)}>Delete</button>
        </div>
      </div>
    )
  }
}

Single.propTypes = {
};

export default Single;
