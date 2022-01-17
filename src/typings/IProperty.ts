export interface PropertyAddress {
  formattedAddress: string
  geolocation: {
    lat: number
    lng: number
  }
}

export interface Property {
  id: string
  address: PropertyAddress
  images: string[]
  price: number
  bathrooms: number
  bedrooms: number
  parkingSpaces: number
  usableArea: number
  publish: boolean
}

export interface PropertyFeatures {
  bathrooms: number
  bedrooms: number
  parkingSpaces: number
  usableArea: number
}
