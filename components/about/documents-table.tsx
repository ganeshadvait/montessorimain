//File :- components/about/documents-table.tsx
import Image from "next/image";

export type DocumentRow = {
  label: string;
  href: string;
};

export type DocumentsTableProps = {
  heading?: string;
  documents: DocumentRow[];
};

const PdfIcon = () => (
  <Image
    src="/about/documents/AcrobatDocument_32x32.gif"
    alt="PDF document"
    width={26}
    height={30}
    unoptimized
  />
);

export default function DocumentsTable({
  heading = "DOCUMENTS",
  documents,
}: DocumentsTableProps) {
  return (
    <section className="w-[1240px] mx-auto">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        {heading && (
          <h2
            className="text-[16px] md:text-[17px] font-semibold mb-4"
            style={{ color: "#E91E63" }}
          >
            {heading}
          </h2>
        )}

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
                  className="text-left align-top px-2 py-4 text-[15px] font-bold border border-[#d4cfc4]"
                  style={{ color: "#231a3d" }}
                >
                  Document
                </th>
                <th
                  className="text-left align-top px-2 py-4 text-[15px] font-bold border border-[#d4cfc4] w-[120px]"
                  style={{ color: "#231a3d" }}
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, i) => (
                <tr
                  key={doc.label}
                  className="bg-white transition-colors hover:bg-[#f5f5f5]"
                >
                  <td
                    className="align-middle px-5 py-1 text-[15px] border border-[#d4cfc4]"
                    style={{ color: "#231a3d" }}
                  >
                    {i + 1}
                  </td>
                  <td className="align-middle px-5 py-1 text-[15px] border border-[#d4cfc4]">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#E91E63]"
                      style={{ color: "#231a3d" }}
                    >
                      {doc.label}
                    </a>
                  </td>
                  <td className="align-middle px-5 py-1 border border-[#d4cfc4]">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download PDF: ${doc.label}`}
                      className="inline-block hover:opacity-80 transition-opacity"
                    >
                      <PdfIcon />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
