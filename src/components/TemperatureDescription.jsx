function TemperatureDescription({ temp, description }) {
  return (
    <>
      <div className="temperature">{temp}°C</div>
      <div className="description">{description}</div>
    </>
  );
}

export default TemperatureDescription;
