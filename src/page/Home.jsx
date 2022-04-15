import { memo } from "react";
import {
  Helmet,
  Slider,
  policy,
  Section,
  SectionBody,
  SectionTitle,
  Grid,
  Policy,
  ProductCart,
  IntroDuce,
} from "../Common";
const Home = ({ data }) => {
  return (
    <Helmet title="Trang chủ">
      <Slider />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {policy.map((item, index) => (
              <Policy
                key={index}
                name={item.name}
                icon={item.icon}
                title={item.description}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Men's Clothing</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {data.map((item) => {
              if (item.category === "men's clothing")
                return <ProductCart key={item.id} data={item} />;
            })}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Women's Clothing</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {data.map((item) => {
              if (item.category === "women's clothing") {
                return <ProductCart key={item.id} data={item} />;
              }
            })}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Electronics</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {data.map((item) => {
              if (item.category === "electronics")
                return <ProductCart key={item.id} data={item} />;
            })}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Jewelery</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {data.map((item) => {
              if (item.category === "jewelery")
                return <ProductCart key={item.id} data={item} />;
            })}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <IntroDuce />
        </SectionBody>
      </Section>
    </Helmet>
  );
};
export default memo(Home);
