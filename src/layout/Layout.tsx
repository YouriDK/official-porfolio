import React from 'react';
import { Container } from './Layout.style';

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
