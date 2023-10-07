import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {event_id,bg_color,text_color,event_name,image_url,price,short_description}=card || {};
    return (
        <div style={{backgroundColor:bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl   text-gray-700 shadow-md ">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image_url}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    
    <h4 style={{color:text_color,backgroundColor:bg_color}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased w-[150px]  rounded-md lg:w-[200px] p-3">
      {event_name}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {short_description}
    </p>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
     Price: $ {price}
    </p>
    <Link to={`/card/${event_id}`}>
    <div>
    <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
    </Link>
  </div>
</div>
    );
};

export default Card;