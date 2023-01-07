import image from "./street_cat.jpg";
import Cat from "./cat.svg";
import { useState } from "react";
import { css } from "@emotion/react";

export default function App() {
    const [counter, setCounter] = useState(0);

    return (
        <main css={mainStyle}>
            <button
                css={buttonStyle}
                onClick={() => setCounter((prev) => prev + 1)}
            >
                HMR test button
            </button>
            <div css={wrapperStyle}>
                <h1 css={titleStyle}>
                    {`My React template - ${process.env.NODE_ENV}
                    ${process.env.name} / counter: ${counter}`}
                </h1>
                <Cat css={iconStyle} />
            </div>
            <img src={image} alt="sample" width="1000" height="1000" />
        </main>
    );
}

const mainStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 0;
`;

const buttonStyle = css`
    border: 0.2rem solid #5e4324;
    border-radius: 1.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.6rem;
    padding: 1rem;
`;

const wrapperStyle = css`
    display: flex;
    align-items: center;
`;

const titleStyle = css`
    font-size: 3.2rem;
    font-weight: 700;
    color: #5e4324;
    margin: 1rem 0.8rem;
`;

const iconStyle = css`
    width: 4rem;
    height: 3.8rem;
    fill: #5e4324;
`;
