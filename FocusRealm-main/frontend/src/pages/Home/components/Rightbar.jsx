import Bgchange from "./Bgchange";
import Options from "./Options";
import TaskAggregator from "./TaskAggregator";
import Notes from "./Notes";
import React from 'react'

export default function RightBar() {

    return (
        <div
            className="absolute top-[0px] right-[0px] flex flex-col items-end justify-start pt-5 pb-0 pr-5 gap-[35px] z-10 font-poppins">
            
            <Options />
            <Bgchange />
            <TaskAggregator />
            <Notes />
        </div>
    )
}