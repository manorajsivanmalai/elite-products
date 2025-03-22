import { FaArrowsSpin } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import cancelpopup from "../../assets/images/icons/cancel.png";
import "./Orderdetail.css";
import { useState } from "react";
const Orderdetail = ({ yourOrders }) => {
  const [cancelPopup, setCancelPopup] = useState(false);

  const groupedOrders = yourOrders.reduce((acc, order) => {
    let existingOrder = acc.find((o) => o.order_id === order.order_id);
    if (existingOrder) {
      existingOrder.product_names.push(order.title);
    } else {
      acc.push({
        order_id: order.order_id,
        total_amount: order.total_amount,
        order_status: order.order_status,
        shipment_id: order.shipment_id,
        payment_id: order.payment_id,
        address: order.address,
        product_names: [order.title], 
      });
    }
    return acc;
  }, []);

  console.log(groupedOrders);
  return (
    yourOrders.length ? <>
      <section className="orderinfo-table-wrapper">
        <table className="orderinfo-table">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product Name</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Total</th>
              <th>Address</th>
              {/* <th>Actions </th> */}
            </tr>
          </thead>
          <tbody>
            {groupedOrders.map((ord) => (
              <tr key={ord.order_id}>
                <td>{ord.order_id}</td>
                <td>{ord.product_names.join(", ")}</td>{" "}
                {/* Join array into a string */}
                <td>
                  <span className="pros-ord">
                    <FaArrowsSpin />
                    {ord.order_status}
                  </span>
                </td>   
                <td>
                  <span className="pros-ord">
                    <TiTick /> {ord.payment_id ? "Paid" : "Not Paid"}
                  </span>
                </td>
                <td>{ord.total_amount}</td>
                <td>{ord.address}</td>
                {/* <td>
                  <div className="btn-wrapper-ord-inf">
                    <button
                      className="cancel-order-btn"
                      onClick={() => setCancelPopup(true)}
                    >
                      Cancel
                    </button>
                    <button className="track-order-btn">Track</button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {cancelPopup && (
        <div className="cancel-popup-wrapper">
          <div className="cancel-popup-inner text-center">
            <img src={cancelpopup} width="63px" alt="" />
            <h3 className="pop-can-tit">
              Do you really want to cancel this product?
            </h3>

            <div className="pop-can-order">
              <button
                className="btn-keep-popup"
                onClick={() => setCancelPopup(false)}
              >
                Keep Order
              </button>
              <button className="btn-Cancel-popup">Cancel the Order</button>
            </div>
          </div>
        </div>
      )}
    </>: <>

<div className="no-orders-container">
  <svg className="illustration" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5L12 12L21 5" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9H16" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 13H16" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
  <h2 className="no-orders-title">No Orders Yet</h2>
  <p className="no-orders-text">
    It looks like you haven't placed any orders. <br />
    Start shopping to fill this space with your purchases!
  </p>
  <button className="cta-button">
    Start Shopping
  </button>
</div></>

  );
};

export default Orderdetail;
