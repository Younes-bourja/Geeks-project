import { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

const articlesData = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    image:
      "https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 28, 2025",
    author: "John Doe",
    comments: ["Great insights!", "Very informative!", "AI is amazing!"],
  },
  {
    id: 2,
    title: "The Power of React and Tailwind CSS",
    image:
      "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 26, 2025",
    author: "Jane Smith",
    comments: [
      "Loved this article!",
      "I use Tailwind too!",
      "React is awesome!",
    ],
  },
  {
    id: 3,
    title: "How to Build Scalable Web Apps css",
    image:
      "https://t4.ftcdn.net/jpg/11/67/79/81/360_F_1167798198_C4E1LJytFsoL0ULUHcqBQ9MqVx5A0cMN.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 24, 2025",
    author: "David Johnson",
    comments: [
      "Great tutorial!",
      "Very well explained!",
      "Will try this soon!",
    ],
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
    <>
      <Header />
      <Hero />
      <section className="container mx-auto px-6 py-10" id="discover">
        <h2 className="mb-8 text-center text-3xl font-bold">Latest Articles</h2>

        <div className="grid justify-items-center gap-8 md:grid-cols-3">
          {articlesData.map((article) => (
            <a
              key={article.id}
              className="transform overflow-hidden rounded-lg bg-white shadow-md transition-all hover:scale-105"
              href={`/article/${article.id}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <p class="ml-3 mt-3 w-3/12 rounded-full bg-green-500  py-1  text-center text-xs  uppercase text-white">
                Technology
              </p>
              <div className="p-4">
                <h3 className="text-xl font-bold  ">{article.title}</h3>
                <p className="w-148  mt-1 line-clamp-2               text-sm">
                  {article.content}
                </p>
                <div className="mt-10 flex  ">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="h-14 w-14 rounded-full  object-cover"
                    alt=""
                  />
                  <p className="ml-3  text-sm font-bold text-black">
                    {article.date}
                    <br />
                    <span className="font-medium text-gray-600">
                      {article.author}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sections;
