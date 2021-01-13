import { connect } from 'react-redux';
import { handleChange, handleSubmit } from './actions';
import AppComponent from './AppComponent';

const mapStateToProps = (state) => {
    return {
      person: state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(handleChange(event))
    },

    handleSubmit: (event) => {
      dispatch(handleSubmit(event))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App;