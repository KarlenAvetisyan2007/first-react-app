import React from "react";

class Description extends React.Component {
    render() {
    const { description } = this.props;
    return <p>Description: {description}</p>;
    }
}

export default Description;