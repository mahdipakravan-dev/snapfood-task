import {IVendor} from "../../types/global";
import {useSelector} from "react-redux";
import {ReducerType} from "../../store";

type Props = {
    vendorId: IVendor["data"]["id"]
};
export const Vendor = ({vendorId}: Props) => {
    const vendor = useSelector<ReducerType , IVendor["data"]>(global => global.vendors.byId[vendorId].data)

    return (
        <div className={"vendor"} key={vendor.id}>
            <div className="vendor__cover">
                <img src={vendor.coverPath} className={"vendor__cover__image"} alt=""/>
                <img src={vendor.logo} width={60} height={60} alt="" className={"vendor__cover__logo"}/>
            </div>
            <div className="vendor__detail">
                <span className="vendor__detail__title">{vendor.title}</span>
                <p className="vendor__detail__desc">
                    {vendor.cuisinesArray?.map(cuisines => cuisines.title).join(",")}
                </p>
                <div className="vendor__detail__delivery">
                    پیک فروشنده : 9,600 تومان
                </div>
            </div>
        </div>
    );
};