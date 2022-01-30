// export interface IProduct {
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
//   img?: string;
//   categoryID: number;
// }
export interface IProduct {
  id: number;
  title: string;
  quantity: number;
  price: number;
  description?: string;
  'category-id': number;
  image?: string;
  rating?: {
    rating: number;
    count: number;
  };
}
