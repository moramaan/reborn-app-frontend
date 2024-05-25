import { User } from '@/types/';
import { Product } from '@/types/';

//transform user fetched data to User type
export const transformUser = (user: any): User => {
  return {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    showPhone: user.showPhone,
    profileDescription: user.profileDescription,
    state: user.state,
    city: user.city,
  };
};

//transform product fetched data to Product type
export const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    userId: product.userId,
    title: product.title,
    description: product.description,
    price: product.price,
    location: product.location,
    state: product.state,
    condition: product.condition,
    publishDate: product.publishDate,
    images: product.images,
  };
};