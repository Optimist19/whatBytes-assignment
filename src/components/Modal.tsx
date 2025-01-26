"use client";

import { useGlobalState } from "@/store/Store";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import htmlLogo from "../../public/JPEGs/htmllogo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  inputedRate: z.string().regex(/^\d+$/, "Rate must be a number."),
  inputedPercentile: z.string().regex(/^\d+$/, "Percentile must be a number."),
  inputedScore: z.string().regex(/^\d+$/, "Score must be a number.")
});

type UserInputs = z.infer<typeof formSchema>;

function Modal() {
  const { isOpen, closeModal, globalUserInput } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserInputs>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    console.log(data);
    const convertedInputsToNumber = {
      rate: Number(data.inputedRate),
      percentile: Number(data.inputedPercentile),
      score: Number(data.inputedScore)
    };
    globalUserInput(convertedInputsToNumber);
    reset();
    closeModal();
  };

  function onCloseModalClearLeftInputs() {
    reset();
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] text-[14px]">
          <div className="bg-white w-[90%] max-w-[600px] p-8 sm:p-10 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[18px] pl-7">Update Scores</h4>
              <div>
                <Image src={htmlLogo} alt="html-logo" width={45} />
              </div>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between gap-1">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-full font-bold text-gray-600 ">
                    1
                  </div>
                  <p>
                    <span className="hidden sm:block">Update your</span>{" "}
                    <span className="font-bold">Rank</span>
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    id="rank"
                    className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("inputedRate", {
                      required: "This field is required",
                      validate: (value) =>
                        !isNaN(Number(value)) || "Input must be a number"
                    })}
                  />
                  {errors.inputedRate && (
                    <p className="text-[8px] text-red-500">
                      {errors.inputedRate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-1">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-full font-bold text-gray-600 ">
                    2
                  </div>
                  <p>
                    <span className="hidden sm:block">Update your</span>{" "}
                    <span className="font-bold">Percentile</span>
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    id="percentile"
                    className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("inputedPercentile", {
                      validate: (value) => {
                        if (Number(value) === Number(value)) {
                          return true;
                        }

                        return "Must be a number";
                      }
                    })}
                  />
                  {errors.inputedPercentile && (
                    <p className="text-[8px] text-red-500">
                      {errors.inputedPercentile.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-1">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-full font-bold text-gray-600 ">
                    3
                  </div>
                  <p>
                    <span className="hidden sm:block"> Update your</span>
                    <span className="font-bold">
                      Current Score &#40;out of 15&#41;
                    </span>
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    id="score"
                    className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("inputedScore", {
                      validate: (value) => {
                        if (Number(value) === Number(value)) {
                          return true;
                        }

                        return "Must be a number";
                      }
                    })}
                  />
                  {errors.inputedScore && (
                    <p className="text-[8px] text-red-500">
                      {errors.inputedScore.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    onCloseModalClearLeftInputs();
                  }}
                  className="px-4 py-3  text-gray-700 rounded-lg hover:bg-gray-400 border border-blue-950 ">
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 bg-blue-950 border-3 border-black text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 ">
                  save
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
