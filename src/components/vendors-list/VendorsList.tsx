import {InfinityScroll} from "../infinity-scroll";
import {usePagination} from "../../hooks/usePagination.ts";
import {GET_VENDORS_LIST} from "../../constants/webservices.ts";
import {IVendor, VendorResponseType} from "../../types/global";
import "./styles.scss"
import {Vendor} from "./Vendor.tsx";
import {useSelector} from "react-redux";
import {ReducerType} from "../../store";

export const VendorsList = () => {
    const {loadMore} = usePagination<VendorResponseType>(GET_VENDORS_LIST , {
        page : 0,
        page_size : 5,
        lat : "35.754",
        long : "51.328"
    })

    const vendors = useSelector<ReducerType , Array<IVendor["data"]["id"]>>
        (global => global.vendors.vendors)

    return (
        <InfinityScroll loadMore={loadMore}>
            <div className={"vendors-mapper"} key={"vendor-list-mapper"}>
                {vendors.map(vendorId => <Vendor key={vendorId} vendorId={vendorId}/>)}
            </div>
        </InfinityScroll>
    );
};
