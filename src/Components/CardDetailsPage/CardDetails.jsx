

const CardDetails = ({card}) => {
    const {event_id,event_name,image_url,price,short_description,long_description,beach,tropical,bohemian,classic}=card || {};
    return (
        <div>
            <img  src={image_url} alt="" />
            <p className="text-2xl font-bold">{event_name}</p>
            <p>{short_description}</p>
            <p>Price : $ {price}</p>
            <p className="text-2xl font-bold">More About this event</p>
            <p className="my-5 ">{long_description}</p>
            
            <p >{beach}</p>
            
            <p className="my-5 ">{tropical}</p>
            
            <p >{bohemian}</p>
            
            <p className="my-5">{classic}</p>
        </div>
    );
};

export default CardDetails;