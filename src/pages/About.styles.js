import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5E6CC, #B08968);
  color: #000000ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #000000ff;
  text-shadow: 0 0 15px #3c3d3dff;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #000000ff;
  max-width: 800px;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const Highlight = styled.span`
  color: #4e3c2cff;
  font-weight: bold;
`;
