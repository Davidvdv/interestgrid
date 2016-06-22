import React, {PropTypes} from 'react';
import Single from './Single'

class InterestGrid extends React.Component {
  render() {
    let interestsComponents = this.props.interests
      .map((item) => <Single key={item.id} interest={item} actions={this.props.actions} />);

    return (
      <div className="interestGrid">
        {interestsComponents}
      </div>
    );
  }
}

InterestGrid.defaultProps = {
  interests: []
};

export default InterestGrid;
