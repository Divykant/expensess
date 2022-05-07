//v 12(date & dynamic from hard code)

// function Expenseitem(){
//     const expenseDate = new Date(2021, 2, 28);
//     const expenseTitle = 'Malai Chaap';
//     const expenseAmount = 220;

//     return(
//         <>
//             <div className="expense-item">
//                 <div> Date: {expenseDate.toDateString()} </div>
//                 <div className="expense-item_description">
                    
//                     <h1>{expenseTitle}</h1>
//                     <div className="expense-item_price">Rs. {expenseAmount}</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Expenseitem;


//v 13(props & api type dummy data using array)

// function Expenseitem(propsData){
    
    
//     return(
//         <>
//             <div className="expense-item">
//                 <div> Date: {propsData.date.toDateString()} </div>
//                 <div className="expense-item_description">
                    
//                     <h1>{propsData.title}</h1>
//                     <div className="expense-item_price">Rs. {propsData.amount}</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Expenseitem;


//v15 (date)


// function Expenseitem(propsData){
    
//     const month = propsData.date.toLocaleString('en-US', {month: 'long'});
//     const day = propsData.date.toLocaleString('en-US', {day: '2-digit'});
//     const year = propsData.date.getFullYear( );
    
//     return(
//         <>
//             <div className="expense-item">
                
//             <div>{month} </div>
//             <div>{year} </div>
//             <div>{day} </div>

//                 <div className="expense-item_description">
                    
//                     <h1>{propsData.title}</h1>
//                     <div className="expense-item_price">Rs. {propsData.amount}</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Expenseitem;

// v16 date's diff component

import ExpenseDate from "./ExpenseDate";
function Expenseitem(propsData){
    
   
    return(
        <>
            <div className="expense-item">
                <ExpenseDate date={propsData.date}/>
                <div className="expense-item_description">
                    
                    <h1>{propsData.title}</h1>
                    <div className="expense-item_price">Rs. {propsData.amount}</div>
                </div>
            </div>
        </>
    );
}

export default Expenseitem;