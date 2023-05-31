import { useEffect } from "react";
import { useState } from "react/cjs/react.production.min";

export default function Component1(){


    const [name, setName] = useState("")

    useEffect (() => {
        console.log("Component mounted")
    }, []);

    return <div>
        <input  
            type="text" 
            value={name}
            onChange={(evt) => setName(evt.target.value)}
        />
    </div>
}