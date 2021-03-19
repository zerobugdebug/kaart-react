import React from "react";
import styled from "styled-components";

function Untitled() {
  return (
    <>
      <Group>
        <CompCard1>
          <ButtonOverlay />
        </CompCard1>
        <CompCard2>
          <ButtonOverlay />
        </CompCard2>
        <CompCard3>
          <ButtonOverlay />
        </CompCard3>
        <CompCard4>
          <ButtonOverlay />
        </CompCard4>
      </Group>
      <Group1>
        <UserCard1>
          <ButtonOverlay />
        </UserCard1>
        <UserCard2>
          <ButtonOverlay />
        </UserCard2>
        <UserCard3>
          <ButtonOverlay />
        </UserCard3>
        <UserCard4>
          <ButtonOverlay />
        </UserCard4>
      </Group1>
      <CompHealthLabelRow>
        <CompHealthLabel>Health</CompHealthLabel>
        <CompBoostLabel>Boost</CompBoostLabel>
      </CompHealthLabelRow>
      <CompHealthValueRow>
        <CompHealthValue>12</CompHealthValue>
        <CompBoostValue>12</CompBoostValue>
      </CompHealthValueRow>
      <UserHealthValueRow>
        <UserHealthValue>12</UserHealthValue>
        <UserBoostValue>12</UserBoostValue>
      </UserHealthValueRow>
      <UserHealthLabelRow>
        <UserHealthLabel>Health</UserHealthLabel>
        <UserBoostLabel>Boost</UserBoostLabel>
      </UserHealthLabelRow>
      <Table />
    </>
  );
}

const Group = styled.div`
  width: 298px;
  height: 130px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 150px;
  margin-left: 39px;
  display: flex;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const CompCard1 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const CompCard2 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const CompCard3 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const CompCard4 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const Group1 = styled.div`
  width: 298px;
  height: 130px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 240px;
  margin-left: 39px;
  display: flex;
`;

const UserCard1 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const UserCard2 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const UserCard3 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const UserCard4 = styled.div`
  width: 68px;
  height: 130px;
  background-color: #e6e6e6;
  border: none;
`;

const CompHealthLabel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const CompBoostLabel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 178px;
`;

const CompHealthLabelRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: -572px;
  margin-left: 53px;
  margin-right: 67px;
`;

const CompHealthValue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const CompBoostValue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 202px;
`;

const CompHealthValueRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 65px;
  margin-right: 77px;
`;

const UserHealthValue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const UserBoostValue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 201px;
`;

const UserHealthValueRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 561px;
  margin-left: 65px;
  margin-right: 77px;
`;

const UserHealthLabel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const UserBoostLabel = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 178px;
`;

const UserHealthLabelRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-left: 60px;
  margin-right: 60px;
`;

const Table = styled.div`
  width: 298px;
  height: 199px;
  background-color: #e6e6e6;
  margin-top: -438px;
  margin-left: 39px;
`;

export default Untitled;
