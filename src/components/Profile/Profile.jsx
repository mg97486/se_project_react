import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleCardLike,
  onAddClick,
  onEditProfile,
  onSignOut,
}) {
  return (
    <section className="profile">
      <Sidebar onEditProfile={onEditProfile} onSignOut={onSignOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onAddClick={onAddClick}
        handleCardClick={handleCardClick}
        handleCardLike={handleCardLike}
      />
    </section>
  );
}
