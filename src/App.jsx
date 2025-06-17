import "../src/styles/app.css";

function App() {
  return (
    <div className="app-container">
      <video
        className="hero-video"
        src="sz.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default App;
