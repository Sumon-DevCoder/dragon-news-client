import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <section className="sticky top-5">
        <h2 className="mb-3 font-semibold text-lg">All Category</h2>
        <div className="p-5 space-y-4">
          {categories?.map((category) => (
            <Link
              className="block text-[#9F9F9F] font-semibold"
              key={category.id}
            >
              {category?.name}
            </Link>
          ))}
        </div>
      </section>
      <section>{/* {categories?.map((category)=>  )} */}</section>
    </>
  );
};

export default LeftSideNav;
