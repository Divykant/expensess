
//v 12(till date & dynamic)

// import Expenseitem from './component/Expenseitem';
// import './App.css';

// function App() {
//   return (
//     <>
//         <Expenseitem/>
//         <Expenseitem/>
//         <Expenseitem/>
//         <Expenseitem/>
//     </>
//   );
// }

// export default App;

//v13(props)

// import Expenseitem from './component/Expenseitem';
// import './App.css';

// function App() {

//   const expense = [
    
//       {
//         "id": 1,
//         "amount": "50.34",
//         "title": "Ras malai",
//         "date": new Date(2020, 5, 12),
//       },

//       {
//         "id": 2,
//         "amount": "60.34",
//         "title": "paneer",
//         "date": new Date(2021, 5, 12),
//       },
//       {
//         "id": 3,
//         "amount": "80.34",
//         "title": "momos",
//         "date": new Date(2022, 5, 12),
//       },
//       {
//         "id": 4,
//         "amount": "20.34",
//         "title": "dosa",
//         "date": new Date(2021, 5, 12),
//       },
//     ];
  

//   return (
//     <>
//       <Expenseitem 
//       number={expense[0].id} 
//       title={expense[0].title} 
//       amount={expense[0].amount} 
//       date={expense[0].date} />
//       <Expenseitem 
//       number={expense[1].id} 
//       title={expense[1].title} 
//       amount={expense[1].amount} 
//       date={expense[1].date} />
//       <Expenseitem 
//       number={expense[2].id} 
//       title={expense[2].title} 
//       amount={expense[2].amount} 
//       date={expense[2].date} />
//       <Expenseitem 
//       number={expense[3].id} 
//       title={expense[3].title} 
//       amount={expense[3].amount} 
//       date={expense[3].date} />
      
//     </>
//   );
// }

// export default App;


//v15


// import Expenseitem from './component/Expenseitem';
// import './App.css';

// function App() {

//   const expense = [
    
//       {
//         "id": 1,
//         "amount": "50.34",
//         "title": "Ras malai",
//         "date": new Date(2020, 5, 12),
//       },

//       {
//         "id": 2,
//         "amount": "60.34",
//         "title": "paneer",
//         "date": new Date(2021, 5, 12),
//       },
//       {
//         "id": 3,
//         "amount": "80.34",
//         "title": "momos",
//         "date": new Date(2022, 5, 12),
//       },
//       {
//         "id": 4,
//         "amount": "20.34",
//         "title": "dosa",
//         "date": new Date(2021, 5, 12),
//       },
//     ];
  

//   return (
//     <>
//       <Expenseitem 
//       number={expense[0].id} 
//       title={expense[0].title} 
//       amount={expense[0].amount} 
//       date={expense[0].date} />
//       <Expenseitem 
//       number={expense[1].id} 
//       title={expense[1].title} 
//       amount={expense[1].amount} 
//       date={expense[1].date} />
//       <Expenseitem 
//       number={expense[2].id} 
//       title={expense[2].title} 
//       amount={expense[2].amount} 
//       date={expense[2].date} />
//       <Expenseitem 
//       number={expense[3].id} 
//       title={expense[3].title} 
//       amount={expense[3].amount} 
//       date={expense[3].date} />
      
//     </>
//   );
// }

// export default App;


// v15


import Expenseitem from './component/Expenseitem';
import './App.css';

function App() {

  const expense = [
    
      {
        "id": 1,
        "amount": "50.34",
        "title": "Ras malai",
        "date": new Date(2020, 5, 12),
      },

      {
        "id": 2,
        "amount": "60.34",
        "title": "paneer",
        "date": new Date(2021, 5, 12),
      },
      {
        "id": 3,
        "amount": "80.34",
        "title": "momos",
        "date": new Date(2022, 5, 12),
      },
      {
        "id": 4,
        "amount": "20.34",
        "title": "dosa",
        "date": new Date(2021, 5, 12),
      },
    ];
  

  return (
    <>
      <Expenseitem  
      title={expense[0].title} 
      amount={expense[0].amount} 
      date={expense[0].date} />

      
      <Expenseitem 
      title={expense[1].title} 
      amount={expense[1].amount} 
      date={expense[1].date} />


      <Expenseitem 
      title={expense[2].title} 
      amount={expense[2].amount} 
      date={expense[2].date} />

      <Expenseitem 
      title={expense[3].title} 
      amount={expense[3].amount} 
      date={expense[3].date} />
      
    </>
  );
}

export default App;
