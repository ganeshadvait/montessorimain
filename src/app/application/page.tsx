"use client";
//File :- src/app/application/page.tsx
import { useState, FormEvent } from "react";
import PageHero from "../../../components/page-hero";

const RED_BG = "#E94454";

// TODO: swap with the real endpoint
const APPLICATION_ENDPOINT = "/api/application";

type FormState = {
  studentName: string;
  dob: string;
  admittingClass: string;
  presentSchool: string;
  nationality: string;
  place: string;
  fatherName: string;
  fatherQualification: string;
  fatherOccupation: string;
  motherName: string;
  motherQualification: string;
  motherOccupation: string;
  mobile: string;
  altMobile: string;
  email: string;
  address: string;
  pincode: string;
  admissionSought: string;
  transportation: string;
};

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
  "w-full px-5 py-3.5 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/15 transition-colors disabled:opacity-60";
const inputStyle = { background: "rgba(0,0,0,0.08)" };
const labelClass = "block text-[14px] font-semibold text-white mb-2";

type ApiResponse = {
  resp?: { success?: string; message?: string };
};

function toPayload(d: FormState) {
  return {
    source: "website",
    name: d.studentName,
    dob: d.dob,
    admittingclass: d.admittingClass,
    presentschool: d.presentSchool,
    nationality: d.nationality,
    place: d.place,
    fathername: d.fatherName,
    fatherqualification: d.fatherQualification,
    fatheroccupation: d.fatherOccupation,
    mothername: d.motherName,
    motherqualification: d.motherQualification,
    motheroccupation: d.motherOccupation,
    mobile: d.mobile,
    alternatemobile: d.altMobile,
    email: d.email,
    address: d.address,
    pincode: d.pincode,
    admissionsought: d.admissionSought,
    transportation: d.transportation,
  };
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "");
}

export default function ApplicationPage() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ kind: "idle" });

    try {
      const res = await fetch(APPLICATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(data)),
      });

      const json: ApiResponse = await res.json();
      const success = json?.resp?.success === "1";
      const message = stripHtml(
        json?.resp?.message ||
          (success
            ? "Your request was submitted successfully."
            : "Something went wrong. Please try again."),
      );

      if (success) {
        setStatus({ kind: "success", message });
        setData(initialState);
      } else {
        setStatus({ kind: "error", message });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
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
                      <option value="Day Scholar" className="text-black">Day Scholar</option>
                      <option value="Residential" className="text-black">Residential</option>
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
                      <option value="Yes" className="text-black">Yes</option>
                      <option value="No" className="text-black">No</option>
                    </select>
                  </div>
                </div>

                {/* Status message */}
                {status.kind !== "idle" && (
                  <div
                    role="status"
                    className="mt-4 px-5 py-3 text-[14px] font-semibold"
                    style={{
                      background:
                        status.kind === "success"
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(0,0,0,0.25)",
                      color: "#fff",
                    }}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-16 py-3.5 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "#231a3d" }}
                  >
                    {submitting ? "Submitting…" : "Submit"}
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
