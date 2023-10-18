import { createSlice } from "@reduxjs/toolkit";

interface SideBarShowState {
    show: boolean;
}

const initialState: SideBarShowState = {
    show: false,
};

const SideBarReducer = createSlice({
    name: "SideBarShow",
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.show = !state.show;
        },
    },
});

export const { toggleSideBar } = SideBarReducer.actions;
export default SideBarReducer.reducer;
