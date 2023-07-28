import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Attributes } from "./Components/Attributes/Attributes";

const url = "http://192.168.0.100:8080/v1";

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
    fetch(`${url}/hero/${id}`, {
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
        </Container>
        <div className="hero__all-attributes">
          <div className="hero__all-attributes-wrapper">
            <Attributes
              portrait={`${url}/static/images/${data.image}`}
              amount={data.attributes.health.amount}
            />
            <div className="hero__details-roles">
              <div className="hero__wrapper-roles">
                <div className="hero__role">
                  <p className="hero__role-name">Carry</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.carry}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Disabler</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.disabler}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Durable</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.durable}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Escape</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.escape}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Initiator</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.initiator}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Junglerr</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.jungler}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Nuker</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.nuker}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Pusher</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.pusher}
                  />
                </div>
                <div className="hero__role">
                  <p className="hero__role-name">Support</p>
                  <input
                    className="hero__role-scroll"
                    type="range"
                    disabled
                    value={data.roles.support}
                  />
                </div>
              </div>
              <p className="hero__role-subtitle">roles</p>
            </div>
            <div className="hero__details-stats">
              <div className="hero__wrapper-stats">
                <div className="hero__stat-attack">
                  <h3 className="hero__stat-title">attack</h3>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_damage.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.attack.damage.max}-
                      {data.stats.attack.damage.min}
                    </p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_attack_time.png`}
                    />
                    <p className="hero__stat-value">{data.stats.attack.time}</p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_attack_range.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.attack.range}
                    </p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_projectile_speed.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.attack.projectile_speed}
                    </p>
                  </div>
                </div>
                <div className="hero__stat-defense">
                  <h3 className="hero__stat-title">defense</h3>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_armor.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.defense.armor}
                    </p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_magic_resist.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.defense.magic_resist}
                    </p>
                  </div>
                </div>
                <div className="hero__stat-mobility">
                  <h3 className="hero__stat-title">mobility</h3>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_movement_speed.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.mobility.movement_speed}
                    </p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_turn_rate.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.mobility.turn_rate}
                    </p>
                  </div>
                  <div className="hero__stat-element">
                    <img
                      className="hero__stat-icon"
                      src={`${url}/static/images/icon_vision.png`}
                    />
                    <p className="hero__stat-value">
                      {data.stats.mobility.vision.day} /{" "}
                      {data.stats.mobility.vision.night}
                    </p>
                  </div>
                </div>
              </div>
              <p className="hero__stat-subtitle">stats</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
