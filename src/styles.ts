import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  flex-grow: 0;
  min-height: 40px;
  padding: 8px;
  margin-right: 20px;
  width: 300px;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  max-width: 300px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
