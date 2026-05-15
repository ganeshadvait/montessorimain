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
    label: "COPIES OF AFFILIATION/UPGRADE LETTER and RECENT EXTENSION of AFFILIATION, IF ANY",
    href: "/Mandatory Public Disclosure/CBSE Affiliation Certificate 3630485.pdf",
  },
  {
    label: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    href: "/Mandatory Public Disclosure/Society Registration Certificate.pdf",
  },
  {
    label: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    href: "/Mandatory Public Disclosure/State NOC.pdf",
  },
  { label: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
    href: "/Mandatory Public Disclosure/Recognition.pdf",
  },
  { label: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    href: "/Mandatory Public Disclosure/building safety certificate.pdf",
   },
  { label: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    href: "/Mandatory Public Disclosure/Fire NOC.pdf",
   },
  {
    label: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
    href: "/Mandatory Public Disclosure/Self Declaration.pdf",
  },
  { label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    href: "/Mandatory Public Disclosure/sanitary certificate.pdf",
   },
];

const resultsAndAcademics: { label: string; href?: string; pdf: boolean }[] = [
  { label: "FEE STRUCTURE OF THE SCHOOL",
     href: "/Mandatory Public Disclosure/latest fee structure.pdf",
    pdf: true },
  { label: "ANNUAL ACADEMIC CALENDAR", 
     href: "/Mandatory Public Disclosure/ACADEMICS.pdf",
    pdf: true },
  { label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
    href: "/Mandatory Public Disclosure/School Managing Committee.pdf",
     pdf: true },
  { label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", href: "/Mandatory Public Disclosure/pta.pdf", pdf: true },
  {
    label: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
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
];

const staffTeaching: StaffRow[] = [
  { sl: 1, info: "PRINCIPAL", details: "Ms. Inagala swetha, MBA, B.Ed." },
  { sl: 2, info: "TOTAL NO. OF TEACHERS", details: "21" },
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
    details: "0",
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
    details: "13",
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
    details: "8",
  },
  { sl: 3, info: "TEACHERS SECTION RATIO", details: "1 : 1.5" },
  { sl: 4, info: "DETAILS OF SPECIAL EDUCATOR", details: "Mrs. Sumitha Chakrabarti" },
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
    </main>
  );
}
