import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const [senderDistrict, setSenderDistrict] = useState("");
  const [receiverDistrict, setReceiverDistrict] = useState("");

  const [showSenderDistricts, setShowSenderDistricts] = useState(false);
  const [showReceiverDistricts, setShowReceiverDistricts] = useState(false);

  const filteredSenderDistricts = districts.filter((item) =>
    item.toLowerCase().includes(senderDistrict.toLowerCase()),
  );

  const filteredReceiverDistricts = districts.filter((item) =>
    item.toLowerCase().includes(receiverDistrict.toLowerCase()),
  );

  const handleSenderDistrictSelect = (value) => {
    setSenderDistrict(value);
    setShowSenderDistricts(false);
  };

  const handleReceiverDistrictSelect = (value) => {
    setReceiverDistrict(value);
    setShowReceiverDistricts(false);
  };

  const handelFromSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h2 className="md:text-4xl text-2xl font-bold">Send A Parcel</h2>
        <h3 className="md:text-lg text-md font-bold">
          Enter your parcel details
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(handelFromSubmit)}
        className="space-y-5 border p-5 rounded-2xl bg-gray-50"
      >
        {/* document filed  */}
        <div className="flex gap-6">
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              {...register("parcel")}
              value="document"
              defaultChecked
              id=""
            />{" "}
            Document
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              {...register("parcel")}
              value="non-document"
              id=""
            />
            not-Document
          </div>
        </div>
        {/* parcel info */}

        <div className="fieldset flex gap-8 py-3">
          <div className="w-6/12">
            <label className="label text-sm font-bold text-secondary">
              Parcel Name
            </label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              placeholder="Parcel Name"
              className="input input-sm w-full"
            />
          </div>
          <div className="w-6/12">
            <label className="label text-sm font-bold text-secondary">
              Parcel Wait (kg)
            </label>
            <input
              type="number"
              {...register("parcelWait", { required: true })}
              placeholder="Parcel Name"
              className="input input-sm w-full"
            />
          </div>
        </div>

        {/* 2 Column*/}
        <div className="flex gap-8">
          {/* sender details */}
          <div className="fieldset w-6/12">
            <h3 className="text-lg font-bold text-secondary">Sender Details</h3>
            <div className="space-y-2">
              {/* sender name */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Name
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  placeholder="Sender Name"
                  className="input input-sm w-full"
                />
              </div>
              {/* sender email */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Email
                </label>
                <input
                  type="email"
                  {...register("senderEmail", { required: true })}
                  placeholder="Sender Email"
                  className="input input-sm w-full"
                />
              </div>
              {/* sender address */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Address
                </label>
                <input
                  type="text"
                  {...register("senderAddress", { required: true })}
                  placeholder="Address"
                  className="input input-sm w-full"
                />
              </div>
              {/* sender mobile */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Phone No
                </label>
                <input
                  type="number"
                  {...register("senderPhone", { required: true })}
                  placeholder="Sender Phone No"
                  className="input input-sm w-full"
                />
              </div>
              {/* sender district */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender District
                </label>

                <div className="relative">
                  <input
                    type="text"
                    {...register("senderDistrict", { required: true })}
                    value={senderDistrict}
                    onChange={(e) => {
                      setSenderDistrict(e.target.value);
                      setShowSenderDistricts(true);
                    }}
                    onFocus={() => setShowSenderDistricts(true)}
                    placeholder="Search sender district"
                    className="input input-bordered w-full"
                  />

                  {showSenderDistricts && (
                    <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
                      <div className="max-h-60 overflow-y-auto">
                        {filteredSenderDistricts.length > 0 ? (
                          filteredSenderDistricts.map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => handleSenderDistrictSelect(item)}
                              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              {item}
                            </button>
                          ))
                        ) : (
                          <p className="px-4 py-3 text-gray-500">
                            District not found
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* sender instruction */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Pickup Instruction
                </label>
                <div>
                  <textarea
                    className="border w-12/12 p-2 text-md rounded-sm"
                    {...register("senderInstruction", { required: true })}
                    placeholder="text"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* receiver details */}
          <div className="fieldset w-6/12">
            <h3 className="text-lg font-bold text-secondary">
              Receiver Details
            </h3>
            <div className="space-y-2">
              {/* receiver  name*/}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Name
                </label>
                <input
                  type="text"
                  {...register("receiverName", { required: true })}
                  placeholder="Receiver Name"
                  className="input input-sm w-full"
                />
              </div>
              {/* receiver email */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  receiver Email
                </label>
                <input
                  type="email"
                  {...register("senderEmail", { required: true })}
                  placeholder="Sender Email"
                  className="input input-sm w-full"
                />
              </div>
              {/* receiver address */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Address
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: true })}
                  placeholder="Address"
                  className="input input-sm w-full"
                />
              </div>
              {/* receiver mobile */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Contact No
                </label>
                <input
                  type="number"
                  {...register("receiverNumber", { required: true })}
                  placeholder="Receiver Contact No"
                  className="input input-sm w-full"
                />
              </div>
              {/* receiver district */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver District
                </label>

                <div className="relative">
                  <input
                    type="text"
                    {...register("receiverDistrict", { required: true })}
                    value={receiverDistrict}
                    onChange={(e) => {
                      setReceiverDistrict(e.target.value);
                      setShowReceiverDistricts(true);
                    }}
                    onFocus={() => setShowReceiverDistricts(true)}
                    placeholder="Search receiver district"
                    className="input input-bordered w-full"
                  />

                  {showReceiverDistricts && (
                    <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
                      <div className="max-h-60 overflow-y-auto">
                        {filteredReceiverDistricts.length > 0 ? (
                          filteredReceiverDistricts.map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => handleReceiverDistrictSelect(item)}
                              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              {item}
                            </button>
                          ))
                        ) : (
                          <p className="px-4 py-3 text-gray-500">
                            District not found
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* receiver instruction */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Delivery Instruction
                </label>
                <div>
                  <textarea
                    className="border w-12/12 p-2 text-md rounded-sm"
                    {...register("receiverInstruction", { required: true })}
                    placeholder="text"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="send parcel"
            className="text-secondary bg-primary fond-bold btn "
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
