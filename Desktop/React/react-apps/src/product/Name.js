import React from "react";

class Name extends React.Component {
render() {
const { name } = this.props;
return <h3>Name: {name}</h3>;
}
}

export default Name;