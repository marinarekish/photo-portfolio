import styled from "styled-components";

export const ContactContainer = styled.section`
  background-image: linear-gradient(to left, black 0%, transparent 70%), url("/img/images/contactImage.jpg");
  background-repeat: no-repeat;
  background-position: 35% 65%;
  background-size: cover;

  height: 800px;

  display: flex;

  @media (max-width: 768px) {
    background-position: 35% 65%;
  }

  @media (max-width: 386px) {
    background-position: 35% 65%;
  }

  .null {
    width: 60%;
    height: 100%;
  }
`;

export const ContactContent = styled.div`
  width: 50%;
  align-self: flex-end;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #242424bf;
  height: 800px;

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

  @media (max-width: 768px) {
    padding: 20px;

    p {
      font-size: 16px;
      line-height: 26px;
    }

    h3 {
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 10px;
    }

    input,
    textarea {
      width: 250px;
      font-size: 18px;
      line-height: 30px;
    }
  }

  @media (max-width: 386px) {
    top: 25%;

    p {
      font-size: 14px;
      line-height: 24px;
    }

    input,
    textarea {
      width: 220px;
      font-size: 18px;
      line-height: 30px;
    }

    button {
      width: 170px;
      padding: 5px;
      font-size: 16px;
    }
  }
`;
