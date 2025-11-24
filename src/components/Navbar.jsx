import { Nav, Logo, NavLinks, StyledLink } from "./Navbar.styles";

export default function Navbar() {
  return (
    <Nav>
      <Logo>Respiro literário</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">Sobre</StyledLink>
        <StyledLink to="/projects">Projetos</StyledLink>
        <StyledLink to="/contact">Contato</StyledLink>
      </NavLinks>
    </Nav>
  );
}
