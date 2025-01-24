import React from 'react';

const committeeMembers = [
  {
    name: 'Ramesh Sharma',
    designation: 'President',
    photo: 'https://via.placeholder.com/100',
  },
  {
    name: 'Suresh Mehta',
    designation: 'Vice President',
    photo: 'https://via.placeholder.com/100',
  },
  {
    name: 'Anita Desai',
    designation: 'Treasurer',
    photo: 'https://via.placeholder.com/100',
  },
  {
    name: 'Mohan Kumar',
    designation: 'Secretary',
    photo: 'https://via.placeholder.com/100',
  },
  {
    name: 'Radha Singh',
    designation: 'Member',
    photo: 'https://via.placeholder.com/100',
  },
];

const TempleCommittee = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
        Temple Committee Members
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {committeeMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleCommittee;
