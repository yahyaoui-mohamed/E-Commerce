import { useState } from "react";
function UpNav() {
  const [elements, setElements] = useState(["Free shipping for order over $200", "We return money within 30 days", "Friendly 24/7 customer support"]);
  const [index, setIndex] = useState(0);
  function moveForward() {
    if (index == elements.length - 1)
      setIndex(0);
    else
      setIndex(index + 1);
  }
  function moveBackward() {
    if (index == 0)
      setIndex(elements.length - 1);
    else
      setIndex(index - 1);
  }
  setTimeout(function move() {
    setTimeout(move);
  }, 500)
  return (
    <div className="up-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <i className="fa-solid fa-headset"></i>
            <span>Support</span>
            <a href="tel:00331697720"> (00) 33 169 7720</a>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fa-solid fa-chevron-left" onClick={() => {
              moveForward()
            }}></i>
            <span>{elements[index]}</span>
            <i className="fa-solid fa-chevron-right" onClick={() => {
              moveBackward()
            }}></i>
          </div>
          <div className="col-lg-4 text-end">
            <i className="fa-solid fa-location-dot"></i>
            <a href="/">Order Tracking</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UpNav;