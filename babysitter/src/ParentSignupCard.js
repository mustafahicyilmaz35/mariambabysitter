import { Link } from "react-router-dom";

function ParentSignupCard() {
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
        to="/signupparent"
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "#000",
          textDecoration: "none",
        }}
      >
        <img src="./parentsignupcard.JPG" alt="parent signup card" />
        <p>For Parents Signup</p>
      </Link>
    </div>
  );
}

export default ParentSignupCard;
