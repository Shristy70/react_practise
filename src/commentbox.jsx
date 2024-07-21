import { useState } from "react";
import Comment from "./comment";

export default function CommentBox(){
    const [commentbox , setCommentbox] = useState([{
        remark : "great job",
        ratig : "5",
        username : "@shristy"
    }]);
    function newcomment(comment){
        setCommentbox((currentcomment)=>[...currentcomment , comment] )
        console.log("new comment");
    }
    return(
        <>
        <h1>comment box :</h1>
        {commentbox.map((comment , idx)=>(
              <div className="comment" key ={idx}   style={{border: "1px solid black" , backgroundColor:"skyblue", padding:"10px", borderRadius:"5px", display:"inline-block"}}>
              <span style={{fontWeight:"800"}}>{comment.remark}</span><br />
              <span>Rating = {comment.ratig}</span><br /><br />
              <span style={{fontWeight:"800"}}> -{comment.username}</span>
          </div>
        ))}
      

        <Comment  addnewcomment = {newcomment} />
        </>

       
    )
}