import SkillBar from "../components/ProgressBar";
export default function Skill() {
  return (
    <div className="p-10  min-h-screen  ">
      <h1 className="text-4xl font-bold text-center text-orange-400
      ">
        My <span className="text-blue-500 ">Skills</span>
      </h1>
      <hr className="block border-t-4 border-blue-500 w-20 mx-auto my-4" />

      <div className="max-w-xl mx-auto mt-10">
        <SkillBar label="HTML/CSS" percentage={70} />
        <SkillBar label="JavaScript" percentage={65} />
        <SkillBar label="React.js" percentage={55} />
        <SkillBar label="SQL" percentage={64} />
        <SkillBar label="Git" percentage={60} />
        <SkillBar label="GitHub" percentage={70} />
      </div>
    </div>
  );
}
