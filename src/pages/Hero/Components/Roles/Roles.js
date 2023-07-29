export const Roles = ({
  carry,
  disabler,
  durable,
  escape,
  initiator,
  jungler,
  nuker,
  pusher,
  support,
}) => {
  return (
    <div className="roles">
      <div className="roles__wrapper">
        <div className="roles__hero">
          <p className="roles__hero-name">Carry</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={carry}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Disabler</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={disabler}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Durable</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={durable}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Escape</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={escape}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Initiator</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={initiator}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Junglerr</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={jungler}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Nuker</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={nuker}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Pusher</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={pusher}
          />
        </div>
        <div className="roles__hero">
          <p className="roles__hero-name">Support</p>
          <input
            className="roles__hero-scroll"
            type="range"
            disabled
            value={support}
          />
        </div>
      </div>
      <p className="roles__subtitle">roles</p>
    </div>
  );
};
