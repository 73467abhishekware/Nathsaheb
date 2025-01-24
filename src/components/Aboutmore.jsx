import React from "react";

const Details = () => {
  return (
    <section className="bg-zinc-100 text-gray-800 px-6 py-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            Details of Shri Kshetra Ninama Temple
          </h1>
          <p className="text-lg text-gray-600">
            Explore the rich heritage, architecture, and cultural significance
            of Shri Kshetra Ninama Temple.
          </p>
        </div>

        {/* Temple Details */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1695546423823-3e78ec2ff41e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anlvdGliYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Jyotiba Temple"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Jyotiba Temple
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jyotiba Temple is situated at the center of Ninam Village.
              According to tradition, the original Jyotirling Temple was
              replaced in 1730 by the present temple. The shrine is spacious,
              and the temple, including the spire, is surrounded by a strong
              15-foot-high wall. Near the north side of Jyotirling Temple is
              Hanuman Temple.
            </p>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Jalav Jyotiba Temple
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The second temple of Jalav Jyotiba is situated in Jyotirling Nagar
              (Ninam), about 600 meters from the village's western border. This
              shrine was constructed in 2010. The interior of the temple is
              newly constructed but looks ancient. There are other temples and
              light-towers on the premises.
            </p>
          </div>
        </div>

        {/* Additional Temples */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Other Temples in Ninam
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            There are many other temples in Ninam: Lakshmi Mata, Bhavani Mata,
            Shiva, Dattatreya, Vithoba, Rukmini, Rama, Lakshmana, and Sita
            temples. These temples reflect the spiritual diversity and
            harmonious coexistence of various traditions.
          </p>
        </div>

        {/* Festivals */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Festivals
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            On Hanuman Jayanti, an important festival in the Hindu calendar, a
            big fair is held. Villagers often go to Wadi Ratnagiri in Kolhapur
            district to celebrate. After the completion of the Wadi Ratnagiri
            fair, all devotees attending that fair bring back tall sasan sticks
            to the Ninam village fair in time for prayer. A first-place
            sasan-stick prize is awarded by the village.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The deity of the temple is known by the same name and is held by the
            locals to be an incarnation of three gods: Brahma, Vishnu, Mahesha,
            and Jamadagni. The fair takes place annually on the night of the
            full moon of the Hindu months of Chaitra and Vaishakha. Due to the
            scattering of gulal, an entire mountain is turned pink. Being that
            Sunday is the day dedicated to Jyotiba, there is a rush of people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
