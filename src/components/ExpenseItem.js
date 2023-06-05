import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );

  // return (
  // <div className='expense-item'>
  //     <div>{expenseDate.toISOString()}</div>
  //     <div className='expense-item__description'>
  //     <h2>{expenseTitle}</h2>
  //     <div className='expense-item__price'>{expenseAmount}</div>
  //     </div>
  // </div>
  // );

  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // return (
  //     <div className='expense-item'>
  //     <div>March 28th 2021</div>
  //     <div className='expense-item__description'>
  //         <h2>Car Insurance</h2>
  //         <div className='expense-item__price'>$294.67</div>
  //     </div>
  //     </div>
  // );
}
export default ExpenseItem;
