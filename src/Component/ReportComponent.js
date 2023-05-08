import { useContext } from "react";
import DataContext from "../Data/DataContext";
import "./ReportComponent.css"

const ReportComponent =()=>{
    const {balance , income , expense} = useContext(DataContext)
    return (
        <div className = 'container'>
            <div className = 'box1'>
                <div className = 'reportBalance'>
                    <p className = 'header'>My Balance</p>
                    <p>฿ {balance.toLocaleString()}</p>
                </div>
            </div>
            <div className ='box2'>
                <div className = 'reportIncome'>
                <p className = 'header'>Income</p>
                <p>+ {income.toLocaleString()}</p>
                </div>
                <div className = 'reportExpense'>
                <p className = 'header'>Expense</p>
                <p>- {expense.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent