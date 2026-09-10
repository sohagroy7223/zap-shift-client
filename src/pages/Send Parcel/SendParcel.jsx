import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const servicesCenter = useLoaderData();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const regionDuplicate = servicesCenter.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  //   console.log(region);
  const districtsByRegion = (region) => {
    const regionDistrict = servicesCenter.filter((c) => c.region === region);
    const district = regionDistrict.map((d) => d.district);
    return district;
  };
  //   const districts = [
  //     "Bagerhat",
  //     "Bandarban",
  //     "Barguna",
  //     "Barishal",
  //     "Bhola",
  //     "Bogura",
  //     "Brahmanbaria",
  //     "Chandpur",
  //     "Chattogram",
  //     "Chuadanga",
  //     "Cox's Bazar",
  //     "Cumilla",
  //     "Dhaka",
  //     "Dinajpur",
  //     "Faridpur",
  //     "Feni",
  //     "Gaibandha",
  //     "Gazipur",
  //     "Gopalganj",
  //     "Habiganj",
  //     "Jamalpur",
  //     "Jashore",
  //     "Jhalokathi",
  //     "Jhenaidah",
  //     "Joypurhat",
  //     "Khagrachhari",
  //     "Khulna",
  //     "Kishoreganj",
  //     "Kurigram",
  //     "Kushtia",
  //     "Lakshmipur",
  //     "Lalmonirhat",
  //     "Madaripur",
  //     "Magura",
  //     "Manikganj",
  //     "Meherpur",
  //     "Moulvibazar",
  //     "Munshiganj",
  //     "Mymensingh",
  //     "Naogaon",
  //     "Narail",
  //     "Narayanganj",
  //     "Narsingdi",
  //     "Natore",
  //     "Netrokona",
  //     "Nilphamari",
  //     "Noakhali",
  //     "Pabna",
  //     "Panchagarh",
  //     "Patuakhali",
  //     "Pirojpur",
  //     "Rajbari",
  //     "Rajshahi",
  //     "Rangamati",
  //     "Rangpur",
  //     "Satkhira",
  //     "Shariatpur",
  //     "Sherpur",
  //     "Sirajganj",
  //     "Sunamganj",
  //     "Sylhet",
  //     "Tangail",
  //     "Thakurgaon",
  //   ];

  //   const [senderDistrict, setSenderDistrict] = useState("");
  //   const [receiverDistrict, setReceiverDistrict] = useState("");

  //   const [showSenderDistricts, setShowSenderDistricts] = useState(false);
  //   const [showReceiverDistricts, setShowReceiverDistricts] = useState(false);

  //   const filteredSenderDistricts = districts.filter((item) =>
  //     item.toLowerCase().includes(senderDistrict.toLowerCase()),
  //   );

  //   const filteredReceiverDistricts = districts.filter((item) =>
  //     item.toLowerCase().includes(receiverDistrict.toLowerCase()),
  //   );

  //   const handleSenderDistrictSelect = (value) => {
  //     setSenderDistrict(value);
  //     setShowSenderDistricts(false);
  //   };

  //   const handleReceiverDistrictSelect = (value) => {
  //     setReceiverDistrict(value);
  //     setShowReceiverDistricts(false);
  //   };

  const handelFromSubmit = (data) => {
    // console.log(data);
    const isDocument = data.parcel === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWait);
    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        // console.log(extraWeight);
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    // console.log("totalCost", cost);
    data.cost = cost;
    data.createdAt = new Date();

    Swal.fire({
      title: "agree with the cost ?",
      text: `You will be charged! ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes I agree",
    }).then((result) => {
      navigate("/dashboard/myParcels");
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          // console.log("after post ", res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "add your parcel!",
              text: "Your parcel has been added.",
              icon: "success",
            });
          }
        });
      }
    });
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
            {errors.parcelName?.type === "required" && (
              <p className="text-red-500">Parcel Name Field is Required</p>
            )}
          </div>
          <div className="w-6/12">
            <label className="label text-sm font-bold text-secondary">
              Parcel Wait (kg)
            </label>
            <input
              type="number"
              {...register("parcelWait", { required: true })}
              placeholder="Parcel weight(kg)"
              className="input input-sm w-full"
            />
            {errors.parcelWait?.type === "required" && (
              <p className="text-red-500">parcel weight Field is Required</p>
            )}
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
                  defaultValue={user?.displayName}
                  {...register("senderName", { required: true })}
                  placeholder="Sender Name"
                  className="input input-sm w-full"
                />
                {errors.senderName?.type === "required" && (
                  <p className="text-red-500">Name Field is Required</p>
                )}
              </div>
              {/* sender email */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Sender Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("senderEmail", { required: true })}
                  placeholder="Sender Email"
                  className="input input-sm w-full"
                />
                {errors.senderEmail?.type === "required" && (
                  <p className="text-red-500">email Field is Required</p>
                )}
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
                {errors.senderAddress?.type === "required" && (
                  <p className="text-red-500">Address Field is Required</p>
                )}
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
                {errors.senderPhone?.type === "required" && (
                  <p className="text-red-500">Phone number Field is Required</p>
                )}
              </div>
              {/* sender Region */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  sender Region
                </legend>
                <select
                  {...register("senderRegion", { required: true })}
                  defaultValue="Pick a Region"
                  className="select input input-sm w-full"
                >
                  <option disabled={true} defaultValue={"Pick a Region"}>
                    Pick a Region
                  </option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.senderRegion?.type === "required" && (
                  <p className="text-red-500">Region Field is Required</p>
                )}
              </fieldset>
              {/* sender district */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  Sender District
                </legend>
                <select
                  {...register("senderDistrict", { required: true })}
                  defaultValue="Pick a district"
                  className="select input input-sm w-full"
                >
                  <option disabled={true} defaultValue={"Pick a district"}>
                    Pick a district
                  </option>
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.senderDistrict?.type === "required" && (
                  <p className="text-red-500">District Field is Required</p>
                )}
              </fieldset>
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
                  ></textarea>
                  {errors.senderInstruction?.type === "required" && (
                    <p className="text-red-500">
                      Instruction Field is Required
                    </p>
                  )}
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
                {errors.receiverName?.type === "required" && (
                  <p className="text-red-500">Name Field is Required</p>
                )}
              </div>
              {/* receiver email */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  receiver Email
                </label>
                <input
                  type="email"
                  {...register("receiverEmail", { required: true })}
                  placeholder="Sender Email"
                  className="input input-sm w-full"
                />
                {errors.receiverEmail?.type === "required" && (
                  <p className="text-red-500">email Field is Required</p>
                )}
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
                {errors.receiverAddress?.type === "required" && (
                  <p className="text-red-500">Address Field is Required</p>
                )}
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
                {errors.receiverNumber?.type === "required" && (
                  <p className="text-red-500">Phone number Field is Required</p>
                )}
              </div>
              {/* Receiver Region */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  Receiver Region
                </legend>
                <select
                  {...register("receiverRegion", { required: true })}
                  defaultValue="Pick a browser"
                  className="select input input-sm w-full"
                >
                  <option>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.receiverRegion?.type === "required" && (
                  <p className="text-red-500">Region Field is Required</p>
                )}
              </fieldset>
              {/* Receiver district */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  Receiver District
                </legend>
                <select
                  {...register("receiverDistrict", { required: true })}
                  defaultValue="Pick a district"
                  className="select input input-sm w-full"
                >
                  <option
                    disabled={true}
                    defaultValue={"Pick a district"}
                  ></option>
                  {districtsByRegion(receiverRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.receiverDistrict?.type === "required" && (
                  <p className="text-red-500">Region Field is Required</p>
                )}
              </fieldset>
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
                  {errors.receiverInstruction?.type === "required" && (
                    <p className="text-red-500">Region Field is Required</p>
                  )}
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
