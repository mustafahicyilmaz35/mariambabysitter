import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BabysitterDetail.css";

function BabysitterDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

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
  ];

  const [newComment, setNewComment] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [showModal, setShowModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage(""); // Mesaj gönderildikten sonra input temizlenir.
    }
  };

  const handlePaymentDetailsChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitPayment = () => {
    alert("Payment details submitted!");
    setShowModal(false); // Modal'ı kapat
  };

  const babysitter = babysitters.find((b) => b.name === name);

  if (!babysitter) {
    return <div>Babysitter not found</div>;
  }

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

        {/* Yorumlar Bölümü */}
        <div className="comments-section">
          <h3>Comments</h3>
          <div className="comments-list">
            {babysitter.comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.author}:</strong> {comment.comment}
              </div>
            ))}
          </div>
        </div>

        {/* Mesajlaşma Kısmı */}
        <div className="message-section">
          <h3>Messages</h3>
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
          <textarea
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>

        {/* Ödeme Yöntemi */}
        <div className="payment-section">
          <h3>Choose Payment Method</h3>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
          <button onClick={() => setShowModal(true)}>Proceed to Payment</button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <h3>Enter Payment Details</h3>
              <form onSubmit={handleSubmitPayment}>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date:</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
                <button type="submit">Submit Payment</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BabysitterDetail;
