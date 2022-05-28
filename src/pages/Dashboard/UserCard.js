import React from "react";
import { Draggable } from "react-beautiful-dnd";
const UserCard = ({ userData, index }) => {
  return (
    <Draggable
      key={userData.id}
      draggableId={userData.id}
      index={index}
    >
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="userCard"
          >
            <div className="userDetails">
              <div>{userData.Name}</div>
              <div className="companyName">{userData.Company}</div>
            </div>
            <div className="userRating">
              <div className="starRating">
              &#9734;&#9734;&#9734;&#9734;&#9734;
              </div>
              <div className="profileIcon">
                <div className="userProfileIcon">S</div>
                <div className="verticalIcon"></div>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default UserCard;
