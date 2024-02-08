const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congrajulations</h1>
    <div class="card1">
      <img
        className="person-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="heading1">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
