import React from "react";
import { Grid, Image, Text } from "../elements";

const CommentList = (props) => {
    return (
      <React.Fragment>
        <Grid padding="16px">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Grid>
      </React.Fragment>
    );
}

export default CommentList;

const CommentItem = (props) => {
    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Grid margin="0px 10px 0px 0px">
                    <Image shape="circle"/>
                </Grid>
                <Text bold>{user_name}</Text>
            </Grid>
            <Grid is_flex margin="0px 5px">
                <Text margin="0px 0px 0px 5px">{contents}</Text>
                <Text margin="0px">{insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "choi",
    user_id: "",
    post_id: 1,
    contents: "사진이 좋네요!",
    insert_dt: '2021-10-08 18:00:00'
}