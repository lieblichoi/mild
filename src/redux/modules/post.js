import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { firestore } from "../../shared/firebase";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

// reducer 가 사용할 initialState
const initialState = {
    list: []
};

// 게시글 하나에 대한 defalt 값
const initialPost = {
    id: 0,
    user_info: {
        user_name: "shawn",
        user_profile: "https://delishmeat.com/common/img/default_profile.png",
    },
    image_url: "https://delishmeat.com/common/img/default_profile.png",
    contents: "Lorem Ipsum",
    comment_cnt: 10,
    insert_dt: "2021-10-06 10:00:00"
};

const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                let _post = doc.data();
                
                // reduce 이용하기...
                // ['comment_cnt', 'contents', ..] - key value 들을 배열로 만들어준다.
                let post = Object.keys(_post).reduce((acc, cur) => {
                    
                    if(cur.indexOf("user_") !== -1) {
                        return {
                          ...acc,
                          user_info: { ...acc.user_info, [cur]: _post[cur] },
                        };
                    }
                    return {...acc, [cur]: _post[cur]};        
                }, {id: doc.id, user_info: {}});
                post_list.push(post);
            });
            console.log(post_list);

            dispatch(setPost(post_list));
        })
    }
}

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {

        })
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    getPostFB
}

export {actionCreators};
