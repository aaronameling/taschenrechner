import {useEffect, useState} from "react";
import { evaluate } from "mathjs";
import Button from "./Button.jsx";
import "./Casetwo.css";

function Casetwo({addToHistory}) {

    const [number, setNumber] = useState("")
    const [display, setDisplay] = useState("");
    const [fontSize, setFontSize] = useState(3);


    useEffect(() => {
        const length = display.length
        if (length <= 7) {
            setFontSize(3);
        } else if (length <= 9) {
            setFontSize(2.5);
        } else if (length <= 11) {
            setFontSize(2);
        } else if (length <= 14) {
            setFontSize(1.6);
        } else if (length <= 17) {
            setFontSize(1.3);
        } else {
            setFontSize(1.1);
        }
    }, [display]);

    useEffect(() => {
        console.log("Neuer wert von number", number);
    }, [number]);


    const animateClick = (event) => {
        const button = event.currentTarget;
        button.classList.add("flash");
        setTimeout(() => {
            button.classList.remove("flash");
        }, 233);
    }

    const onclickHandlerNumber = (event, text) => {
        animateClick(event);
        setNumber(prevNumber =>
            prevNumber + text
        );
        setDisplay(prevDisplay =>
            prevDisplay + text
        );
    };

    const onClickHandlerOperator = (event, text) => {
        animateClick(event);
        let operatorValue = text;
        if (text === "÷"){
            operatorValue = "/"
        } else if (text === "×") {
            operatorValue = "*"
        }
        setNumber(prevNumber =>
        prevNumber + operatorValue
        );
        setDisplay(prevDisplay =>
            prevDisplay + ` ${text} `
        );
    };

    const onClickHandlerDelet = (event) => {
        animateClick(event);
        setNumber("")
        setDisplay("")
    };

    const onClickHandlerResult = (event) => {
        animateClick(event);
        try {
            // Eigenen Rechenweg
            const result = evaluate(number)
            setNumber(result.toString());
            setDisplay(result.toString());
            const calcPath = `${display} = ${result}`;
            addToHistory(calcPath);
            console.log(calcPath);
        } catch (error) {
            setDisplay("Fehler")
            console.log("Rechnung konnte nicht ausgeführt werden",error)
        }
    };


    return (
        <div className="case h-[85vh] sm:h-[75vh] md:h-[65vh] lg:h-[55vh] xl:h-[50vh]">
            <div className="display" style={{fontSize: `${fontSize}em`}}>
                {display || "0"}
            </div>
            <div className="container">
                <div className="row">
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-one"} text={"AC"} eventhandler={onClickHandlerDelet}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-one"} text={"("} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-one"} text={")"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-two"} text={"÷"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"7"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"8"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"9"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-two"} text={"×"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"4"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"5"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"6"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-two"} text={"-"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"1"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"2"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"3"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-two"} text={"+"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button stylesDiv={"w-[42%] h-auto rounded-[50px]"} styles={"button-two button-number"} text={"0"} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-number"} text={"."} eventhandler={onclickHandlerNumber}/>
                    <Button stylesDiv={"w-[19%]"} styles={"button-one button-operator-two"} text={"="} eventhandler={onClickHandlerResult}/>
                </div>
            </div>
        </div>
    );
}

export default Casetwo;


