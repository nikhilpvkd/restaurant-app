import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allList: [],
    activeDishes: [],
    dishCategories: [],
    allOrders: [],
};

export const orderSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
        setAllList: (state, { payload }) => {
            state.allList = payload;
            return;
        },

        addDishCategories: (state, { payload }) => {
            state.dishCategories = payload;
            return;
        },

        addActiveList: (state, { payload }) => {
            const list = state.allList.find((item) => item.menu_category === payload);
            state.activeDishes = list.category_dishes;
            return;
        },

        addToOrders: (state, { payload }) => {
            state.allOrders.push(payload);
            return;
        },

        removeFromOrders: (state, { payload }) => {
            const indexToRemove = state.allOrders.indexOf(payload);
            if (indexToRemove !== -1) {
                state.allOrders.splice(indexToRemove, 1);
            }
            return;
        },
    },
});

export const {
    addDishCategories,
    setAllList,
    addActiveList,
    addToOrders,
    removeFromOrders,
} = orderSlice.actions;

export const getAllCategories = (state) => state.orders.dishCategories;
export const getActiveDishes = (state) => state.orders.activeDishes;
export const getTotalOrderCount = (state) => state.orders.allOrders.length;
export const getOrderCountById = (orderID) => (state) => {
    const res = state.orders.allOrders.filter((currOrderId) => currOrderId === orderID);
    return res.length;
};
export const getAllOrders = (state) => state.orders.allOrders;
