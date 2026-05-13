//File :- src/app/about/documents/page.tsx

import PageHero from "../../../../components/page-hero";
import DocumentsTable, {
  type DocumentRow,
} from "../../../../components/about/documents-table";

const documents: DocumentRow[] = [
  {
    label: "ANNUAL REPORT PPT 2025 FINAL.pdf",
    href: "/about/documents/ANNUAL REPORT PPT 2025 FINAL.pdf",
  },
  {
    label: "AY 2025-26 School Calendar_c.pdf",
    href: "/about/documents/AY 2025-26 School Calendar_c.pdf",
  },
  {
    label: "PTA.pdf",
    href: "/about/documents/PTA.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Documents" },
        ]}
        title="Documents"
      />

      <DocumentsTable documents={documents} />
    </main>
  );
}
