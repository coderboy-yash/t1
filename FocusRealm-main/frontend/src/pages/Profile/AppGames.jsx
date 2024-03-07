//import logo from './logo.svg';
 import './AppExercise.css';
import React from 'react';
import {Link} from "react-router-dom"
function AppGame() {
  return (
    <div className="flex flex-col items-start pt-12 bg-gray-950">
      <div className="flex gap-4 items-center mt-8 ml-16 text-5xl font-semibold text-center text-white whitespace-nowrap max-md:ml-2.5 max-md:text-4xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea00b061e8ac5ed2286d600c0d39a9e2275b1e2fe316d15ac64aa8b06d9e89e6?"
          className="self-stretch my-auto aspect-square w-[50px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22bf358d7ef11e03ede2f81debb1ce663c0c330be9bf1be7a45118f04b62414e?"
          className="self-stretch my-auto aspect-square w-[50px]"
        />
        <div className="grow self-stretch max-md:text-4xl">Games</div>
      </div>
      <div className="mt-36 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-end px-16 pt-12 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex z-10 flex-col justify-center py-12 pr-6 pl-14 mt-20 mr-6 max-w-full rounded-3xl w-[777px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                <div className="my-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="grow w-full aspect-[1.33] max-md:mt-9"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto font-semibold text-white max-md:mt-10">
<div className="text-4xl">Trivia</div>
                        <div className="mt-5 text-sm">
                          As you step into the virtual realm of Blackjack,
                          prepare to immerse yourself in the thrill of the
                          cards, the anticipation of the draw, and the strategic
                          decisions that can lead to victory.
                        </div>
                        <div className="justify-center px-16 py-1.5 mt-5 text-lg whitespace-nowrap bg-blue-800 rounded-3xl border border-sky-400 border-solid shadow-sm max-md:pr-7 max-md:pl-5">
                        <Link to="/trivia"> <div className="flex-auto text-white text-decoration-line: none">Start</div></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="grow px-5 mt-32 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center py-12 pr-6 pl-14 w-full rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow self-stretch w-full aspect-[1.39] max-md:mt-9"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow font-semibold text-white max-md:mt-9">
                            <div className="text-4xl">Sudoku</div>
                            <div className="mt-5 text-sm">
                              As you step into the virtual realm of Blackjack,
                              prepare to immerse yourself in the thrill of the
                              cards, the anticipation of the draw, and the
                              strategic decisions that can lead to victory.
                            </div>
                            <div className="justify-center px-16 py-1.5 mt-5 text-lg whitespace-nowrap bg-blue-800 rounded-3xl border border-sky-400 border-solid shadow-sm max-md:pr-7 max-md:pl-5">
                            <Link to="/sudoku"> <div className="flex-auto text-white text-decoration-line: none">Start</div></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center py-12 pr-6 pl-14 w-full rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow self-stretch w-full aspect-[1.39] max-md:mt-9"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow font-semibold text-white max-md:mt-9">
                            <div className="text-4xl">Guessthelogo</div>
                            <div className="mt-5 text-sm">
                              As you step into the virtual realm of Blackjack,
                              prepare to immerse yourself in the thrill of the
                              cards, the anticipation of the draw, and the
                              strategic decisions that can lead to victory.
                            </div>
                            <div className="justify-center px-16 py-1.5 mt-5 text-lg whitespace-nowrap bg-blue-800 rounded-3xl border border-sky-400 border-solid shadow-sm max-md:pr-7 max-md:pl-5">
                            <Link to="/guessthelogo"> <div className="flex-auto text-white text-decoration-line: none">Start</div></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center py-12 pr-6 pl-14 w-full rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow self-stretch w-full aspect-[1.39] max-md:mt-9"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow font-semibold text-white max-md:mt-9">
                            <div className="text-4xl">Typingtest</div>
                            <div className="mt-5 text-sm">
                              As you step into the virtual realm of Blackjack,
                              prepare to immerse yourself in the thrill of the
                              cards, the anticipation of the draw, and the
                              strategic decisions that can lead to victory.
                            </div>
                            <div className="justify-center px-16 py-1.5 mt-5 text-lg whitespace-nowrap bg-blue-800 rounded-3xl border border-sky-400 border-solid shadow-sm max-md:pr-7 max-md:pl-5">
                            <Link to="/typingtest"> <div className="flex-auto text-white text-decoration-line: none">Start</div></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end px-3 py-3.5 mt-36 max-w-full text-2xl font-semibold text-white whitespace-nowrap rounded-3xl border-blue-700 border-solid bg-zinc-800 border-[3px] w-[418px] max-md:mt-10">
        <div className="flex-auto my-auto">Scorecard</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99560db3335bb3d8b4ecdd572cd41fbdda3841e29a288f2c4bd0e8dea9eb320a?"
          className="w-12 aspect-[0.98]"
        />
      </div>
    </div>
  );
}

export default AppGame;
