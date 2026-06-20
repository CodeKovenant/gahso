const Maintenance = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#222",
        fontFamily: "arial, sans-serif",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <div style={{ flex: "1 1 480px", minWidth: 280 }}>
          <div
            style={{
              fontSize: 90,
              fontFamily: "arial, sans-serif",
              lineHeight: 1,
              marginBottom: 24,
              userSelect: "none",
            }}
          >
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </div>
          <p style={{ fontSize: 18, margin: "0 0 16px" }}>
            <strong>404.</strong>{" "}
            <span style={{ color: "#777" }}>That’s an error.</span>
          </p>
          <p style={{ fontSize: 16, color: "#555", maxWidth: 520, lineHeight: 1.5 }}>
            The requested URL was not found on this server. That’s all we know.
          </p>
        </div>
        <div style={{ flex: "0 1 360px", textAlign: "center" }}>
          <img
            src="https://www.google.com/images/errors/robot.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
