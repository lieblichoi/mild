import React from "react";
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick} = props;
    return (
        <React.Fragment>
            <ElementButton onClick={_onClick}>{text}</ElementButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: "Text",
    _onClick: () => {}
}

const ElementButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
`;

export default Button;