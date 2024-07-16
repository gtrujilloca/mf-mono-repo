export interface ProductDto {
  id:           number,
  title:        string,
  price:        string,
  category:     string,
  description:  string,
  image:        string
}

export interface Product {
  id:           number,
  title:        string,
  price:        string,
  category?:     string,
  description:  string,
  image:        string
}

