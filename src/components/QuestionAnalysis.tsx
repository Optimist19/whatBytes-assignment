"use client"

import React from 'react'
import ChartPie from './PieChart'
import { useGlobalState } from '@/store/Store';

function QuestionAnalysis() {

	const { score } = useGlobalState();

  return (
	<div className="rounded-md border border-gray-200 py-6 px-6 md:px-8 lg:px-10">
	<div>
	  <div className="font-bold flex items-center justify-between pb-4">
		<p className="text-lg">Question Analysis</p>
		<p className="text-blue-500">{score}/15</p>
	  </div>
	  <p className="text-sm lg:text-base text-gray-800 mb-4">
		<span className="font-bold text-gray-500">
		  You scored {score} {score > 1 ? "questions" : "question"} correct out of 15.
		</span>{" "}
		However, it still needs some improvements.
	  </p>
	  <ChartPie />
	</div>
  </div>
  )
}

export default QuestionAnalysis