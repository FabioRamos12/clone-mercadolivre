import React from "react";
import { Container, Wrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Product } from "../Product";

export function Layout() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
}
