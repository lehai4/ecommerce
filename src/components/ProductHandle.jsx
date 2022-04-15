import { Section, SectionBody, Grid, ProductCart, FakeButton } from "../Common";
import { useState, useEffect, useRef, Fragment } from "react";
import clsx from "clsx";
const ProductHanlde = (props) => {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState(null);
  const [active, setActive] = useState(1);
  const refInput = useRef(null);
  const products = props.product;

  const handleCategoryChange = (type = null, act) => {
    setCategory(type);
    setActive(act);
  };
  useEffect(() => {
    setProduct(products);
  }, [products]);
  useEffect(() => {
    if (category) {
      let result = products.filter((item) => {
        return (
          item.category === category || item.category.search(category) !== -1
        );
      });
      setProduct(result);
    } else {
      setProduct(products);
    }
  }, [category]);

  const handleSearchProduct = () => {
    if (value === "") {
      alert("Vui lòng nhập sản phẩm !!");
      refInput.current.focus();
    }
    let result = products.filter((item) => {
      return item.category.toUpperCase().includes(value.toUpperCase());
    });
    setProduct(result);
    refInput.current.focus();
  };

  return (
    <Fragment>
      <Section>
        <SectionBody>
          <Grid col={12} mdCol={2} smCol={1} gap={20}>
            <div className="btn__ref">
              {FakeButton.map((item, i) => (
                <button
                  className={clsx(
                    `btn btn__ref__all`,
                    `${active === item.id ? "btn__ref__all--active" : ""}`
                  )}
                  key={i}
                  onClick={() =>
                    handleCategoryChange(
                      item.name !== "all" ? item.name : null,
                      item.id
                    )
                  }
                >
                  <span>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                </button>
              ))}
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Tìm kiếm"
                onChange={(e) => setValue(e.target.value)}
                ref={refInput}
              />
              <button className="search__btn btn" onClick={handleSearchProduct}>
                Tìm
              </button>
            </div>
          </Grid>
        </SectionBody>
      </Section>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {product.map((item) => (
            <ProductCart key={item.id} data={item} />
          ))}
        </Grid>
      </SectionBody>
    </Fragment>
  );
};
export default ProductHanlde;
