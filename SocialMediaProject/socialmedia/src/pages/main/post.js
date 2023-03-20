import { addDoc,getDocs,collection,query,where } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {db,auth} from "../../config/firebase";
import { useEffect, useState } from "react";


export const Post =(props)=>{
    const {post} = props;
    const [user] = useAuthState(auth);
    const [likes,setLikes] = useState();
    const likesRef = collection(db,"likes");

    const likesDoc = query(likesRef,where("postId", "==", post.id));

    const getLikes = async()=>{
     const data =  await getDocs(likesDoc);
     setLikes(data.docs.map((doc)=>({userId:doc.data().userId})));
    }

    const addLike=async()=>{
        await addDoc(likesRef, {userId:user?.uid,postId:post.id});
        if(user){
            setLikes((prev)=>prev ?  [...prev, {userId: user.uid}] : [{userId:user.uid}]);
        }
    }

    const hasUserLiked = likes?.find((like)=>like.userId === user?.uid);


    useEffect(()=>{
        getLikes();
    },[]);
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
                <button onClick={addLike}>{hasUserLiked ? <>&#128078;</> :  <>&#128077;</>}</button>
                {likes && <p className="likes">Likes: {likes?.length}</p>}
            </div>
            {/* <div className="stick"></div> */}
       </div> 
    ) //<img src={user?.photoURL} width="40" height="40" />
};