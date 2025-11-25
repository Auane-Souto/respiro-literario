import { Container, Title, Form, Input, TextArea, Button } from "./Contact.styles";

export default function Contact() {
  return (
    <Container>
      <Title>Mande idéias</Title>
      <Form>
        <Input type="text" placeholder="Seu nome" required />
        <Input type="email" placeholder="Seu e-mail" required />
        <TextArea placeholder="Sua mensagem" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
