import oldshop from '../assets/wiredlineal1459oldshop-1-1@2x.png'
import oldshop2 from '../assets/wiredlineal1459oldshop-2@2x.png'
import backbutton from '../assets/back_butoon.svg'
import info from '../assets/info@2x.png'
import addtask from '../assets/vector@2x.png'
import aggregatorcancel from '../assets/task-aggregator-cancel.png'
import aggregatorre from '../assets/task-aggregator-re.png'
import notdone from '../assets/task-aggregator-not-done.png'
import React from 'react'

import { useState } from 'react'

export default function TaskAggregator() {

    const [showAggregator, setShowAggregator] = useState(false);
    const toggleAggregator = () => {
        setShowAggregator(!showAggregator);
    };

    const [mainTasks, setMainTasks] = useState([]);
    const [subTasks, setSubTasks] = useState([]);

    const addMainTask = () => {
        const newMainTask = {
            id: mainTasks.length + 1,
            name: "", // Add properties like name, startTime, endTime, breakTime
            startTime: "",
            endTime: "",
            breakTime: "",
            cycles: "",
            subTasks: [],
        };
        setMainTasks([...mainTasks, newMainTask]);
    };

    const addSubTask = (mainTaskId) => {
        const newSubTask = {
            id: subTasks.length + 1,
            mainTaskId: mainTaskId,
            name: "", 
            startTime: "",
            endTime: "",
            breakTime: "",
            cycles: "",
        };
        setSubTasks([...subTasks, newSubTask]);
        const updatedMainTasks = mainTasks.map(task => {
            if (task.id === mainTaskId) {
                return { ...task, subTasks: [...task.subTasks, newSubTask] };
            }
            return task;
        });
        setMainTasks(updatedMainTasks);
        console.log(mainTasks);
    };

    const deleteMainTask = (taskId) => {
        const updatedMainTasks = mainTasks.filter(task => task.id !== taskId);
        setMainTasks(updatedMainTasks);
    };

    const deleteSubTask = (subTaskId, mainTaskId) => {
        const updatedSubTasks = subTasks.filter(subTask => subTask.id !== subTaskId);
        setSubTasks(updatedSubTasks);
        const updatedMainTasks = mainTasks.map(task => {
            if (task.id === mainTaskId) {
                return { ...task, subTasks: task.subTasks.filter(subTask => subTask.id !== subTaskId) };
            }
            return task;
        });
        setMainTasks(updatedMainTasks);
    };

    const deleteAll = () => {
        setMainTasks([]);
        setSubTasks([]);
    }

    return (
        <div>
            {!showAggregator &&
                <div className="relative w-[75px] h-[75px] text-6xs" id="task-aggregator-icon" onClick={toggleAggregator}>
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-deepskyblue-200">
                        </div>
                        <div className="absolute h-[96%] w-[78.67%] top-[0%] right-[10.67%] bottom-[4%] left-[10.67%] opacity-[0]">
                            <img className="absolute top-[0px] left-[4px] w-[50px] h-[50px] object-cover" alt=""
                                src={oldshop} />

                            <div className="absolute top-[42px] left-[9px] font-medium">
                                <p className="m-0">Task</p>
                                <p className="m-0">Aggregator</p>
                            </div>
                        </div>
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_25px)] w-[50px] h-[50px] overflow-hidden object-cover"
                            alt="" src={oldshop2} />
                    </div>
                </div>
            }

            {showAggregator &&
                <div
                    className="relative rounded-mini [background:linear-gradient(270deg,_#010711,_#052554)] shadow-[2px_2px_10px_rgba(50,_183,_246,_0.25)_inset] overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[25px] pb-[31px] gap-[15px] text-left text-sm border-[1px] border-solid border-dark-stroke z-20"
                    id="task-aggregator-popup">

                    {/* <!-- Heading --> */}
                    <div className="relative flex w-[272px] h-6 text-base">
                        <img className="absolute top-[4px] right-[264px] w-4 h-4 object-cover z-10" alt="" src={backbutton} onClick={toggleAggregator} />
                        <img className="relative pl-[20px] w-[25px] h-[25px] overflow-hidden shrink-0 object-contain " alt=""
                            src={oldshop} />
                        <div className="relative font-medium ">
                            Task Aggregator
                        </div>
                        <img className="absolute top-[5px] left-[254px] w-[18px] h-[18px] object-cover" alt="info focus realm" src={info}
                            id="infoIcon" />
                    </div>


                    {/* <!-- New code --> */}
                    <div id="mainTaskContainer">
                        {mainTasks.map(mainTask => (
                            <div key={mainTask.id}>
                                <div>
                                    <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white mt-2">
                                        <input className="absolute top-[15px] left-[20px] w-[80%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" 
                                            placeholder="Enter SubTask's name..." 
                                            value={mainTask.name}
                                            onChange={(e) => {
                                                const updatedMainTasks = mainTasks.map(task => {
                                                    if (task.id === mainTask.id) {
                                                        return { ...task, name: e.target.value };
                                                    }
                                                    return task;
                                                });
                                                setMainTasks(updatedMainTasks);
                                            }}
                                        />
                                        <div className="absolute w-5 right-0 h-full flex justify-center items-center">
                                            <img className="w-5 object-contain p-1 cursor-pointer cancel-image" alt="cancel" src={aggregatorcancel} onClick={() => deleteMainTask(mainTask.id)} />
                                        </div>
                                    </div>

                                    <div className="flex w-[272px] items-center justify-between mt-2">
                                        <div className="w-[33%]">Focus Time</div>
                                        <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                            <input 
                                                type="number" 
                                                className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" 
                                                placeholder="00 hr" 
                                                value={mainTask.endTime}
                                                onChange={(e) => {
                                                    const updatedMainTasks = mainTasks.map(task => {
                                                        if (task.id === mainTask.id) {
                                                            return { ...task, endTime: e.target.value };
                                                        }
                                                        return task;
                                                    });
                                                    setMainTasks(updatedMainTasks);
                                                }}
                                            />
                                        </div>
                                        <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                            <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                        </div>
                                    </div>

                                    <div className="flex w-[272px] items-center mt-2 justify-between">
                                        <div className="w-[33%]">Break Time</div>
                                        <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                            <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                        </div>
                                    </div>

                                    <div className="flex w-[272px] items-center mt-2 justify-between">
                                        <div className="w-[33%]">Cycles</div>
                                        <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                            <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                        </div>
                                    </div>

                                    {mainTask.subTasks.map(subTask => (
                                        <div key={subTask.id}>
                                            {/* Subtask Element */}
                                            <div>
                                                <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white mt-2">
                                                    <input className="absolute top-[15px] left-[20px] w-[80%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="Enter SubTask's name..." />
                                                    <div className="absolute w-5 right-0 h-full flex justify-center items-center">
                                                        <img className="w-5 object-contain p-1 cursor-pointer cancel-image" alt="cancel" src={aggregatorcancel} onClick={() => deleteSubTask(subTask.id, mainTask.id)} />
                                                    </div>
                                                </div>

                                                <div className="flex w-[272px] items-center justify-between mt-2">
                                                    <div className="w-[33%]">Focus Time</div>
                                                    <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                                        <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 hr" />
                                                    </div>
                                                    <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                                        <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                                    </div>
                                                </div>

                                                <div className="flex w-[272px] items-center mt-2 justify-between">
                                                    <div className="w-[33%]">Break Time</div>
                                                    <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                                        <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                                    </div>
                                                </div>

                                                <div className="flex w-[272px] items-center mt-2 justify-between">
                                                    <div className="w-[33%]">Cycles</div>
                                                    <div className="relative rounded-mini bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
                                                        <input type="number" className="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Container for Subtask Elements */}
                                    <div id={`subTaskContainer${mainTask.id}`} className="hidden"></div>

                                    {/* Add Subtask Button */}
                                    <div
                                        className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke hover:cursor-pointer mt-2"
                                        onClick={() => addSubTask(mainTask.id)}>
                                        <div className="absolute top-[15px] left-[20px] w-[100%] h-[21px]">
                                            <div className="absolute top-[calc(50%_-_10.5px)] left-[0px]">
                                                Add Sub Task
                                            </div>
                                        </div>
                                        <img className="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover" alt=""
                                            src={addtask} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <!-- Add Main Task Button --> */}
                    <div id="newTaskButton"
                        className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke hover:cursor-pointer"
                        onClick={addMainTask}>
                        <div className="absolute top-[15px] left-[20px] w-[100%] h-[21px]">
                            <div className="absolute top-[calc(50%_-_10.5px)] left-[0px]">
                                Add Main Task
                            </div>
                        </div>
                        <img className="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover" alt=""
                            src={addtask} />
                    </div>

                    {/* <!-- Cancel / Save --> */}
                    <div className="flex w-full justify-evenly">
                        <button className="w-[100px] bg-red-500 rounded-full p-2 text-white hover:cursor-pointer" onClick={deleteAll}>Cancel</button>
                        <button className="w-[100px] bg-green-500 rounded-full p-2 text-white  hover:cursor-pointer">Save</button>
                    </div>

                    {/* <!-- Score section --> */}
                    <div
                        className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-fit overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke flex">
                        <div className="w-[100%] flex flex-col justify-center items-center p-4">
                            <div>0</div>
                            <div>Task Set</div>
                        </div>
                        <div className="w-1 bg-dark-stroke h-[50px] m-auto"></div>
                        <div className="w-[100%] flex flex-col justify-center items-center p-4">
                            <div>0</div>
                            <div>Completed</div>
                        </div>
                    </div>

                    {/* <!-- Ongoing Task heading --> */}
                    <div className="relative flex w-[272px] h-6 text-base">
                        <div className="relative font-medium ">
                            Ongoing Tasks
                        </div>
                    </div>

                    {/* <!-- Sample Ongoing task --> */}
                    <div
                        className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] min-h-[50px] h-full overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke">
                        {/* <!-- Physics header --> */}
                        <div className="absolute top-[15px] left-[20px] w-[89px] h-[21px]">
                            <div className="absolute top-[calc(50%_-_10.5px)] left-[0px] font-semibold">
                                Physics
                            </div>
                        </div>

                        {/* <!-- Action icons --> */}
                        <div className="flex absolute top-0 bottom-0 right-[20px] max-h-full">
                            <img className="w-5 object-contain p-1 cursor-pointer" alt="" src={aggregatorre} />
                            <img className="w-5 object-contain p-1 cursor-pointer" alt="" src={aggregatorcancel} />
                            <img className="w-5 object-contain p-1 cursor-pointer" alt="" src={notdone} />
                        </div>

                        {/* <!-- List of chapters (initially hidden) --> */}
                        {/* <!-- <ul className="absolute mt-[50px] left-0 w-full h-auto overflow-hidden" id="physicsChapters">
                        <li>Chapter 1: A</li>
                        <li>Chapter 2: B</li>
                        <li>Chapter 3: C</li>
                    </ul> --> */}
                    </div>

                </div>
            }
        </div>

    )
}
