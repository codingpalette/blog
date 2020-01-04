import React from 'react';

import Editor from '../Components/Post/Editor';
import TagBox from '../Components/Post/TagBox';

const PostCreate = () => {
    return(
        <>
            <div className="container">
                <Editor></Editor>
                <TagBox></TagBox>
            </div>
        </>
    )
};

export default PostCreate;