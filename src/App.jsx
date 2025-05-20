import React, { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    if (name.trim() && category.trim()) {
      const newItem = { name, category };
      setWishlist([...wishlist, newItem]);
      setName("");
      setCategory("");
    }
  };

  const handleRemove = (index) => {
    const newList = wishlist.filter((_, i) => i !== index);
    setWishlist(newList);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Wishlist Wizard</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-4">
        {wishlist.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 p-4 rounded"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400">{item.category}</p>
            </div>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
