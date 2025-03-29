import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";

// Sample article data (replace with API/data fetching)
const article = {
  title: "The Future of Web Development in 2024",
  author: "Jane Developer",
  date: "March 15, 2024",
  readTime: "8 min read",
  image:
    "https://images.pexels.com/photos/31341763/pexels-photo-31341763/free-photo-of-foret-d-hiver-noire-et-blanche-en-toscane.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  content: `
     
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

5
	paragraphs
	words
	bytes
	lists
	Start with 'Lorem
ipsum dolor sit amet...'

    `,
};

const Article = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.text.trim()) {
      setComments([
        ...comments,
        {
          ...newComment,
          date: new Date().toLocaleString(),
        },
      ]);
      setNewComment({ name: "", text: "" });
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto mt-10 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured Image */}
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30" />
        </div>
        {/* Article Header */}
        <header className="mb-12 mt-0">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            {article.title} {params.aticleId}
          </h1>

          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <span className="mr-2">By</span>
              <span className="font-medium">{article.author}</span>
            </div>
            <span>•</span>
            <time>{article.date}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Social Sharing */}
        <div className="mt-12 flex space-x-4">
          <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <span className="sr-only">Share on Twitter</span>
            <svg
              className="h-6 w-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Twitter icon */}
            </svg>
          </button>
          <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <span className="sr-only">Share on LinkedIn</span>
            <svg
              className="h-6 w-6 text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* LinkedIn icon */}
            </svg>
          </button>
        </div>

        {/* Author Bio */}
        <section className="mt-12 border-t border-gray-200 pt-12">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gray-100"></div>
            <div>
              <h3 className="text-lg font-bold">{article.author}</h3>
              <p className="text-gray-600">Senior Web Developer at Tech Corp</p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{comment.name}</h3>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="whitespace-pre-wrap text-gray-700">
                  {comment.text}
                </p>
              </div>
            ))}

            {comments.length === 0 && (
              <p className="py-4 text-center text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={newComment.name}
                onChange={(e) =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Write your comment..."
                value={newComment.text}
                onChange={(e) =>
                  setNewComment({ ...newComment, text: e.target.value })
                }
                className="h-32 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="self-end rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Post Comment
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Article;
