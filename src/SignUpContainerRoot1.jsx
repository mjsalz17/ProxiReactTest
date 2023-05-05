import React from "react";
import styled from "styled-components";

export const SignUpContainerRoot1 = ({}) => {
  const ConfirmButtonWrapperFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const LinkedInAuthWrapperFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const SSOAuthWrapperFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SignUpContainerRoot>
      <SignUpBox>
        <Group>
          <Icon src="https://file.rendit.io/n/7QPhRZvGSY738wc5hqgc.svg" />
          <Icon1 src="https://file.rendit.io/n/69OXYuo5hfwylhpwyzkS.svg" />
          <Icon1 src="https://file.rendit.io/n/oe2doOUyFq9BZrpbiezB.svg" />
          <Icon3 src="https://file.rendit.io/n/fuYxPDsn476DOZ5FW7CZ.svg" />
          <Icon4 src="https://file.rendit.io/n/CPQY6oc0vyIuO16Zs2Qr.svg" />
        </Group>
        <SignUpOrLoginText>
          Sign up or login with your phone #
        </SignUpOrLoginText>
        <PhoneNumberInput>
          <PhoneInputWrapper>
            <CountryCode>+1</CountryCode>
          </PhoneInputWrapper>
          <PhoneNumber>123-456-7890</PhoneNumber>
        </PhoneNumberInput>
        <ConfirmButtonWrapper
          onClick={(e) =>
            ConfirmButtonWrapperFunction(e, "ConfirmButtonWrapper")
          }
        >
          <ConfirmButtonText>Confirm </ConfirmButtonText>
        </ConfirmButtonWrapper>
        <OrConnectUsingText>Or connect using </OrConnectUsingText>
        <LinkedInAuthWrapper
          onClick={(e) => LinkedInAuthWrapperFunction(e, "LinkedInAuthWrapper")}
        >
          <LinkedInAuthButtonWrapper>
            <LinkedInAuthButtonIcon src="https://file.rendit.io/n/gFsC18OGXxRx5drS2lXx.png" />
            <LinkedInAuthButtonText>Linkedin</LinkedInAuthButtonText>
          </LinkedInAuthButtonWrapper>
        </LinkedInAuthWrapper>
        <SSOAuthWrapper
          onClick={(e) => SSOAuthWrapperFunction(e, "SSOAuthWrapper")}
        >
          <SSOAuthButtonWrapper>
            <SSOAuthButtonInnerWrapper>
              <SSOAuthButtonIcon src="https://file.rendit.io/n/f3XzkLGawQZ5rfvUIGZ4.svg" />
              <SSOAuthButtonArrow src="https://file.rendit.io/n/pFo1COHQ2Yve5kE69wYN.svg" />
            </SSOAuthButtonInnerWrapper>
            <SSOAuthButtonText>SSO Sign in/up</SSOAuthButtonText>
          </SSOAuthButtonWrapper>
        </SSOAuthWrapper>
      </SignUpBox>
    </SignUpContainerRoot>
  );
};

const Icon1 = styled.img`
  width: 36px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const SignUpContainerRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 69px 0px 0px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #786cff;
  overflow: hidden;
`;
const SignUpBox = styled.div`
  width: 100%;
  position: relative;
  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 167px 30px 59px 30px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Group = styled.div`
  width: 173px;
  position: relative;
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 110px 0px;
  box-sizing: border-box;
`;
const Icon = styled.img`
  width: 36px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  align-self: center;
  box-sizing: border-box;
`;
const Icon3 = styled.img`
  width: 36px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  margin: 0px 4px 0px 0px;
  box-sizing: border-box;
`;
const Icon4 = styled.img`
  width: 9px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const SignUpOrLoginText = styled.div`
  position: relative;
  margin: 0px 0px 11px 0px;
  font-size: 13px;
  font-family: Poppins;
  line-height: 17px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PhoneNumberInput = styled.div`
  width: 330px;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 11px 0px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 23px 0px rgba(9, 44, 76, 0.1);
  overflow: hidden;
`;
const PhoneInputWrapper = styled.div`
  width: 50px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1px 0px;
  padding: 14px 15px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #000000;
  box-sizing: border-box;
`;
const CountryCode = styled.div`
  position: relative;
  font-family: Poppins;
  line-height: 20px;
  box-sizing: border-box;
`;
const PhoneNumber = styled.div`
  position: relative;
  color: #828282;
  font-family: Poppins;
  line-height: 20px;
  box-sizing: border-box;
`;
const ConfirmButtonWrapper = styled.button`
  width: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 75px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 61px;
  padding-bottom: 16px;
  padding-left: 61px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #ff5a5f;
  overflow: hidden;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const ConfirmButtonText = styled.div`
  position: relative;
  color: #ffffff;
  font-weight: 600;
  font-family: Poppins;
  line-height: 20px;
  white-space: pre-wrap;
  box-sizing: border-box;
`;
const OrConnectUsingText = styled.div`
  position: relative;
  color: #c4c4c4;
  font-size: 13px;
  font-family: Poppins;
  line-height: 17px;
  text-align: center;
  white-space: pre-wrap;
  box-sizing: border-box;
`;
const LinkedInAuthWrapper = styled.button`
  width: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 4px 0px;
  padding: 0px;
  padding-right: 22px;
  padding-left: 22px;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const LinkedInAuthButtonWrapper = styled.div`
  width: 146px;
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 11px 40px 11px 32px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #0077b5;
`;
const LinkedInAuthButtonIcon = styled.img`
  width: 21px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  box-sizing: border-box;
`;
const LinkedInAuthButtonText = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 11px;
  font-family: Poppins;
  line-height: 17px;
  box-sizing: border-box;
`;
const SSOAuthWrapper = styled.button`
  width: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  padding-right: 22px;
  padding-left: 22px;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const SSOAuthButtonWrapper = styled.div`
  width: 146px;
  position: relative;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 19px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #bdbdbd;
`;
const SSOAuthButtonInnerWrapper = styled.div`
  width: 14px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px 4px 4px 4px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Z3DazprcRB05mtDVnMck.svg");
`;
const SSOAuthButtonIcon = styled.img`
  width: 4px;
  min-width: 0px;
  height: 4px;
  min-height: 0px;
  left: 2px;
  top: 5px;
  position: absolute;
  box-sizing: border-box;
`;
const SSOAuthButtonArrow = styled.img`
  width: 6px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const SSOAuthButtonText = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 11px;
  font-family: Poppins;
  line-height: 17px;
  white-space: nowrap;
  box-sizing: border-box;
`;
