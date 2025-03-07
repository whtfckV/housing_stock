type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
