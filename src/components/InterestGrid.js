import React, {PropTypes} from 'react';
import Single from './Single'

class InterestGrid extends React.Component {
  componentDidMount() {
    console.log('componentDidMount', this.props)
  }

  render() {
    var listItems = this.props.interests.map((item) => {
      console.log(item)
      return (
        <Single key={item.id} interest={item} onClickSingle={this.props.actions.deleteInterest}/>
      );
    });
    return (
      <div className="interestGrid">
        {listItems}
      </div>
    );
  }
}

InterestGrid.defaultProps = {
  interests: [],
  onClickSingle: PropTypes.func.isRequired
};

export default InterestGrid;
