import React from 'react';

import { Container,Avatar,Info,FollowButtom } from './styles';

interface IProps {
  name: string;
  nickname: string;
}
const FollowSugestion: React.FC<IProps> = ({ name, nickname }) => {
  return (
    <Container>
      <Info>
      <Avatar />
        <strong>{name}</strong>
        <span>{nickname}</span>
      </Info>
      <FollowButtom outlined>Seguir</FollowButtom>
    </Container>
  );
};

export default FollowSugestion;
