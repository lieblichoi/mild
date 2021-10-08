import React from "react";
import styled from 'styled-components';

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange, type} = props;
    return (
      <React.Fragment>
        <Grid>
          <Text margin="0px">{label}</Text>
          <ElementInput type={type} placeholder={placeholder} onChange={_onChange} />
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    label: 'Text',
    placeholder: 'Write text...',
    type: "text",
    _onChange: () => {}
}

const ElementInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;