import React from 'react';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import StickyBox from 'react-sticky-box';
import News from '../News';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Diego Fernades" nickname="@diego3g" />,
              <FollowSugestion name="Edilson Vanil" nickname="@edvanil" />,
              <FollowSugestion name="Solange Mateus" nickname="@sfmateus" />,
              <FollowSugestion name="Jonny Mateus" nickname="@Jonny" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
