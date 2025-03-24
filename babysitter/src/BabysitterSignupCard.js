import { Link } from "react-router-dom";

function BabySitterSignupCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Link
        to="/signupbabysitter"
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "#000",
          textDecoration: "none",
        }}
      >
        <img src="./babysittersignupcard.JPG" alt="baby sitter signup card" />
        <p>For baby sitter Signup</p>
      </Link>
    </div>
  );
}

export default BabySitterSignupCard;