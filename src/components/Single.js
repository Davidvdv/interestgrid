import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Single extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.interest.text}
          subtitle={this.props.interest.importance}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {this.props.interest.text}
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Important" primary={true}
                      onClick={() => this.props.actions.incrementImportance(this.props.interest.id)}/>
          <FlatButton label="Delete" secondary={true}
                      onClick={() => this.props.actions.deleteInterest(this.props.interest.id)}/>
        </CardActions>
      </Card>
    )
  }
}

Single.propTypes = {};

export default Single;
