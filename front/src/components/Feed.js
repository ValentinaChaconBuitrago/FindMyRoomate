import React, { useState, useEffect } from "react";

function Feed(props) {
  const [feed, setFeed] = useState([]);
  
  useEffect( () => {
    fetching();  
  }, []);

  const fetching = async () => {
    const res = await fetch("/loadFeed");
    const newFeed = await res.json();
    setFeed(newFeed);
  }

  const renderFeed = () => {
    console.log("What is this?",feed);
    return (feed.map(element => (
      <div key={element.id} className="card">
        <img className="card-img-top" src={element.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {element.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{element.price}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            {element.user}
          </a>
          <a href="#" className="card-link">
            {element.availability? "Available" : "No Available"}
          </a>
        </div>
      </div>
    )))
  }
  return (
    <div>
      This my feed!
      <div id="thisCards">
        {renderFeed()}
      </div>
    </div>
  );
}

export default Feed;