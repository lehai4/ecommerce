import React from "react";
import {
  ContactInfo,
  ContactFeedBack,
  ContactFake,
  Grid,
  Helmet,
  Section,
  SectionBody,
  SectionTitle,
} from "../Common";
const Contact = () => {
  return (
    <Helmet title="Liên hệ">
      <div className="contact">
        <Section>
          <SectionTitle>Liên hệ</SectionTitle>
          <SectionBody>
            <Grid col={3} mdCol={2} smCol={1} gap={30}>
              {ContactFake.map((item, index) => (
                <ContactInfo key={index} {...item} />
              ))}
            </Grid>
          </SectionBody>
          <SectionBody>
            <Grid col={1} mdCol={1} smCol={1} gap={30}>
              <ContactFeedBack />
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};
export default React.memo(Contact);
