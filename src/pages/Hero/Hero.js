import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Attributes } from "./Components/Attributes/Attributes";
import { Roles } from "./Components/Roles/Roles";
import { Stats } from "./Components/Stats/Stats";

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
              healthAmount={data.attributes.health.amount}
              healthRegeneration={data.attributes.health.regeneration}
              manaAmount={data.attributes.mana.amount}
              manaRegeneration={data.attributes.mana.regeneration}
              strength={`${url}/static/images/hero_strength.png`}
              strengthAmount={data.attributes.strength.amount}
              strengthLevel={data.attributes.strength.per_level}
              agility={`${url}/static/images/hero_agility.png`}
              agilityAmount={data.attributes.agility.amount}
              agilityLevel={data.attributes.agility.per_level}
              intelligence={`${url}/static/images/hero_intelligence.png`}
              intelligenceAmount={data.attributes.intelligence.amount}
              intelligenceLevel={data.attributes.intelligence.per_level}
            />
            <Roles
              carry={data.roles.carry}
              disabler={data.roles.disabler}
              durable={data.roles.durable}
              escape={data.roles.escape}
              initiator={data.roles.initiator}
              jungler={data.roles.jungler}
              nuker={data.roles.nuker}
              pusher={data.roles.pusher}
              support={data.roles.support}
            />
            <Stats
              iconDamage={`${url}/static/images/icon_damage.png`}
              damageMax={data.stats.attack.damage.max}
              damageMin={data.stats.attack.damage.min}
              iconAttackTime={`${url}/static/images/icon_attack_time.png`}
              attackTime={data.stats.attack.time}
              iconAttackRange={`${url}/static/images/icon_attack_range.png`}
              attackRange={data.stats.attack.range}
              iconProjectileSpeed={`${url}/static/images/icon_projectile_speed.png`}
              projectileSpeed={data.stats.attack.projectile_speed}
              iconArmor={`${url}/static/images/icon_armor.png`}
              defenseArmor={data.stats.defense.armor}
              iconMagicResist={`${url}/static/images/icon_magic_resist.png`}
              magicResist={data.stats.defense.magic_resist}
              iconMovementSpeed={`${url}/static/images/icon_movement_speed.png`}
              movementSpeed={data.stats.mobility.movement_speed}
              iconTurnRate={`${url}/static/images/icon_turn_rate.png`}
              turnRate={data.stats.mobility.turn_rate}
              iconVision={`${url}/static/images/icon_vision.png`}
              visionDay={data.stats.mobility.vision.day}
              visionNight={data.stats.mobility.vision.night}
            />
          </div>
        </div>
      </div>
    )
  );
};
