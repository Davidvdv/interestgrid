import React, {PropTypes} from 'react';
import Single from './Single';
import InterestCreation from './InterestCreation'

class InterestGrid extends React.Component {
  render() {
    return (
      <div>
        <div className="containerCreation">
          <InterestCreation onInterestCreation={this.props.actions.addInterest} />
        </div>
        <div className="interestGrid">
          {this.props.interests
            .map((item) => <Single key={item.id} interest={item} actions={this.props.actions}/>)}
        </div>
      </div>
    );
  }
}

export default InterestGrid;
