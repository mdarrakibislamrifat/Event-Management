

const CardDetails = ({card}) => {
    const {event_id,bg_color,event_name,image_url,price,short_description,long_description,beach,tropical,bohemian,classic}=card || {};
    return (
        <div className="p-10" style={{backgroundColor:bg_color}}>
            <img className="rounded-lg"  src={image_url} alt="" />
            <p className="text-4xl font-bold text-red-400 my-5">{event_name}</p>
            <p className="text-xl" >{short_description}</p>
            <p className="text-xl">Price : $ {price}</p>
            <p className="text-2xl font-bold text-center">More About {event_name}</p>
            <p className="my-5 shadow-lg p-2 text-xl">{long_description}</p>
            
            <p className="shadow-lg p-2 text-xl">{beach}</p>
            
            <p className="my-5 shadow-lg p-2 text-xl">{tropical}</p>
            
            <p className="shadow-lg p-2 text-xl">{bohemian}</p>
            
            <p className="my-5 shadow-lg p-2 text-xl">{classic}</p>
        </div>
    );
};

export default CardDetails;