import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IVendor } from '../../types/global';
import {unique} from "../../utils/unique.ts";
import {compact} from "lodash";

interface VendorState {
    byId: Record<IVendor["data"]["id"], IVendor>;
    vendors: Array<IVendor["data"]["id"]>
}

const initialState: VendorState = {
    byId: {},
    vendors: [],
};

export const vendorSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {
        addVendors: (state, action: PayloadAction<IVendor[]>) => {
            state.byId = {
                ...state.byId,
                ...action.payload.reduce((acc, vendor) => {
                    acc[vendor.data.id] = vendor;
                    return acc;
                }, {} as Record<string, IVendor>)
            }
            state.vendors = unique(compact([...state.vendors, ...action.payload.map(vendor => vendor.data.id)]))
        },
    },
});

export const { addVendors } = vendorSlice.actions;

export default vendorSlice.reducer;
