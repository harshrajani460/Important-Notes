function showNotes() {
    // console.log(1);
    let s = localStorage.getItem('notes');
    // console.log(s);
    if (s == null) {
        // console.log(2);
        let text = '<p style="text-align : center;"> Nothing to show! Use Add notes button to add the notes</p>'
        document.getElementById('notes').innerHTML = text;
    }
    else {
        // console.log(3);
        let myObj = JSON.parse(s);
        if (myObj.length == 0) {
            let text = '<p style="text-align : center;"> Nothing to show! Use Add notes button to add the notes</p>'
            document.getElementById('notes').innerHTML = text;
        }
        else {
            let html = "";
            myObj.forEach(function (element, index) {
                // console.log(element);
                html += `
            <div class="input-group mb-3">
            <input id="addTxt - ${index}" type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" value="${element}">
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</a>
            </div>
            `;


            });
            document.getElementById('notes').innerHTML = html;
        }

    }
}

showNotes();

let addBtn = document.getElementById('addBtn');
let addTxt = document.getElementById('addTxt');
addTxt.addEventListener('keyup', function (element) {
    if (element.keyCode === 13) {
        document.getElementById('addBtn').click();
    }
});
addBtn.addEventListener('click', function (e) {
    let text = document.getElementById('addTxt').value;
    // console.log(text);
    if (text != null && text.length != 0) {
        let s = localStorage.getItem('notes');
        myObj = [];
        if (s != null)
            myObj = JSON.parse(s);
        myObj.push(text);
        localStorage.setItem('notes', JSON.stringify(myObj));
        document.getElementById('addTxt').value = "";
        // console.log("hi");
        // console.log(localStorage.getItem('notes'));
        showNotes();

    }
});
// addBtn.addEventListener('mouseout', function (e) {
//     for(let i=0;i<3;i++)
//     {
//         let text = 100*Math.random();
//         // console.log(text);
        
//         let s = localStorage.getItem('notes');
//         myObj = [];
//         if (s != null)
//         myObj = JSON.parse(s);
//         myObj.push(text);
//         localStorage.setItem('notes', JSON.stringify(myObj));
//         document.getElementById('addTxt').value = "";
//             // console.log("hi");
//             // console.log(localStorage.getItem('notes'));
        

        
//     }
//     showNotes();
    
// });

// function deleteNote()
// {
    
// }
function deleteNote(index) // inde is id of the button
{
    let s = localStorage.getItem('notes');
    let myObj = JSON.parse(s);
    myObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(myObj));
    showNotes();
}
let delBtn = document.getElementById('delBtn');

delBtn.addEventListener('click',function(event){
    localStorage.clear();
    showNotes();
});





