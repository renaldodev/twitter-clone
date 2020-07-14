import React from 'react';

import { Container,Item,Title } from './styles';

interface IProps {
  title: string;
  elements: Array<React.ReactNode>;
}

const List: React.FC<IProps> = ({title,elements}) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      {elements.map((element,index)=>(
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
