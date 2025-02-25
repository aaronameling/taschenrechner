import React, { useState } from "react";
import Button from "./Button";
import Buttonzwei from "./Buttonzwei";
import styles from "./Case.module.css"

function Case() {
    return (
        <div className={styles.case}>
            <div className={styles.display}>

            </div>
            <div className={styles.div}>
                <div className={styles.row}>
                    <Button type="button" backgroundColor="#a6a4a7" color="black" text="AC"/>
                    <Button type="button" backgroundColor="#a6a4a7" color="black" text="+/-"/>
                    <Button type="button" backgroundColor="#a6a4a7" color="black" text="%"/>
                    <Button type="button" backgroundColor="#ffa10e" color="white" text="÷"/>
                </div>
                <div className={styles.row}>
                    <Button type="button" backgroundColor="#343235" color="white" text="7"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="8"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="9"/>
                    <Button type="button" backgroundColor="#ffa10e" color="white" text="x"/>
                </div>
                <div className={styles.row}>
                    <Button type="button" backgroundColor="#343235" color="white" text="4"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="5"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="6"/>
                    <Button type="button" backgroundColor="#ffa10e" color="white" text="-"/>
                </div>
                <div className={styles.row}>
                    <Button type="button" backgroundColor="#343235" color="white" text="1"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="2"/>
                    <Button type="button" backgroundColor="#343235" color="white" text="3"/>
                    <Button type="button" backgroundColor="#ffa10e" color="white" text="+"/>
                </div>
                <div className={styles.row}>
                    <Buttonzwei type="button" backgroundColor="#343235" color="white" text="0"/>
                    <Button type="button" backgroundColor="#343235" color="white" text=","/>
                    <Button type="button" backgroundColor="#ffa10e" color="white" text="="/>
                </div>
            </div>
        </div>
    );
}

export default Case;


