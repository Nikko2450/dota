import { Link } from "react-router-dom";

export const Card = ({ src, alt, href, name }) => {
  return (
    <Link className="card" to={href}>
      <img className="card__img" src={src} alt={alt} />
      <p className="card__name">{name}</p>
      <span className="card__shadow"></span>
    </Link>
  );
};
