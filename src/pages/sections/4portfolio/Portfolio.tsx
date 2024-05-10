import { ChangeEvent, useState } from "react";
import { Categories, CategoryButton, Gallery, Photo, ImageDiv, Input, PortfolioContainer } from "./Portfolio.styled";
import { PortfolioItem, portfolioData } from "./portfolioData";

export function Portfolio() {
  const [activeItem, setActiveItem] = useState(PortfolioItem.ARCHITECTURE);

  const [expanded, setExpanded] = useState(false);
  const photosToShow = expanded ? portfolioData[activeItem] : portfolioData[activeItem].slice(0, 6);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setActiveItem(event.target.value as PortfolioItem);
    setExpanded(false);
  }

  return (
    <PortfolioContainer id="portfolio">
      <h2>Portfolio</h2>
      <hr />
      <Categories>
        {Object.values(PortfolioItem).map((item) => (
          <div key={item}>
            <Input
              checked={item === activeItem}
              type="radio"
              id={item}
              name="category"
              onChange={handleChange}
              value={item}
            ></Input>
            <CategoryButton htmlFor={item}>{item}</CategoryButton>
          </div>
        ))}
      </Categories>
      <Gallery>
        {photosToShow.map((imgSrc) => (
          <ImageDiv key={imgSrc}>
            <Photo src={imgSrc} />
          </ImageDiv>
        ))}
      </Gallery>
      <button onClick={() => setExpanded(!expanded)}>{expanded ? "Show Less" : "Show More"}</button>
    </PortfolioContainer>
  );
}
