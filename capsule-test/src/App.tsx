import { useState } from "react";
import { Select } from "@truepill/react-capsule";

const pokemons = ["Pikachu", "Eevee", "Snorlax", "Sharizar", "Dito"];

const App = () => {
  const [pokemon, setPokemon] = useState<string | undefined>();

  return (
    <div style={{ width: "250px", padding: "20px" }}>
      <Select
        options={pokemons}
        label="Available pokemons:"
        required
        value={pokemon || ""}
        placeholder="Choose one"
        onChange={setPokemon}
      />
      <p>Selected: {pokemon}</p>
    </div>
  );
};

export default App;
