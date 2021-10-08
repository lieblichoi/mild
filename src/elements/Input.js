import React from "react";
import styled from 'styled-components';

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange, type, multiLine} = props;

    if(multiLine){
      return (
        <Grid>
          {label && <Text margin="0px">{label}</Text>}
          <ElementTextarea rows={8} placeholder={placeholder} onChange={_onChange} ></ElementTextarea>
        </Grid>
      )
    }
    return (
      <React.Fragment>
        <Grid>
        {label && <Text margin="0px">{label}</Text>}
          <ElementInput type={type} placeholder={placeholder} onChange={_onChange} />
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: 'Write text...',
    type: "text",
    _onChange: () => {}
}
const ElementTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;
const ElementInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;