import styled from "styled-components";

export const ContactContainer = styled.section`
  background-image: linear-gradient(to left, black 0%, transparent 70%), url("/img/images/contactImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 800px;
`;

export const ContactContent = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    color: #bdae82;
    font-size: 40px;
    line-height: 80px;
    text-align: center;
  }

  p {
    font-size: 18px;
    line-height: 40px;
  }

  h6 {
    margin-top: 30px;
    text-align: end;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  input,
  textarea {
    width: 350px;
    border: 2px solid #bdae82;
    padding: 5px 20px;
    background-color: #242424bf;

    font-size: 20px;
    line-height: 50px;
    color: #bdae82;
  }

  input::placeholder,
  textarea::placeholder {
    color: #bdae82;
    opacity: 0.6;
    font-family: "Inter";
  }
`;
