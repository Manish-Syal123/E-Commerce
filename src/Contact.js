import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.386578225007!2d77.21462311500663!3d28.52809798245913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f4d9f62005%3A0x3aee569514ba9326!2sDLF%20Avenue%20Saket!5e0!3m2!1sen!2sin!4v1671645107839!5m2!1sen!2sin" 
    width="100%" 
    height="400" 
    style={{border: 0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xzbqpvob" 
        method="POST" 
        className="contact-inputs">
          <input 
          type="text" 
          placeholder="Enter your UserName" 
          name="username"
          required
          autoComplete="off"
          />

          <input 
          type="email" 
          placeholder="Enter your Email" 
          name="Email"
          required
          autoComplete="off"
          />

          <textarea 
          name="Message" 
          cols="30" 
          rows="10" 
          required 
          autoComplete="off" 
          placeholder="Enter your message here...."></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;
