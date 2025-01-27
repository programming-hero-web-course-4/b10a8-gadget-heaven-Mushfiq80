import PropTypes from 'prop-types';
import { Calendar, Package, AlertCircle, Tag } from 'lucide-react';



const OfferCard = ({ offer }) => {
    const { offer_title, end_date, description, redeem_code, delivery_condition, image, discount_percentage, original_price, offer_price, terms } = offer;
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={offer_title}
                    className="rounded-xl h-48 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl">{offer_title}</h2>
                    <div className="badge badge-secondary text-lg">-{discount_percentage}%</div>
                </div>
                <p className="text-gray-600 mt-2">{description}</p>

                <div className="flex items-center gap-2 mt-4">
                    <Tag className="w-4 h-4" />
                    <div className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                        {redeem_code}
                    </div>
                </div>

                {original_price && (
                    <div className="flex gap-2 mt-2">
                        <span className="text-lg line-through text-gray-400">
                            ${original_price}
                        </span>
                        <span className="text-lg font-bold text-primary">
                            ${offer_price}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Valid until {new Date(end_date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Package className="w-4 h-4" />
                    <span>{delivery_condition}</span>
                </div>

                <div className="divider"></div>

                <div className="space-y-2">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-1 text-gray-400" />
                        <ul className="text-sm text-gray-600 list-disc list-inside">
                            {terms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Claim Offer</button>
                </div>
            </div>
        </div>
    );
};

OfferCard.propTypes = {
    offer: PropTypes.shape({
        offer_title: PropTypes.string.isRequired,
        starting_date: PropTypes.string.isRequired,
        end_date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        redeem_code: PropTypes.string.isRequired,
        delivery_condition: PropTypes.string.isRequired,
        available_count: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        discount_percentage: PropTypes.number.isRequired,
        original_price: PropTypes.number,
        offer_price: PropTypes.number.isRequired,
        terms: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default OfferCard;