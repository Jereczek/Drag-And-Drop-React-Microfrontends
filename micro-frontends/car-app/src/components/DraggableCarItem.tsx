import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StyledCar, TitleCar, QuantityCar } from '../styles/Car';
import ICarItem from '../models/ICarItem.type';

interface ItemProps {
  item: ICarItem;
  index: number;
}

/* eslint-disable react/jsx-props-no-spreading */
const DraggableCarItem = ({ item, index }: ItemProps) => {
  const [carQuantity, setCarQuantity] = useState<number>(1);

  const setQuantity = (value: number) => {
    item.quantity = value; // eslint-disable-line no-param-reassign
    setCarQuantity(value);
  };

  return (
    <StyledCar>
      <Draggable draggableId={item.id.toString()} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <TitleCar>{item.description}</TitleCar>
            <QuantityCar>
              Quantity:
              <input
                type="number"
                id="quantity"
                value={carQuantity}
                name="quantity"
                min="1"
                max="5"
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              />
            </QuantityCar>
            <img src={item.imgUrl} alt="Car" width="220" height="150" />
            <br /><br />
          </div>
        )}
      </Draggable>
    </StyledCar>
  );
};

export default DraggableCarItem;
