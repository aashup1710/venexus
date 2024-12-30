import React from 'react'

const Values = () => {
    const values = [
      { title: 'Innovation', description: 'We specialize in crafting innovative solutions tailored to unique challenges.' },
      { title: 'Customer Service', description: 'We support every step of the way from inception to expansion.' },
      { title: 'Collaboration', description: 'Our journey focuses on co-creating solutions with our partners.' },
      { title: 'Brand/Status', description: 'Helping businesses elevate their brand and achieve status.' },
      { title: 'Trust/Ethics', description: 'Building long-term relationships founded on trust and ethics.' },
    ];
  
    return (
      <section className="bg-white text-black p-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-newsreader text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 border rounded shadow-sm">
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Values;
  