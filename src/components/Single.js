import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';

const styles = {
  chip: {
    margin: 4
  },
  font: {
    fontSize: 11,
    lineHeight: 2
  },
  badge: {
    position: 'absolute',
    right:20
  }
};

class Single extends React.Component {
  render() {
    return (
      <div className="single">
        <Badge
          style={styles.badge}
          badgeContent={this.props.interest.relevance}
          primary={true}>
        </Badge>
        <h2>{this.props.interest.text}</h2>
        <div className="siblings">
          {this.props.interest.siblings.map((sibling, index) => {
            return <Chip key={index} style={styles.chip} labelStyle={styles.font}>{sibling}</Chip>
          })}
        </div>
        <div>
          <FlatButton label="Relevance" primary={true}
                      onClick={() => this.props.actions.incrementRelevance(this.props.interest.id)}/>
          <FlatButton label="Delete" secondary={true}
                      onClick={() => this.props.actions.deleteInterest(this.props.interest.id)}/>
        </div>
      </div>
    )
  }
}

Single.propTypes = {};

export default Single;
