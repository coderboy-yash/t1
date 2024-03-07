import imgt1 from '../assets/frame-761@2x.png'
import imgt2 from '../assets/group-333@2x.png'
import imgt3 from '../assets/group@2x.png'

import imgt4 from '../assets/frame-761@2x.png'
import React, {useState} from 'react'


export default function Clock() {

    const [showClock, setShowClock] = useState(true);

    const toggleClock = () => {
        showClock===false ? setShowClock(true) : setShowClock(false);
    }

    return (
        <div>
            <div
                className={` flex items-center justify-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "hidden" : ""}`}>
                <div className="w-[380px] h-[380px]">
                    <div
                        className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
                            alt="" src={imgt1} />
                        <div
                            className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
                        </div>
                        <div className="absolute top-[94.61px] left-[calc(50%_-_74.09px)] font-medium ">Chapter 1</div>
                        <b
                            className="absolute top-[calc(50%_-_28.93px)] left-[calc(50%_-_86.79px)] text-[39.09px] text-left ">00:48:02</b>

                        <img
                            className="absolute h-[8.23%] w-[26.75%] top-[66.87%] right-[36.63%] bottom-[24.9%] left-[36.63%] max-w-full overflow-hidden max-h-full object-cover"
                            alt="" src={imgt2} />
                        <img onClick={toggleClock}
                            className="h-[6.17%] w-[5.86%] max-w-full cursor-pointer overflow-hidden max-h-full object-cover"
                            alt="" src={imgt3} />
                    </div>
                </div>
            </div>

            <div id="content"
                className={` flex justify-center items-center [filter:drop-shadow(-8px_-8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(8px_8px_50px_rgba(50,_183,_246,_0.05))_drop-shadow(-4px_-4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(4px_4px_25px_rgba(50,_183,_246,_0.15))_drop-shadow(0px_0px_57.46px_rgba(76,_125,_201,_0.25))_drop-shadow(0px_0px_32.83px_rgba(76,_125,_201,_0.25))] text-[31.28px] ${showClock == false ? "" : "hidden"}`}>
                <div className="w-[380px] h-[380px]">
                    <div
                        className="absolute h-full rounded-[50%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[-8px_-8px_50px_rgba(50,_183,_246,_0.05),_8px_8px_50px_rgba(50,_183,_246,_0.05),_-4px_-4px_25px_rgba(50,_183,_246,_0.15),_4px_4px_25px_rgba(50,_183,_246,_0.15),_0px_0px_57.46px_rgba(76,_125,_201,_0.25),_0px_0px_32.83px_rgba(76,_125,_201,_0.25)]">
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[375px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none w-10 h-[50px] overflow-hidden object-cover"
                            alt="" src={imgt4} />
                        <div className=" flex flex-col justify-between items-center mt-24 ">
                            <div
                                className="absolute top-[calc(50%_-_190px)] left-[calc(50%_-_190px)] rounded-[50%] bg-gray shadow-[15.637859344482422px_15.637859344482422px_78.19px_rgba(50,_183,_246,_0.25)_inset] box-border w-[380px] h-[380px] border-[7.8px] border-solid border-royalblue">
                            </div>
                            <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
                                <div className="text-xl">Focus time</div>
                                <div className="text-[39.09px] text-left d-flex">
                                    <input type="number" className="w-[66px] h-[34px] border rounded-2xl text-center text-l" placeholder="00hr" />
                                    <input type="number" className="w-[66px] h-[34px] rounded-2xl text-center text-l" placeholder="00min" />
                                </div>
                            </div>
                            
                            <div className='w-[100%] flex justify-center items-baseline gap-2 z-20'>
                                <div
                                    className="text-xl inline-block overflow-hidden max-h-full object-cover">
                                    Break time</div>
                                <div className="text-[39.09px] text-left d-flex inline-block">
                                    <input type="number" className="w-[66px] h-[34px] border rounded-m rounded-2xl text-center text-l"
                                        placeholder="hh" />
                                </div>
                            </div>
                            
                            <div className="text-[39.09px] text-left d-flex z-20">
                                <button className="w-[128px] h-[40px] rounded-2xl cursor-pointer">start</button>
                            </div>
                        </div>
                        
                        {/* <img alt="" src={imgt2} /> */}
                        
                    </div>
                    <img onClick={toggleClock}
                            className="aboslute top-0 left-0 cursor-pointer h-[6.17%] w-[5.86%]  max-w-full overflow-hidden max-h-full object-cover" alt=""
                            src={imgt3} />
                </div>
            </div>
        </div>
    )
}


// import oldshop from '../assets/wiredlineal1459oldshop-1-1@2x.png'
// import oldshop2 from '../assets/wiredlineal1459oldshop-2@2x.png'
// import backbutton from '../assets/back_butoon.svg'
// import info from '../assets/info@2x.png'
// import addtask from '../assets/vector@2x.png'
// import aggregatorcancel from '../assets/task-aggregator-cancel.png'
// import aggregatorre from '../assets/task-aggregator-re.png'
// import notdone from '../assets/task-aggregator-not-done.png'
// import React, { useState, useEffect } from 'react'

// function Clock() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time) => {
//         return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     return (
//         <div className="relative text-white text-6xs">
//             {formatTime(time)}
//         </div>
//     );
// }

// export default function TaskAggregator() {
//     const [showAggregator, setShowAggregator] = useState(false);
//     const toggleAggregator = () => {
//         setShowAggregator(!showAggregator);
//     };

//     const [mainTasks, setMainTasks] = useState([]);
//     const [subTasks, setSubTasks] = useState([]);
//     const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (mainTasks.length > 0) {
//                 const currentMainTask = mainTasks[currentTaskIndex];
//                 if (currentMainTask.subTasks.length > 0) {
//                     const currentSubTask = currentMainTask.subTasks[0];
//                     if (currentSubTask.endTime > 0) {
//                         const updatedSubTasks = [...currentMainTask.subTasks];
//                         updatedSubTasks[0].endTime -= 1;
//                         const updatedMainTasks = [...mainTasks];
//                         updatedMainTasks[currentTaskIndex].subTasks = updatedSubTasks;
//                         setMainTasks(updatedMainTasks);
//                     } else {
//                         updatedSubTasks.shift();
//                         if (updatedSubTasks.length === 0) {
//                             setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % mainTasks.length);
//                         }
//                     }
//                 } else {
//                     if (currentMainTask.endTime > 0) {
//                         const updatedMainTasks = [...mainTasks];
//                         updatedMainTasks[currentTaskIndex].endTime -= 1;
//                         setMainTasks(updatedMainTasks);
//                     } else {
//                         const updatedMainTasks = [...mainTasks];
//                         updatedMainTasks.shift();
//                         setCurrentTaskIndex(0);
//                     }
//                 }
//             }
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [mainTasks, currentTaskIndex]);

//     const addMainTask = () => {
//         const newMainTask = {
//             id: mainTasks.length + 1,
//             name: "",
//             startTime: 0,
//             endTime: 0,
//             breakTime: 0,
//             cycles: 0,
//             subTasks: [],
//         };
//         setMainTasks([...mainTasks, newMainTask]);
//     };

//     const addSubTask = (mainTaskId) => {
//         const newSubTask = {
//             id: subTasks.length + 1,
//             mainTaskId: mainTaskId,
//             name: "",
//             startTime: 0,
//             endTime: 0,
//             breakTime: 0,
//             cycles: 0,
//         };
//         setSubTasks([...subTasks, newSubTask]);
//         const updatedMainTasks = mainTasks.map((task) => {
//             if (task.id === mainTaskId) {
//                 return { ...task, subTasks: [...task.subTasks, newSubTask] };
//             }
//             return task;
//         });
//         setMainTasks(updatedMainTasks);
//     };

//     const deleteMainTask = (taskId) => {
//         const updatedMainTasks = mainTasks.filter((task) => task.id !== taskId);
//         setMainTasks(updatedMainTasks);
//     };

//     const deleteSubTask = (subTaskId, mainTaskId) => {
//         const updatedSubTasks = subTasks.filter((subTask) => subTask.id !== subTaskId);
//         setSubTasks(updatedSubTasks);
//         const updatedMainTasks = mainTasks.map((task) => {
//             if (task.id === mainTaskId) {
//                 return { ...task, subTasks: task.subTasks.filter((subTask) => subTask.id !== subTaskId) };
//             }
//             return task;
//         });
//         setMainTasks(updatedMainTasks);
//     };

//     const deleteAll = () => {
//         setMainTasks([]);
//         setSubTasks([]);
//     };

//     return (
//         <div>
//             {!showAggregator && (
//                 <div className="relative w-[75px] h-[75px] text-6xs" id="task-aggregator-icon" onClick={toggleAggregator}>
//                     <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
//                         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gradient-to-br from-rgba(5, 37, 84, 0.5) to-rgba(1, 7, 17, 0.5) border-[1px] border-solid border-deepskyblue-200"></div>
//                         <div className="absolute h-[96%] w-[78.67%] top-[0%] right-[10.67%] bottom-[4%] left-[10.67%] opacity-[0]">
//                             <img className="absolute top-[0px] left-[4px] w-[50px] h-[50px] object-cover" alt="" src={oldshop} />
//                             <div className="absolute top-[42px] left-[9px] font-medium">
//                                 <p className="m-0">Task</p>
//                                 <p className="m-0">Aggregator</p>
//                             </div>
//                         </div>
//                         <img className="absolute top-[calc(50% - 25px)] left-[calc(50% - 25px)] w-[50px] h-[50px] overflow-hidden object-cover" alt="" src={oldshop2} />
//                     </div>
//                 </div>
//             )}

//             {showAggregator && (
//                 <div className="relative rounded-mini bg-gradient-to-br from-#010711 to-#052554 shadow-[2px_2px_10px_rgba(50, 183, 246, 0.25)_inset] overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[25px] pb-[31px] gap-[15px] text-left text-sm border-[1px] border-solid border-dark-stroke z-20" id="task-aggregator-popup">

//                     {/* <!-- Heading --> */}
//                     <div className="relative flex items-center justify-between text-xs">
//                         <div className="relative flex items-center justify-start">
//                             <img className="relative right-[6px] w-4 h-4 overflow-hidden object-cover" alt="" src={info} />
//                         </div>

//                         {/* <!-- Clock --> */}
//                         <Clock />
//                     </div>

//                     {/* <!-- Add Task Button --> */}
//                     <div className="relative w-[100%] h-5 flex items-center justify-start text-xs">
//                         <div className="relative w-[19px] h-[19px]">
//                             <img className="absolute w-[19px] h-[19px] overflow-hidden object-cover" alt="" src={addtask} />
//                         </div>
//                         <div className="relative w-[81px] pl-[8px] font-medium cursor-pointer" onClick={addMainTask}>Add Task</div>
//                     </div>

//                     {/* <!-- Main Tasks --> */}
//                     <div className="relative w-[100%]">
//                         {mainTasks.map((task) => (
//                             <div key={task.id} className="relative flex flex-col w-[100%]">
//                                 <div className="relative w-[100%]">
//                                     <div className="relative flex items-center justify-start w-[100%] border-[1px] border-solid border-dark-stroke">
//                                         <div className="relative w-[50%] h-[40px] pl-[9px] flex items-center justify-start overflow-hidden">
//                                             <div className="relative font-medium text-[14px] whitespace-nowrap overflow-hidden overflow-ellipsis">{task.name}</div>
//                                         </div>
//                                         <div className="relative flex items-center justify-start w-[50%] h-[40px] pl-[9px]">
//                                             <div className="relative w-[28px] h-[28px] flex items-center justify-center overflow-hidden cursor-pointer">
//                                                 <img className="absolute top-[calc(50% - 14px)] left-[calc(50% - 14px)] w-[28px] h-[28px] overflow-hidden object-cover" alt="" src={aggregatorcancel} onClick={() => deleteMainTask(task.id)} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="relative w-[100%]">
//                                         {task.subTasks.map((subTask) => (
//                                             <div key={subTask.id} className="relative flex items-center justify-start w-[100%] border-[1px] border-solid border-dark-stroke">
//                                                 <div className="relative w-[50%] h-[40px] pl-[9px] flex items-center justify-start overflow-hidden">
//                                                     <div className="relative font-medium text-[14px] whitespace-nowrap overflow-hidden overflow-ellipsis">{subTask.name}</div>
//                                                 </div>
//                                                 <div className="relative flex items-center justify-start w-[50%] h-[40px] pl-[9px]">
//                                                     <div className="relative w-[28px] h-[28px] flex items-center justify-center overflow-hidden cursor-pointer">
//                                                         <img className="absolute top-[calc(50% - 14px)] left-[calc(50% - 14px)] w-[28px] h-[28px] overflow-hidden object-cover" alt="" src={aggregatorre} onClick={() => deleteSubTask(subTask.id, task.id)} />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* <!-- Footer --> */}
//                     <div className="relative w-[100%] h-[50px]">
//                         <div className="relative flex items-center justify-center w-[100%] h-[40px] border-[1px] border-solid border-dark-stroke">
//                             <div className="relative font-medium" onClick={deleteAll}>Done</div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
