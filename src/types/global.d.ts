export interface IVendor {
    "type": "VENDOR"|"TEXT"
    "data": {
        id: number;
        vendorCode: string;
        noOrder: boolean;
        title: string;
        description: string;
        rate: number;
        rating: number;
        logo: string;
        defLogo: string;
        taxEnabled: boolean;
        taxIncluded: boolean;
        taxEnabledInProducts: boolean;
        taxEnabledInPackaging: boolean;
        taxEnabledInDeliveryFee: boolean;
        tax: number;
        serviceFee: number;
        deliveryArea: string;
        discount: number;
        isOpen: boolean;
        minDeliveryFee: number;
        maxDeliveryFee: number;
        deliveryTime: number;
        minOrder: number;
        address: string;
        phone: string;
        website: string;
        status: number;
        lat: number;
        lon: number;
        isFavorite: boolean;
        priority: number;
        city: string;
        area: string;
        commentCount: number;
        recommendedFor: string;
        establishment: string;
        mostPopularItems: string;
        costsForTwo: number;
        onlineOrder: boolean;
        voteCount: number;
        discountType: string | null;
        menuUrl: string;
        discountValue: number;
        discountForAll: boolean;
        containerFee: number;
        deliveryGuarantee: boolean;
        discountStartHour1: string;
        discountStopHour1: string;
        discountStartHour2: string;
        discountStopHour2: string;
        discountValueForView: number;
        coverPath: string;
        cuisinesArray: { id: number; title: string }[];
        preOrderEnabled: boolean;
        preorderToday: {
            weekday: string;
            name: string;
            startHour: string;
            intervals: null;
        };
        vendorType: string;
        childType: string;
        budgetClass: string;
        vendorTypeTitle: string;
        isZFExpress: boolean;
        deliveryFee: number;
        backgroundImage: string;
        backgroundImageCustom: string;
        has_coupon: boolean;
        coupon_count: number;
        best_coupon: string;
        is_pro: boolean;
        has_first_coupon: boolean;
        userImage: Record<string, string>[];
        menuImage: string[];
        countReview: number;
        countOfUserImages: number;
        deliveryFeeDiscount: number;
        trendingScore: number;
        delay: string;
        deliver: boolean;
        eta: number;
        min_eta: number;
        max_eta: number;
        open_at_eta: boolean;
        action: string;
        has_delay: boolean;
        delay_time: number;
        total_time: number;
        bid: boolean;
        superTypeAlias: string;
        is_food_party: boolean;
        is_market_party: boolean;
        click_id: null;
        cpc_campaign_hash: null;
        cpc_spot: null;
        is_ecommerce: boolean;
        is_economical: boolean;
        is_grocery_vip: boolean;
        is_grocery_returnable: boolean;
        is_grocery_economic: boolean;
        vendor_status: null;
        status_title: string;
        status_text: string;
        status_description: string;
        has_cashback: boolean;
        new_type: string;
        new_type_title: string;
        is_eco: boolean;
    }
}

export interface VendorResponseType {
    data : {
        count: number,
        open_count: number,
        finalResult: Array<IVendor>
    }
    render_type : number // but i think it's enum :)
    status : boolean
}