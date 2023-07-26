import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";

const url = "http://192.168.0.100:8080";

export const Hero = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);

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
                  className="hero__primary-srat-icon"
                  src={
                    data.primary_stat === "Universal"
                      ? `${url}/static/images/hero_universal.png`
                      : ""
                  }
                ></img>
                <p className="hero__primary-stat paragraph">
                  {data.primary_stat}
                </p>
              </div>
              <h2 className="hero__name paragraph">{data.hero_name}</h2>
              <p className="hero__short_description">
                {data.short_description}
              </p>
              <p className="hero__text">{data.description}</p>
              <p className="hero__attack">attack type</p>
              <div className="hero__attack-wrapper">
                <img
                  className="hero__attack-img"
                  src={
                    data.attack_type === "Melee"
                      ? `${url}/static/images/melee.svg`
                      : "/ranged.svg"
                  }
                  alt="melee"
                />
                <p className="hero__attack-type">{data.attack_type}</p>
              </div>
              <p className="hero__complexity-title">complexity</p>
              <div className="hero__complexity-wrapper">
                <span className="hero__complexity white-romb"></span>
                <span className="hero__complexity"></span>
                <span className="hero__complexity"></span>
              </div>
            </div>
            <div className="hero__wrapper-video">
              <video
                className="hero__video"
                src={`${url}/static/videos/${data.video}`}
                muted
                loop
                autoPlay
              ></video>
            </div>
          </div>
          <div className="hero__wrapper-lore">
            <h3 className="hero__lore-title paragraph">
              the story of the hero
            </h3>
            <p className="hero__lore">{data.lore}</p>
          </div>
        </Container>
      </div>
    )
  );
};
