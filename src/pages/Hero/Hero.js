import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";

const url = "http://192.168.0.100:8080";

export const Hero = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);

  const getSrcByHeroType = () => {
    switch (data.primary_stat) {
      case "Universal":
        return `${url}/static/images/hero_universal.png`;

      case "Strength":
        return `${url}/static/images/hero_strength.png`;

      case "Intelligence":
        return `${url}/static/images/hero_intelligence.png`;

      case "Agility":
        return `${url}/static/images/hero_agility.png`;

      default:
        return "";
    }
  };

  useEffect(() => {
    fetch(`${url}/v1/all/hero/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setData(value);
      })
      .catch((message) => {
        setError(message);
      });
  }, []);

  return (
    data && (
      <div className="hero">
        <Container>
          <div className="hero__wrapper">
            <div className="hero__info">
              <div className="hero__primary-stat-wrapper">
                <img
                  className="hero__primary-stat-icon"
                  src={getSrcByHeroType()}
                />
                <p className="hero__primary-stat paragraph">
                  {data.primary_stat}
                </p>
              </div>
              <h2 className="hero__name paragraph">{data.hero_name}</h2>
              <p className="hero__short-description">
                {data.short_description}
              </p>
              <p className="hero__text">{data.description}</p>
              <h3 className="hero__attack-title">attack type</h3>
              <div className="hero__attack-wrapper">
                <img
                  className="hero__attack-img"
                  src={
                    data.attack_type === "Melee"
                      ? `${url}/static/images/melee.svg`
                      : "/icon/ranged.svg"
                  }
                  alt="melee"
                />
                <p className="hero__attack-type">{data.attack_type}</p>
              </div>
              <h3 className="hero__complexity-title">complexity</h3>
              <div className="hero__complexity-wrapper">
                <span
                  className={`hero__complexity ${
                    data.complexity === 1 ? "complexity" : ""
                  }`}
                ></span>
                <span
                  className={`hero__complexity ${
                    data.complexity > 1 ? "complexity" : ""
                  }`}
                ></span>
                <span
                  className={`hero__complexity ${
                    data.complexity === 3 ? "complexity" : ""
                  }`}
                ></span>
              </div>
            </div>
            <div className="hero__wrapper-video">
              <video
                className="hero__video"
                src={`${url}/static/videos/${data.video}`}
                muted
                loop
                autoPlay
              />
            </div>
          </div>
          <div className="hero__wrapper-lore">
            <h3 className="hero__lore-title paragraph">
              the story of the hero
            </h3>
            <p className="hero__lore">{data.lore}</p>
          </div>
          <div className="hero__all-attributes">
            <div className="hero__details-attributes">
              <div className="hero__wrapper-attributes">
                <div className="hero__portrait">
                  <img
                    className="hero__img"
                    src={`${url}/static/images/${data.image}`}
                  />
                  <div className="hero__health">
                    <p className="hero__health-amount">
                      {data.attributes.health.amount}
                    </p>
                    <p className="hero__health-regeneration">
                      +{data.attributes.health.regeneration}
                    </p>
                  </div>
                  <div className="hero__mana">
                    <p className="hero__mana-amount">
                      {data.attributes.mana.amount}
                    </p>
                    <p className="hero__mana-regeneration">
                      +{data.attributes.mana.regeneration}
                    </p>
                  </div>
                </div>
                <div className="hero__attributes">
                  <div className="hero__attribut">
                    <img
                      className="hero__icon"
                      src={`${url}/static/images/hero_strength.png`}
                    />
                    <p className="hero__attribut-amount">
                      {data.attributes.strength.amount}
                    </p>
                    <p className="hero__attribut-per-level">
                      +{data.attributes.strength.per_level}
                    </p>
                  </div>
                  <div className="hero__attribut">
                    <img
                      className="hero__icon"
                      src={`${url}/static/images/hero_agility.png`}
                    />
                    <p className="hero__attribut-amount">
                      {data.attributes.agility.amount}
                    </p>
                    <p className="hero__attribut-per-level">
                      +{data.attributes.agility.per_level}
                    </p>
                  </div>
                  <div className="hero__attribut">
                    <img
                      className="hero__icon"
                      src={`${url}/static/images/hero_intelligence.png`}
                    />
                    <p className="hero__attribut-amount">
                      {data.attributes.intelligence.amount}
                    </p>
                    <p className="hero__attribut-per-level">
                      +{data.attributes.intelligence.per_level}
                    </p>
                  </div>
                </div>
              </div>
              <p className="hero__attribut-subtitle">attributes</p>
            </div>
            <div className="hero__details-roles">
              <div className="hero__wrapper-roles">
                <div className="hero__role">
                  <p className="hero__role-name">Carry</p>
                  <input
                    className="hero-role-scroll"
                    type="range"
                    value={data.roles.carry}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Disabler</p>
                  <input
                    className="hero-role-scroll"
                    type="range"
                    value={data.roles.disabler}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  );
};
