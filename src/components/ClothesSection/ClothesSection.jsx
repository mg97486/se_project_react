import "./ClothesSection.css";
import ItemCard from "../ItemCard/itemCard";

export default function ClothesSection({
  clothingItems,
  onAddClick,
  handleCardClick,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p>Your items </p>
        <button className="clothes-section__add-button" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
