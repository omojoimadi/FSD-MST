export default function AddItemButton({ onAddItem }) {
  return (
    <button className="add-btn" onClick={onAddItem}>
      + Add Item
    </button>
  );
}