"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store/index";

interface AlertState {
  isOpen: boolean;
  severity: "success" | "error";
  message: string;
}

const initialState: AlertState = {
  isOpen: false,
  message: "",
  severity: "success",
};

export const AlertStore = createSlice({
  name: "alert",
  initialState,
  reducers: {
    handleOnOpenSuccess: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "success";
      state.message = action.payload;
    },
    handleOnOpenError: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.severity = "error";
      state.message = action.payload;
    },
    handleOnClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleOnOpenSuccess, handleOnOpenError, handleOnClose } =
  AlertStore.actions;

export const isOpen = (state: RootState) => state.AlertStore.isOpen;
export const message = (state: RootState) => state.AlertStore.message;
export const severity = (state: RootState) => state.AlertStore.severity;

export default AlertStore.reducer;
