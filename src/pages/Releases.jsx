import React from 'react';

const Releases = () => {
  const releases = [
    {
      title:
        'Venexus Receives Certificate of Recognition from DPIIT, Ministry of Commerce and Industry, Government of India',
      date: 'April 18, 2024',
    }
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Releases</h2>
        <div className="space-y-6">
          {releases.map((release, index) => (
            <div key={index} className="border-b pb-6 text-white">
              <h4 className="text-xl font-semibold">{release.title}</h4>
              <p className="text-sm text-gray-400">{release.date}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-violet-950 text-white rounded hover:bg-gray-800">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Releases;
