
export default function Heartbutton({ onClick, isfav }) {
  return (
    <>
      <button
        className={
          isfav
            ? " py-[3px] px-[10px] border rounded-lg  bg-stone-600  "
            : " bg-stone-300 py-[3px] px-[10px] border rounded-lg "
        }
        onClick={onClick}
      >
        Favorite
      </button>
    </>
  );
}
