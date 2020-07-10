import styled ,{css} from 'styled-components';
import { MdArrowBack,MdHome,MdSearch,MdNotifications,MdEmail} from './../../styles/Icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  background:var(--primary);

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    display: flex;
    place-content: center;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(MdArrowBack)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const ButtomMenu = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  z-index:2;

  background:var(--primary);
  width:100%;
  border-top:1px solid var(--outline);

  display:flex;
  justify-content:space-between;
  padding: 8px min(46px,max(10vw,10px));

  @media(min-width:500px){
    display:none;
  }
`;

const iconCss=css`
   width:31px;
   width:31px;
   fill:var(--gray);
   cursor:pointer;

   &:hover,
   &.active{
     fill:var(--twitter)
   }
`;

export const HomeIcon = styled(MdHome)`
   ${iconCss}
`;
export const SearchIcon = styled(MdSearch)`
  ${iconCss}
`;
export const BellIcon = styled(MdNotifications)`
  ${iconCss}
`;
export const EmailIcon = styled(MdEmail)`
  ${iconCss}
`;
