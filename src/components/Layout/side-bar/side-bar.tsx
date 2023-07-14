import React from 'react'
import styles from '../side-bar/side-bar.module.css'
import { RxDashboard, RxPerson, RxCounterClockwiseClock, RxFileText, RxUpdate, RxBarChart } from "react-icons/rx";

export default function SideBar() {
  return (
    <div className={styles.rice}>
      <div className={styles.sidebar_profile}>
        <img src='https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart' alt='avatar' className={styles.sidebar_profile_pic} />
        Hello, Arrey-Etta
      </div> 
      <div className={styles.sidebar_columns}>
        <span className={styles.sidebar_columns_title}>Administration</span>
        <div className={styles.sidebar_rows}>
        <span className={styles.sidebar_rows_item}><RxDashboard /> Dashboard</span>
        <span className={styles.sidebar_rows_item}><RxPerson /> Members</span>
        </div>
      </div>

      <div className={styles.sidebar_columns}>
        <span className={styles.sidebar_columns_title}>Managments</span>
        <div className={styles.sidebar_rows}>
        <span className={styles.sidebar_rows_item}><RxCounterClockwiseClock /> Request</span>
        <span className={styles.sidebar_rows_item}><RxFileText /> Invoices</span>
        <span className={styles.sidebar_rows_item}><RxUpdate /> Transactions</span>
        </div>
      </div>


      <div className={styles.sidebar_columns}>
        <span className={styles.sidebar_columns_title}>Accounting</span>
        <div className={styles.sidebar_rows}>
        <span className={styles.sidebar_rows_item}><RxBarChart /> Reports</span>
        </div>
      </div>

<div className={styles.sidebar_button_section}>
<button className={styles.sidebar_button}>Sign out</button>
</div>

    </div>
  )
}
