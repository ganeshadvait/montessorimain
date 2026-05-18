//File :- src/app/mandatory-public-disclosure/page.tsx
import Image from "next/image";
import PageHero from "../../../components/page-hero";

const PdfIcon = () => (
  <Image
    src="/about/documents/AcrobatDocument_32x32.gif"
    alt="PDF document"
    width={26}
    height={30}
    unoptimized
  />
);

const documents: { label: string; href?: string }[] = [
  {
    label:
      "COPIES OF AFFILIATION/UPGRADE LETTER and RECENT EXTENSION of AFFILIATION, IF ANY",
    href: "/Mandatory Public Disclosure/CBSE Affiliation Certificate 3630485.pdf",
  },
  {
    label:
      "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    href: "/Mandatory Public Disclosure/Society Registration Certificate.pdf",
  },
  {
    label:
      "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    href: "/Mandatory Public Disclosure/State NOC.pdf",
  },
  {
    label:
      "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
    href: "/Mandatory Public Disclosure/Recognition.pdf",
  },
  {
    label:
      "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    href: "/Mandatory Public Disclosure/building safety certificate.pdf",
  },
  {
    label:
      "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    href: "/Mandatory Public Disclosure/Fire NOC.pdf",
  },
  {
    label:
      "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
    href: "/Mandatory Public Disclosure/Self Declaration.pdf",
  },
  {
    label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    href: "/sanitations%20certifcate.pdf",
  },
];

const resultsAndAcademics: { label: string; href?: string; pdf: boolean }[] = [
  {
    label: "FEE STRUCTURE OF THE SCHOOL",
    href: "/Mandatory Public Disclosure/latest fee structure.pdf",
    pdf: true,
  },
  {
    label: "ANNUAL ACADEMIC CALENDAR",
    href: "/Mandatory Public Disclosure/ACADEMICS.pdf",
    pdf: true,
  },
  {
    label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
    href: "/Mandatory Public Disclosure/School Managing Committee.pdf",
    pdf: true,
  },
  {
    label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    href: "/Mandatory Public Disclosure/pta.pdf",
    pdf: true,
  },
  {
    label:
      "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    pdf: false,
  },
];

type StaffRow = {
  sl?: string | number;
  info: React.ReactNode;
  details: React.ReactNode;
};

const schoolInfrastructure: { info: string; details: React.ReactNode }[] = [
  {
    info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)",
    details: "36583.58 Sq.Mt.",
  },
  {
    info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
    details: "48 Rooms; 53 Sq.Mt.",
  },
  {
    info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
    details: "6 Labs; 69 Sq.Mt.;",
  },
  { info: "INTERNET FACILITY (Y/N)", details: "YES" },
  { info: "NO. OF GIRLS TOILETS", details: "69" },
  { info: "NO. OF BOYS TOILETS", details: "72" },
  {
    info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
    details: (
      <a
        href="https://youtu.be/Fgnyge_ZJLA?si=lOSBchOcJPPOwuzD"
        className="hover:underline"
        style={{ color: "#1FBABA" }}
      >
        View Video
      </a>
    ),
  },
  {
    info: "SARAS MANDATORY PUBLIC DISCLOSURE",
    details: (
      <a
        href="/Mandatory Public Disclosure/Mandatory Disclosure Details _ SARAS 4.0.pdf"
        aria-label="Download SARAS Mandatory Public Disclosure PDF"
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <PdfIcon />
      </a>
    ),
  },
  {
    info: "VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    details: (
      <a
        href="/sanitations%20certifcate.pdf"
        aria-label="Download Water, Health and Sanitation Certificate PDF"
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <PdfIcon />
      </a>
    ),
  },
];

const staffTeaching: StaffRow[] = [
  { sl: 1, info: "PRINCIPAL", details: "Ms. Inagala swetha, MBA, B.Ed." },
  { sl: 2, info: "TOTAL NO. OF TEACHERS", details: "32" },
  {
    info: (
      <span className="flex items-center gap-2 pl-6">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: "#231a3d" }}
        />
        PGT
      </span>
    ),
    details: "4",
  },
  {
    info: (
      <span className="flex items-center gap-2 pl-6">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: "#231a3d" }}
        />
        TGT
      </span>
    ),
    details: "15",
  },
  {
    info: (
      <span className="flex items-center gap-2 pl-6">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: "#231a3d" }}
        />
        PRT
      </span>
    ),
    details: "13",
  },
  { sl: 3, info: "TEACHERS SECTION RATIO", details: "1 : 1.5" },
  {
    sl: 4,
    info: "DETAILS OF SPECIAL EDUCATOR",
    details: "Mrs. Sumitha Chakrabarti",
  },
  {
    sl: 5,
    info: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
    details: "Mr. V Bharat Kumar & Miss. Preechi",
  },
];

const generalInfo = [
  { sl: 1, info: "Name Of The School", details: "MONTESSORI PRIME SCHOOL" },
  { sl: 2, info: "Affiliation No.", details: "3630485" },
  { sl: 3, info: "School Code", details: "56771" },
  {
    sl: 4,
    info: "Complete Address with PIN Code",
    details: (
      <>
        H No: 53-1-24/1, Montessori Prime School,
        <br />
        Yellapur, Hasanparthy,
        <br />
        Hanamkonda – 506 371
      </>
    ),
  },
  {
    sl: 5,
    info: "Principal Name & Qualification",
    details: (
      <>
        Ms. Inagala swetha
        <br />
        MBA, B.Ed.
      </>
    ),
  },
  { sl: 6, info: "School Email ID", details: "info@montessorijnprime.com" },
  { sl: 7, info: "Contact Details [Landline/Mobile]", details: "7700043030" },
];

export default function MandatoryPublicDisclosurePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Mandatory Public Disclosure" },
        ]}
        title="Mandatory Public Disclosure"
      />
      {/* A. GENERAL INFORMATION */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 md:pb-12">
          {/* Section heading */}
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            A. GENERAL INFORMATION
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "#5BC0BE" }}>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#231a3d" }}
                  >
                    SL
                    <br />
                    No.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Information
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[34%]"
                    style={{ color: "#231a3d" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {generalInfo.map((row) => (
                  <tr key={row.sl}>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.sl}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.info}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B. DOCUMENTS AND INFORMATION */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-20">
          {/* Section heading */}
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            B. DOCUMENTS AND INFORMATION
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "#5BC0BE" }}>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[100px]"
                    style={{ color: "#231a3d" }}
                  >
                    SL No.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Documentation/Information
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[120px]"
                    style={{ color: "#231a3d" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {doc.label}
                    </td>
                    <td className="align-middle px-5 py-4 border border-[#d4cfc4]">
                      {doc.href ? (
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download PDF: ${doc.label}`}
                          className="inline-block hover:opacity-80 transition-opacity"
                        >
                          <PdfIcon />
                        </a>
                      ) : (
                        <span className="text-[15px]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* C. RESULT AND ACADEMICS */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-20">
          {/* Section heading */}
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            C. RESULT AND ACADEMICS
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "#5BC0BE" }}>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[100px]"
                    style={{ color: "#231a3d" }}
                  >
                    SL No.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Documents/Information
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[120px]"
                    style={{ color: "#231a3d" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultsAndAcademics.map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.label}
                    </td>
                    <td
                      className="align-middle px-5 py-4 border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.pdf && row.href ? (
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download PDF: ${row.label}`}
                          className="inline-block hover:opacity-80 transition-opacity"
                        >
                          <PdfIcon />
                        </a>
                      ) : (
                        <span className="text-[15px]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* D. STAFF(TEACHING) */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-20">
          {/* Section heading */}
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            D. STAFF(TEACHING)
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "#5BC0BE" }}>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#231a3d" }}
                  >
                    SL
                    <br />
                    No.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Information
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[34%]"
                    style={{ color: "#231a3d" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffTeaching.map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.sl ?? ""}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.info}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* E. SCHOOL INFRASTRUCTURE */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          {/* Section heading */}
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            E. SCHOOL INFRASTRUCTURE
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "#5BC0BE" }}>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#231a3d" }}
                  >
                    SL
                    <br />
                    No.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Information
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[200px]"
                    style={{ color: "#231a3d" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoolInfrastructure.map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.info}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[15px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Official CBSE-format disclosure block (after Section E) */}
      {/* ====================================================== */}

      {/* A : GENERAL INFORMATION */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 md:pb-12">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            A : GENERAL INFORMATION :
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL
                    <br />
                    NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    INFORMATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[40%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    info: "NAME OF THE SCHOOL",
                    details: "MONTESSORI PRIME SCHOOL",
                  },
                  {
                    info: "AFFILIATION NO.(IF APPLICABLE)",
                    details: "3630485",
                  },
                  { info: "SCHOOL CODE (IF APPLICABLE)", details: "56771" },
                  {
                    info: "COMPLETE ADDRESS WITH PIN CODE",
                    details:
                      "53-1-24/1, YELLAPUR, HASANPARTHY, WARANGAL RURAL, TELANGANA - 506371",
                  },
                  { info: "PRINCIPAL NAME", details: "Mrs. INAGALA SWETHA" },
                  { info: "PRINCIPAL QUALIFICATION", details: "BA, MBA, BEd" },
                  {
                    info: "SCHOOL EMAIL ID",
                    details: "montessoriprime27622@gmail.com",
                  },
                  {
                    info: "CONTACT DETAILS (LANDLINE/MOBILE)",
                    details: "7700043030",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.info}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B : DOCUMENTS AND INFORMATION */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 md:pb-12">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            B : DOCUMENTS AND INFORMATION:
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL
                    <br />
                    NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DOCUMENTS/INFORMATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[40%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL&rsquo;S WEBSITE
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
                  "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
                  "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
                  "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
                  "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
                  "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
                  "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
                  "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
                ].map((label, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {label}
                    </td>
                    <td className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]">
                      <a
                        href="https://www.montessorijnprime.com/montessori/prime/mandatory-public-disclosure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-[13px] break-all hover:opacity-80 transition-opacity"
                        style={{
                          color: "#1FBABA",
                          border: "1px solid #1FBABA",
                        }}
                      >
                        https://www.montessorijnprime.com/montessori/prime/mandatory-public-disclosure
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 md:pb-12">
          <h3
            className="text-[15px] md:text-[16px] font-bold underline mb-3"
            style={{ color: "#1565C0" }}
          >
            NOTE:
          </h3>
          <p
            className="text-[14px] md:text-[15px] leading-[1.7]"
            style={{ color: "#231a3d" }}
          >
            THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED
            DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN CASE, IT
            IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE
            THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
          </p>
        </div>
      </section>

      {/* C : RESULT AND ACADEMICS */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            C : RESULT AND ACADEMICS :
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL
                    <br />
                    NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DOCUMENTS/INFORMATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[40%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL&rsquo;S WEBSITE
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "FEE STRUCTURE OF THE SCHOOL", hasLink: true },
                  { label: "ANNUAL ACADEMIC CALENDER", hasLink: true },
                  {
                    label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
                    hasLink: true,
                  },
                  {
                    label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
                    hasLink: true,
                  },
                  {
                    label:
                      "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
                    hasLink: false,
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.label}
                    </td>
                    <td className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]">
                      {row.hasLink ? (
                        <a
                          href="https://www.montessorijnprime.com/montessori/prime/mandatory-public-disclosure"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-[13px] break-all hover:opacity-80 transition-opacity"
                          style={{
                            color: "#1FBABA",
                            border: "1px solid #1FBABA",
                          }}
                        >
                          https://www.montessorijnprime.com/montessori/prime/mandatory-public-disclosure
                        </a>
                      ) : (
                        <span className="text-[14px]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* D : STAFF (TEACHING) */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            D : STAFF (TEACHING) :
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL
                    <br />
                    NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    INFORMATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[40%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    1
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    PRINCIPAL
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Mrs. INAGALA SWETHA
                  </td>
                </tr>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    2
                  </td>
                  <td
                    className="align-top p-0 border border-[#d4cfc4]"
                    colSpan={2}
                  >
                    <table className="w-full border-collapse">
                      <tbody>
                        {[
                          { info: "TOTAL NO. OF TEACHERS", details: "32" },
                          { info: "PGT", details: "4" },
                          { info: "TGT", details: "15" },
                          { info: "PRT", details: "13" },
                        ].map((row, i, arr) => (
                          <tr key={i}>
                            <td
                              className={`align-top px-5 py-4 text-[14px] ${i < arr.length - 1 ? "border-b" : ""} border-[#d4cfc4]`}
                              style={{
                                color: "#231a3d",
                                width: "calc(100% / 1.66)",
                              }}
                            >
                              {row.info}
                            </td>
                            <td
                              className={`align-top px-5 py-4 text-[14px] border-l ${i < arr.length - 1 ? "border-b" : ""} border-[#d4cfc4]`}
                              style={{ color: "#231a3d" }}
                            >
                              {row.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    3
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    TEACHERS SECTION RATIO
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    1:1.5
                  </td>
                </tr>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    4
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    DETAILS OF SPECIAL EDUCATOR
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Mrs Sumitha Chakrabarti
                  </td>
                </tr>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    5
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    DETAILS OF COUNSELLOR AND WELLNESS TEACHER
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Mr V Bharat Kumar &amp; Miss Preechi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RESULT CLASS: X */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 md:pb-12">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            RESULT CLASS: X
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {[
                    "SL NO.",
                    "YEAR",
                    "NO. OF REGISTERED STUDENTS",
                    "NO. OF STUDENTS PASSED",
                    "PASS PERCENTAGE",
                    "REMARKS",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                      style={{ color: "#a8a8a8" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    1
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    2026
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    103
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    103
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    100
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    Eighty Five Percentage is school average
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RESULT CLASS: XII */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            RESULT CLASS: XII
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {[
                    "SL NO.",
                    "YEAR",
                    "NO. OF REGISTERED STUDENTS",
                    "NO. OF STUDENTS PASSED",
                    "PASS PERCENTAGE",
                    "REMARKS",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                      style={{ color: "#a8a8a8" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    1
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    &nbsp;
                  </td>
                  <td
                    className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* E : SCHOOL INFRASTRUCTURE */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            E : SCHOOL INFRASTRUCTURE:
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL
                    <br />
                    NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    INFORMATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[40%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)",
                    details: "36583.58",
                  },
                  {
                    info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)",
                    details: "48 & 53",
                  },
                  {
                    info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
                    details: "6 & 69",
                  },
                  { info: "INTERNET FACILITY", details: "YES" },
                  { info: "NO. OF GIRLS TOILETS", details: "69" },
                  { info: "NO. OF BOYS TOILETS", details: "72" },
                  {
                    info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
                    details: (
                      <a
                        href="https://youtu.be/Fgnyge_ZJLA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline break-all"
                        style={{ color: "#1FBABA" }}
                      >
                        https://youtu.be/Fgnyge_ZJLA
                      </a>
                    ),
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.info}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* F : TEACHER DETAILS */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            F : TEACHER DETAILS:
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[80px]"
                    style={{ color: "#a8a8a8" }}
                  >
                    SL NO.
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4]"
                    style={{ color: "#a8a8a8" }}
                  >
                    TEACHER NAME
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[20%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    DESIGNATION
                  </th>
                  <th
                    className="text-left align-top px-5 py-4 text-[14px] font-semibold border border-[#d4cfc4] w-[25%]"
                    style={{ color: "#a8a8a8" }}
                  >
                    QUALIFICATION
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Jose Kuriyan",
                    designation: "TGT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "Sajin Thomas",
                    designation: "TGT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "P Vamshikrishna",
                    designation: "TGT",
                    qualification: "BSc BEd",
                  },
                  {
                    name: "Enaganti Sandhya Rani",
                    designation: "TGT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "Thumma Yakub Reddy",
                    designation: "TGT",
                    qualification: "MCA Bed",
                  },
                  {
                    name: "Kavita Pandey",
                    designation: "TGT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "K Shilpa",
                    designation: "PRT",
                    qualification: "M. Tech",
                  },
                  {
                    name: "Mohammad Abbas Parvez",
                    designation: "PRT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "Devullapelli Ramesh",
                    designation: "TGT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "Kurmachalam Geetha Kumari",
                    designation: "PRT",
                    qualification: "BSc BEd",
                  },
                  {
                    name: "Parvathy S Nair",
                    designation: "PRT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "Gurijala Janaki",
                    designation: "PRT",
                    qualification: "BTech",
                  },
                  {
                    name: "Gh Hassan Dar",
                    designation: "TGT",
                    qualification: "BA BEd",
                  },
                  {
                    name: "A Sathish Babu",
                    designation: "TGT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "Pramod Nayak",
                    designation: "TGT",
                    qualification: "BA BEd",
                  },
                  {
                    name: "Mohammed Ashjil N K",
                    designation: "TGT",
                    qualification: "B.Tech Bed",
                  },
                  {
                    name: "Sravani Sarvam",
                    designation: "TGT",
                    qualification: "M.Tech BEd",
                  },
                  {
                    name: "A Padma",
                    designation: "PRT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "K Prasanna Rani",
                    designation: "PRT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "Sean Jose",
                    designation: "HM",
                    qualification: "BCOM BED",
                  },
                  {
                    name: "Annarapu Sharanya",
                    designation: "PRT",
                    qualification: "BTech BEd",
                  },
                  {
                    name: "Kandikonda Rambabu",
                    designation: "PGT",
                    qualification: "MSc B.Ed",
                  },
                  {
                    name: "Muppidi Vijaya Laxmi",
                    designation: "TGT",
                    qualification: "MA B.Ed",
                  },
                  {
                    name: "Kolla Srinivas Reddy",
                    designation: "PGT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "Praveen Mekala",
                    designation: "PGT",
                    qualification: "MSc BED",
                  },
                  {
                    name: "Giddigam Shiva Kumar",
                    designation: "TGT",
                    qualification: "MSc BED",
                  },
                  {
                    name: "Aparnamol Thomas",
                    designation: "PGT",
                    qualification: "MSc B.ED",
                  },
                  {
                    name: "Vijay Kumar Y",
                    designation: "TGT",
                    qualification: "BA B.ED",
                  },
                  {
                    name: "Shagufta Baber",
                    designation: "PRT",
                    qualification: "MA BEd",
                  },
                  {
                    name: "Ashley Mariam Shibu",
                    designation: "PRT",
                    qualification: "MSC BEd",
                  },
                  {
                    name: "Akshaja A",
                    designation: "PRT",
                    qualification: "MBA Bed",
                  },
                  {
                    name: "Elizebeth Augustine",
                    designation: "PRT",
                    qualification: "MSc BEd",
                  },
                  {
                    name: "Gopal Bhunia",
                    designation: "PET",
                    qualification: "BPEd, MPEd",
                  },
                  {
                    name: "Prasenjit Paria",
                    designation: "PET",
                    qualification: "BPEd, MPEd",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {i + 1}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.name}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.designation}
                    </td>
                    <td
                      className="align-top px-5 py-4 text-[14px] border border-[#d4cfc4]"
                      style={{ color: "#231a3d" }}
                    >
                      {row.qualification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ACADEMIC CALENDAR DOWNLOAD */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#F4831C" }}
          >
            ACADEMIC CALENDAR :
          </h2>
          <a
            href="/FINAL%20ACADEMIC%20CALENDAR%20YEAR%202026%20-%2027%20(As%20per%20CBSE%20Board).xlsx"
            download
            className="w-full inline-flex items-center gap-3 px-5 py-3 border border-[#d4cfc4] hover:bg-[#f6f7f7] transition-colors"
            style={{ color: "#231a3d" }}
          >
            {/* Excel-style icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#1F7A45" />
              <path
                d="M8 8l3 4-3 4M16 8l-3 4 3 4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold">
                FINAL ACADEMIC CALENDAR YEAR 2026 - 27 (As per CBSE Board).xlsx
              </span>
              <span className="text-[12px] text-[#5e5e6e]">
                Click to download
              </span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
