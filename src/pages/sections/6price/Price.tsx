import { PriceContainer } from "./Price.styled";
import { PriceCard } from "./PriceCard";

export function Price() {
  return (
    <PriceContainer id="price">
      <h2>Price</h2>
      <hr />
      <PriceCard />
    </PriceContainer>
  );
}
