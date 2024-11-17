import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [farmListings, setFarmListings] = useState([]);
  const [equipmentListings, setEquipmentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchFarmListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFarmListings = async () => {
      try {
        const res = await fetch('/api/listing/get?category=farm-produce&limit=4');
        const data = await res.json();
        setFarmListings(data);
        fetchEquipmentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchEquipmentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?category=equipment&limit=4');
        const data = await res.json();
        setEquipmentListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className="bg-green-50">
      <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-300 to-green-600'>
        <div className='text-center'>
          <h1 className='text-gray-100 font-bold text-3xl lg:text-6xl'>
            Discover the Best <span className='text-yellow-300'>Agricultural</span> Products
          </h1>
          <p className='text-gray-100 text-sm sm:text-base'>
            Your one-stop marketplace for fresh farm produce, tools, and fertilizers.
          </p>
          <Link
            to={'/search'}
            className='inline-block mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-500 transition duration-300'
          >
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Farmeasy Product Overview Section */}
      <div className='bg-green-100 py-10'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-semibold text-green-800'>
            Why Choose <span className='text-yellow-500'>Farmeasy</span>?
          </h2>
          <p className='mt-4 text-gray-600 text-lg'>
            Farmeasy is your go-to platform for all things agriculture. Whether you are a farmer, an agriculture enthusiast, or a supplier, Farmeasy connects you with the best deals in farm produce, tools, and equipment.
          </p>
          <div className='mt-6 flex justify-center gap-8'>
            <div className='flex flex-col items-center'>
              <img src="https://www.eatingwell.com/thmb/41HIjNuKKlII_AfMuPAdfTQMig0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rainbow-produce-2e3b0ab588bf44e28e32efcad29fd94a.jpg" alt="Fresh Produce" className='h-24 w-24' />
              <p className='mt-2 text-lg font-semibold text-green-700'>Fresh Produce</p>
              <p className='text-gray-500 mt-1'>Get the freshest farm produce delivered right to your doorstep.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="https://st3.depositphotos.com/9771418/18296/v/1600/depositphotos_182968828-stock-illustration-set-of-gardening-tools-or.jpg" alt="Farming Tools" className='h-24 w-24' />
              <p className='mt-2 text-lg font-semibold text-green-700'>Farming Tools</p>
              <p className='text-gray-500 mt-1'>Explore a wide range of farming tools to make your work easier.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="https://eos.com/wp-content/uploads/2023/11/components-of-different-types-of-fertilizers.jpg.webp" alt="Fertilizers" className='h-24 w-24' />
              <p className='mt-2 text-lg font-semibold text-green-700'>Quality Fertilizers</p>
              <p className='text-gray-500 mt-1'>Access premium fertilizers to boost your crop yield and soil health.</p>
            </div>
          </div>
          <Link
            to="/about"
            className='inline-block mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-600 transition duration-300'
          >
            Learn More About Farmeasy
          </Link>
        </div>
      </div>

        {/* Featured Partner Section */}
        <div className='bg-white py-16'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-semibold text-green-800'>
            Our Trusted Partners
          </h2>
          <p className='mt-4 text-gray-600 text-lg'>
            We collaborate with the best in the agriculture industry to bring you quality products and services.
          </p>
          <div className='mt-8 flex justify-center gap-16'>
            <div className='flex flex-col items-center'>
              <img src="data:image/png;base64,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" alt="Partner 1" className='h-20' />
              <p className='mt-2 text-lg font-semibold text-green-700'>AgriTools Co.</p>
              <p className='text-gray-500 mt-1'>Provider of high-quality farming equipment.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="data:image/png;base64,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" alt="Partner 2" className='h-20' />
              <p className='mt-2 text-lg font-semibold text-green-700'>FarmFresh Supply</p>
              <p className='text-gray-500 mt-1'>Fresh, organic farm produce delivered weekly.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="data:image/png;base64,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" alt="Partner 3" className='h-20' />
              <p className='mt-2 text-lg font-semibold text-green-700'>EcoFert</p>
              <p className='text-gray-500 mt-1'>Premium organic fertilizers for sustainable farming.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className='bg-white py-10'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-semibold text-green-800'>
            What Our Customers Say
          </h2>
          <p className='mt-4 text-gray-600 text-lg'>
            Hear from those who have benefited from Farmeasy agricultural products and services.
          </p>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className="my-8"
          >
            <SwiperSlide>
              <div className='flex flex-col items-center'>
                <img src="https://media.istockphoto.com/id/1205325344/photo/farmer-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=krsRk4T2MsmMy6PmrpPDR0i_1ja3_jQaNl80fBejWck=" alt="Customer 1" className='h-16 w-16 rounded-full object-cover mb-4' />
                <p className='text-lg font-semibold text-green-700'>Farmeasy has made it so easy for me to get high-quality farming tools and fresh produce directly from farmers. Highly recommend!</p>
                <p className='text-gray-500'>- Rajesh Kumar, Farmer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center'>
                <img src="https://www.fisdom.com/wp-content/uploads/2022/08/Shutterstock_1884965275-1.jpg" alt="Customer 2" className='h-16 w-16 rounded-full object-cover mb-4' />
                <p className='text-lg font-semibold text-green-700'>As a merchant, Farmeasy has connected me to local farmers and helped me expand my business efficiently.</p>
                <p className='text-gray-500'>- Anita Sharma, Merchant</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center'>
                <img src="https://img.freepik.com/premium-photo/indian-farmer-cotton-field_54391-2206.jpg?semt=ais_hybrid" alt="Customer 3" className='h-16 w-16 rounded-full object-cover mb-4' />
                <p className='text-lg font-semibold text-green-700'>The fertilizer offers on Farmeasy have transformed my farms productivity. Thank you for the great service!</p>
                <p className='text-gray-500'>- Suresh Reddy, Agriculturist</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Swiper Section for Offers */}
      <Swiper navigation>
        {offerListings && offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px] bg-green-200'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className='max-w-6xl mx-auto p-4 flex flex-col gap-8 my-10'>
        
        {/* Farm Produce Section */}
        {farmListings && farmListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-green-800'>Fresh Farm Produce</h2>
              <Link className='text-sm text-green-600 hover:underline' to={'/search?category=farm-produce'}>
                View More Farm Produce
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {farmListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        
        {/* Farming Equipment Section */}
        {equipmentListings && equipmentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-green-800'>Farming Equipment</h2>
              <Link className='text-sm text-green-600 hover:underline' to={'/search?category=equipment'}>
                Explore Equipment
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {equipmentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        
        {/* Fertilizers Section */}
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-green-800'>Latest Fertilizer Offers</h2>
              <Link className='text-sm text-green-600 hover:underline' to={'/search?category=fertilizers'}>
                Check Fertilizer Offers
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
