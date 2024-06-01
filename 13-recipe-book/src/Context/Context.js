import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [favoritestList, setFavoritesLists] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
  }

  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        handleAddToFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
