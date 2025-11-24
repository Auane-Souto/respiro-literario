import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5E6CC, #B08968);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #000000ff;
  text-shadow: 0 0 15px #3c3d3dff;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000000ff;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Button = styled.a`
  background: transparent;
  border: 2px solid #3c3d3dff;
  color: #000000ff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #5f4f43ff;
    color: #0a0f1c;
    box-shadow: 0 0 20px #3c3d3dff;
  }
`;
