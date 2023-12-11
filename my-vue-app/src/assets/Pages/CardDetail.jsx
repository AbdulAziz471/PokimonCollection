import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../DataContext";
import "./pages.css";

export default function CardDetail() {
  const { id } = useParams();
  const { data, loading, error } = useData();
  //   const card = data.find((card) => card.id === id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const card = data ? data.find((card) => card.id === id) : null;
  console.log("Card ID:", card.id);

  if (!card) return <div>No card found with ID: {id}</div>;

  return (
    <>
      <h2>Card Details</h2>
      <div className="main_card">
        <div className="card_img">
          <img src={card.images.large} />
        </div>
        <div className="card_detail">
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
    </>
  );
}
