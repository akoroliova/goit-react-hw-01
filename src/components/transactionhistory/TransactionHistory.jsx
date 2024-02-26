import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(eachItem => {
          return (
            <tr className={css.row} key={eachItem.id}>
              <td className={css.dataCell}>{eachItem.type}</td>
              <td className={css.dataCell}>{eachItem.amount}</td>
              <td className={css.dataCell}>{eachItem.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
