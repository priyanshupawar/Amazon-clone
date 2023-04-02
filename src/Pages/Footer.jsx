import React from 'react';
import styles from "../Styling/Footer.module.css";

const Footer = () => {
  const scroll = () => {
    window.scrollTo(0, 0);


  }
 
  return (
    <div style={{ backgroundColor: "rgb(35,47,62)", paddingBottom: "30px" }} >

      <button className={styles.gototop} onClick={scroll}>Scroll to top</button>
      <div className={styles.footer}>
        <div >

          <h4 style={{ color: "white" }}> Get to Know Us</h4>
          <div className={styles.anchortag}>
            <a href='.' style={{ color: 'aliceblue' }}>About Us</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Carrers</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Press Releases</a>
            <br />
            <a href='.' >Amazon Science</a>

          </div>



        </div>
        <div>
          <h4 style={{ color: "white" }}> Get to Know Us</h4>
          <div className={styles.anchortag}>
            <a href='.' style={{ color: 'aliceblue' }}>About Us</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Carrers</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Press Releases</a>
            <br />
            <a href='.' >Amazon Science</a>

          </div>
        </div>
        <div className={` ${styles.hidden123}`}> <h4 style={{ color: "white" }}> Get to Know Us</h4>
          <div className={styles.anchortag}>
            <a href='.' style={{ color: 'aliceblue' }}>About Us</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Carrers</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Press Releases</a>
            <br />
            <a href='.' >Amazon Science</a>

          </div>
        </div>
        <div className={` ${styles.hidden123}`}>
          <h4 style={{ color: "white" }}> Get to Know Us</h4>
          <div className={`${styles.anchortag}`}>
            <a href='.' style={{ color: 'aliceblue' }}>About Us</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Carrers</a>
            <br />
            <a href='.' style={{ color: 'aliceblue' }}>Press Releases</a>
            <br />
            <a href='.' >Amazon Science</a>

          </div>
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", color: "white", marginTop: "10px" }}>

        <div style={{ backgroundColor: "rgb(35,47,62)", color: "white" }}>
          <p>EKart</p>

        </div>
        <div>
          <select style={{ backgroundColor: "rgb(35,47,62)", color: "white", height: "30px" }}>
            <option value="volvo">English</option>
            <option value="saab">Hindi</option>
            <option value="opel">Sanskrit</option>
            <option value="audi">Pali</option>
          </select>
        </div>
      </div>
      <div className={styles.hiddentop} style={{ margin: "auto", display: "flex", gap: "20px", textAlign: "center", justifyContent: 'center', marginTop: "2px", color: "white", paddingTop: "20px" }}>
        <div className={styles.hidden123}>
          <a href="."> Australia</a>
        </div>
        <div className={styles.hidden123}>
          <a href="."> Brazil</a>
        </div > <div className={styles.hidden123}>
          <a href="."> Canada</a>
        </div> <div className={styles.hidden123}>
          <a href=".">  Germany</a>
        </div> <div>
          <a href=".">Netherlands</a>
        </div> <div>
          <a href="."> Singapore</a>
        </div> <div>
          <a href=".">United Arab Emirates</a>
        </div> <div>
          <a href=".">Turkey</a>
        </div> <div className={styles.hidden123}>
          <a href=".">  Mexico</a>
        </div>






      </div>


    </div>
  )
}
export default Footer