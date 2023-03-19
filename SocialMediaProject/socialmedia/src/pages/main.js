import {getDocs,collection} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../config/firebase";

export const Main=()=>{
    const [postsList, setPostsList] = useState(null);
    const postsRef = collection(db,"posts");

    const getPosts=async ()=>{
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };
    useEffect(()=>{
        getPosts();
    },[]);
    
    return(
        <div>Anasayfa</div>  
    )
}
