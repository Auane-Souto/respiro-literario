import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5E6CC, #B08968);
  color: #000000ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #000000ff;
  text-shadow: 0 0 15px #3c3d3dff;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
`;

export const Card = styled.div`
  background: #B08968;
  border: 1px solid #3c3d3dff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #3c3d3dff;
  }
`;

export const CardTitle = styled.h3`
  color: #000000ff;
  margin-bottom: 1rem;
`;

export const CardLink = styled.a`
  color: #000000ff;
  font-weight: bold;
  &:hover {
    color:  #0a0f1c;
    text-shadow: 0 0 10px #3c3d3dff;
  }
`;
