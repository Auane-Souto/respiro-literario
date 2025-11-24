import { Container, Title, Text, Highlight } from "./About.styles";

export default function About() {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <Text>
        Quem nós somos:
        Duas amigas que, desde a infância, trilham juntas a busca pelos seus sonhos. 
        Ao encontrar suas paixões — <Highlight>a programação e a escrita</Highlight> — resolvemos uni-las e criar um acervo onde as nossas produções serão disponibilizadas. Nosso objetivo é que cada uma siga sua área, mas que ambas realizem um projeto em conjunto.
        Com muito amor, carinho e cumplicidade,
        A e N
      </Text>
      
    </Container>
  );
}
