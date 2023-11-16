import {useEffect, useRef} from 'react';
import {usePromise} from "./usePromise.ts";
import {restHandler} from "../utils/resthandler.ts";
import store from "../store";
import {addVendors} from "../store/vendors/slice.ts";
import {VendorResponseType} from "../types/global";

interface PaginationOptions {
    page: number;
    pageSize: number;
    lat : string
    long : string
}

export const usePagination = <T>(
    initialUrl: string,
    options: PaginationOptions
) => {
    const initialized = useRef(false)
    const optionsRef = useRef(options);

    const { status, data, error, execute } =
        usePromise<undefined, T>(() => restHandler(initialUrl , "GET" , optionsRef.current));

    const loadMore = () => {
        optionsRef.current = { ...optionsRef.current, page: optionsRef.current.page + 1 };
        if(status != "pending") execute(undefined).then((res : VendorResponseType) => {
            store.dispatch(addVendors(res.data.finalResult))
            return res
        });
    };

    useEffect(() => {
        if(!initialized.current) loadMore();

        return () => {
            initialized.current = true
        }
    }, []);

    return { status, data, error, loadMore };
};
