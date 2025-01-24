import React, { useState } from "react";
import axios from "axios";

const Donation = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    try {
      // Create an order on the server
      const response = await axios.post("http://localhost:8081/donation/createOrder", {
        amount: parseFloat(amount),
      });

      const { orderId, key } = response.data;

      // Configure Razorpay options
      const options = {
        key, // Razorpay key
        amount: parseFloat(amount) * 100, // Convert to smallest currency unit
        currency: "INR",
        name: "Temple Donation",
        description: "Thank you for your generous donation",
        order_id: orderId, // Order ID created on the server
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Your Name",
          email: "your-email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#528FF0",
        },
        modal: {
          ondismiss: function () {
            alert("Payment canceled by the user.");
          },
        },
      };

      // Open Razorpay payment modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Unable to initiate donation.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 pt-[30vh]">
      <h2 className="text-2xl font-bold text-gray-800">Donate to Support</h2>
      <p className="text-gray-600 text-center">
        Your generous donation helps us continue our mission.
      </p>
      <input
        type="number"
        placeholder="Enter donation amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-64 text-center"
      />
      <button
        onClick={handleDonate}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Donate
      </button>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          After clicking "Donate," you will be redirected to a secure payment gateway.
        </p>
      </div>
    </div>
  );
};

export default Donation;
