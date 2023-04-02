import React, { useState } from "react";
import styles from "../Styling/Header123.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Styled from "styled-components";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Shoes from "../Pages/Shoes";

const Headerstylecont = Styled.div`
    height:80px;
display:flex;
 align-items:center;
background-color: #131921;
position: sticky;
top:0;
z-index: 100;
padding:10px 9px;
@media (min-width:0px) and (max-width:850px){
    display:grid;
    grid-template-column:1fr 1fr;
    height:auto;
 
    
    
}
`;
const Paragraph = Styled.div`
height:80px;
display:flex;
 align-items:center;
background-color: #131921;
position: sticky;
top:0;
z-index: 100;
@media(min-width:0px) and (max-width:850px){
    display:flex;
    justify-content:space-between;
    margin-top:2px;
}
`;

const Header123 = () => {
  const [isAuth, setisAuth] = useState(true);
  const [name, setName] = useState("");

  auth.onAuthStateChanged((user) => {
    console.log(user.displayName);
    if (user.displayName !== null) {
      setisAuth(true);
      setName(user.displayName);
    }
  });

  const cartLength = useSelector((store) => store.cartReducer.cartData.length);

  console.log(styles, "styles");
  return (
    // <div className={styles.header}>
    <Headerstylecont className="header">
      <Paragraph className="12">
        <div>
          <Link to="/">
            <img className={styles.header_logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.header_location}>
          <div className={styles.header_locationlineone}>
            <p>{isAuth ? name : "Deliver to name"}</p>
          </div>
          <div className={styles.header_locationlineone}>
            <LocationOnIcon />
            <p>
              <span style={{ color: "white", fontWeight: "bold" }}>Place</span>
            </p>
          </div>
        </div>
      </Paragraph>

      <div className={styles.header_search}>
        <input className={`${styles.header_searchinput} `} type="text" />
        {/* search logo */}
        <SearchIcon className={styles.header_searchicon} />
      </div>
      <div className={styles.header_nav}>
        <div className={`${styles.header_option}  `}>
          <span className={styles.header_optionlineone}>HelloGuest</span>
          <span
            className={`${styles.header_optionlinetwo} ${styles.primeimagehover123}`}
          >
            {"SignInHere>"}
            <div
              className={`${styles.primeimage}`}
              style={{ marginTop: "2px" }}
            >
              <div style={{ color: "black", display: "flex" }}>
                <div>
                  <span>For Customers</span>
                  <br />
                  <Link to="/login">
                    {" "}
                    <button
                      style={{
                        border: "yellow",
                        backgroundColor: "rgb(205,144,66)",
                        padding: "5px 5px",
                        margin: "2px -02px",
                        cursor: "pointer",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        marginTop: "4px",
                      }}
                    >
                      Customer SignIn
                    </button>
                  </Link>
                </div>
                <div>
                  <span>For Developers</span>
                  <br />
                  <Link to="adminLogin">
                    {" "}
                    <button
                      style={{
                        border: "yellow",
                        backgroundColor: "rgb(205,144,66)",
                        padding: "5px 5px",
                        margin: "2px 10px",
                        cursor: "pointer",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        marginTop: "4px",
                      }}
                    >
                      Admin signin
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionlineone}>Returns</span>
          <span className={styles.header_optionlinetwo}>Orders</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionlineone}>Your</span>
          <span className={styles.header_optionlinetwo}>Prime</span>
        </div>
        <div className={styles.header_optionbasket}>
          <Link to="/cart">
            <AddShoppingCartIcon className={styles.header_optionbasket} />
          </Link>
          <span className={styles.header_optioncount}>{cartLength}</span>
        </div>
      </div>
    </Headerstylecont>

    // </div>
  );
};

export default Header123;
