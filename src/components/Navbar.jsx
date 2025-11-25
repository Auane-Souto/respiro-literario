import { useState } from "react";
import { Nav, Logo, NavLinks, StyledLink, Hamburguer } from "./Navbar.styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo>Respiro literário</Logo>
      <Hamburguer onClick={() => setOpen(!open)}>
         ☰
      </Hamburguer>
      <NavLinks open={open}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">Sobre</StyledLink>
        <StyledLink to="/projects">Projetos</StyledLink>
        <StyledLink to="/contact">Contato</StyledLink>
      </NavLinks>
    </Nav>
  );
}
