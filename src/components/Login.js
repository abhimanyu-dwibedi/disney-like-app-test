import React from "react";

import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
          <Signup>experience all at one platform</Signup>
          <Discreption>
            The Walt Disney Company, commonly just Disney, is an American
            multinational entertainment and media conglomerate headquartered at
            the Walt Disney Studios complex in Burbank, California. Wikipedia
          </Discreption>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='' />
        </CTA>
        <BigImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  margin-top: 70px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  weidth: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  align-items: center;
  flex=direction: column;
  padding: 80px 40px;
  height: 100%;
  justify-content: center;
  display: flex;
`;
const BigImage = styled.div`
  background-size: cover;
  position: absolute;
  background-position: top;
  background-repeat: no-repeat;

  position: absolute;
  height: 100%;
  z-index: -1;
  display: flex;
  top: 0;
  right: 0;
  left: 0;

  background-image: url("/images/loginbg.jpg");
`;
const CTA = styled.div`
  //   margin-bottom: 2vw;
  //   max-width: 650px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   margin-top: 0;
  //   align-items: center;
  //   text-align: center;
  //   margin-right: auto;
  //   margin-left: auto;
  //   transition-timing-function: ease-out;
  //   transition: opacity 0.2s;
  //   width: 100%;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 25px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Discreption = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
