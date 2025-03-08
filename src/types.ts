export interface Robot {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
  stock: number;
}

export interface CartItem {
  robot: Robot;
  quantity: number;
}