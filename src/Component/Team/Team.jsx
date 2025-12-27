import React from "react";
import Person1 from "../../assets/p1.png";
import Person2 from "../../assets/p2.png";
import Person3 from "../../assets/p3.png";
import Person4 from "../../assets/p4.png";
import Person5 from "../../assets/p5.png";
import Person6 from "../../assets/p6.png";
import MemberCards from "../../utility/MemberCards";
const Team = () => {
  return (
    <div
      id="teams"
      className="flex flex-col items-center justify-center  mt-12"
    >
      <div className="text-green-600 text-3xl border-l-6 px-4 py-2 ">
        Team Members
      </div>
      <div className="text-[16px] mx-12 px-8 pt-6 w-2/3 text-center font-extralight">
        Dantes remained confused and silent by this explanation of the thoughts
        which had unconsciously
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12 mx-12">
        <MemberCards
          img={Person1}
          name="Danish Pothiawala"
          title="Chief Executive Officer"
        />
        <MemberCards
          img={Person2}
          name="Muhammad Javed"
          title="Marketing Manger"
        />
        <MemberCards
          img={Person3}
          name="Muhammad Rehan Parwani"
          title="Team Leader"
        />
        <MemberCards
          img={Person4}
          name="Muhammad Raees"
          title="Senior Programmer"
        />
        <MemberCards
          img={Person5}
          name="Muhammad Bilal"
          title="Assistant Programmer"
        />
        <MemberCards
          img={Person6}
          name="Zeeshan Khatri"
          title="Assistant Programmer"
        />
      </div>
    </div>
  );
};

export default Team;
