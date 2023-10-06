
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";


const Home = () => {
    const cards=useLoaderData();
    
    return (
        <div>
            <div>
                <Banner></Banner>
                <h2 className="text-3xl font-bold text-center my-10 underline mb-10">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-8 ">
                {
                    cards.map(card=><Card key={card.event_id} card={card}></Card>)
                }
            </div>
            <div>
                extra
            </div>
        </div>
    );
};

export default Home;