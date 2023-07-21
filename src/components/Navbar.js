import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SCHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
const SCImg = styled.img`
  width: 90px;
  margin-left: 100px;
`;
const SCNav = styled.nav`
  text-decoration: none;
  margin-right: 5px;
  border: 3px solid black;
  padding: 5px;
  font-weight: 600;
  display: inline-block;
  background-color: orange;
`;
const SCNav1 = styled.nav`
  text-decoration: none;
  border: 3px solid black;
  padding: 5px;
  font-weight: 600;
  display: inline-block;
  background-color: orange;
`;
const SCNavCerceve = styled.div`
  margin-right: 100px;

  @media screen and (max-widt: 600px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export default function Header() {
  return (
    <>
      <SCHeader>
        <SCImg src="https://st2.depositphotos.com/1588812/6826/v/950/depositphotos_68261337-stock-illustration-vector-logo-slice-of-pizza.jpg" />
        <h1>PIZZA</h1>
        <SCNavCerceve>
          <SCNav>
            <Link to="/">Anasayfa</Link>
          </SCNav>
          <SCNav1>
            <Link to="/pizza">Sipariş Formu</Link>
          </SCNav1>
        </SCNavCerceve>
      </SCHeader>
    </>
  );
}
