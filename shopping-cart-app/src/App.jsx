import { useState } from "react";
import CartIndicator from "./components/CartIndicator";
import AddItemButton from "./components/AddItemButton";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addItem = () => setCartCount((prev) => prev + 1);

  return (
    <div className="app">
      <CartIndicator count={cartCount} />
      <AddItemButton onAddItem={addItem} />
    </div>
  );
}