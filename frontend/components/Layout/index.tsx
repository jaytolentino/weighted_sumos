import * as React from 'react';
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Content,
  Main,
} from '@zendeskgarden/react-chrome';

import { ReactComponent as ProductIcon } from 'icons/26/bot-generic.svg';

import { StyledLayoutChildrenDiv } from './styles';

// Wrap Zendesk Garden's Chrome component to provide a base layout for all pages
const Layout: React.FC = ({ children }) => {

  return (
    <Chrome isFluid>
      <Body>
        <Header isStandalone>
          <HeaderItem hasLogo>
            <HeaderItemIcon>
              <ProductIcon />
            </HeaderItemIcon>
            <HeaderItemText>Zendesk Garden</HeaderItemText>
          </HeaderItem>
        </Header>
        <Content>
          <Main>
            <StyledLayoutChildrenDiv>
              {children}
            </StyledLayoutChildrenDiv>
          </Main>
        </Content>
      </Body>
    </Chrome>
  );
};

export default Layout;