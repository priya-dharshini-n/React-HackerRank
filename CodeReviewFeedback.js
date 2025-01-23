import React from "react";
import {useState, useEffect} from "react";

const FeedbackSystem = () => {
  const [actions, setActions] = useState(["Readability","Performance", "Security", "Documentation", "Testing"])
  const [upvote, setUpvote] = useState([0,0,0,0,0])
  const [downvote, setDownvote] = useState([0,0,0,0,0])

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {actions?.map((value,index)=>
        <>
        <div className="pa-10 w-300 card" key={index}>
          <h2>{value}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15"  data-testid={`upvote-btn-${index}`} onClick={()=>upvote?.map((val,id)=> { if( id === index)  { upvote[index]++; setUpvote([...upvote]); } } )}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`}
 onClick={()=>downvote?.map((val,id)=> { if( id === index)  { downvote[index]++; setDownvote([...downvote]); } } )}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" 
          data-testid={`upvote-count-${index}`}>
            Upvotes: <strong>{upvote[index]}</strong>
          </p>
          <p className="my-10 mx-0" 
          data-testid={`downvote-count-${index}`}>
            Downvotes: <strong>{downvote[index]}</strong>
          </p>
        </div></>)}
      </div>
    </div>
  );
};

export default FeedbackSystem;
