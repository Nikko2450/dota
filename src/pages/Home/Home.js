import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Search } from "../../components/Search/Search";
import { Card } from "../../components/Card/Card";

const url = "http://192.168.0.100:8080";

export const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch(`${url}/v1/all/hero`, {
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
      <div className="home">
        <Container>
          <h1 className="home__title">Choose your hero</h1>
          <Search placeholder="Search heros" />
          <div className="home__content">
            {data.map((value) => {
              return (
                <Card
                  href={`/hero/${value.id}`}
                  key={value.id}
                  className="home__card"
                  src={`${url}/static/images/${value.image}`}
                  alt={value.hero_name}
                />
              );
            })}
          </div>
        </Container>
      </div>
    )
  );
};
