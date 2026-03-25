export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    message: string;
    id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
  }