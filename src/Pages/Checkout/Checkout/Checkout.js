import React from 'react';
import './Checkout.css'
const Checkout = () => {
    const hendleCheckOut = () => {
        alert("Thank you.Get well soon");
    }
    return (
        <div className='checkout-form'>
            {/* <form onSubmit={handleRegister}> */}
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="text" name="address" id="" placeholder='You Address' />
                <input type="number" name="phone" id="" placeholder='Your Phone Number' />
                <input
                    onClick={hendleCheckOut}
                    className='btn btn-primary w-50 mx-auto d-block m-2'
                    type="submit"
                    value="Check Out"
                />
            </form>
        </div>
    );
};

export default Checkout;