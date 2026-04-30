import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>
        <strong>Availability:</strong>{" "}
        <span
          style={{
            display: "inline-block",
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "0.82em",
            fontWeight: 600,
            background:
              item.availabilityStatus === "In Stock"
                ? "#d1fae5"
                : item.availabilityStatus === "Out of Stock"
                ? "#fee2e2"
                : "#fef9c3",
            color:
              item.availabilityStatus === "In Stock"
                ? "#065f46"
                : item.availabilityStatus === "Out of Stock"
                ? "#991b1b"
                : "#92400e",
          }}
        >
          {item.availabilityStatus || "In Stock"}
        </span>
      </p>
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;