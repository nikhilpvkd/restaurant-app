import React, { useCallback } from "react";
import Tabs from "../components/Tabs";
import DishCard from "../components/DishCard";
import { useDispatch, useSelector } from "react-redux";
import { addActiveList, getActiveDishes, getAllOrders } from "../features/orderSlice";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(getActiveDishes);
    const allOrders = useSelector(getAllOrders);

    const calcOrderCount = (selectedOrderId) => {
        const res = allOrders.filter((orderId) => orderId === selectedOrderId);
        return res.length;
    };

    const memorisedActiveList = useCallback(
        (activeCategory) => {
            dispatch(addActiveList(activeCategory));
        },
        [dishes]
    );

    return (
        <div>
            <Tabs onChange={memorisedActiveList} />
            {dishes.map((dish, i) => (
                <DishCard dish={dish} key={i} orderCount={calcOrderCount(dish.dish_id)} />
            ))}
        </div>
    );
};

export default Dishes;
