import { ChangeEvent, useState } from "react";
import { Categories, CategoryButton, Gallery, Photo, ImageDiv, Input, PortfolioContainer } from "./Portfolio.styled";
import { PortfolioItem, portfolioData } from "./portfolioData";

export function Portfolio() {
  const [activeItem, setActiveItem] = useState(PortfolioItem.WINTER);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setActiveItem(event.target.value as PortfolioItem);
  }

  return (
    <PortfolioContainer>
      <h2>Portfolio</h2>
      <Categories>
        {Object.values(PortfolioItem).map((item) => (
          <CategoryButton key={item} htmlFor={item}>
            {item}
            <Input type="radio" name="category" onChange={handleChange} value={item}></Input>
          </CategoryButton>
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
