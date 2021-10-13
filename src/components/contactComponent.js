import React from "react"
import styled from "styled-components"
import Button from "../styles/Button"

//SVGs
import Resume from "../assets/resume.svg"
import Email from "../assets/email.svg"
import Socials from "../assets/socials.svg"
import Map from "../assets/map.svg"

const ContactMain = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: center;
`

const ContactHeader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
  margin-bottom: 10rem;
`

const ContactGrid = styled.div`
  display: grid;
  grid-column: full-start/full-end;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 10rem;
  align-items: start;
  justify-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const ContactGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 650px) {
    width: 60%;
    border-bottom: 1px solid #fff;
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`

const ContactHeading = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 5rem;
`

const ContactText = styled.p`
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;
`

const ContactComponent = () => (
  <>
    <ContactHeader>
      <ContactMain>Contact</ContactMain>
    </ContactHeader>
    <ContactGrid>
      <ContactGridItem>
        <ContactHeading>Download My CV</ContactHeading>
        <Resume width="20rem" height="20rem" style={{ marginBottom: "5rem" }} />
        <Button
          as="a"
          href="https://drive.google.com/file/d/1UDmyVvqxYn96WXZO9vIT5OXDR09NXJac/view?usp=sharing"
        >
          Download now!
        </Button>
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>
          Email me at <br></br>felixnagel105@gmail.com
        </ContactHeading>
        <Email width="20rem" height="20rem" />
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>Let's connect on LinkedIn</ContactHeading>
        <Socials
          width="20rem"
          height="20rem"
          style={{ color: "#fff", marginBottom: "5rem" }}
        />
        <Button as="a" href="https://www.linkedin.com/in/fenagel/">
          Connect!
        </Button>
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>I'm located in Berlin</ContactHeading>
        <Map width="20rem" height="20rem" />
      </ContactGridItem>
    </ContactGrid>
  </>
)

export default ContactComponent
