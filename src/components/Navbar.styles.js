import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: linear-gradient(135deg, #F5E6CC, #B08968);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #3c3d3dff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #000000ff;
  text-shadow: 0 0 10px #3c3d3dff;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledLink = styled(Link)`
  color: #000000ff;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #000000ff;
    text-shadow: 0 0 10px #3c3d3dff;
  }
`;
