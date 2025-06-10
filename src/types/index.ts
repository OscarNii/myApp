export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  orderType: 'delivery' | 'pickup';
  specialInstructions?: string;
}