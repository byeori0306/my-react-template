import { hot } from "react-hot-loader/root";
import image from "@image/street_cat.jpg";
import Cat from "@icon/cat.icon.svg";
import { useState } from "react";
import { css } from "@emotion/react";
import Button from "@component/Button";
import { addCatEmoji } from "@util/addCatEmoji";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <main css={mainStyle}>
            <Button onClick={() => setCounter((prev) => prev + 1)}>
                {addCatEmoji("HMR test button")}
            </Button>
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

export default hot(App);

const mainStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 0;
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
