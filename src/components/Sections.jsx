import { useState } from "react";

const articlesData = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    image: "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "March 28, 2025",
    author: "John Doe",
    comments: ["Great insights!", "Very informative!", "AI is amazing!"],
  },
  {
    id: 2,
    title: "The Power of React and Tailwind CSS",
    image: "https://source.unsplash.com/600x400/?code,computer",
    date: "March 26, 2025",
    author: "Jane Smith",
    comments: ["Loved this article!", "I use Tailwind too!", "React is awesome!"],
  },
  {
    id: 3,
    title: "How to Build Scalable Web Apps",
    image: "https://source.unsplash.com/600x400/?website,developer",
    date: "March 24, 2025",
    author: "David Johnson",
    comments: ["Great tutorial!", "Very well explained!", "Will try this soon!"],
  },
];

const Sections = () => {
  const [showComments, setShowComments] = useState({});

  const toggleComments = (id) => {
    setShowComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articlesData.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-gray-500 text-sm">
                📅 {article.date} | ✍ {article.author}
              </p>
              <button
                onClick={() => toggleComments(article.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                {showComments[article.id] ? "Hide Comments" : "View Comments"}
              </button>

              {/* Comments Section */}
              {showComments[article.id] && (
                <div className="mt-4 p-2 bg-gray-100 rounded">
                  <h4 className="font-semibold">Comments:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {article.comments.map((comment, index) => (
                      <li key={index} className="text-sm">💬 {comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;
