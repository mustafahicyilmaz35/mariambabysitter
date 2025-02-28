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
    // ... (Other babysitter data)
  ];

  const [newComment, setNewComment] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    // Simulate a successful payment
    if (
      paymentDetails.cardNumber &&
      paymentDetails.expiryDate &&
      paymentDetails.cvv
    ) {
      setPaymentSuccess(true);
      alert("Payment successful! Your babysitter has been booked.");
    } else {
      alert("Please fill in all payment details.");
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

        {/* Ödeme Formu Kısmı */}
        <div className="payment-section">
          <h3>Payment</h3>
          <form onSubmit={handlePaymentSubmit} className="payment-form">
            <div className="payment-input-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Enter your card number"
                required
              />
            </div>
            <div className="payment-input-group">
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="payment-input-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="CVV"
                required
              />
            </div>
            <button type="submit" className="payment-button">
              Pay Now
            </button>
          </form>
          <div className="payment-methods">
            <img
              src="/visamaster.jpg"
              alt="Visamaster"
              style={{ width: "200px" }}
            />
            
          </div>

          {paymentSuccess && (
            <p className="payment-success">Payment Successful!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BabysitterDetail;
