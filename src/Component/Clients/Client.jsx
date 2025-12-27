import React from "react";
import ClientCards from "../../utility/ClientCards";

const Client = () => {
  const yarnDistributor = [
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
  ];
  const TradingCompanies = [
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
  ];
  const ClearingForwarders = [
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
  ];
  const Automobile = [
    "Suzuki Danish Motors",
    "Suzuki Macca Motors",
    "Suzuki South Motors",
    "Suzuki Sana Motors",
  ];
  const PlasticManufactures = [
    "Abdullah Enterprises",
    "Ashraf Enterprises",
    "Decent Plastic",
    "Millat Industries",
    "Tropical Plastic Industries",
  ];
  const FreightForwarders = [
    "Jac Logistics",
    "Land Star Shipping & Logistics",
    "Oriental Shipping Agency",
    "Osaka Shipping",
    "The World Freight (Pvt) Ltd",
    "SeaExpert Logistics",
  ];
  const Industrials = [
    "Bill's Inc",
    "Gani Spinning Mills (Pvt) Ltd.",
    "Tex Style Corporation",
  ];
  const chemicalManufacturers = [
    "Abdul Qadir Enterprises",
    "Al-Fatah Traders",
    "Al-Ishaq Traders",
    "Awais Brothers",
    "H.M., Idrees & Sons",
    "Peximp Corporation",
    "Razzak Impex",
  ];
  const TextileSizers = [" Warptex Industries", "Z.K. Industries"];
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
      <div className="flex flex-wrap justify-center gap-4">
        <ClientCards
          clientInfo={yarnDistributor}
          title={"Yarns Distribution"}
        />
        <ClientCards clientInfo={TradingCompanies} title={"Trading"} />
        <ClientCards
          clientInfo={ClearingForwarders}
          title={"Clearing Forwarders"}
        />
        <ClientCards clientInfo={chemicalManufacturers} title={"Chemical"} />
        <ClientCards
          clientInfo={PlasticManufactures}
          title={"Plastic Manufactures"}
        />
        <ClientCards
          clientInfo={FreightForwarders}
          title={"Freight Forwarders"}
        />
        <ClientCards clientInfo={Automobile} title={"Automobile "} />
        <ClientCards clientInfo={Industrials} title={"Industrial"} />
        <ClientCards clientInfo={TextileSizers} title={"Textile Sizers"} />
      </div>
    </div>
  );
};

export default Client;
