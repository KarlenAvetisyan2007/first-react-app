import React from "react";

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          price: props.price + '$' ,
          course: 'USD'
        };
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency(){
        this.setState((prevState) => ({
            course: prevState.course === 'USD' ? 'AMD' : 'USD',
            price: prevState.course === 'AMD' ? this.props.price * 368.98 / 368.98 + '$' : Math.round(this.props.price * 368.98) + '֏'
        }));
    }

    render() {
        return <div>
                    <p>Price: {this.state.price}</p>
                    <button onClick={this.changeCurrency}>Change course</button>
                </div>;
    }
}

export default Price;