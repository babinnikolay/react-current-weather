function UpdateTime({ time }) {
  return (
    <div className="update-time">{`Обновлено: ${time?.toLocaleTimeString()}`}</div>
  );
}

export default UpdateTime;
