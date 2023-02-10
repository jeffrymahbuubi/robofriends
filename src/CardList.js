import React from "react";
import Card from "./Card";

// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((user, index) => {
//     return (
//       <Card
//         key={index}
//         id={robots[index].id}
//         name={robots[index].name}
//         email={robots[index].email}
//       />
//     );
//   });
//   return <div>{cardComponent}</div>;
// };

// Or

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robots, i) => {
        return (
          <Card
            key={i}
            id={robots.id}
            name={robots.name}
            email={robots.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
