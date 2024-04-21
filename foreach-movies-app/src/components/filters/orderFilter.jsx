import { useState } from 'react';
import { useSearchParams } from "react-router-dom";


/**
 * Represents a component for selecting the order of movies.
 *
 * @param {Function} props.onOrderSelect - The function to be called when the order is selected.
 * @returns {JSX.Element} The rendered OrderFilter component.
 */
const OrderFilter = ({ onOrderSelect }) => {
  const [searchParams] = useSearchParams();
  const [selectedOrder, setOrder] = useState(searchParams.get('order') || 'popularity.desc');

  // Represents the order list for filtering movies.
  const [orderList] = useState({
    'Popularity': 'popularity.desc',
    'Title A-Z': 'title.asc',
    'Note': 'vote_average.desc',
  });

  // Handles the change event of the order select input.
  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
    onOrderSelect(selectedOrder)
  }

  return (
    <div className="select">
      <select className="format" name="order-menu" id="order-menu" onChange={handleOrderChange} value={selectedOrder}>
        {Object.entries(orderList).map(([key, value]) => (
          <option key={key} value={value}>{key}</option>
        ))}
      </select>
    </div>
  );
}

export default OrderFilter;
