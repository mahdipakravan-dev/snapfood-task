import {useEffect, useRef} from 'react';
import {usePromise} from "./usePromise.ts";
import {restHandler} from "../utils/resthandler.ts";
import store from "../store";
import {addVendors} from "../store/vendors/slice.ts";
import {VendorResponseType} from "../types/global";

interface PaginationOptions {
    page: number;
    page_size: number;
    lat : string
    long : string
}

export const usePagination = <T>(
    initialUrl: string,
    options: PaginationOptions
) => {
    const initialized = useRef(false)
    const optionsRef = useRef(options);

    const execute = () => restHandler(initialUrl , "GET" , optionsRef.current)

    const loadMore = () => {
        return new Promise<void>((resolve,reject) => {
            execute().then((res: VendorResponseType) => {
                store.dispatch(addVendors(res.data.finalResult))
                return res
            }).then(() => resolve()).catch(reject);
            optionsRef.current = {...optionsRef.current, page: optionsRef.current.page + 1};
        })
    };

    useEffect(() => {
        if(!initialized.current) loadMore();

        return () => {
            initialized.current = true
        }
    }, []);

    return { loadMore };
};
