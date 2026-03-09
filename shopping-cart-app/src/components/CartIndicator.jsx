export default function CartIndicator({ count }) {
  return (
    <div className="cart-indicator">
      <span>Cart</span>
      <span className={`badge ${count > 0 ? "active" : ""}`}>{count}</span>
    </div>
  );
}