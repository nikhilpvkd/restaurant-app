import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDishCategories, setAllList } from "../orderSlice";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://run.mocky.io/v3",
    }),
    endpoints: (buider) => ({
        getAllDishes: buider.query({
            query: () => "/db0018c8-5982-4d89-a54f-f51fe14d3c89",
            transformResponse: (response, meta, arg) => response.data[0],
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAllList(data.table_menu_list));
                    const categories = data.table_menu_list.map(({ menu_category }) => {
                        return menu_category;
                    });
                    dispatch(addDishCategories(categories));
                } catch (err) {}
            },
        }),
    }),
});

export const { useGetAllDishesQuery } = api;
