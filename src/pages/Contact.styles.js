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
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #3c3d3dff;
  border-radius: 8px;
  background: #B08968;
  color: #000000ff;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #3c3d3dff;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #3c3d3dff;
  border-radius: 8px;
  background: #B08968;
  color: #000000ff;
  font-size: 1rem;
  min-height: 120px;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #3c3d3dff;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #000000ff;
  color: #000000ff;
  padding: 0.8rem;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #B08968;
    color: #0a0f1c;
    box-shadow: 0 0 20px #3c3d3dff;
  }
`;
