import React, { useState, useEffect } from "react";

function category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState({
    category: "",
    slug: "",
    categoryColor: "",
  });

  const addCategory = async () => {
    try {
      const res = await fetch("/api/eventcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
      const data = await res.json();
      setCategories([...categories, data.success]);
      setCategory({
        category: "",
        slug: "",
        categoryColor: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await fetch("/api/eventcategory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      const res = await fetch("/api/eventcategory", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...category }),
      });
      const data = await res.json();
      setCategories(
        categories.map((category) =>
          category._id === id ? { ...category, ...data } : category
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/eventcategory");
      const data = await res.json();
      setCategories(data.category);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) =>
            setCategory({ ...category, category: e.target.value })
          }
            value={category.category}
        />
        <input
          type="text"
          placeholder="Slug"
          onChange={(e) => setCategory({ ...category, slug: e.target.value })}
          value={category.slug}
        />
        <input
          type="text"
          placeholder="Category Color"
          onChange={(e) =>
            setCategory({ ...category, categoryColor: e.target.value })
          }
          value={category.categoryColor}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {/* {categories.map((category) => (
              <div key={category._id}>
                <h2>{category.category}</h2>
                <h2>{category.slug}</h2>
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: category.categoryColor }}
                ></div>
              </div>
            ))} */}
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Slug</th>
                  <th>Category Color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category._id}>
                    <td>{category.category}</td>
                    <td>{category.slug}</td>
                    <td>
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{ backgroundColor: category.categoryColor }}
                      ></div>
                    </td>
                    <td>
                      <button onClick={() => deleteCategory(category._id)}>
                        Delete
                      </button>
                      <button
                        onClick={() => updateCategory(category._id, category)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default category;
