import React, { useState, useEffect } from 'react';

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${userId}`)
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to retrieve cart');
      });
  }, [userId]);

  const handleCheckout = () => {
    fetch('http://localhost:5000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert(data); // Показываем сообщение пользователю
        setCartItems([]); // Очищаем корзину после оформления заказа
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Checkout failed');
      });
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
