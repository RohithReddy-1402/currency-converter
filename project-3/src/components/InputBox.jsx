import { useId } from "react";
import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const Id=useId();

    return (
        <div className="flex flex-wrap justify-center py-8">
        <div className={`bg-white p-3 rounded-lg text-sm w-96 flex justify-center  ${className}`}>
            <div className="w-1/2x">
                <label htmlFor={Id}    className="text-black/40 mb-2 inline-block text-red-700">
                    {label}
                </label>
                <input
                    id="amountInputId"
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <h className="text-black/40 mb-2 w-full">Currency Type</h>
                <select
                    className="rounded-2xl px-1 py-1 bg-gray-200 cursor-pointer outline-none border-amber-300"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                 {currencyOption.map((Currancy)=>(
                    <option key={Currancy} value={Currancy}>
                        {Currancy}
                    </option>
                 ))   
                        
                }
                </select>
            </div>
        </div>
        </div>
    );
}
export default InputBox;

