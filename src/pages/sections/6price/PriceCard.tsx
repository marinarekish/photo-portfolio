import { Card, Prices } from "./Price.styled";
import { prices } from "./priceData";

export function PriceCard() {
  return (
    <Prices>
      {prices.map((price) => (
        <Card key={price.title}>
          <h3>{price.title}</h3>
          <p>{price.price}</p>
          <ul>
            {price.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <a href="#contact">
            <button>Order shooting</button>
          </a>
        </Card>
      ))}
    </Prices>
  );
}
