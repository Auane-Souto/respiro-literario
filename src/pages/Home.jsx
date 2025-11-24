import { Container, Title, Subtitle, Button } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <Title>Respiro literário</Title>
      <Subtitle>
       “Entre palavras e silêncios, nasce o respiro que transforma vida em literatura.”
      </Subtitle>
      <Button href="/projects">Produções</Button>
    </Container>
  );
}
