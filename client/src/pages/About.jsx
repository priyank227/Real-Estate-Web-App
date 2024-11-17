import React from 'react';

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-green-700">About FarmEasy</h1>
      <p className="mb-6 text-lg text-slate-700 leading-relaxed">
        Welcome to <span className="text-green-600 font-semibold">FarmEasy</span> – your trusted partner in the agricultural world. We are a dedicated platform committed to connecting farmers, merchants, and consumers with high-quality, fresh agricultural products. Our mission is to simplify the process of buying and selling farm produce, tools, and essentials, ensuring that every part of the agricultural supply chain benefits from efficiency, transparency, and trust.
      </p>
      <p className="mb-6 text-lg text-slate-700 leading-relaxed">
        At FarmEasy, we understand the importance of agriculture in feeding the world. Our platform is designed to empower farmers by providing them with the tools and resources they need to sell directly to merchants and consumers. We aim to bridge the gap between the farm and the table, offering everything from fresh produce to farming equipment, fertilizers, and seeds.
      </p>
      <p className="mb-6 text-lg text-slate-700 leading-relaxed">
        Whether you’re a small-scale farmer, a large-scale supplier, or a consumer looking for the best products, FarmEasy is here to ensure that you have access to everything you need in the agricultural marketplace. Join us in shaping a sustainable future for farming and agriculture.
      </p>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-green-300 to-green-500 py-10 mt-12 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose FarmEasy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="bg-yellow-400 p-4 rounded-full shadow-lg mr-6">
              <i className="fas fa-seedling text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-800">Fresh and Quality Products</h3>
              <p className="text-slate-600">
                We provide only the freshest and highest quality farm produce, directly sourced from trusted farmers.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="bg-yellow-400 p-4 rounded-full shadow-lg mr-6">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-800">Direct Connections</h3>
              <p className="text-slate-600">
                We connect farmers with consumers and merchants, cutting out the middlemen for better prices and transparency.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="bg-yellow-400 p-4 rounded-full shadow-lg mr-6">
              <i className="fas fa-truck text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-800">Reliable Delivery</h3>
              <p className="text-slate-600">
                Our reliable delivery service ensures your agricultural products are delivered fresh and on time, every time.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="bg-yellow-400 p-4 rounded-full shadow-lg mr-6">
              <i className="fas fa-comments text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-800">Customer Support</h3>
              <p className="text-slate-600">
                Our dedicated customer support team is available to help you with any questions, ensuring a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="py-12 bg-gradient-to-r from-yellow-300 to-yellow-500 mt-12 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Our Promise to You</h2>
        <p className="text-center text-slate-800 max-w-4xl mx-auto text-lg">
          At FarmEasy, we believe in the power of agriculture to create a sustainable future. Our promise is to ensure that farmers, merchants, and consumers can all thrive in a transparent, efficient, and sustainable marketplace. We are committed to providing the best products, fostering long-term relationships, and supporting the agricultural community every step of the way.
        </p>
      </div>
    </div>
  );
}
