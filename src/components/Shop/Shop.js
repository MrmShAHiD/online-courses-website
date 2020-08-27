import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const data = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart =[...cart, course];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    courses.map(course => <Course handleAddCourse = {handleAddCourse} course={course}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;