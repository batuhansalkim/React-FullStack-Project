export const Post =(props)=>{
    const {post} = props;

    return(
       <div>
        <div className="title">
            <h1>{post.title}</h1>
        </div>
        <div className="body">
            <p>{post.description}</p>
        </div>
        <div className="footer">
            <p>@{post.username}</p>
        </div>
       </div> 
    ) 
};