import { MenuItem } from '../types';

export const menuCategories = [
  'Appetizers',
  'Main Courses',
  'Desserts',
  'Beverages'
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls filled with truffle and parmesan, served with aioli',
    price: 16,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    popular: true
  },
  {
    id: 2,
    name: 'Burrata Caprese',
    description: 'Fresh burrata cheese with heirloom tomatoes, basil, and aged balsamic',
    price: 18,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'
  },
  {
    id: 3,
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower puree and pancetta crisps',
    price: 22,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
  },

  // Main Courses
  {
    id: 4,
    name: 'Wagyu Ribeye',
    description: 'Premium wagyu ribeye with roasted vegetables and red wine reduction',
    price: 65,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg',
    popular: true
  },
  {
    id: 5,
    name: 'Lobster Thermidor',
    description: 'Classic lobster thermidor with gruyere cheese and fine herbs',
    price: 48,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
  },
  {
    id: 6,
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique and seasonal vegetables',
    price: 38,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg'
  },
  {
    id: 7,
    name: 'Seafood Risotto',
    description: 'Creamy arborio risotto with mixed seafood and saffron',
    price: 32,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg'
  },

  // Desserts
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, vanilla ice cream',
    price: 12,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    popular: true
  },
  {
    id: 9,
    name: 'Crème Brûlée',
    description: 'Classic vanilla custard with caramelized sugar top',
    price: 10,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg'
  },
  {
    id: 10,
    name: 'Tiramisu',
    description: 'Traditional Italian tiramisu with espresso and mascarpone',
    price: 11,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg'
  },

  // Beverages
  {
    id: 11,
    name: 'House Wine Selection',
    description: 'Curated selection of red and white wines by the glass',
    price: 12,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
  },
  {
    id: 12,
    name: 'Craft Cocktails',
    description: 'Signature cocktails crafted by our expert mixologists',
    price: 15,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/2183478/pexels-photo-2183478.jpeg'
  },
  {
    id: 13,
    name: 'Artisan Coffee',
    description: 'Freshly roasted coffee beans from local artisan roasters',
    price: 5,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
  }
];