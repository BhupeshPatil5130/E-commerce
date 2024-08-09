import React from 'react';

const categories = [
  { name: 'Top Offer', icon: '🔥' },
  { name: 'Mobiles & Tablets', icon: '📱' },
  { name: 'TVs & Appliances', icon: '📺' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Home & Kitchen', icon: '🏡' },
  { name: 'Furniture', icon: '🛋️' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Grocery', icon: '🛒' },
];

const CategoryNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {categories.map((category) => (
        <a
          href="#"
          key={category.name}
          className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full text-2xl mb-2">
            {category.icon}
          </div>
          <span className="text-gray-700 font-medium">{category.name}</span>
        </a>
      ))}
    </div>
  );
};

export default CategoryNav;
