import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTotalOrderCount } from "../features/orderSlice";

const Header = () => {
    const totalOrderCount = useSelector(getTotalOrderCount);
    return (
        <Wrapper>
            <div className="left">
                <h2>Artisan Resto Cafe</h2>
            </div>
            <div className="right">
                <span className="text">My Orders</span>
                <span className="count">{totalOrderCount}</span>
                <Icon
                    icon="ion:cart-outline"
                    width={window.innerWidth <= 480 ? 44 : 54}
                    height={window.innerWidth <= 480 ? 44 : 54}
                />
            </div>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        h2 {
            font-size: 24px;
            font-family: "nunito-bold";
            @media all and (max-width: 480px) {
                font-size: 20px;
            }
        }
    }
    .right {
        display: flex;
        gap: 20px;
        align-items: center;
        position: relative;
        @media all and (max-width: 480px) {
            gap: 10px;
        }
        .text {
            font-size: 20px;
            font-family: "nunito-medium";
            @media all and (max-width: 480px) {
                font-size: 18px;
            }
        }
        .count {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: red;
            font-family: "nunito-bold";
            position: absolute;
            right: 0;
            top: 3px;
        }
    }
`;
