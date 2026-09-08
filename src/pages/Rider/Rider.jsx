import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import image from "../../assets/agent-pending.png";

const Rider = () => {
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
  const riderRegion = watch("riderRegion");

  const regionDuplicate = servicesCenter.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  //   console.log(region);
  const districtsByRegion = (region) => {
    const regionDistrict = servicesCenter.filter((c) => c.region === region);
    const district = regionDistrict.map((d) => d.district);
    return district;
  };

  const handelFromSubmit = (data) => {
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
        <h2 className="md:text-4xl text-2xl font-bold">Be a Rider</h2>
        <h3 className="w-xl text-md ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(handelFromSubmit)}
        className="space-y-5 border p-5 rounded-2xl bg-gray-50"
      >
        <div className="flex gap-8">
          {/* rider details */}
          <div className="fieldset w-6/12">
            <h3 className="text-2xl font-bold text-secondary">
              Tell us about yourself
            </h3>
            <div className="space-y-2">
              {/* rider name */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Rider Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("riderName", { required: true })}
                  placeholder="rider Name"
                  className="input input-sm w-full"
                />
                {errors.riderName?.type === "required" && (
                  <p className="text-red-500">Name Field is Required</p>
                )}
              </div>
              {/* rider Driving License */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Driving License Number
                </label>
                <input
                  type="text"
                  {...register("riderDriving", { required: true })}
                  placeholder="Driving License Number"
                  className="input input-sm w-full"
                />
                {errors.riderDriving?.type === "required" && (
                  <p className="text-red-500">
                    Rider Driving Field is Required
                  </p>
                )}
              </div>
              {/* rider email */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Rider Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("riderEmail", { required: true })}
                  placeholder="rider Email"
                  className="input input-sm w-full"
                />
                {errors.riderEmail?.type === "required" && (
                  <p className="text-red-500">email Field is Required</p>
                )}
              </div>
              {/* rider address */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Rider Address
                </label>
                <input
                  type="text"
                  {...register("riderAddress", { required: true })}
                  placeholder="Address"
                  className="input input-sm w-full"
                />
                {errors.riderAddress?.type === "required" && (
                  <p className="text-red-500">Address Field is Required</p>
                )}
              </div>
              {/* rider mobile */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Rider Phone No
                </label>
                <input
                  type="number"
                  {...register("riderPhone", { required: true })}
                  placeholder="rider Phone No"
                  className="input input-sm w-full"
                />
                {errors.riderPhone?.type === "required" && (
                  <p className="text-red-500">Phone Number Field is Required</p>
                )}
              </div>
              {/* rider Region */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  Rider Region
                </legend>
                <select
                  {...register("riderRegion")}
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
                {errors.riderRegion?.type === "required" && (
                  <p className="text-red-500">Region Field is Required</p>
                )}
              </fieldset>
              {/* rider district */}
              <fieldset className="fieldset">
                <legend className="label text-sm font-bold text-secondary">
                  Rider District
                </legend>
                <select
                  {...register("riderDistrict")}
                  defaultValue="Pick a district"
                  className="select input input-sm w-full"
                >
                  <option disabled={true} defaultValue={"Pick a District"}>
                    Pick a District
                  </option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.riderDistrict?.type === "required" && (
                  <p className="text-red-500">District Field is Required</p>
                )}
              </fieldset>
              {/* rider NID NO */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  NID No
                </label>
                <input
                  type="number"
                  {...register("riderNID", { required: true })}
                  placeholder="rider NID No"
                  className="input input-sm w-full"
                />
                {errors.riderNID?.type === "required" && (
                  <p className="text-red-500">NID Field is Required</p>
                )}
              </div>
              {/* rider address */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Bike Brand Model and Year
                </label>
                <input
                  type="text"
                  {...register("brandModel", { required: true })}
                  placeholder="Bike Brand Model and Year"
                  className="input input-sm w-full"
                />
                {errors.brandModel?.type === "required" && (
                  <p className="text-red-500">Brand Model Field is Required</p>
                )}
              </div>
              {/* bike Registration Number */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Bike Registration Number
                </label>
                <input
                  type="text"
                  {...register("registerNumber", { required: true })}
                  placeholder="Bike Registration Number"
                  className="input input-sm w-full"
                />
                {errors.registerNumber?.type === "required" && (
                  <p className="text-red-500">
                    Register Number Field is Required
                  </p>
                )}
              </div>
              {/* rider instruction */}
              <div>
                <label className="label text-sm font-bold text-secondary">
                  Tell Us About Yourself
                </label>
                <div>
                  <textarea
                    className="border w-12/12 p-2 text-md rounded-sm"
                    {...register("riderInstruction", { required: true })}
                    placeholder="text"
                  ></textarea>
                  {errors.riderInstruction?.type === "required" && (
                    <p className="text-red-500">comment Field is Required</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-100" src={image} alt="" />
          </div>
        </div>

        <input
          type="submit"
          value="send parcel"
          className="text-secondary bg-primary fond-bold btn w-6/12"
        />
      </form>
    </div>
  );
};

export default Rider;
