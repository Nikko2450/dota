export const Attributes = ({ portrait, amount }) => {
  return (
    <div className="attribut__details">
      <div className="attribut__wrapper">
        <div className="attribut__portrait">
          <img className="attribut__hero-img" src={portrait} />
          <div className="attribut__health">
            <p className="attribut__health-amount">{amount}</p>
            <p className="attribut__health-regeneration">
              +{data.attributes.health.regeneration}
            </p>
          </div>
          <div className="attribut__mana">
            <p className="attribut__mana-amount">
              {data.attributes.mana.amount}
            </p>
            <p className="attribut__mana-regeneration">
              +{data.attributes.mana.regeneration}
            </p>
          </div>
        </div>
        <div className="attribut__heros">
          <div className="attribut__hero">
            <img
              className="attribut__icon"
              src={`${url}/static/images/hero_strength.png`}
            />
            <p className="attribut__hero-amount">
              {data.attributes.strength.amount}
            </p>
            <p className="attribut__hero-per-level">
              +{data.attributes.strength.per_level}
            </p>
          </div>
          <div className="attribut__hero">
            <img
              className="attribut__icon"
              src={`${url}/static/images/hero_agility.png`}
            />
            <p className="attribut__hero-amount">
              {data.attributes.agility.amount}
            </p>
            <p className="attribut__hero-per-level">
              +{data.attributes.agility.per_level}
            </p>
          </div>
          <div className="attribut__hero">
            <img
              className="attribut__icon"
              src={`${url}/static/images/hero_intelligence.png`}
            />
            <p className="attribut__hero-amount">
              {data.attributes.intelligence.amount}
            </p>
            <p className="attribut__hero-per-level">
              +{data.attributes.intelligence.per_level}
            </p>
          </div>
        </div>
      </div>
      <p className="attribut__subtitle">attributes</p>
    </div>
  );
};
