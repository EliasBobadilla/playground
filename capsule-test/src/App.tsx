import { useState } from "react";
import { Select } from "@truepill/react-capsule";

const pokemons = ["Pikachu", "Eevee", "Snorlax", "Sharizar", "Dito"];

const App = () => {
  const [pokemon, setPokemon] = useState<string | undefined>();

  const handleOnChange = (value?: string) => {
    console.log("value =>", value);
    setPokemon(value);
  };

  return (
    <div style={{ width: "250px" }}>
      <Select
        options={pokemons}
        label="Available pokemons:"
        required
        value={pokemon || ""}
        placeholder="Select one"
        onChange={handleOnChange}
      />
      <p>Gotcha: {pokemon}</p>
    </div>
  );
};

export default App;
