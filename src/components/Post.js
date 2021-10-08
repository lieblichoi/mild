import React from "react";

import {Grid, Image, Text} from "../elements";

const Post = (props) => {

    return (
      <React.Fragment>
        <Grid>
            <Grid is_flex padding="0px 16px">
                <Grid is_flex width="auto">
                    <Grid margin="0px 10px 0px 0px">
                    <Image shape = "circle" src={props.src}/>
                    </Grid>
                    <Text bold>{props.user_info.user_name}</Text>
                </Grid>
                <Grid is_flex width="auto">
                    <Text>{props.insert_dt}</Text>
                </Grid>
            </Grid>
            <Grid padding="16px">
                <Text>{props.contents}</Text>
            </Grid>
            <Grid>
                <Image shape= "rectangle" src={props.src}/>
            </Grid>
            <Grid padding="16px">
                <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
    user_info: {
        user_name: "shawn",
        user_profile: "https://delishmeat.com/common/img/default_profile.png",
    },
    image_url: "https://delishmeat.com/common/img/default_profile.png",
    contents: "Lorem Ipsum",
    comment_cnt: 10,
    insert_dt: "2021-10-06 10:00:00"
};

export default Post;