import React from 'react';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <form onSubmit={this.props.handleSubmit} >
            <div>
                <label>Name: </label>
                <input name="name" type="text" value={this.props.person.name} onChange={this.props.handleChange} />
            </div>
            <div>
                <label>Last Name : </label>
                <input name="lastName" type="text" value={this.props.person.lastName} onChange={this.props.handleChange} />
            </div>
            <div>
                <label>Email : </label>
                <input name="email" type="email" value={this.props.person.email} onChange={this.props.handleChange} />
            </div>
            <div>
                <label>Telephone : </label>
                <input name="telephone" type="text" value={this.props.person.telephone} onChange={this.props.handleChange} />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}

AppComponent.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default AppComponent;