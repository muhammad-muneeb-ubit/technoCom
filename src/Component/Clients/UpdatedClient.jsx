import React, { useState } from "react";

const UpdatedClient = () => {
  const CLIENT_DATA = [
    {
      category: "Yarns Distribution",
      clients: [
        "A.M. Enterprises",
        "Allana Sons",
        "G.H. Jangda",
        "Kunda Enterprises",
        "M.M. Enterprises",
        "M.I. Habib",
        "Marfani Enterprises",
        "Polani Corporation",
        "S.H. Traders",
        "Sans Textile Impex",
        "Sikander Ismail",
      ],
    },
    {
      category: "Trading",
      clients: [
        "A.V.M. Corporation",
        "Ammar Enterprises",
        "Auto House",
        "FebLink Enterprises",
        "M.K. International",
        "Moon Corporation",
        "Naz Textile",
        "Rabia Industires",
        "Textile Testing Laboratory",
        "Twaha Merchantiles",
        "Cargo Point International",
      ],
    },
    {
      category: "Clearing Forwarders",
      clients: [
        "A.K. Shipper",
        "Al-Kasib",
        "Crecent Agencies",
        "H.I. Shipper",
        "Khursheed Enterprises",
        "Mushaq Forwarders",
        "N.S. Agency",
        "Nawaz Cargo",
        "S.T. Corporation",
        "Zafar Trading",
        "Taif Cargo",
      ],
    },
    {
      category: "Automobile",
      clients: [
        "Suzuki Danish Motors",
        "Suzuki Macca Motors",
        "Suzuki South Motors",
        "Suzuki Sana Motors",
      ],
    },
    {
      category: "Plastic Manufactures",
      clients: [
        "Abdullah Enterprises",
        "Ashraf Enterprises",
        "Decent Plastic",
        "Millat Industries",
        "Tropical Plastic Industries",
      ],
    },
    {
      category: "Freight Forwarders",
      clients: [
        "Jac Logistics",
        "Land Star Shipping & Logistics",
        "Oriental Shipping Agency",
        "Osaka Shipping",
        "The World Freight (Pvt) Ltd",
        "SeaExpert Logistics",
      ],
    },
    {
      category: "Industrial",
      clients: [
        "Bill's Inc",
        "Gani Spinning Mills (Pvt) Ltd.",
        "Tex Style Corporation",
      ],
    },
    {
      category: "Chemical",
      clients: [
        "Abdul Qadir Enterprises",
        "Al-Fatah Traders",
        "Al-Ishaq Traders",
        "Awais Brothers",
        "H.M., Idrees & Sons",
        "Peximp Corporation",
        "Razzak Impex",
      ],
    },
    {
      category: "Textile Sizers",
      clients: ["WARPTEX INDUSTRIES", "Z.K. INDUSTRIES"],
    },
  ];
  const [activeTab, setActiveTab] = useState(CLIENT_DATA[0].category);
  const activeCategory =
    CLIENT_DATA.find((c) => c.category === activeTab) || CLIENT_DATA[0];
  console.log(activeCategory);
  return (
    <div id="clients" className="flex flex-col justify-center items-center">
      <div className="text-green-600 text-3xl border-l-6 px-4 py-3 my-6">
        OUR CLIENTS
      </div>
      <div className="text-[16px] px-12 justify-center text-center">
        TechnoCom is used by businesses, universities, institutions and
        associations in a wide range of industries, including software
        development, consulting, direct marketing, retail, financial,
        e-commerce, technology, travel, and manufacturing.
      </div>
      <div className="text-[16px] my-6">
        Here are just a few of the companies who are using our software's:
      </div>
      <div className="categories flex justify-center flex-wrap gap-6">
        {CLIENT_DATA.map((cat, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(cat.category)}
            className={`categoryItem hover:cursor-pointer gap-2 `}
          >
            <div className="categoryCard flex gap-2 justify-center items-center border border-green-400 rounded-lg p-4 mx-2  hover:scale-105 transition-transform duration-300 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout text-green-500"
                  aria-hidden="true"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                  <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                </svg>
              </div>
              <div>{cat.category}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="display flex mt-12  justify-center items-center gap-8">
        <div className="info w-1/2 mt-12 h-125">
          <div className="relative bg-white rounded-[40px] border border-slate-100 p-12 shadow-2xl shadow-slate-100/50">
            <div className="w-20 h-20 bg-green-700 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl  group-hover:rotate-6 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid text-white"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
            </div>
            <h4 className="text-4xl font-extrabold text-slate-900 mb-6">
              {activeCategory.category}
            </h4>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              TechnoCom's specialized frameworks for{" "}
              <span className="text-slate-900 font-bold underline decoration-emerald-300 decoration-4 underline-offset-4">
                {activeCategory.category}
              </span>{" "}
              deliver real-time logistics tracking and optimized supply chains.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Active Scale
                </span>
                <span className="text-xl font-black text-slate-900">
                  National
                </span>
              </div>
              <div className="flex items-center justify-between p-5 rounded-2xl bg-green-700 text-white shadow-xl ">
                <span className="text-sm text-white font-bold uppercase tracking-widest opacity-80">
                  Efficiency Gain
                </span>
                <span className="text-xl font-black">+65%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clientsName w-1/3 bg-white border border-slate-100 flex flex-wrap gap-4 mx-4 p-6 rounded-lg">
          {activeCategory.clients.map((cli, index) => (
            <div
              key={index}
              className="nameCard  border-2 px-3 py-2 shadow rounded-full text-green-500 hover:cursor-pointer  hover:scale-105 hover: transition-transform duratiomon-300 "
            >
              {cli}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatedClient;
