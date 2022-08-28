// import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { API_URL } from "../../../utils/utils";
// import logoWhite from "/img/logo/logo-white.png";
// import logo from "/img/logo/logo.png";
const getData = async () => {
  return
}
const Catagory = ({ whiteMenu }) => {
  const [catMenu, setCatMenu] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(`${API_URL}/api/categories`)
      data = await data.json()
      setCategory(data?.data.map(each => ({ name: each.attributes.name, id: each.id })))
    }
    fetchData()
  }, [])


  return (
    <Fragment>
      <div className="d-flex">
        <div
          className="basic-bar cat-toggle"
          onClick={() => setCatMenu(!catMenu)}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </div>
      </div>
      <div className="logo mt-2">
        <Link href="/">
          <a>
            <img
              src={
                whiteMenu ? "/img/logo/logo-white.png" : "/img/logo/logo.png"
              }
              alt="Logo"
            />
          </a>
        </Link>
      </div>

      <div className={`category-menu d-block ${catMenu ? "block" : ""}`}>
        <h4>Category</h4>
        <ul>
          {category &&
            category.map((category) => (
              <li key={category.id}>
                <Link href={`/shop/?id=${category.id}`}>
                  <a className="text-capitalize">
                    <i className="flaticon-shopping-cart-1" /> {category.name}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Catagory;