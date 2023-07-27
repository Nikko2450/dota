import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Search } from "../../components/Search/Search";
import { Card } from "../../components/Card/Card";

const url = "http://192.168.0.100:8080";

export const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState([]);
  const [filteredList, setFilteredList] = useState({
    name: "",
  });

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
          <p className="home__desc">
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </p>
          <Search
            placeholder="Search heros"
            onChange={(value) =>
              setFilteredList((obj) => ({ ...obj, name: value }))
            }
          />
          <div className="home__content">
            {data.map((value) => {
              return (
                <Card
                  href={`/hero/${value.id}`}
                  key={value.id}
                  src={`${url}/static/images/${value.image}`}
                  alt={value.hero_name}
                  name={value.hero_name}
                />
              );
            })}
          </div>
        </Container>
      </div>
    )
  );
};
