// File :- src/app/about/calendar/page.tsx

type Row = {
  sno: string;
  month: string;
  totalDays: string;
  sundays: string;
  holidays: string;
  workingDays: string;
  activities: string;
  remarks: string;
};

const rows: Row[] = [
  {
    sno: "2",
    month: "June\n(From 12th)",
    totalDays: "30",
    sundays: "16,23,30",
    holidays: "17-Bakrid/Eid ul-Adha",
    workingDays: "26",
    activities:
      'English Poetry (Class II, III)\n"Coffee Evening with Principal (Class – I)"',
    remarks: "",
  },
  {
    sno: "3",
    month: "July",
    totalDays: "31",
    sundays: "7,14,21,28",
    holidays: "17-Muharram",
    workingDays: "26",
    activities:
      "International Chess Day CLUB ACTIVITY,\nCalligraphy Competition",
    remarks: "22 - 27\nPA - 1",
  },
  {
    sno: "4",
    month: "August",
    totalDays: "31",
    sundays: "4,11,18,25",
    holidays:
      "15-Independence Day,\n19-Rakhi pournami,\n26-Krishnastami",
    workingDays: "24",
    activities: "Swimming Competition,\nIndependence Day",
    remarks: "20 - 28,\n(Date: 11) PTM for PA - I,\nPA - 2",
  },
  {
    sno: "5",
    month: "September",
    totalDays: "30",
    sundays: "1,8,15,22,29",
    holidays: "7-Vinayakachavithi,\n16-Miladunabi",
    workingDays: "23",
    activities:
      "Nutrition Week culmination Day CLUB ACTIVITY,\nField visit (Class: IV, V),\nWorld Rivers Day Class Activity for IV and V (Debate)",
    remarks: "(Date: 15) PTM for PA - II",
  },
  {
    sno: "6",
    month: "October",
    totalDays: "31",
    sundays: "6,13,20,27",
    holidays:
      "2-Gandhi Jayanthi,\n12-24 Dussehra holidays,\n31-Deepavali",
    workingDays: "13",
    activities: "Gandhi Jayanthi,\nIndian Air force Day",
    remarks: "15-25\nSA-1",
  },
  {
    sno: "7",
    month: "November",
    totalDays: "30",
    sundays: "3,10,17,24",
    holidays: "15-Gurunanak Jayanthi",
    workingDays: "25",
    activities: "World Tsunami Awareness Day,\nCV Raman Day",
    remarks: "18-23,\n(Date: 10) PTM for SA - I,\nPA-3",
  },
  {
    sno: "8",
    month: "December",
    totalDays: "31",
    sundays: "1,8,15,22,29",
    holidays: "25-Christmas,\n26-Boxing day",
    workingDays: "24",
    activities:
      "National Pollution Control Day,\nArmed forces flag Day,\nChristmas Celebrations",
    remarks: "(Date: 24) PTM for PA - III",
  },
  {
    sno: "9",
    month: "January",
    totalDays: "31",
    sundays: "5,12,19,26",
    holidays:
      "1-New year,\n13-17 Sankranti Holidays,\n26-Republic day",
    workingDays: "20",
    activities: "International Day of Education,\nPongal",
    remarks: "17-23\nPA-4",
  },
  {
    sno: "10",
    month: "February",
    totalDays: "28",
    sundays: "2,9,16,23",
    holidays: "26-Maha Shivaratri",
    workingDays: "23",
    activities:
      "World Pulses Day (Class IV, V),\n(Interhouse Science Quiz),\nWorld Day of Social Justice Moot Court (Class – VIII, IX)",
    remarks: "PA-4\n\n17-24\nSA-2",
  },
  {
    sno: "11",
    month: "March",
    totalDays: "31",
    sundays: "2,9,16,23,30",
    holidays: "14-Holidays,\n30-Ugadi,\n31-Ramzan",
    workingDays: "24",
    activities: "",
    remarks: "(Date: 2) Class - IX PTM for SA - II",
  },
  {
    sno: "12",
    month: "April",
    totalDays: "30",
    sundays: "6,13,20,27",
    holidays:
      "6-Ramnavami,\n10-Mahavir Jayanthi,\n14-Ambedkar Jayanthi,\n18-Good Friday,\n20-Easter",
    workingDays: "25",
    activities:
      "Alphabet sorting activity,\nShow and tell competition",
    remarks: "",
  },
];

function MultilineText({ text }: { text: string }) {
  return (
    <div className="whitespace-pre-line leading-[1.7]">
      {text}
    </div>
  );
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#f1f1f1] py-16 px-4">

      <div className="max-w-[1380px] mx-auto">

        {/* Heading */}
        <div className="flex justify-center mb-5">
          <h1 className="text-[#dd3e74] text-[15px] md:text-[18px] font-bold uppercase tracking-wide">
            Academic Calendar For 2025-26
          </h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse bg-white">

            {/* Header */}
            <thead>
              <tr className="bg-[#6dc7c9] text-[#221638]">

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  S
                  <br />
                  No
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Month
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Total No of
                  <br />
                  Days
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Sundays
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Holidays
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Working
                  <br />
                  days
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Activities
                </th>

                <th className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] font-bold">
                  Remarks/Exam
                </th>

              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {/* Summer Holidays */}
              <tr className="hover:bg-[#dcdcdc] transition-colors duration-200">

                <td className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] text-[#221638]">
                  1
                </td>

                <td className="border border-[#cfd2d4] px-4 py-4 text-center text-[15px] text-[#221638]">
                  May
                </td>

                <td
                  colSpan={6}
                  className="border border-[#cfd2d4] px-4 py-4 text-center text-[18px] font-bold text-[#221638]"
                >
                  SUMMER HOLIDAYS
                </td>

              </tr>

              {/* Dynamic Rows */}
              {rows.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-[#dcdcdc] transition-colors duration-200"
                >

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    {row.sno}
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    <MultilineText text={row.month} />
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    {row.totalDays}
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    {row.sundays}
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    <MultilineText text={row.holidays} />
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    {row.workingDays}
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    <MultilineText text={row.activities} />
                  </td>

                  <td className="border border-[#cfd2d4] px-4 py-4 text-center align-top text-[15px] text-[#221638]">
                    <MultilineText text={row.remarks} />
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}