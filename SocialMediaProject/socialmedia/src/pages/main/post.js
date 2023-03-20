export const Post =(props)=>{
    const {post} = props;

    return(
       <div className="container">
            {/* <div className="stick"></div> */}
            <div className="title">
                <h1>{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button>&#128077;</button>
                
            </div>
            {/* <div className="stick"></div> */}
       </div> 
    ) //<img src={user?.photoURL} width="40" height="40" />
};