import { Component, ReactNode } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

class CounterClass extends Component <CounterProps, CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }


    render(): ReactNode {
        return (
            <div>
                <h3> {this.props.message}  {this.state.count}</h3>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default CounterClass