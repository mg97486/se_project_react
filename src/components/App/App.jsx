import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems } from "../../utils/api";
import { addItem } from "../../utils/api";
import { removeItem } from "../../utils/api";

import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";

import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";

import LogInModal from "../logInModal/logInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { use } from "react";
import ProtectedRoute from "../ProtectedRoute";
import ClothesSection from "../ClothesSection/ClothesSection";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weatherType,
    };

    addItem(newCardData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Helper to get user's coordinates using the Geolocation API
  const getUserCoordinates = () => {
    return new Promise((resolve, reject) => {
      if (!navigator || !navigator.geolocation) {
        return reject(new Error("Geolocation not supported"));
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        { timeout: 10000 },
      );
    });
  };

  function handleDeleteItem(itemId) {
    removeItem(itemId)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId),
        );
        closeActiveModal();
      })
      .catch((err) => console.error("Error deleting item:", err));
  }

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.error(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.error(err));
  };

  const registerUser = (userData) => {
    const newUser = {
      name: userData.name,
      avatar: userData.avatar,
      email: userData.email,
      password: userData.password,
    };
  };

  const loginUser = (userData) => {
    const existingUser = {
      email: userData.email,
      password: userData.password,
    };
  };

  useEffect(() => {
    getUserCoordinates()
      .then((coords) => {
        return getWeather(coords, apiKey);
      })
      .catch((err) => {
        // If we fail to get the user's coords, log and use the default coordinates
        console.warn(
          "Could not get user location, using default coordinates.",
          err,
        );
        return getWeather(coordinates, apiKey);
      })
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
      })

      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // Verify token and fetch user data if needed
      setIsLoggedIn(true);
      // Fetch and set current user data here if your API supports it
    }
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLogInClick={handleLogInClick}
              handleSignUpClick={handleSignUpClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    clothingItems={clothingItems}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      onAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>

          <AddItemModal
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            isOpen={activeModal === "preview"}
            onDelete={handleDeleteItem}
          />

          <ClothesSection
            isLoggedIn={isLoggedIn}
            clothingItems={clothingItems}
            onAddClick={handleAddClick}
            handleCardClick={handleCardClick}
          />

          <LogInModal
            isOpen={activeModal === "log-in"}
            onClose={closeActiveModal}
            onSubmit={loginUser}
            onSignUpClick={handleSignUpClick}
          />
          <RegisterModal
            isOpen={activeModal === "sign-up"}
            onClose={closeActiveModal}
            onSubmit={registerUser}
            onLogInClick={handleLogInClick}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
