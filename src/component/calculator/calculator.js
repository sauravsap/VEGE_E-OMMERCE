import React from "react";
import './calculator.css'
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            result: 0,
            isCalculated: false,
        };
    }
    handleInput = (value) => {

        console.log(typeof value);
        this.setState((prevState) => ({

            input: prevState.input + value,
        }));
        this.setState((prevState) => ({

            result: parseInt(prevState.input)
        }));
    };
    clearInput = () => {
        this.setState({
            input: 0,
            result: 0,
        });
    };
    calculateResult = () => {
        this.setState({ isCalculated: true })

        const result = (this.state.input);
        

        console.log(result);

        this.setState({ result });

    };

    render() {
        return (
            <div className="container">
                <div className="input">
                    <input type="text" value={this.state.isCalculated ? this.state.result : this.state.input} readOnly />
                    <div className="buttons">
                        <div className="numbers-operators">
                            <button onClick={() => this.handleInput(7)}>7</button>
                            <button onClick={() => this.handleInput(8)}>8</button>
                            <button onClick={() => this.handleInput(9)}>9</button>
                            <button onClick={this.clearInput}>AC</button>
                        </div>
                        <div className="numbers-operators">
                            <button onClick={() => this.handleInput(4)}>4</button>
                            <button onClick={() => this.handleInput(5)}>5</button>
                            <button onClick={() => this.handleInput(6)}>6</button>
                            <button onClick={() => this.handleInput('*')}>*</button>
                        </div>
                        <div className="numbers-operators">
                            <button onClick={() => this.handleInput(1)}>1</button>
                            <button onClick={() => this.handleInput(2)}>2</button>
                            <button onClick={() => this.handleInput(3)}>3</button>
                            <button onClick={() => this.handleInput('/')}>/</button>
                        </div>
                        <div className="numbers-operators">
                            <button onClick={() => this.handleInput(0)}>0</button>
                            <button onClick={() => this.handleInput('.')}>.</button>
                            <button onClick={() => this.handleInput('+')}>+</button>
                            <button onClick={() => this.handleInput('-')}>-</button>
                            <button onClick={this.calculateResult}>=</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator;