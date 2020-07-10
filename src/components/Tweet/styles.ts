import styled, { css } from 'styled-components';
import { MdRadio, MdFavorite, MdComment, MdShare } from './../../styles/Icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14 16px;

  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;
export const RocketseatIcon = styled(MdRadio)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;
export const Body = styled.div`
  display: flex;
  margin-top: 1px;
  padding: 8px;
  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 8px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: normal;
  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;
  @media (min-width: 330px) {
    width: 63%;
  }
`;
export const Status = styled.div`
  
  &:hover{
    opacity:.7;
  }
  display: flex;
  align-items: center;
  font-size:14px;
  cursor:pointer;
  > svg{
    margin-right:5px;
  }

  &:nth-child(1){
   &,> svg path{
     color:var(--gray);
   }
  }

  &:nth-child(2){
  &,> svg path{
    color:var(--retweet);
  }
 }

 &:nth-child(3){
  &,> svg path{
    color:var(--like);
  }
 }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
 
`;

export const CommentIcon = styled(MdComment)`
  ${iconCSS}
`;
export const RetweetIcon = styled(MdShare)`
  ${iconCSS}
`;
export const LikeIcon = styled(MdFavorite)`
  ${iconCSS}
`;
