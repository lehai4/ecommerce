import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Helmet,
  ProductCart,
  ProductView,
  Section,
  SectionBody,
  SectionTitle,
} from "../Common";
const Product = ({ ...rest }) => {
  const { slug } = useParams();
  const product = rest.getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Related Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {rest.getProducts(4).map((item) => (
              <ProductCart key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
