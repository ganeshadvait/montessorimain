// File: src/app/careers/page.tsx
import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="bg-[#f5f1f1] min-h-screen">

      {/* Top Section */}
      <section className="relative py-6 md:py-10 bg-[#f5f1f1] overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">

          {/* Breadcrumb */}
          <nav className="text-[14px] text-[#221638] mb-4 md:mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#dd3e74] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-[#606060]">/</span>
            <span className="font-semibold">Career</span>
          </nav>

          {/* Heading — centered */}
          <div className="flex justify-center">
            <h1 className="text-[#221638] text-[22px] md:text-[28px] font-extrabold leading-none">
              Career
            </h1>
          </div>
        </div>

      </section>

      {/* Main Section — full-width background image, form floats on the right */}
      <section className="relative min-h-[640px] overflow-hidden bg-[#f5f1f1]">

        {/* Background Image — fills the full section, woman centered with face in view */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/montassori.jpg')",
            backgroundPosition: "center top",
          }}
        />

        {/* Content — form floats on the RIGHT over the background image */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-[640px] px-4 py-12 lg:pr-16 lg:pl-8">

          <div
            className="relative w-full max-w-[560px] p-6 md:p-9 overflow-hidden rounded-sm bg-[#ff4b5f] bg-cover bg-center"
            style={{
              backgroundImage: "url('/carrers%20bg%20image.jpg')",
            }}
          >

              {/* Form Content */}
              <div className="relative z-10">

                {/* Heading */}
                <h2 className="text-white text-[26px] md:text-[34px] font-extrabold leading-tight mb-2">
                  Application Form
                </h2>

                <p className="text-white text-[14px] mb-6">
                  It&rsquo;s time you launched kids towards their potential!
                </p>

                {/* Form */}
                <form className="space-y-4">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Name*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Email*
                      </label>

                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Phone*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        City*
                      </label>

                      <input
                        type="text"
                        placeholder="Your City"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Qualification*
                      </label>

                      <input
                        type="text"
                        placeholder="Your Qualification"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Experience*
                      </label>

                      <input
                        type="text"
                        placeholder="Your Experience"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none"
                      />
                    </div>

                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

                    {/* Job Type */}
                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Job Type*
                      </label>

                      <select className="w-full bg-[#c72633] text-white text-[14px] px-4 py-2.5 rounded-md outline-none">

                        <option>Select Job Type</option>
                        <option>Teacher</option>
                        <option>Coordinator</option>
                        <option>Admin</option>

                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-white text-[14px] mb-1.5">
                        Description*
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Your Description"
                        className="w-full bg-[#c72633] text-white placeholder:text-[#f3c7c7] text-[14px] px-4 py-2.5 rounded-md outline-none resize-none min-h-[120px]"
                      />
                    </div>

                  </div>

                  {/* Button */}
                  <div className="pt-2">

                    <button
                      type="submit"
                      className="bg-[#221638] hover:bg-[#160e2a] text-white text-[14px] font-semibold px-6 py-3 rounded-md transition-all duration-300"
                    >
                      Submit Application
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