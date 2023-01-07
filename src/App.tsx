import image from "./street_cat.jpg";
import Cat from "./cat.svg";
import { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    return (
        <main>
            <button onClick={() => setCounter((prev) => prev + 1)}>
                카운터 증가!!
            </button>
            <h1>
                My React template - {process.env.NODE_ENV} {process.env.name} /
                counter: {counter}
            </h1>
            <Cat />
            <img src={image} alt="sample" width="1000" height="1000" />
        </main>
    );
}
