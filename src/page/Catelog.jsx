import React from "react";
import { Helmet, Section, SectionBody, ProductHandle, Banner } from "../Common";
import banner from "../banner.png";

const Catelog = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet title="catelog">
        <Banner img={banner} alt="" marginBottom={50} />
        <Section>
          <SectionBody>
            <ProductHandle product={data} />
          </SectionBody>
        </Section>
      </Helmet>
    </React.Fragment>
  );
};
export default React.memo(Catelog);
