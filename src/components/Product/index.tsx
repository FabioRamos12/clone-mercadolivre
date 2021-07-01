import React from "react";

import {
  Container,
  Row,
  Painel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtImage from "../../assets/tshirt.png";
import { SellerInfo } from "../SellerInfo";
import { ProductAction } from "../ProductAction";

export function Product() {
  return (
    <Container>
      <Row>
        <a href="">Compartilhar</a>
        <a href="">Vender um igual</a>
      </Row>

      <Painel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Painel>
    </Container>
  );
}

function WarrantySection() {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Fabio Ramos</p>
          <p className="description">
            Receba o produto que esta esperando ou devolvemos o seu dinheiro
          </p>
        </span>

        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">sem garatia</p>
        </span>
      </div>

      <a href="">Saiba mais sobre garantia</a>
    </Section>
  );
}

function Info() {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchange
        <br />
        <br />
        Itens inclusos: <br />
        - 1x Calça <br />
        - 1x Calça <br />
        - 1x Calça <br />
        - 1x Calça <br />
        <br />
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchange
      </p>
    </Description>
  );
}
