import { Icon } from "@iconify/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import VegIcon from "../assets/icons/Veg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToOrders, getOrderCountById, removeFromOrders } from "../features/orderSlice";

const DishCard = ({ dish }) => {
    const dispatch = useDispatch();
    const {
        dish_id,
        dish_name,
        dish_price,
        dish_image,
        dish_currency,
        dish_calories,
        dish_description,
        dish_Availability,
        dish_Type,
        addonCat,
    } = dish;
    const orderCount = useSelector(getOrderCountById(dish_id));

    return (
        <Wrapper>
            <div className="left">
                <div className="title-container">
                    <VegIcon color={dish_Type == 1 ? "#cc0505" : "#1da34a"} />
                    <h3 className="title">{dish_name}</h3>
                </div>
                <div className="amount-container">
                    <h4>{dish_currency + " " + dish_price}</h4>
                    <div className="cal">{dish_calories} Calories</div>
                </div>

                <p className="description">{dish_description}</p>
                <div className="counter">
                    <span onClick={() => dispatch(removeFromOrders(dish_id))}>-</span>
                    <span>{orderCount}</span>
                    <span onClick={() => dispatch(addToOrders(dish_id))}>+</span>
                </div>
                {addonCat.length ? (
                    <span className="custom">customisation Available</span>
                ) : null}
            </div>
            <div className="right">
                <img src={dish_image} alt="Dish" />
            </div>
        </Wrapper>
    );
};

export default React.memo(DishCard);

const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    border-bottom: 2px solid #0c131f;
    padding: 20px 0;
    justify-content: space-between;
    @media all and (max-width: 480px) {
        gap: 15px;
    }
    .left {
        flex: 1;
        .title-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            h3 {
                font-size: 20px;
                @media all and (max-width: 480px) {
                    font-size: 18px;
                }
            }
        }
        .amount-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            @media all and (max-width: 480px) {
                font-size: 15px;
            }
            .cal {
                font-size: 18px;
                @media all and (max-width: 480px) {
                    font-size: 15px;
                }
            }
        }

        .description {
            font-size: 18px;
            max-width: 700px;
            margin-bottom: 35px;
            @media all and (max-width: 480px) {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
        .counter {
            background: #1da34a;
            width: 110px;
            height: 34px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 20px;
            overflow: hidden;
        }
        .counter > span {
            display: inline-block;
            font-size: 20px;
            user-select: none;
            &:first-child {
                font-size: 36px;
                cursor: pointer;
            }
            &:last-child {
                font-size: 26px;
                cursor: pointer;
            }
        }
        .custom {
            color: #cc0505;
            font-size: 18px;
            @media all and (max-width: 480px) {
                font-size: 16px;
            }
        }
    }
    .right {
        display: flex;
        justify-content: flex-end;

        img {
            width: 200px;
            height: 150px;
            border-radius: 8px;
            @media all and (max-width: 480px) {
                width: 85px;
                height: 80px;
            }
        }
    }
`;
