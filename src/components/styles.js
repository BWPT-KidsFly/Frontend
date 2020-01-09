import styled from 'styled-components';

export const SignUpHeader = styled.div`
   width: 35%;
   margin: 0 auto;
   margin-bottom: 50px;
   text-align: center;
`;

export const RedirectWrap = styled.div`
   width: 35%;
   margin: 0 auto;
   margin-top: 50px;
   text-align: center;
`;

export const SignUpWrapper = styled.div`
   width: 35%;
   margin: 0 auto;
`;

export const LogInWrapper = styled.div`
   width: 20%;
   margin: 0 auto;
`;

export const SubmitWrapper = styled.div`
   margin-top: 20px;
   width: 70%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const SubmitBtn = styled.button`
   height: 40px;
   width: 40%;
   
   border-radius: 7px;
   background: gray;
   box-shadow: 0px 0px 0px transparent;
   border: 0px solid transparent;
   text-shadow: 0px 0px 0px transparent;
   color: white;
   background-color: #1653b5;
   font-size: 1rem;
   &:hover {
      cursor: pointer;
   }
`;

export const LogInBtn = styled.button`
   height: 40px;
   width: 80px;
   border-radius: 7px;
   background: gray;
   box-shadow: 0px 0px 0px transparent;
   border: 0px solid transparent;
   text-shadow: 0px 0px 0px transparent;
   color: white;
   background-color: #1653b5;
   font-size: 1rem;
   &:hover {
      cursor: pointer;
   }
`;

export const halfWidth = {
   width: '45%',
   height: '35px',
   marginTop: '20px',
}

export const fullWidth = {
   width: '95%',
   height: '35px',
   marginTop: '20px',
}

export const formFlex = {
   boxSizing: 'border-box',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   flexWrap: 'wrap',
}

export const btnFlex = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
}

export const logInAsFlex = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-evenly',
   marginBottom: '30px',
}