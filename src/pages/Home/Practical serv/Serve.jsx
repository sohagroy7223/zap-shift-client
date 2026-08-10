import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const Serve = () => {
  return (
    <div className="  space-y-4">
      <div className="md:flex items-center p-2 gap-10 bg-white rounded-2xl space-y-5">
        {/* image */}
        <div className="flex justify-center md:border-r border-dashed p-5">
          <img className="w-55" src={liveTracking} alt="" />
        </div>

        {/* content */}
        <div className="space-y-3">
          <hr className="block md:hidden" />
          <h3 className="text-lg font-bold">Live Parcel Tracking</h3>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="md:flex items-center p-2 gap-10 bg-white rounded-2xl space-y-5">
        {/* image */}
        <div className="flex justify-center md:border-r border-dashed p-5">
          <img className="w-55" src={safeDelivery} alt="" />
        </div>

        {/* content */}
        <div className="space-y-3">
          <hr className="block md:hidden" />
          <h3 className="text-lg font-bold">100% Safe Delivery</h3>
          <p>
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="md:flex items-center p-2 gap-10 bg-white rounded-2xl space-y-5">
        {/* image */}
        <div className="flex justify-center md:border-r border-dashed p-5">
          <img className="w-55" src={safeDelivery} alt="" />
        </div>

        {/* content */}
        <div className="space-y-3">
          <hr className="block md:hidden" />
          <h3 className="text-lg font-bold">24/7 Call Center Support</h3>
          <p>
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serve;
