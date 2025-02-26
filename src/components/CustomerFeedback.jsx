import React from "react";

const feedbackData = [
  {
    id: 1,
    name: "Arlene McCoy",
    profileImg: "src/assets/images/customerfeedback/arlene.png",
    text: "This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and barely noticeable!",
    rating: 5,
    likes: 1500,
    date: "1 Week Ago",
    reviewImg: "src/assets/images/customerfeedback/product.jpg",
  },
  {
    id: 2,
    name: "Ralph Edwards",
    profileImg: "src/assets/images/customerfeedback/ralph.png",
    text: "I’ve been using the nasal clip to combat my chronic nasal congestion, and it’s made a world of difference. Highly effective and comfortable!",
    rating: 5,
    likes: 1500,
    date: "1 Week Ago",
    reviewImg: "src/assets/images/customerfeedback/product.jpg",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    profileImg: "src/assets/images/customerfeedback/cameron.png",
    text: "I’ve been using the nasal clip to combat my chronic nasal congestion, and it’s made a world of difference. Highly effective and comfortable!",
    rating: 4,
    likes: 1500,
    date: "1 Week Ago",
    reviewImg: "src/assets/images/customerfeedback/product.jpg",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Feedback</h2>
      <hr className="border-gray-200 mb-4" />

      {feedbackData.map((feedback) => (
        <div key={feedback.id} className="p-6">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <img
              src={feedback.profileImg}
              alt={feedback.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-lg font-semibold">{feedback.name}</span>
            <span className="text-green-500 text-xl">✔️</span>
            <span className="ml-auto bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
              {feedback.date}
            </span>
          </div>

          {/* Rating & Likes */}
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex text-yellow-500">
              {"⭐".repeat(feedback.rating)}
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">❤️ {feedback.likes.toLocaleString()}</span>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mt-3">{feedback.text}</p>

          {/* Review Image */}
          <div className="mt-4">
            <img
              src={feedback.reviewImg}
              alt="Review"
              className="w-36 h-36 rounded-lg object-cover"
            />
          </div>

          <hr className="border-gray-200 mt-6" />
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
