import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = () => {
  const data = [
    { project: "Project name", desc: "description", id: 1 },
    { project: "Project name", desc: "description", id: 2 },
    { project: "Project name", desc: "description", id: 3 },
    { project: "Project name", desc: "description", id: 4 },
  ];

  const listOflist = data.map((List,index) => {
    return (
      <DragDropContext>
        <Droppable droppableId="card">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={List.id} draggableId={List.id} index={index}>
                {(provided) => (
                  <li
                    type="text"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div className="card">
                      <h3>{List.project}</h3>
                      <h3>{List.desc}</h3>
                    </div>
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  });

  return <div>{listOflist}</div>;
};

export default List;
