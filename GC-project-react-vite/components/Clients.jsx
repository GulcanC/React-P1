import React from "react";
import {clients} from "../constants";
import styles from "../src/style";


const Clients = () => (
 <section className={`${styles.flexCenter} ${styles.my4}`}>
  <div className={`${styles.flexCenter} ${styles.clientsDiv1}`}>
    {clients.map ((client ) => (
      <div key = {client.id} className={`${styles.flexCenter} ${styles.clientsDiv2}`}>
        <img src={client.logo} alt="client" className= {styles.clientImg}/></div>
    ))}
  </div>
 </section>
)

export default Clients;
