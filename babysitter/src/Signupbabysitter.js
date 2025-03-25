function Signupbabysitter() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <form
        style={{
          backgroundColor: "#fff",
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Sütunları taşıyan container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
          }}
        >
          {/* Sol sütun */}
          <div
            style={{
              width: "18rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <select style={inputStyle}>
              <option disabled selected>
                Gender
              </option>
              <option value={1}>Woman</option>
              <option value={2}>Man</option>
            </select>
            <select style={inputStyle}>
              <option disabled selected>
                Smoke
              </option>
              <option value={1}>Yes</option>
              <option value={2}>No</option>
            </select>
            <select style={inputStyle}>
              <option disabled selected>
                Babysitting Location
              </option>
              <option value={1}>Babysitter's Home</option>
              <option value={2}>Parents' Home</option>
            </select>
            <input
              type="file"
              placeholder="Photo or Document"
              style={inputStyle}
            />
          </div>

          {/* Sağ sütun */}
          <div
            style={{
              width: "18rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input type="text" placeholder="Surname" style={inputStyle} />
            <input type="text" placeholder="Telephone" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <input
              type="text"
              placeholder="Degree Education"
              style={inputStyle}
            />
            <select style={inputStyle}>
              <option disabled selected>
                Frequency of Babysitting
              </option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
            </select>
            <input
              type="file"
              placeholder="Photo or Document"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Submit butonu */}
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.7rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Kaydol
        </button>
      </form>
    </div>
  );
}

// Ortak input/select stili
const inputStyle = {
  width: "100%",
  padding: "0.6rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
  outline: "none",
  boxSizing: "border-box",
};

export default Signupbabysitter;
