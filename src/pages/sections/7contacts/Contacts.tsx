import { ContactContainer, ContactContent } from "./Contacts.styled";

export function Contacts() {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <p>Ready to book your session?</p>
        <h3>Contact me</h3>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <textarea rows={3} placeholder="Your message" />
        </form>
        <button>Send message</button>
        <h6>
          Please note that this section is currently not working <br />
          Stay tuned for our updated contact form!
        </h6>
      </ContactContent>
    </ContactContainer>
  );
}
