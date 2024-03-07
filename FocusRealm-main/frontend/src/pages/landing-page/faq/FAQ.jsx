import Questions from "../../../assets/data/questions.jsx"
import Accordian from "./Accordian.jsx"
import Heading from "./Heading.jsx"
import React from "react"
function FAQ() {
  return (
    <>
      <Heading />
      {Questions?.map((i) => (
        <div className="p-2 flex flex-col gap-6 text-lg font-medium font-poppins px-72">
          <Accordian question={i.question} answer={i.answer} />
        </div>
      ))}
    </>
  )
}

export default FAQ