import React from "react";

const Card = (props) => {
  // Destructuring
  const { name, email, id } = props;
  return (
    // bg-light-green : background light-green
    // dib :
    // br3 : border of 3
    // pa3 : padding of 3
    // grow : animation
    // bw2 : border-widths of 2
    // shadow-5 : shadow of 5
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
