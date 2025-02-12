import { syllabusProgressBar } from "../data";
import Chart from "@/components/Chart";
import ProgressBar from "@/components/ProgressBar";
import SkillHyperText from "@/components/SkillHyperText";
import Statistics from "@/components/Statistics";
import QuestionAnalysis from "@/components/QuestionAnalysis";

export default function Home() {
  return (
    <main className="text-[14px] h-[80vh] overflow-y-scroll overflow-x-hidden scroll-css w-full">
      <div className="px-4 lg:px-5">
        <h1 className="text-gray-800 text-xl lg:pl-7 py-6 md:py-7">Skill Test</h1>
        <div className="grid gap-6 md:gap-3 lg:grid-cols-[55%,45%]">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full lg:pl-7">
            <SkillHyperText />

            <div className="gap-3 border border-gray-200 p-4 rounded-md">
              <h2 className="font-bold text-lg pb-2">Quick Statistics</h2>
              <Statistics />
            </div>

            <div className="w-full">
              <Chart />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 lg:pl-4 lg:pr-6">
            {/* Syllabus Wise Analysis */}
            <div className="rounded-md border border-gray-200 py-6 px-6 md:px-8 lg:px-12">
              <p className="font-bold text-lg mb-4">Syllabus Wise Analysis</p>
              {syllabusProgressBar.map((syllaPro, i) => (
                <div key={i} className="py-3">
                  <p className="text-gray-800 text-sm lg:text-base">{syllaPro.title}</p>
                  <ProgressBar value={syllaPro.progress} />
                </div>
              ))}
            </div>

            {/* Question Analysis */}
           <QuestionAnalysis />
          </div>
        </div>
      </div>
    </main>
  );
}
