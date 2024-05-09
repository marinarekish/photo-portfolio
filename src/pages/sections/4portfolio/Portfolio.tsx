import { ChangeEvent, useState } from "react";
import { Categories, CategoryButton, Gallery, Photo, ImageDiv, Input, PortfolioContainer } from "./Portfolio.styled";
import { PortfolioItem, portfolioData } from "./portfolioData";

export function Portfolio() {
  const [activeItem, setActiveItem] = useState(PortfolioItem.ARCHITECTURE);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setActiveItem(event.target.value as PortfolioItem);
  }

  return (
    <PortfolioContainer id="portfolio">
      <h2>Portfolio</h2>
      <Categories>
        {Object.values(PortfolioItem).map((item) => (
          <div key={item}>
            <Input type="radio" id={item} name="category" onChange={handleChange} value={item}></Input>
            <CategoryButton htmlFor={item}>{item}</CategoryButton>
          </div>
        ))}
      </Categories>
      <Gallery>
        {portfolioData[activeItem].map((imgSrc) => (
          <ImageDiv key={imgSrc}>
            <Photo src={imgSrc} />
          </ImageDiv>
        ))}
      </Gallery>
    </PortfolioContainer>
  );
}
