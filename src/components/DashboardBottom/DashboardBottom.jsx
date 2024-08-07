import React from "react";
import "./style.css";

const DashboardBottom = () => {
  return (
    <>
      <div className="recent-order-container">
        <h4>Recent Orders</h4>
        <div className="order-heading-container">
          <div className="recent-order-card border-hidden recent-heading">
            <p>Customer</p>
            <p>Order No.</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card ">
            <div className="profile">
              <p>Wade Warren</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery delivered">Delivered</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card">
            <div className="profile">
              <p>Jane Cooper</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery delivered">Delivered</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card">
            <div className="profile">
              <p>Guy Hawkin</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery status-pending">Pending</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card">
            <div className="profile">
              <p>Cody Fisher</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery status-pending">Pending</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card">
            <div className="profile">
              <p>Crish Watson</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery delivered">Delivered</p>
          </div>
        </div>
        <div className="order-heading-container">
          <div className="recent-order-card">
            <div className="profile">
              <p>Wade Warren</p>
            </div>
            <p>1524586489</p>
            <p>%124.00</p>
            <p className="status-delivery delivered">Delivered</p>
          </div>
        </div>
      </div>
      <div className="feedback-container">
        <h4>Customer's Feedback</h4>
        <div className="feedback-card">
          <div className="feedback-profile">
            <img src="./img/profile.png" />
            <p>Jenny Wilson</p>
          </div>
          <div>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bx-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum
            quasi, id ducimus eos repellat quis natus fugit inventore quas.
          </p>
        </div>
        <div className="feedback-card border-hidden">
          <div className="feedback-profile">
            <img src="./img/profile.png" />
            <p>Jenny Wilson</p>
          </div>
          <div>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bx-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum
            quasi, id ducimus eos repellat quis natus fugit inventore quas.
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardBottom;
