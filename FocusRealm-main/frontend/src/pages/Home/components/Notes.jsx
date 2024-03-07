import addnotes from '../assets/vector@2x.png'
import notesimg from '../assets/wiredlineal245editdocument-2@2x.png'
import info from '../assets/info@2x.png'
import newnote from '../assets/vector@2x.png'
import arrow from '../assets/arrow-4@2x.png'
import deleteNoteIcon from '../assets/Frame892.png'
import React from 'react'
import { useState } from 'react'

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [frameVisible, setFrameVisible] = useState(false);

    const addNote = () => {
        const newNote = (
            <div key={notes.length} className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white font-poppins mt-2">
                <div>
                    <input
                        type="text"
                        name={`title${notes.length}`}
                        placeholder="Type title here"
                        className="w-full px-3 py-2 border-0 focus:outline-none bg-[#0B316E] font-poppins text-white"
                    />
                    <div className="absolute right-0 top-0 mt-1 mr-1" onClick={() => deleteNote(notes.length)}>
                        <img src={deleteNoteIcon} alt="Delete" />
                    </div>
                </div>
                <div>
                    <textarea
                        name={`notes${notes.length}`}
                        placeholder="Type notes here"
                        rows="4"
                        className="w-full px-3 py-2 border-0 focus:outline-none bg-[#0B316E] font-poppins text-white"
                    ></textarea>
                </div>
            </div>
        );
        setNotes([...notes, newNote]);
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const toggleFrame = () => {
        setFrameVisible(!frameVisible);
    };

    return (
        <div
            className="rounded-mini [background:linear-gradient(270deg,_#010711,_#052554)] shadow-[2px_2px_10px_rgba(50,_183,_246,_0.25)_inset] overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[25px] pb-[31px] gap-[15px] text-left text-sm border-[1px] border-solid border-dark-stroke z-20  w-[272px]">
            <div className="relative flex h-6 text-base">
                <img className="absolute top-[4px] right-[264px] w-4 h-4 object-cover" alt="" src={addnotes} />
                <img className="relative pl-[20px] w-[25px] h-[25px] overflow-hidden shrink-0 object-contain " alt=""
                    src={notesimg} />
                <div className="relative font-medium ">
                    Take Notes
                </div>
                <img className="absolute top-[5px] left-[254px] w-[18px] h-[18px] object-cover" alt="" src={info}
                    id="infoIcon" onClick={toggleFrame}/>
                {/* <div
                    className="absolute top-[0px] left-[calc(50%_+_13.5px)] flex flex-row items-center justify-center gap-[10px] [transform:_rotate(180deg)] [transform-origin:0_0]">
                </div> */}
            </div>
            <div className="relative h-fit">
                <div id="frameContainer" className=""
                    style={{
                        display: frameVisible ? 'block' : 'none',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <div
                        className="relative rounded-mini m-auto bg-darkslateblue-200 box-border overflow-hidden  flex-row items-center justify-center py-[15px] px-3 max-w-[90%] max-h-[90%] text-left text-3xs text-white font-poppins border-[1px] border-solid border-dark-stroke">
                        <div className="inline-block shrink-0">
                            Note some important points to revise them anytime, anywhere. Just go
                            to previous sessions in your profile to go through all the important
                            topics.
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Take Notes --> */}
            <div id="notesContainer">
                {notes.map((note, index) => (
                    <div key={index}>{note}</div>
                ))}
            </div>

            <div id="newNoteButton"
                className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke hover:cursor-pointer"
                onClick={addNote}>
                <div className="absolute top-[15px] left-[20px] w-[89px] h-[21px]">
                    <div className="absolute top-[calc(50%_-_10.5px)] left-[0px]">
                        New note
                    </div>
                </div>
                <img className="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover" alt=""
                    src={newnote} />
            </div>

            <div
                className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 cursor-pointer border-[1px] border-solid border-dark-stroke"
                id="frameContainer10">
                <div className="absolute top-[15px] left-[20px] h-[21px] w-full">
                    <div className="absolute top-[calc(50%_-_10.5px)] left-[0px] font-semibold">
                        Cell structure
                    </div>
                </div>
                <img className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover" alt=""
                    src={arrow} />
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="relative font-medium">Previous task notes</div>
            </div>
            <div
                className="relative rounded-mini bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 cursor-pointer border-[1px] border-solid border-dark-stroke"
                id="frameContainer10">
                <div className="absolute top-[15px] left-[20px] w-[89px] h-[21px]">
                    <div className="absolute top-[calc(50%_-_10.5px)] left-[0px] font-semibold">
                        Physics
                    </div>
                </div>
                <img className="absolute top-[calc(50%_-_0px)] right-[20px] max-h-full w-5 object-cover" alt=""
                    src={arrow} />
            </div>
        </div>
    )
}