import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // We'll use URL parameters and navigate to go back
import "./BabysitterDetail.css"; // Import the CSS file for styling

function BabysitterDetail() {
  const { name } = useParams(); // Getting the babysitter's name from URL params
  const navigate = useNavigate(); // Using navigate to go back

  // Example babysitter data
  const babysitters = [
    {
      name: "Aisha",
      location: "Sfax",
      image:
        "https://www.easyservicesolutions.com/wp-content/uploads/2013/05/baby-sitter-roma-italia.jpg",
      reviews: 5,
      bio: "Aisha is an experienced and energetic babysitter. She brings a lot of joy to families and loves playing games with children.",
      comments: [
        {
          author: "John",
          comment: "Aisha is great with my kids! Highly recommend.",
        },
        { author: "Emily", comment: "Very friendly and reliable." },
      ],
    },
    {
      name: "Fatima",
      location: "Tunis",
      image: "/babysitter00.jpg",
      reviews: 3,
      bio: "Fatima is calm and patient. She focuses on making children feel at ease and is great at understanding their needs.",
      comments: [
        {
          author: "Sarah",
          comment: "Fatima is very understanding and patient with my son.",
        },
        {
          author: "Ali",
          comment: "She’s always on time and does a fantastic job!",
        },
      ],
    },
    {
      name: "Selma",
      location: "Sousse",
      image: "/babysitter01.jpg",
      reviews: 8,
      bio: "Selma is playful and very good with toddlers. She has a natural ability to make children laugh and feel comfortable.",
      comments: [
        {
          author: "Lina",
          comment: "Selma is amazing, she made my daughter so happy!",
        },
        {
          author: "Khalil",
          comment: "She really knows how to keep the little ones entertained.",
        },
      ],
    },
    {
      name: "Sara",
      location: "Sfax",
      image: "/babysitter02.jpg",
      reviews: 4,
      bio: "Sara has a warm and welcoming approach, always creating a positive environment for the kids she takes care of.",
      comments: [
        {
          author: "Maya",
          comment: "My kids absolutely adore Sara. She’s the best!",
        },
        { author: "Karim", comment: "I trust her completely with my kids." },
      ],
    },
    {
      name: "Nour",
      location: "Bizerte",
      image: "/babysitter03.jpg",
      reviews: 6,
      bio: "Nour is known for her creative ideas to keep children entertained, especially with arts and crafts.",
      comments: [
        {
          author: "Zara",
          comment:
            "Nour is incredibly creative and always finds fun activities!",
        },
        {
          author: "Omar",
          comment: "My kids had a blast with her. So happy we found Nour!",
        },
      ],
    },
    {
      name: "Mona",
      location: "Gabes",
      image: "/babysitter04.jpg",
      reviews: 7,
      bio: "Mona is patient and a great communicator. She loves interacting with children and helping them with their daily activities.",
      comments: [
        {
          author: "Farah",
          comment:
            "Mona is very patient with my children. I highly recommend her!",
        },
        { author: "Nabil", comment: "She’s great at keeping my kids engaged." },
      ],
    },
    {
      name: "Lina",
      location: "Kairouan",
      image: "/babysitter05.jpg",
      reviews: 9,
      bio: "Lina is highly experienced and enjoys guiding children through various educational activities while making sure they have fun.",
      comments: [
        {
          author: "Rami",
          comment: "Lina has taught my kids so many things, they love her!",
        },
        { author: "Huda", comment: "She's a great teacher and very kind." },
      ],
    },
    {
      name: "Ranim",
      location: "Tunis",
      image: "/babysitter06.jpg",
      reviews: 10,
      bio: "Ranim brings a lot of energy and positivity. She loves doing outdoor activities and is always full of ideas.",
      comments: [
        {
          author: "Leila",
          comment:
            "Ranim is full of energy and always comes up with fun activities!",
        },
        {
          author: "Nora",
          comment: "My kids never get bored with Ranim around.",
        },
      ],
    },
    {
      name: "Rania",
      location: "Sousse",
      image: "/babysitter07.jpg",
      reviews: 2,
      bio: "Rania is gentle and nurturing. She works to establish a calm environment for children and ensures they feel safe and cared for.",
      comments: [
        {
          author: "Mariam",
          comment: "Rania is so sweet and attentive to my child's needs.",
        },
        { author: "Tariq", comment: "Very professional and caring." },
      ],
    },
    {
      name: "Noura",
      location: "Sfax",
      image: "/babysitter08.jpg",
      reviews: 4,
      bio: "Noura is friendly and has a lot of patience. She connects well with children and loves teaching them new things.",
      comments: [
        {
          author: "Ahmed",
          comment: "Noura is patient and my daughter loves her!",
        },
        {
          author: "Rami",
          comment: "She’s great at keeping the kids engaged and learning.",
        },
      ],
    },
  ];

  const [newComment, setNewComment] = useState("");

  // Find the selected babysitter based on the name from the URL
  const babysitter = babysitters.find((b) => b.name === name);

  if (!babysitter) {
    return <div>Babysitter not found</div>; // If no babysitter is found, display this message
  }

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      babysitter.comments.push({ author: "Anonymous", comment: newComment });
      setNewComment("");
    }
  };

  return (
    <div className="babysitter-detail-container">
      <div className="babysitter-detail-header">
        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
        <h1>{babysitter.name}</h1>
        <p className="babysitter-location">{babysitter.location}</p>
        <p className="babysitter-reviews">{babysitter.reviews} Reviews</p>
      </div>
      <div className="babysitter-detail-body">
        <div className="babysitter-image-container">
          <img
            src={babysitter.image}
            alt={babysitter.name}
            className="babysitter-image"
          />
        </div>
        <div className="babysitter-bio">
          <h3>About</h3>
          <p>{babysitter.bio}</p>
        </div>
        <div className="message-form">
          <h3>Send a Message</h3>
          <textarea
            placeholder="Write your message here..."
            className="message-input"
          ></textarea>
          <button className="send-button">Send</button>
        </div>

        {/* Yorumlar Kısmı */}
        <div className="comments-section">
          <h3>Comments</h3>
          <div className="comments-list">
            {babysitter.comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.author}</strong>: {comment.comment}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="comment-input"
            ></textarea>
            <button type="submit" className="comment-button">
              Add Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BabysitterDetail;
