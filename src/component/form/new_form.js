import React from 'react';
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      age: '',
      income: '',
      degree: '',
      value: 'select',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleAgeChange(e) {
    this.setState({ age: e.target.value });
  }

  handleIncomeChange(e) {
    this.setState({ income: e.target.value });
  }

  handleDegreeChange(e) {
    this.setState({ Degree: e.target.value });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert(
      `Form submitted:\nFirst Name: ${this.state.firstName}\nAge: ${this.state.age}\nIncome: ${this.state.income}\nDegree: ${this.state.degree}
      \nPlan: ${this.state.value}`
    );
    e.preventDefault();
  }

  render() {
    return (
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
        <br/>
          <input className='input-box'
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Age:
        <br/>
          
          <input className='input-box'
            type="number"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
        </label>
        <br />
        <label>
          Income:
        <br/>
          <input className='input-box'
            type="number"
            value={this.state.income}
            onChange={this.handleIncomeChange}
          />
        </label>
        <br />
        <label>
          Degree:
        <br/>
          <input className='input-box'
            type="text"
            value={this.state.Degree}
            onChange={this.handleDegreeChange}
          />
        </label>
        <br />
       
        <label>
          Plan:
          <br/>
          <select className='input-box' value={this.state.value} onChange={this.handleChange}>
          <option value>Select plan</option>
            <option value="React js">React</option>
            <option value="Flutter">Flutter</option>
            <option value="Node js">Node js</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
            <option value="Ruby">Ruby</option>
          </select>
          <br/>
        </label>
        <br/>
        <input className='button' type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Form;
