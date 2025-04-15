// app/actions/checkPromoCode.ts

"use server";

type PromoCodeMap = {
    [key: string]: number; // A map where the key is a string (promo code) and the value is a number (discount percentage)
};


export async function checkPromoCode(promoCode: string) {
    // Example logic to check promo code
    const promoCodes: PromoCodeMap = {
        "DISCOUNT10": 10,
        "DISCOUNT20": 20,
    };

    const discount = promoCodes[promoCode.toUpperCase()];

    if (discount) {
        return {
            success: true,
            message: `Promo code applied successfully! You get ${discount}% off.`,
            discountAmount: discount,
        };
    } else {
        return {
            success: false,
            message: "Invalid promo code.",
            discountAmount: 0,
        };
    }
}
