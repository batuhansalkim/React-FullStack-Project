import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


export const Navbar = ()=>{
    const [user] = useAuthState(auth);

    const signUserOut = async()=>{
        await signOut(auth);
    }

    return (
        
        <div className="navbar">
            <div className="admin">
                <h5>Admin : <span>batuslkm</span> </h5>
            </div>
            <div className="navbar"> 
                <div className="links">
                <Link to="/">Home</Link>
                {!user ? <Link to="/login">Login</Link> : (
                    <Link to="/create">Create Post</Link>
                )}
                <Link to="/update">Update1.1</Link>
                
            </div>
            <div className="user">
                {user && (
                    <>
                        <p>{ user?.displayName}</p>
                        <img src={user?.photoURL} width="40" height="40" />
                        <button onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </div>
            </div>
            
        </div>
        
    )
}