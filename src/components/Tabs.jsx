import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCategories } from "../features/orderSlice";

const Tabs = ({ onChange }) => {
    const data = useSelector(getAllCategories);
    const [active, setActive] = useState("");

    useEffect(() => {
        if (data.length) {
            setActive(data[0]);
        }
    }, [data]);

    useEffect(() => {
        if (active) {
            onChange(active);
        }
    }, [active, onChange]);

    return (
        <Wrapper>
            <div className="container">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={active === item ? "tab-item active" : "tab-item"}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default React.memo(Tabs);

const Wrapper = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    .container {
        display: inline-flex;
        align-items: center;
        gap: 25px;
        margin-bottom: 25px;
        .tab-item {
            font-size: 22px;
            padding: 0 0 10px 0;
            @media all and (max-width: 480px) {
                font-size: 20px;
            }
        }
        .active {
            color: #dd2626;
            border-bottom: 3px solid #dd2626;
        }
    }
`;
