import {useEffect, useState} from "react";
import Buttonzwei from "./Buttonzwei.jsx";
import Button from "./Button.jsx";
import "./Case.css";

function Case({addToHistory}) {
    const [number, setNumber] = useState("")
    const [operator, setOperator] = useState(null);
    const [firstNumber, setFirstNumber] = useState(null);

    const onclickHandlerNumber = (event, text) => {

        setNumber((prevNumber) =>
            prevNumber + text

        );
    };

    const onClickHandlerToggleMinus = (event, text) => {
        setNumber("-" + number);
    };

    useEffect(() => {
        console.log("Neuer wert von number", number);
    }, [number]);

    const onClickHandlerDelet = (event, text) => {
        setNumber("")
    };

    const onClickHandlerOperator = (event, text) => {
        let operatorValue = text;
        if (text === "÷"){
            operatorValue = "/"
        } else if (text === "x") {
            operatorValue = "*"
        }
        Number(setFirstNumber(number))
        setOperator(operatorValue);
        setNumber("")
    };

    const onClickHandlerModificator = (event, text) => {
        setNumber(prevNumber => {
            const porzentWert = Number(firstNumber) * Number(prevNumber / 100);
            return String(porzentWert);
        })

    };

    const onClickHandlerResult = (event, text) => {
        let result;
        switch (operator) {
            case "/":
                result = Number(firstNumber) / Number(number);
                break;
            case "*":
                result = Number(firstNumber) * Number(number);
                break;
            case "+":
                result = Number(firstNumber) + Number(number);
                break;
            case "-":
                result = Number(firstNumber) - Number(number);
                break;
            default:
                console.log("Unknown Operator", operator);
        }
        setNumber(String(result));
        const calcPath = `${firstNumber} ${operator} ${number} = ${result}`;
        console.log(calcPath);
        addToHistory(calcPath);
    };

    const test = (9 * 9 + 9) / (3 * 3 + 4)
    console.log(test)

    return (
        <div className="case">
            <div className="display">
                {number || "0"}
            </div>
            <div className="container">
                <div className="row">
                    <Button  styles={"button-operator-one"} text={"AC"} eventhandler={onClickHandlerDelet}/>
                    <Button  styles={"button-operator-one"} text={"+/-"} eventhandler={onClickHandlerToggleMinus}/>
                    <Button  styles={"button-operator-one"} text={"%"} eventhandler={onClickHandlerModificator}/>
                    <Button  styles={"button-operator-two"} text={"÷"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button styles={"button-number"} text={"7"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"8"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"9"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-operator-two"} text={"x"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button styles={"button-number"} text={"4"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"5"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"6"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-operator-two"} text={"-"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Button styles={"button-number"} text={"1"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"2"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"3"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-operator-two"} text={"+"} eventhandler={onClickHandlerOperator}/>
                </div>
                <div className="row">
                    <Buttonzwei styles={"buttonzwei-number"} text={"0"} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-number"} text={"."} eventhandler={onclickHandlerNumber}/>
                    <Button styles={"button-operator-two"} text={"="} eventhandler={onClickHandlerResult}/>
                </div>
            </div>
        </div>
    );
}

export default Case;


