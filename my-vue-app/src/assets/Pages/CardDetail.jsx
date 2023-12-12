import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../DataContext";
import typeColors from "./type.json";
export default function CardDetail() {
  const { id } = useParams();
  const { data, loading, error } = useData();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const card = data ? data.find((card) => card.id === id) : null;
  console.log("Card ID:", card.id);

  if (!card) return <div>No card found with ID: {id}</div>;
  const backgroundColorClass = card.types[0].toLowerCase();
  const backgroundColor = typeColors[backgroundColorClass];
  return (
    <>
      <div
        className={`bg-${backgroundColorClass}`}
        style={{ background: backgroundColor }}
      >
        <h2>Card Details</h2>
        <div className="flex w-full flex-row justify-around   pt-5">
          <div className="w-3/6">
            <img src={card.images.small} />
          </div>
          <div className="w-3/6">
            <p>
              <strong>ID:</strong> {card.id}
            </p>
            <p>
              <strong>Name:</strong> {card.name}
            </p>
            <p>
              <strong>Type:</strong> {card.types.join(", ")}
            </p>
            <p>
              <strong>HP:</strong> {card.hp}
            </p>

            <h3>Attacks</h3>
            <ol>
              {card.attacks.map((attack, index) => (
                <li>
                  <div key={index}>
                    <p>
                      <strong>Attack Name:</strong> {attack.name}
                    </p>
                    <p>
                      <strong>Damage:</strong> {attack.damage}
                    </p>
                    <p>
                      <strong>Description:</strong> {attack.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
