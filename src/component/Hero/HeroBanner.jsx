import banner from '../../../public/Assets/banner.jpg';

const HeroBanner = () => {
    return (
        <div className='w-2/4 mx-auto border-b-neutral rounded-3xl p-6 bg-transparent bg-blend-color-dodge bg-opacity-50 -mt-32'>
            <img className=' rounded-3xl' src={banner} alt="" />
        </div>

    );
};

export default HeroBanner;