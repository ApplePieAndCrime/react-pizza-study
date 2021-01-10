import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    className="pizza-block"
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="138" cy="135" r="125" />
    <rect x="1" y="273" rx="3" ry="3" width="280" height="26" />
    <rect x="0" y="322" rx="6" ry="6" width="280" height="84" />
    <rect x="5" y="438" rx="3" ry="3" width="68" height="28" />
    <rect x="128" y="431" rx="20" ry="20" width="146" height="43" />
  </ContentLoader>
);

export default PizzaBlockPlaceholder;
