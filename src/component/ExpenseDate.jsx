
//v16
function ExpenseDate(propsData){
    
    const month = propsData.date.toLocaleString('en-US', {month: 'long'});
    const day = propsData.date.toLocaleString('en-US', {day: '2-digit'});
    const year = propsData.date.getFullYear( );
    
    
    return(
        <>
               <div className="expense-date"> 
                <div className="expense-date_month">{month} </div>
                <div className="expense-date_year">{year} </div>
                <div className="expense-date_day">{day} </div>
               </div>
        </>
    );
}

export default ExpenseDate;