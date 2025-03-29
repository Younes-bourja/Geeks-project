import { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

const articlesData = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    image: "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 28, 2025",
    author: "John Doe",
    comments: ["Great insights!", "Very informative!", "AI is amazing!"],
  },
  {
    id: 2,
    title: "The Power of React and Tailwind CSS",
    image: "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 26, 2025",
    author: "Jane Smith",
    comments: ["Loved this article!", "I use Tailwind too!", "React is awesome!"],
  },
  {
    id: 3,
    title: "How to Build Scalable Web Apps",
    image: "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",    
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
    <>
    
    <Header/>
    <Hero/>
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {articlesData.map((article) => (
          <a key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden" href={`/article/${article.id}`} >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-gray-500 text-sm">
                📅 {article.date} | ✍ {article.author}
              </p>
              <br />
<hr />

            <p className="text-gray-500 text-sm line-clamp-2 mt-1 w-148">
{article.content}
            </p>

             
            </div>
          </a>
        ))}
      </div>
      
    </section>
    <Footer/>
  </> 
  );
};

export default Sections;
