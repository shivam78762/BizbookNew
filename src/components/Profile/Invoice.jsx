import React from "react";
import Left from "./Left";
import Right from "./right";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Invoice = () => {
    const invoiceData = [
        { id: 1, name: 'Premium Plus Plan', paymentDate: '28, Dec 2019', amount: '$150', downloadLink: 'images/invoices/66625invoice-(4).pdf' },
        { id: 2, name: 'Premium Plus Plan', paymentDate: '28, Dec 2019', amount: '$50', downloadLink: 'images/invoices/60279invoice-(4).pdf' },
        { id: 3, name: 'Premium Plus Plan', paymentDate: '28, Dec 2019', amount: '$120', downloadLink: 'images/invoices/25142invoice-(5).pdf' },
        { id: 4, name: 'Premium Plus Plan', paymentDate: '29, Dec 2019', amount: '$15', downloadLink: null },
      ];
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left" >
            <Left />
          </div>
          <div className="dashboard-center" >
          <div className="ud-cen">
      <div className="log-bor">&nbsp;</div> 
      <span className="udb-inst">Invoices</span>
      <div className="ud-cen-s2">
        <h2>Payment Invoices</h2>
        <table className="responsive-table bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Payment date</th>
              <th>Amount</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.name}</td>
                <td>{invoice.paymentDate}</td>
                <td><span className="db-list-rat">{invoice.amount}</span></td>
                <td>
                  {invoice.downloadLink ? (
                    <Link to="" download={`Invoice-${invoice.id}`} className="db-invo-dwn"><FontAwesomeIcon icon={faDownload} />Download Invoice</Link>
                  ) : (
                    "Invoice N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
          <div className="dashboard-right" >
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
