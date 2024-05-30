import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeItem from "../../Components/RecipeList/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait.</div>
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-orange font-extrabold">Nothing to Show, please search something.</div>
      )}
    </div>
  );
};

export default Home;
