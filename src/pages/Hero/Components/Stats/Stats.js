export const Stats = ({
  iconDamage,
  damageMax,
  damageMin,
  iconAttackTime,
  attackTime,
  iconAttackRange,
  attackRange,
  iconProjectileSpeed,
  projectileSpeed,
  iconArmor,
  defenseArmor,
  iconMagicResist,
  magicResist,
  iconMovementSpeed,
  movementSpeed,
  iconTurnRate,
  turnRate,
  iconVision,
  visionDay,
  visionNight,
}) => {
  return (
    <div className="stats">
      <div className="stats__wrapper">
        <div className="stats__hero-attack">
          <h3 className="stats__title">attack</h3>
          <div className="stats__element">
            <img className="stats__icon" src={iconDamage} />
            <p className="stats__value">
              {damageMax}-{damageMin}
            </p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconAttackTime} />
            <p className="stats__value">{attackTime}</p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconAttackRange} />
            <p className="stats__value">{attackRange}</p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconProjectileSpeed} />
            <p className="stats__value">{projectileSpeed}</p>
          </div>
        </div>
        <div className="stats__hero-defense">
          <h3 className="stats__title">defense</h3>
          <div className="stats__element">
            <img className="stats__icon" src={iconArmor} />
            <p className="stats__value">{defenseArmor}</p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconMagicResist} />
            <p className="stats__value">{magicResist}</p>
          </div>
        </div>
        <div className="stats__hero-mobility">
          <h3 className="stats__title">mobility</h3>
          <div className="stats__element">
            <img className="stats__icon" src={iconMovementSpeed} />
            <p className="stats__value">{movementSpeed}</p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconTurnRate} />
            <p className="stats__value">{turnRate}</p>
          </div>
          <div className="stats__element">
            <img className="stats__icon" src={iconVision} />
            <p className="stats__value">
              {visionDay} / {visionNight}
            </p>
          </div>
        </div>
      </div>
      <p className="stats__subtitle">stats</p>
    </div>
  );
};
