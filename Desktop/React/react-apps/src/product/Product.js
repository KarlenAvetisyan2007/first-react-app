import React from "react";
import Price from "./Price";
import Name from "./Name";
import Description from "./Description";

class Product extends React.Component {
render() {
    const { name, price, description } = this.props;
    return (
        <div>
            <Name name={name} />
            <Price price={price} />
            <Description description={description} />
        </div>
    );
}
}

export default Product;