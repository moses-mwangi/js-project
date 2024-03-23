import { createContext, useCallback, useEffect, useReducer } from "react";

const initialState = {
  cities: [],
  isLoading: false,
  error: "",
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      throw new Error("unknown action type");
  }
}

const BASE__URL = "http://localhost:9800/";
const CityContext = createContext({});

function CityProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [currentCity, setCurrentCity] = useState({});
  // const { state, dispatch } = useReducer(reducer, initialState);
  // const { cities, currentCity, isLoading } = state;
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE__URL}cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "Their was an error in loading data",
        });
      }
    }
    fetchCities();
  }, [dispatch]);

  const getCity = useCallback(
    async function getCity(id) {
      if (id === currentCity) return;
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE__URL}cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "Their was an error in loading city",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE__URL}cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();

      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Their was an error in creating city",
      });
    }
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE__URL}cities/${id}`, {
        method: "Delete",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      alert("Their was an error deleting th city");
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        createCity,
        getCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
export { CityContext, CityProvider };
