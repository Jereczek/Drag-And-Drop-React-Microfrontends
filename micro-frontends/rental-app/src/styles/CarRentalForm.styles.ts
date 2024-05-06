import styled from 'styled-components';

export const ContentFormContainer = styled.div`
  border: solid 0px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const AddressFormContainer = styled.div`
  border: solid 1px red;
`;

export const ProgressBarWrapper = `
padding: 12rem;
color: rgb(255, 255, 255);
background-color: rgba(255, 0, 0, 1);
`;

export const FormError = styled.div`
  color: red;
  allign-text: center;
  font-size: 0.5em;
`;

export const FormInput = styled.div`
  padding: 0.2rem;
  font-size: 0.5em;
`;

export const FormSuccess = styled.div`
  color: green;
  allign-text: center;
  font-size: 0.5em;
`;

export const DropCarsArea = styled.div`
  background-color: rgb(112, 119, 161, 0.25);
  border-radius: 20px;
`;

export const SelectedCarsHeader = styled.h4`
  color: rgb(246, 177, 122);
`;
