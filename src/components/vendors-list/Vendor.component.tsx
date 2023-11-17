import {IVendor} from "../../types/global";

type Props = {
    vendor: IVendor["data"]
};
export const VendorComponent = ({vendor}: Props) => {
        return (
        <div className={"vendor"} key={vendor.id} data-vendor={vendor.id}>
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