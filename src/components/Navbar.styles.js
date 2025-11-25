import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: linear-gradient(135deg, #F5E6CC, #b08968ff);
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

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    padding: 1rem;

    opacity: ${({ open }) => (open ? 1 : 0)};
    transform: ${({ open }) =>
      open ? "translateY(0)" : "translateY(-10px)"};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: all 0.3s ease-in-out;

    display: ${({ open }) => (open ? "flex" : "flex")};
  }
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

export const Hamburguer = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
