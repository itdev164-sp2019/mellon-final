// import React from "react"
// import styled from "styled-components"

// const Contact = () => (
//   <Section1 id="Contact">
//     <Div1>
//       <P1>Let's Connect!</P1>
//       <br />
//       <br />
//       <P2>Michael James Mellon</P2>
//       <P3>Web Developer</P3>
//     </Div1>
//     <Div2 id="emailForm">
//       <Form1
//         id="contact-form"
//         action="mailto:michaeljmellon@gmail.com"
//         method="POST"
//       >
//         <Input1
//           id="firstName"
//           type="text"
//           name="First Name"
//           placeholder="First Name..."
//           required
//         />
//         <Input1
//           id="lastName"
//           type="text"
//           name="Last Name"
//           placeholder="Last Name..."
//           required
//         />
//         <Input1
//           id="email"
//           type="email"
//           name="Email"
//           placeholder="Email..."
//           required
//         />
//         <Textarea1
//           id="messageBox"
//           type="text"
//           name="Message"
//           placeholder="Message"
//           required
//         />
//         <Button1 id="send" type="submit" value="Send">
//           Send
//         </Button1>
//       </Form1>
//     </Div2>
//   </Section1>
// )

// const Section1 = styled.section`
//   color: white;
//   height: 90%;
//   padding: 4rem 0;
//   background: rgba(29, 104, 145, 0.5);
//   background-size: cover;
//   text-align: center;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   justify-items: center;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr auto;
//     alight-items: center;
//     align-content: center;
//   }
// `

// const Div1 = styled.div`
//   background: rgba(0, 0, 0, 0.3);
//   border-radius: 10px 150px;
//   padding: 6rem;

//   @media (max-width: 768px) {
//     margin-bottom: 4rem;
//   }
//   @media (max-width: 375px) {
//     margin: 1rem;
//   }
// `

// const Div2 = styled.div``

// const Form1 = styled.form`
//     display: grid;
//     justify-content: center;
//     grid-gap: 0.8rem;

//     @media (max-width: 768px) {
//         1fr;
//     }
// `

// const Img1 = styled.img`
//   width: 25%;
//   border-radius: 50%;
//   border: 5px double white;

//   @media (max-width: 375px) {
//     width: 50%;
//   }
// `

// const Input1 = styled.input`
//   font-size: 1.5rem;
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 5px;
//   font-family: sans-serif;
//   justify-self: center;
// `

// const Textarea1 = styled.textarea`
//   font-size: 1.5rem;
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 5px;
//   font-family: sans-serif;
//   justify-self: center;
// `

// const P1 = styled.p`
//   font-size: 3.4rem;
//   font-family: sans-serif;
//   margin: 0;
// `

// const P2 = styled.p`
//   font-size: 2.5rem;
//   font-family: sans-serif;
//   margin: 0;
// `
// const P3 = styled.p`
//   font-size: 1.75rem;
//   font-family: sans-serif;
//   margin: 0;
// `

// const Button1 = styled.button`
//   width: 50%;
//   border-radius: 5px;
//   font-family: sans-serif;
//   font-size: 1.4rem;
//   padding: 0.5rem;
//   margin: 0 auto;
//   transition: all ease 0.2s;
//   &:hover {
//     color: white;
//     background: #444444;
//     border-radius: 10px;
//     border: 1px solid #82bdfa;
//     box-shadow: 0 0 5px #82bdfa;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `

// export default Contact
