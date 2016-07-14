/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/Main';
import * as actionCreators from '../actions/interestActionCreators';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  componentWillMount() {
    console.log(this.props.actions.fetchInterests());
  }

  render() {
    return (
      <MuiThemeProvider>
        <Main {...this.props} />
      </MuiThemeProvider>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {interests: state.interests};
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch)};
}
const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectComponent;
