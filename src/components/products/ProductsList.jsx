import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

import productsList from "../../db";
import { useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState(productsList);
  return (
    <Container className="py-4">
      <Row className="gy-4">
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsList;
