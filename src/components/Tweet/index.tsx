import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return <Container>
    <Retweeted>
      <RocketseatIcon/>
      você retweetou
    </Retweeted>
    <Body>
      <Avatar/>
      <Content>
        <Header>
          <strong>Tuamateka</strong>
          <span>@tuamateka</span>
          <Dot/>
          <time>27 de jun</time>
        </Header>
        <Description>A felicidade é aqui 🐓</Description>
        <ImageContent/>
        <Icons>
          <Status>
            <CommentIcon/>
            18
          </Status>
          <Status>
            <RetweetIcon/>
            39
          </Status>
          <Status>
            <LikeIcon/>
            233
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>;
}

export default Tweet;