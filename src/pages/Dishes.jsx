import React from "react";
import Tabs from "../components/Tabs";
import DishCard from "../components/DishCard";
import { useDispatch, useSelector } from "react-redux";
import { addActiveList, getActiveDishes } from "../features/orderSlice";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(getActiveDishes);
    return (
        <div>
            <Tabs
                onChange={(activeCategory) => {
                    dispatch(addActiveList(activeCategory));
                }}
            />
            {dishes.map((dish, i) => (
                <DishCard dish={dish} key={i} />
            ))}
        </div>
    );
};

export default Dishes;
