import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostServices";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost , {error:postError}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useDeletePostMutation()
    const [deletePost, {}] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        // const title = prompt()
        await createPost({title:'working', body: 'realy working', id: Date.now()} )
    }

    function handleRemove(post: IPost) {
        updatePost(post)
    }

    function handleUpdate(post: IPost) {
        deletePost(post)
    }
    console.log(window.location.href)
    return (
        <div>
            <button onClick={handleCreate}>Add</button>
            {isLoading ? <div>loading...</div> : '' }
            {error ? <div> Произошла ошибка </div> : '' }
            <div className="post__list">
                {
                    posts &&  posts.map((el, i) => (
                            <PostItem remove={handleRemove} update={handleUpdate} key={i} post={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PostContainer;