import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import UserData from "../../JsonData/Users.json";
import GroupList from "./GroupList";
import "./Dashboard.css";

const Dashboard = ({ userName }) => {
  const [userData, setUserData] = useState(UserData);
  const [userDataDuplicate, setUserDataDuplicate] = useState(UserData);

  useEffect(() => {
    const updatedUserData = userDataDuplicate.GroupUserList.map((obj) => {
      const objVal = Object.entries(obj);
      const x = objVal[0][1].filter((obj) => {
        return obj.Name.toLocaleLowerCase().startsWith(
          userName?.toLocaleLowerCase()
        );
      });
      return { [objVal[0][0]]: x };
    });
    setUserData({ GroupUserList: [...updatedUserData] });
  }, [userName, userDataDuplicate]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    let userDataObj = { ...userDataDuplicate };
    if (result.type === "COLUMN") {
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      if (sourceIndex !== destination.index) {
        const sourceData = { ...userDataObj.GroupUserList[sourceIndex] };
        userDataObj.GroupUserList.splice(sourceIndex, 1);
        userDataObj.GroupUserList.splice(destinationIndex, 0, sourceData);
        setUserData(userDataObj);
        setUserDataDuplicate(userDataObj);
      }
      return;
    }
    if (userName !== "") return;
    const sourceIndex = userDataObj.GroupUserList.findIndex((obj) => {
      return obj.hasOwnProperty(source.droppableId);
    });
    if (source.droppableId !== destination.droppableId) {
      const destinationIndex = userDataObj.GroupUserList.findIndex((obj) => {
        return obj.hasOwnProperty(destination.droppableId);
      });
      const sourceUserData = { ...userDataObj.GroupUserList[sourceIndex] };
      const destUserData = { ...userDataObj.GroupUserList[destinationIndex] };
      const [removed] = sourceUserData[source.droppableId].splice(
        source.index,
        1
      );
      destUserData[destination.droppableId].splice(
        destination.index,
        0,
        removed
      );
      userDataObj.GroupUserList[sourceUserData] = { ...sourceUserData };
      userDataObj.GroupUserList[destinationIndex] = { ...destUserData };
    } else {
      const sourceUserData = { ...userDataObj.GroupUserList[sourceIndex] };
      const [removed] = sourceUserData[source.droppableId].splice(
        source.index,
        1
      );
      sourceUserData[source.droppableId].splice(destination.index, 0, removed);
      userDataObj.GroupUserList[sourceIndex] = { ...sourceUserData };
    }
    setUserData(userDataObj);
    setUserDataDuplicate(userDataObj);
  };
  return (
    <div className="dashboard pad_10">
      <div className="pad_10">
        <div>
          <span className="font_weight_600">All candidates</span> - Active (31){" "}
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="group" type="COLUMN" direction="horizontal">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="dropcontext"
              >
                {userData.GroupUserList.map((groupObj, grpIndex) => (
                  <React.Fragment key={`Group_${grpIndex + 1}`}>
                    {Object?.entries(groupObj)?.map(
                      ([groupName, userList], index) => {
                        return (
                          <GroupList
                            key={`${groupName}_${index + 1}`}
                            groupName={groupName}
                            userList={userList}
                            index={grpIndex}
                          />
                        );
                      }
                    )}
                  </React.Fragment>
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
