import './FormComponent.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FormComponent =(props)=>{
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [status,setStatus] = useState('Income')
    const [formValid,setFormValid] = useState(false)

    const inputCategory = (event)=>{
        setCategory(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            category:category,
            amount:Number(amount),
            status:status
        }
        props.onAddItem(itemData);
        setCategory('')
        setAmount('')
    }
    const delItem = (event)=>{
        event.preventDefault()
        setCategory('')
        setAmount('')
    }
    const changeIncome = (event)=>{
        event.preventDefault()
        setStatus('Income')
    }
    const changeExpense = (event)=>{
        event.preventDefault()
        setStatus('Expense')
    }

    // ถ้าดักเจอการเปลี่ยนแปลงใน Category Amount จะให้ทำอะไร
    useEffect(()=>{
        const checkData = category.trim().length>0 && amount !==0
        setFormValid(checkData)
    },[category,amount])

    return(
        <div>
            <form>
                <div>
                    <div className = 'head'>Add New Transaction</div>
                    <hr />
                </div>
                <div className = 'button1'>
                    <button type = 'income' className = 'btn1' onClick = {changeIncome} >Income</button>
                    <button type = 'expense' className = 'btn2' onClick = {changeExpense} >Expense</button>
                </div>
                <div className = 'form-control'>
                    <label>Text</label>
                    <input className = {status} type = 'text' placeholder = "(Enter Text...)" onChange = {inputCategory} value = {category}/>
                </div>
                <div className = 'form-control'>
                    <label>Amount</label>
                    <input className = {status} type = 'number' placeholder = "(Enter Amount...)" onChange = {inputAmount} value = {amount}/>
                </div>
                <div>
                    <button type = 'submit' className = 'btn3' onClick = {saveItem} disabled = {!formValid}>Save</button>
                    <button type = 'del' className = 'btn4' onClick = {delItem}>delete</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent