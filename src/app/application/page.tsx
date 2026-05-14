"use client";
//File :- src/app/application/page.tsx
import { useState, FormEvent } from "react";
import PageHero from "../../../components/page-hero";

const RED_BG = "#E94454";

type FormState = Record<string, string>;

const initialState: FormState = {
  studentName: "",
  dob: "",
  admittingClass: "",
  presentSchool: "",
  nationality: "",
  place: "",
  fatherName: "",
  fatherQualification: "",
  fatherOccupation: "",
  motherName: "",
  motherQualification: "",
  motherOccupation: "",
  mobile: "",
  altMobile: "",
  email: "",
  address: "",
  pincode: "",
  admissionSought: "",
  transportation: "",
};

const inputClass =
  "w-full px-5 py-3.5 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/15 transition-colors";
const inputStyle = { background: "rgba(0,0,0,0.08)" };
const labelClass =
  "block text-[14px] font-semibold text-white mb-2";

export default function ApplicationPage() {
  const [data, setData] = useState<FormState>(initialState);

  const update = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Hook into your real backend here.
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Application" }]}
        title="Application"
      />

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div
            className="relative overflow-hidden p-6 md:p-10 lg:p-14"
            style={{
              background: RED_BG,
              backgroundImage: "url(/contactimagebgforform.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative">
              <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
                Application Form
              </h2>
              <p className="mt-1 text-[15px] text-white/95">Get in touch with us</p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                {/* Row 1 */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>Student Name *</label>
                    <input
                      type="text"
                      required
                      value={data.studentName}
                      onChange={update("studentName")}
                      placeholder="Enter Student Name *"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={data.dob}
                      onChange={update("dob")}
                      placeholder="dd-mm-yyyy"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Admitting Class</label>
                    <input
                      type="text"
                      value={data.admittingClass}
                      onChange={update("admittingClass")}
                      placeholder="Enter Admitting Class"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>Present School Name</label>
                    <input
                      type="text"
                      value={data.presentSchool}
                      onChange={update("presentSchool")}
                      placeholder="Enter Present School Name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Nationality</label>
                    <input
                      type="text"
                      value={data.nationality}
                      onChange={update("nationality")}
                      placeholder="Enter Nationality"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Place</label>
                    <input
                      type="text"
                      value={data.place}
                      onChange={update("place")}
                      placeholder="Enter Place"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3 — Father */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>
                      Father&rsquo;s Name (IN BLOCK LETTERS)
                    </label>
                    <input
                      type="text"
                      value={data.fatherName}
                      onChange={update("fatherName")}
                      placeholder="Enter Father's Name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Father&rsquo;s Qualification
                    </label>
                    <input
                      type="text"
                      value={data.fatherQualification}
                      onChange={update("fatherQualification")}
                      placeholder="Enter Father's Qualification"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Father&rsquo;s Occupation
                    </label>
                    <input
                      type="text"
                      value={data.fatherOccupation}
                      onChange={update("fatherOccupation")}
                      placeholder="Enter Father's Occupation"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 4 — Mother */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>
                      Mother&rsquo;s Name (IN BLOCK LETTERS)
                    </label>
                    <input
                      type="text"
                      value={data.motherName}
                      onChange={update("motherName")}
                      placeholder="Enter Mother's Name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Mother&rsquo;s Qualification
                    </label>
                    <input
                      type="text"
                      value={data.motherQualification}
                      onChange={update("motherQualification")}
                      placeholder="Enter Mother's Qualification"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Mother&rsquo;s Occupation
                    </label>
                    <input
                      type="text"
                      value={data.motherOccupation}
                      onChange={update("motherOccupation")}
                      placeholder="Enter Mother's Occupation"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 5 — Contact */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={data.mobile}
                      onChange={update("mobile")}
                      placeholder="Enter Mobile Number *"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Alternate Mobile</label>
                    <input
                      type="tel"
                      value={data.altMobile}
                      onChange={update("altMobile")}
                      placeholder="Enter Alternate Mobile"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={update("email")}
                      placeholder="Enter Email"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 6 — Address (full width) */}
                <div>
                  <label className={labelClass}>Residential Address *</label>
                  <input
                    type="text"
                    required
                    value={data.address}
                    onChange={update("address")}
                    placeholder="Enter Residential Address*"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Row 7 — Pincode / Admission Sought / Transportation */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>Pincode</label>
                    <input
                      type="text"
                      value={data.pincode}
                      onChange={update("pincode")}
                      placeholder="Enter Pincode"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Admission Sought</label>
                    <select
                      value={data.admissionSought}
                      onChange={update("admissionSought")}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="" className="text-black">Select Admission Sought</option>
                      <option value="day-scholar" className="text-black">Day Scholar</option>
                      <option value="residential" className="text-black">Residential</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Transportation</label>
                    <select
                      value={data.transportation}
                      onChange={update("transportation")}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="" className="text-black">Select Transportation</option>
                      <option value="own" className="text-black">Own</option>
                      <option value="school-bus" className="text-black">School Bus</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-16 py-3.5 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ background: "#231a3d" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
