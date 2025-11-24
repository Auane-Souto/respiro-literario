import { Container, Title, Grid, Card, CardTitle, CardLink } from "./Projects.styles";

export default function Projects() {
  const projetos = [
    { title: "Produção 1", link: "#" },
    { title: "Produção 2", link: "#" },
    { title: "Produção 3", link: "#" },
  ];

  return (
    <Container>
      <Title>Projetos</Title>
      <Grid>
        {projetos.map((proj, index) => (
          <Card key={index}>
            <CardTitle>{proj.title}</CardTitle>
            <CardLink href={proj.link} target="_blank">Ver projeto</CardLink>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
