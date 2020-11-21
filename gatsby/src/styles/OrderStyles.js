import styled from 'styled-components';

const OrderStyles = styled.form`
  display: block;
  grid-template-columns: 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: center;
  }
  h2 {
    text-align: center;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    resize: none;
  }
  margin-right: 10%;
  margin-left: 10%;
`;

export default OrderStyles;
