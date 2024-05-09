import { ContactContainer, ContactContent } from "./Contacts.styled";

export function Contacts() {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <h3>Contact me</h3>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <textarea rows={3} placeholder="Your message" />
        </form>
        <button>Send message</button>
      </ContactContent>
    </ContactContainer>
  );
}
