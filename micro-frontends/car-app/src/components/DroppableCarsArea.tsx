import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableCarItem from './DraggableCarItem';
import { StyledColumn, StyledList } from '../styles/Car';
import ICarItem from '../models/ICarItem.type';

interface DroppableCarsProps {
  cars: ICarItem[];
  droppableId: string;
}

/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */
const DroppableCarsArea = ({ cars, droppableId }: DroppableCarsProps) => (
  <Droppable droppableId={droppableId}>
    {(provided) => (
      <StyledColumn>
        <StyledList {...provided.droppableProps} ref={provided.innerRef}>
          {cars.map((item, index) => (
            <DraggableCarItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </StyledList>
      </StyledColumn>
    )}
  </Droppable>
);

export default DroppableCarsArea;
