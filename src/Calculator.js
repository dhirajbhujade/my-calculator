import { useState } from "react";
import { Button } from "@mui/material";
import "./Calculator.css";

function NumPad(props) {

    return <div className="num-pad">
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
                return <Button size="small" variant="outlined" key={number} onClick={() => { props.onClick(number) }}>{number}</Button>
            })
        }
    </div>;
}

function OpsPad(props) {

    return <div className="op-pad">
        {
            ['/', '*', '+', '-', '=', 'C'].map((operator) => {
                return <Button size="small" variant="outlined" key={operator} onClick={() => { props.onClick(operator) }}>{operator}</Button>
            })
        }
    </div>;
}


function Calculator() {
    const [expression, setExpression] = useState('');
    const onButtonClick = (data) => {
        if (data === '=') {
            let result = Function("return " + expression)();
            setExpression(`${result}`);
        }
        else if (data === 'C') {
            setExpression("");
        }
        else {
            setExpression((previousExpression) => {
                return (previousExpression + data);
            });
        }
    };

    return <>
        <div className="container">
            <div className="result-panel">{expression}</div>
            <div className="numpad-opspad-container">
                <NumPad className="numpad-section" onClick={onButtonClick} />
                <OpsPad className="opspad-section" onClick={onButtonClick} />
            </div>
        </div>
    </>;
}

export default Calculator;