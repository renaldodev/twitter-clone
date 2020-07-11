import styled, { css } from 'styled-components';
import {
  MdExitToApp,
  MdRadio,
  MdHome,
  MdEmail,
  MdFavoriteBorder,
  MdPerson,
  MdNotifications,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(MdRadio)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  > span {
    display: none;
  }

  @media (min-width: 1200px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right:15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child{
    margin-top:33px;
    width:40px;
    height:40px;

    > span{
      display:none;
    }

    @media (min-width:1200px){
      width:100%;
      height:unset;

      > span{
        display:inline;
      }
    }
  }

  cursor:pointer;
  border-radius:25px;
  &:hover{
    background:var(--twitter-dark-hover);
  }

  &.active,&:hover{
    span,svg{
      color:var(--twitter);
      fill:var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  fill: var(--white);
`;

export const HomeIcon = styled(MdHome)`
  ${iconCSS}
`;
export const BellIcon = styled(MdNotifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(MdEmail)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(MdFavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(MdPerson)`
  ${iconCSS}
`;

export const Botside=styled.div`
  margin-top:20px;
  display:flex;
  align-items:center;
`;
export const Avatar=styled.div`
width:39px;
height:39px;
background:var(--gray);
flex-shrink:0;
border-radius:50%;
`;
export const ProfileData=styled.div`
 display:none;
 @media (min-width:1200px){
   display:flex;
   flex-direction:column;
   margin-left:10px;
   font-size:14px;

   > span{
     color:var(--gray);
   }
 }
`;

export const ExitIcon = styled(MdExitToApp)`
   display:none;

   @media (min-width:1200px){
     display:inline-block;
     width:25px;
     height:25px;
     margin-left:30px;
     color:var(--white);
     cursor:pointer;
     &:hover{
       > path{
         fill:var(--like);
       }
     }
   }
`;
