import { useState } from 'react';
import { useSearchParams } from "react-router-dom";


const OrderFilter = ({ onOrderSelect }) => {
  const [searchParams] = useSearchParams();
  const [selectedOrder, setOrder] = useState(searchParams.get('order') || 'popularity.desc');

  const [orderList] = useState({
    'Title A-Z': 'title.asc',
    'Popularity': 'popularity.desc',
    'Note': 'vote_average.desc',
  });

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
