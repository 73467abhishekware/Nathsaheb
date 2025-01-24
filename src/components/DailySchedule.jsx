import React from 'react';

const events = [
  { time: '06:00 AM', event: 'Morning Prayer & Opening Ceremony' },
  { time: '08:00 AM', event: 'Special Rituals & Offerings' },
  { time: '10:00 AM', event: 'Devotional Music Performance' },
  { time: '12:00 PM', event: 'Midday Aarti & Prasad Distribution' },
  { time: '03:00 PM', event: 'Cultural Programs & Talks' },
  { time: '06:00 PM', event: 'Evening Aarti & Lighting Ceremony' },
  { time: '08:00 PM', event: 'Closing Ceremony & Blessings' },
];

const FestivalSchedule = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
        Temple Festival Schedule
      </h1>
      <div className="space-y-6">
        {events.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <span className="text-lg font-semibold text-orange-600">{item.time}</span>
            <span className="text-lg text-gray-700">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalSchedule;
