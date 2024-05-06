import styled from 'styled-components';

export const AppContainer = styled.div`
  border: solid 0px black;
`;

export const StyledColumns = styled.div`
  display: "grid";
  gridTemplateColumns: "1fr 1fr 1fr";
  grid-template-columns: "1fr 1fr 1fr";
  margin: "10vh auto";
  width: "80%";
  height: "10vh";
  gap: "8px";
`;

export const StyledColumn = styled.div`
  padding: "2px 0";
  display: "flex";
  flex-direction: "column";
  margin-top: 8;
`;

export const StyledList = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  borderRadius: 8;
  padding: 6;
  display: "flex";
  flexDirection: "column";
  flexGrow: 1;
  marginTop: 8;
  min-height: "100px";
`;

export const StyledCar = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  transition: "background-color .8s ease-out";
  margin-top: 1;
  border: solid 1px rgb(112, 119, 161);
`;

export const TitleCar = styled.h5`
  font-size: 1em;
  text-align: center;
  color: 7077A1
`;

export const QuantityCar = styled.h4`
  font-size: 0.8em;
  text-align: center;
  color: 7077A1
  margin-top: 0;
`;
