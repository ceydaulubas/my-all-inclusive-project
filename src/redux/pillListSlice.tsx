import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PillListFormData {
    key: React.Key;
    medication: string;
    startDate: string;
    stopDate: string;
    purpose: string;
    dosage: string;
    timeOfDay: number;
    frequency: string;
    expirationDate: string;
}

const initialState: PillListFormData[] = [];

const pillListSlice = createSlice({
    name: 'pillList',
    initialState,
    reducers: {
        addPillData: (state, action: PayloadAction<PillListFormData>) => {
            state.push(action.payload);
        },
        deletePillData: (state, action: PayloadAction<React.Key>) => {
            return state.filter(item => item.key !== action.payload);
        },
        updatePillData: (state, action: PayloadAction<PillListFormData>) => {
            const index = state.findIndex(item => item.key === action.payload.key);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addPillData, deletePillData, updatePillData } = pillListSlice.actions;
export default pillListSlice.reducer;
