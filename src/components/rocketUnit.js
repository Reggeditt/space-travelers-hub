const RocketUint = ({ rocket }) => {
  return (
    <div className="rocket-unit">
      <div>
        <img src={rocket.flickr_images[0]} alt={rocket.name} />
        <div className="rocket-info">
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

export default RocketUint;