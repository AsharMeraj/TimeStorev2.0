function GetDiscountedPercentage(OriginalPrice: number, DiscountedPrice: number): string{
    const discount = OriginalPrice - DiscountedPrice
    const discountPercentage = (discount/OriginalPrice) * 100

    return discountPercentage.toFixed(2)

}

function GetDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;
  const finalPrice = Math.round(discountedPrice)
  return finalPrice
}

export {GetDiscountedPercentage, GetDiscountedPrice}