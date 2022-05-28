import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import UserCard from "./UserCard";
const GroupList = ({ groupName, userList, index }) => {
  return (
    <Draggable key={groupName} draggableId={groupName} index={index}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} className="groupColumn">
            <div
              {...provided.dragHandleProps}
              className={`groupName groupName_${index + 1}`}
            >
              {groupName} - <span className="groupCount">{userList?.length}</span>
            </div>
            <Droppable droppableId={groupName} type="USER">
              {(dropProvided) => {
                return (
                  <div
                    {...dropProvided.droppableProps}
                    ref={dropProvided.innerRef}
                    className="userCardLayout"
                  >
                    {userList?.map((userObj, userIndex) => {
                      return (
                        <UserCard
                          key={userObj.id}
                          userData={userObj}
                          index={userIndex}
                        />
                      );
                    })}
                    {dropProvided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

export default GroupList;
