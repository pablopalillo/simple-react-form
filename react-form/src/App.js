import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    // fields state
    this.state = {
        name: '',
        lastName: '',
        email: '',
        telephone:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("your data is: ");
    console.log(this.state);
  }

  render() {
    return(
      <div>
          <form onSubmit={this.handleSubmit} >
            <div>
                <label>Name: </label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
                <label>Last Name : </label>
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
            </div>
            <div>
                <label>Email : </label>
                <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div>
                <label>Telephone : </label>
                <input name="telephone" type="text" value={this.state.telephone} onChange={this.handleChange} />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}

export default App;
