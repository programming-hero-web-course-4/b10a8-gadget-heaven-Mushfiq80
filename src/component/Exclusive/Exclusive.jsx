
import { useLoaderData } from "react-router-dom";
import OfferCard from "./OfferCard";


const Exclusive = () => {

    const offers = useLoaderData();
    console.log(offers);

    return (
        <div>
            <div className="bg-violet-500 text-white">
                <div className="container  mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-12">Special Offers</h1>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <OfferCard key={offer.offer_id} offer={offer}></OfferCard>
                ))}
            </div>
        </div>
    );
};

export default Exclusive;