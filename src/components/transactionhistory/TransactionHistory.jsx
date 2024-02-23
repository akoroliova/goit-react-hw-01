const TransactionHistory = items => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {/* Кількість tr залежить від кількості об'єктів в масиві items */}
        <tr>
          {/* ??Кількість td залежить від ключів об'єктів в масиві items */}
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;
