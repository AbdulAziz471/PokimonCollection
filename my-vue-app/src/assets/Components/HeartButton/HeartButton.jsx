import "./HeartButton.css";
export default function Heartbutton({ onClick, isfav }) {
  return (
    <>
      <button className={isfav ? "active" : ""} onClick={onClick}>
        Favorite
      </button>
    </>
  );
}
