let myarray = JSON.parse(localStorage.getItem("taskA1"));
let index = 0, index2=0;
let n1 = myarray.length;
index += n1;


function createNote() {
    if(myarray == null) myarray = [];
    let textTitle = document.getElementById("title").value;
    let textTask = document.getElementById("task").value;
    let textDate = document.getElementById("date").value;
    let textTime = document.getElementById("time").value;
    if(textTitle!=0 && textTask != 0 && textDate != 0) {
        let stringLocal = {"title11": textTitle, "task11": textTask, "date11": textDate, "time11": textTime};
        myarray.push(stringLocal);
        localStorage.setItem("taskA1", JSON.stringify(myarray));
        location.reload();
        index++;
    }else alert("Please fill the form");
}

function onLoadPage() {

    let myInfo1 = JSON.parse(localStorage.getItem("taskA1"));

        if(myInfo1 !== null) {
            for (let i = 0; i < myInfo1.length; i++) {
                if(myInfo1[i] !== undefined) {

                    let allNoteLoad = document.createElement("div");
                    allNoteLoad.setAttribute("id", `createDiv${index2}`);
                    allNoteLoad.setAttribute("class", "myNote");
                    document.getElementById("addNote").appendChild(allNoteLoad);
                    let xButtonLoad = document.createElement("a");
                    xButtonLoad.setAttribute("class", "fas fa-backspace");
                    xButtonLoad.setAttribute("id", "button" + index2);
                    xButtonLoad.setAttribute("hidden", "true");

                    allNoteLoad.appendChild(xButtonLoad);
                    allNoteLoad.innerHTML += "<br/><span class = 'title'>" + myInfo1[i].title11 + "</span><br/><span class = 'task'>" + myInfo1[i].task11 + "</span><br/><br/><span class = 'date'>" + myInfo1[i].date11 + "</span><br/><span class = 'time'>" + myInfo1[i].time11 + "</span>";
                    index2++;
                }

            }
            let queryNoteLoad = document.querySelectorAll(".fas");
            for (let t = 0; t < queryNoteLoad.length; t++) {

                queryNoteLoad[t].addEventListener("click", removeDataPlease);
            }
            let queryForNote = document.querySelectorAll(".myNote");
            for(let w = 0 ; w < queryForNote.length; w++){
                queryForNote[w].addEventListener("mousemove", onOver);

            }

        }

}
function removeDataPlease(e) {
    let res = e.target.id.split("n");
    let myInfo2 = JSON.parse(localStorage.getItem("taskA1"));
    let place = parseInt(res[1]);
    //if(myInfo2.length === place){myInfo2.pop();}
    myInfo2.splice(place, 1);
    localStorage.setItem("taskA1", JSON.stringify(myInfo2));
    location.reload();

}
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}
function onOver(e) {
    let res2 = e.target.id.split("v");
    let place2 = res2[1];
    document.getElementById("button" + place2).hidden = false;
    setTimeout(function () {
        document.getElementById("button" + place2).hidden = true;
    }, 2000);


}