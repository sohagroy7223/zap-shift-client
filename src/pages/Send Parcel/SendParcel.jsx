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

  const [district, setDistrict] = useState("");
  const [showDistricts, setShowDistricts] = useState(false);

  const filteredDistricts = districts.filter((item) =>
    item.toLowerCase().includes(district.toLowerCase()),
  );

  const handleDistrictSelect = (value) => {
    setDistrict(value);
    setShowDistricts(false);
  };
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h2 className="md:text-4xl text-2xl font-bold">Send A Parcel</h2>
        <h3 className="md:text-lg text-md font-bold">
          Enter your parcel details
        </h3>
      </div>
      <form className="space-y-5">
        {/* document filed  */}
        <div className="flex gap-6">
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="document" id="" /> Dcument
          </div>
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="document" id="" />
            not-Document
          </div>
        </div>
        {/* parcel info */}

        <div className="fieldset flex gap-4">
          <div className="w-6/12">
            <label className="label text-sm font-bold text-secondary">
              Parcel Name
            </label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-sm w-full"
            />
          </div>
          <div className="w-6/12">
            <label className="label text-sm font-bold text-secondary">
              Parcel Name
            </label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-sm w-full"
            />
          </div>
        </div>

        {/* 2 Column*/}
        <div className="flex gap-4">
          {/* sender details */}
          <div className="fieldset w-6/12">
            <h3 className="text-lg font-bold text-secondary">Sender Details</h3>

            <div className="space-y-2">
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Phone No
                </label>
                <input
                  type="number"
                  placeholder="Sender Phone No"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Your District
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      setShowDistricts(true);
                    }}
                    onFocus={() => setShowDistricts(true)}
                    placeholder="Search district"
                    className="input input-bordered w-full"
                  />

                  {showDistricts && (
                    <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
                      <div className="max-h-60 overflow-y-auto">
                        {filteredDistricts.length > 0 ? (
                          filteredDistricts.map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => handleDistrictSelect(item)}
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
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Pickup Instruction
                </label>
                <div>
                  <textarea
                    className="border w-12/12 p-2 text-md rounded-sm"
                    name=""
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
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver Contact No
                </label>
                <input
                  type="number"
                  placeholder="Receiver Contact No"
                  className="input input-sm w-full"
                />
              </div>
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Receiver District
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      setShowDistricts(true);
                    }}
                    onFocus={() => setShowDistricts(true)}
                    placeholder="Search district"
                    className="input input-bordered w-full"
                  />

                  {showDistricts && (
                    <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
                      <div className="max-h-60 overflow-y-auto">
                        {filteredDistricts.length > 0 ? (
                          filteredDistricts.map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => handleDistrictSelect(item)}
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
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Delivery Instruction
                </label>
                <div>
                  <textarea
                    className="border w-12/12 p-2 text-md rounded-sm"
                    name=""
                    placeholder="text"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
