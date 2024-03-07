var infoIcon = document.getElementById("infoIcon");
if (infoIcon) {
    infoIcon.addEventListener("click", function () {
        var popup = document.getElementById("frameContainer");
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
            popupStyle.display = "flex";
            popupStyle.zIndex = 100;
            popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
            popupStyle.alignItems = "center";
            popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");

        var onClick =
            popup.onClick ||
            function (e) {
                if (e.target === popup && popup.hasAttribute("closable")) {
                    popupStyle.display = "none";
                }
            };
        popup.addEventListener("click", onClick);
    });
}

var frameContainer10 = document.getElementById("frameContainer10");
if (frameContainer10) {
    frameContainer10.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='component199Container']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    });
}

function showContent() {
    var contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.style.display = 'flex';
        contentElement.style.zIndex = '6';
    }
}

function hideContent() {
    var contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.style.display = 'none';
    }
}

function addNewNote() {
    var notesContainer = document.getElementById('notesContainer');
    var newNoteContainer = document.createElement('div');
    newNoteContainer.className = 'relative rounded-xl bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white font-poppins mt-2';
    var newNoteId = 'note' + (notesContainer.children.length + 1);
    newNoteContainer.id = newNoteId;

    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title' + (notesContainer.children.length + 1);
    titleInput.name = 'title' + (notesContainer.children.length + 1);
    titleInput.placeholder = 'Type title here';
    titleInput.className = 'w-full px-3 py-2 border-0 focus:outline-none bg-[#0B316E] font-poppins text-white';

    var deleteButton = document.createElement('div');
    deleteButton.className = 'absolute right-0 top-0 mt-1 mr-1';
    var deleteImage = document.createElement('img');
    deleteImage.src = 'public/Frame892.png';
    deleteButton.onclick = function () { deleteNote(newNoteId); };
    deleteButton.appendChild(deleteImage);


    newNoteContainer.appendChild(titleInput);
    newNoteContainer.appendChild(deleteButton);

    var notesTextarea = document.createElement('textarea');
    notesTextarea.id = 'notes' + (notesContainer.children.length + 1);
    notesTextarea.name = 'notes' + (notesContainer.children.length + 1);
    notesTextarea.placeholder = 'Type notes here';
    notesTextarea.rows = 4;
    notesTextarea.className = 'w-full px-3 py-2 border-0 focus:outline-none bg-[#0B316E] font-poppins text-white';

    newNoteContainer.appendChild(notesTextarea);
    notesContainer.appendChild(newNoteContainer);
}

function deleteNote(noteId) {
    var noteToRemove = document.getElementById(noteId);
    if (noteToRemove) {
        noteToRemove.remove();
    }
}

// Task aggregator monior functions


function showAggregatorPopup() {
    const iconToHide = document.getElementById('task-aggregator-icon');
    const popupToShow = document.getElementById('task-aggregator-popup');
    iconToHide.classList.add('hidden');
    popupToShow.classList.remove('hidden');
}

function hideAggregatorPopup() {
    const popupToHide = document.getElementById('task-aggregator-popup');
    const iconToShow = document.getElementById('task-aggregator-icon');
    popupToHide.classList.add('hidden');
    iconToShow.classList.remove('hidden');
}

function toggleChapters(containerId) {
    const header = document.getElementById(containerId).querySelector('.font-semibold');
    const chapters = document.getElementById(containerId).querySelector('ul');

    chapters.classList.toggle('hidden');
}

function toggleImage(imgElement) {
    const originalSrc = "public/task-aggregator-not-done.png";
    const doneSrc = "public/task-aggregator-done.png";

    if (imgElement.src === originalSrc) {
        imgElement.src = doneSrc;
    } else {
        imgElement.src = originalSrc;
    }
}

// Cancel Button
function deleteAllTasks() {
    const mainTaskContainer = document.getElementById('mainTaskContainer');
    mainTaskContainer.innerHTML = '';
}


//   < !--Task aggregator Script-- >

    let mainTaskCounter = 0;
let subTaskCounter = 0;

function addMainTask() {
    mainTaskCounter++;
    const mainTaskContainer = document.getElementById('mainTaskContainer');

    // main task element
    const newMainTask = document.createElement('div');
    newMainTask.innerHTML = `
        <!-- Main Task Element -->
        <div id="mainTask${mainTaskCounter}">
          <div>
          <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white mt-2">
            <input class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="Enter Main Task's name..."></input>
          </div>

          <div class="flex w-[272px] items-center justify-between mt-2">
            <div class="w-[33%]">Focus Time</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 hr"></input>
            </div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>

          <div class="flex w-[272px] items-center mt-2 justify-between">
            <div class="w-[33%]">Break Time</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>

          <div class="flex w-[272px] items-center mt-2 justify-between">
            <div class="w-[33%]">Cycles</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>
        </div>

        <!-- Container for Subtask Elements -->
          <div id="subTaskContainer${mainTaskCounter}" class="hidden"></div>
          
          <!-- Add Subtask Button -->
          <div
            class="relative rounded-xl bg-darkslateblue-500 shadow-[1px_0.5px_4px_rgba(1,_72,_183,_0.35)_inset] box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke hover:cursor-pointer mt-2"
            onclick="addSubTask(${mainTaskCounter})">
            <div class="absolute top-[15px] left-[20px] w-[100%] h-[21px]">
              <div class="absolute top-[calc(50%_-_10.5px)] left-[0px]">
                Add Sub Task
              </div>
            </div>
            <img class="absolute top-[calc(50%_-_10px)] right-[20px] w-5 h-5 object-cover" alt=""
              src="/public/vector@2x.png" />
          </div>
          
        </div>
      `;

    mainTaskContainer.appendChild(newMainTask);
    newMainTask.classList.remove('hidden');
}

function addSubTask(mainTaskId) {
    subTaskCounter++;
    const subTaskContainer = document.getElementById(`subTaskContainer${mainTaskId}`);

    // new subtask element
    const newSubTask = document.createElement('div');
    newSubTask.innerHTML = `
        <!-- Subtask Element -->
        <div>
          

          <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[272px] h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-dark-stroke text-white mt-2">
            <input class="absolute top-[15px] left-[20px] w-[80%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="Enter SubTask's name..."></input>
            <div class="absolute w-5 right-0 h-full flex justify-center items-center">
                <img class="w-5 object-contain p-1 cursor-pointer cancel-image" alt="cancel" src="./public/task-aggregator-cancel.png" />
            </div>
          </div>

          <div class="flex w-[272px] items-center justify-between mt-2">
            <div class="w-[33%]">Focus Time</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 hr"></input>
            </div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>

          <div class="flex w-[272px] items-center mt-2 justify-between">
            <div class="w-[33%]">Break Time</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>

          <div class="flex w-[272px] items-center mt-2 justify-between">
            <div class="w-[33%]">Cycles</div>
            <div class="relative rounded-xl bg-darkslateblue-500 box-border w-[25%] h-[50px] overflow-hidden border-[1px] border-solid border-dark-stroke text-white">
              <input type="number" class="absolute top-[15px] left-[20px] w-[100%] h-[21px] bg-darkslateblue-500 text-white border-0 outline-0" placeholder="00 min"></input>
            </div>
          </div>
        </div>
      `;

    // Add an event listener to the cancel image
    const cancelImage = newSubTask.querySelector('.cancel-image');
    cancelImage.addEventListener('click', () => {
        newSubTask.remove();
    });

    subTaskContainer.appendChild(newSubTask);
    subTaskContainer.classList.remove('hidden');
}