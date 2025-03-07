import { FaArrowsSpin } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuPackageX } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
import cancelpopup from "../../assets/images/icons/cancel.png";
import "./Orderdetail.css";
import { useState } from "react";
const Orderdetail = ({ yourOrders }) => {
  const [cancelPopup, setCancelPopup] = useState(false);

  const groupedOrders = yourOrders.reduce((acc, order) => {
    let existingOrder = acc.find((o) => o.order_id === order.order_id);
    if (existingOrder) {
      existingOrder.product_names.push(order.name);
    } else {
      acc.push({
        order_id: order.order_id,
        total_amount: order.total_amount,
        order_status: order.order_status,
        shipment_id: order.shipment_id,
        payment_id: order.payment_id,
        address: order.address,
        product_names: [order.name], // Initialize as an array
      });
    }
    return acc;
  }, []);

  console.log(groupedOrders);
  return (
    <>
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
              <th>Actions </th>
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
                <td>
                  <div className="btn-wrapper-ord-inf">
                    <button
                      className="cancel-order-btn"
                      onClick={() => setCancelPopup(true)}
                    >
                      Cancel
                    </button>
                    <button className="track-order-btn">Track</button>
                  </div>
                </td>
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
    </>
  );
};

export default Orderdetail;
