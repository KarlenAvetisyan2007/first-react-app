import React, { useState } from 'react';

export function Inputs() {
    const [items, setItems] = useState([]);

    function Submit() {
        if(document.getElementById('name').value !== "" && document.getElementById('price').value !== ""){
            const newItem = {
                name: document.getElementById('name').value,
                price: document.getElementById('price').value,
            };
            setItems([...items, newItem]);
            console.log(items);
        }else{
            alert("please write all parts of form")
        }
        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
    }

    return (
        <div>
            <input id="name" type="text" placeholder="Name" />
            <input id="price" type="number" placeholder="Price" />
            <button onClick={Submit}>Submit</button>
        </div>
    );
}
