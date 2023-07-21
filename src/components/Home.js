import React from "react";
import styled from "styled-components";
import Stores from "./Stores";
import fakeStores from "./fakeData";
import { Link } from "react-router-dom";
const SCSection = styled.section`
  background-image: url("https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000");
  height: 400px;
  width: 100%;
  text-align: center;
  background-repeat: no-repeat;
  bacground-size: auto;
  justify-content: center;
`;
const SCButton = styled.button`
  margin-top: 175px;
  display: inline-block;
  text-align: center;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  background: orange;
  border-radius: 40px;
  padding: 20px;

  &:hover {
    font-size: 20px;
    padding: 15px;
    background: white;
    color: black;
  }
`;
const SCFood = styled.h3`
  margin-top: 20px;
  text-align: center;
`;
const SCStoresDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home(props) {
  // clickButton sipariş formu sayfasına yönlendiriyor.
  const { clickButton } = props;
  return (
    <>
      <SCSection>
        <SCButton onClick={clickButton} data-cy="home-button">
          <h1> Acıktım</h1>
          <Link to="/pizza"></Link>
        </SCButton>
      </SCSection>
      <SCFood>Şehirdeki Başka Restoranlar </SCFood>
      <SCStoresDiv>
        {fakeStores.map((event) => (
          <Stores fakeStores={event} />
        ))}
      </SCStoresDiv>
    </>
  );
}
