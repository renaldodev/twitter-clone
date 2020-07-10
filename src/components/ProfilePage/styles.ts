import styled,{css} from 'styled-components';
import { MdLocationOn, MdFavoriteBorder } from '../../styles/Icons';
import Button from './../Button';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow-y: auto;

  scrollbar-width: none; /**firefox*/
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`
  position: absolute;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: max(calc(7.5vw + 7px), 26px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;

  > h1 {
    font-weight: bolder;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);
      display:flex;
      align-items:center;

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS=css`
  width:20px;
  height:20px;
`;

export const LocationIcon = styled(MdLocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(MdFavoriteBorder)`
   ${iconCSS}
`;

export const Followage = styled.div`
  display:flex;

  > span{
    font-size:15px;
    color:var(--gray);  

    & + span{
      margin-left:20px;
    }
  }
`;

export const EditButton=styled(Button)`
  position:absolute;
  top:2vw;
  right:7px;

  padding:4px 16px;
  font-size:13px;

  @media(min-width:320px){
    top:10px;
    padding:10px 19px;
    font-size:15px;
  }
`;