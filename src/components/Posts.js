import React  from 'react'
import PostItems from './PostItems'

const Posts = ({posts,removePost,removeList,removeSelected}) => {
        return (
            <div className="posts">
                <h1>Posts</h1>
                <div className="row center-align-h">
                    <div className="container">
                        {posts.map(({id,title,userId,body,selected}) => <PostItems
                            key={id}
                            id={id}
                            user={userId}
                            title={title}
                            body={body}
                            selectedPost={selected}
                            removePost={removePost}
                            removeList={removeList}
                        />)} 

                        <button
                         className="post-btn"
                         onClick={removeSelected}
                         >remove selected</button>
                    </div>
                </div>
            </div>
        )
}
export default Posts