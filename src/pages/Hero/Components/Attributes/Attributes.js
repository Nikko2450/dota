export const Attributes = ({
  portrait,
  healthAmount,
  healthRegeneration,
  manaAmount,
  manaRegeneration,
  strength,
  strengthAmount,
  strengthLevel,
  agility,
  agilityAmount,
  agilityLevel,
  intelligence,
  intelligenceAmount,
  intelligenceLevel,
}) => {
  return (
    <div className="attribut">
      <div className="attribut__wrapper">
        <div className="attribut__portrait">
          <img className="attribut__hero-img" src={portrait} />
          <div className="attribut__health">
            <p className="attribut__health-amount">{healthAmount}</p>
            <p className="attribut__health-regeneration">
              +{healthRegeneration}
            </p>
          </div>
          <div className="attribut__mana">
            <p className="attribut__mana-amount">{manaAmount}</p>
            <p className="attribut__mana-regeneration">+{manaRegeneration}</p>
          </div>
        </div>
        <div className="attribut__heros">
          <div className="attribut__hero">
            <img className="attribut__icon" src={strength} />
            <p className="attribut__hero-amount">{strengthAmount}</p>
            <p className="attribut__hero-per-level">+{strengthLevel}</p>
          </div>
          <div className="attribut__hero">
            <img className="attribut__icon" src={agility} />
            <p className="attribut__hero-amount">{agilityAmount}</p>
            <p className="attribut__hero-per-level">+{agilityLevel}</p>
          </div>
          <div className="attribut__hero">
            <img className="attribut__icon" src={intelligence} />
            <p className="attribut__hero-amount">{intelligenceAmount}</p>
            <p className="attribut__hero-per-level">+{intelligenceLevel}</p>
          </div>
        </div>
      </div>
      <p className="attribut__subtitle">attributes</p>
    </div>
  );
};
