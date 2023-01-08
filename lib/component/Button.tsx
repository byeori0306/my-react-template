import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface button extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button(props: button) {
    const { children, ...buttonProps } = props;

    return (
        <button css={buttonStyle} {...buttonProps}>
            {children}
        </button>
    );
}

const buttonStyle = css`
    border: 0.2rem solid #5e4324;
    border-radius: 1.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.6rem;
    padding: 1rem;
`;
