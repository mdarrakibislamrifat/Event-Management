import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";


const CardDetailsPage = () => {
    const cardDetails=useLoaderData();
    const {event_id}=useParams();
    const [card,setCard]=useState({});
    useEffect(()=>{
        const findCards=cardDetails?.find((card)=>card.event_id==event_id)
        setCard(findCards)
    },[cardDetails,event_id])
    
    return (
        <div>
           <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default CardDetailsPage;