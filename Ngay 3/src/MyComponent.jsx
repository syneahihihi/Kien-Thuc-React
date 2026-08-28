import React, {useState} from 'react'

// onChange: khi nguoi dung nhap vao input thi se goi ham handleNameChange
// value: gia tri hien thi trong input se duoc lay tu state name
// ex. <input>, <textarea>, <select> và <radio>
// Trigger a function every time the value of the input changes.

function MyComponent() {
    const [name, setName] = useState('Guest');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    const [quantity, setQuantity] = useState();

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    const [comment, setComment] = useState('');

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    const [paymentMethod, setPaymentMethod] = useState('');
    
    function handlePaymentMethodChange(event) {
        setPaymentMethod(event.target.value);
    }

    const [shipping, setShipping] = useState('');

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    const [count, setCount] = useState(0);


    function handleIncrement() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function handleDecrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function handleReset() {
        setCount(0);
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter comment...'/>
        <p>Comment: {comment}</p>

        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
        </select>
        <p>Payment Method: {paymentMethod}</p>

        <label>
            <input type='radio' value='Pick Up'
            checked={shipping === 'Pick Up'}
            onChange={handleShippingChange}/> Pick Up
        </label> <br/>

        <label>
            <input type='radio' value='Delivery'
            checked={shipping === 'Delivery'}
            onChange={handleShippingChange}/> Delivery
        </label>

        <p>Shipping: {shipping}</p>


<h5>Ở đây khi muốn update một state, chúng ta nên sử dụng một biến khác không phải là state hiện tại
để đảm bảo rằng các thay đổi được áp dụng một cách chính xác và không gây ra lỗi trong quá trình render.</h5>
<h3>Đây gọi là update function</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <p>Count: {count}</p>



    </div>
  )
}

export default MyComponent