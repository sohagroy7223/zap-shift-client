import React from "react";

const FAQ = () => {
  return (
    <div className="space-y-10">
      <div className="md:w-3xl mx-auto text-center">
        <h3 className=" md:text-2xl text-lg text-center font-bold px-3">
          Frequently Asked Question (FAQ)
        </h3>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="space-y-3">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
            Yes. Our service is designed to be convenient and accessible for
            people of different ages and needs. We focus on providing a safe,
            comfortable, and hassle-free experience for everyone.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            It can help support better posture and may reduce discomfort when
            used consistently and correctly. Results can vary from person to
            person, so it’s best to use it as part of healthy posture and
            movement habits.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            Yes. It includes smart features such as vibration alerts that gently
            remind you when your posture needs adjustment. This makes it easier
            to maintain better posture throughout the day.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            You can sign up for restock notifications using your email address.
            Once the product is available again, we’ll send you an email so you
            can purchase it without missing out.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
