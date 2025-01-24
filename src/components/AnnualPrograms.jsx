import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaWalking, FaRegSun, FaMountain } from 'react-icons/fa';

const annualPrograms = [
  {
    title: 'Sasankathi Journey to Vadi Ratnagiri',
    date: 'Gudi Padwa',
    description:
      'On Gudi Padwa, the Sasankathi is inaugurated and begins its sacred journey to Vadi Ratnagiri by foot, accompanied by detailed rituals. Upon reaching Kolhapur, more rituals are performed before the grand festival in Vadi Ratnagiri. After the festival and post-festival rituals, the Sasankathi returns to the village, where it is welcomed with great enthusiasm.',
    icon: <FaWalking />,
    imageUrl: 'https://images.unsplash.com/photo-1695546423823-3e78ec2ff41e?w=500&auto=format&fit=crop&q=60'
  },
  {
    title: 'Village Festival on Hanuman Jayanti',
    date: 'Hanuman Jayanti',
    description:
      'On Hanuman Jayanti, the deity arrives from the Jalav Devasthan. The village unites to welcome and celebrate the festival. The next day, the deity begins its journey back to the Jalav. On the fifth day, special Pakalani rituals are performed.',
    icon: <FaRegSun />,
    imageUrl: 'https://images.unsplash.com/photo-1695546423823-3e78ec2ff41e?w=500&auto=format&fit=crop&q=60'
  },
  {
    title: 'Kinnai Festival',
    date: 'After Diwali',
    description:
      'After Diwali, the Sasankathi starts its journey towards Kinnai. Upon reaching Kinnai, it participates in the grand festival, which is a major event for the region, attracting numerous devotees.',
    icon: <FaCalendarAlt />,
    imageUrl: 'https://images.unsplash.com/photo-1695546423823-3e78ec2ff41e?w=500&auto=format&fit=crop&q=60'
  },
  {
    title: 'Jalav Yatra',
    date: 'Shravan Month',
    description:
      'Jalav Yatra is a sacred event where devotees carry holy water from the nearby river to the temple. This ritual is performed with great devotion and marks an important occasion for the village.',
    icon: <FaMapMarkerAlt />,
    imageUrl: 'https://images.unsplash.com/photo-1695546093269-f5dca190d537?w=500&auto=format&fit=crop&q=60'
  },
  {
    title: 'Bhairavgad Yatra',
    date: 'During Chaitra',
    description:
      'Bhairavgad Yatra involves a challenging trek to the Bhairavgad fort, where devotees offer prayers and participate in rituals. This event attracts adventure seekers and spiritual enthusiasts alike.',
    icon: <FaMountain />,
    imageUrl: 'https://images.unsplash.com/photo-1695546093269-f5dca190d537?w=500&auto=format&fit=crop&q=60'
  }
];

const ProgramCard = ({ program }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden mb-6 bg-white transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-56">
        <img
          src={program.imageUrl || 'https://via.placeholder.com/500'}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full text-xl text-blue-500 shadow-lg">
          {program.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{program.title}</h3>
        <p className="text-sm text-gray-600 mb-4"><strong>Date:</strong> {program.date}</p>
        <p className="text-sm text-gray-700">{program.description}</p>
      </div>
    </div>
  );
};

const AnnualPrograms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">Annual Programs</h1>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {annualPrograms.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );
};

export default AnnualPrograms;
