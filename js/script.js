/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
    Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate.
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

/*** 
   Create the `showPage` function.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (studentList, page) => {
  let startIndex = page * studentsPerPage - studentsPerPage;
  let endIndex = page * studentsPerPage;

  for (let total = 0; total < studentList.length; total += 1) {
    if (total >= startIndex && total < endIndex) {
      studentList[total].style.display = "block";
    } else {
      studentList[total].style.display = "none";
    }
  }
};

/***
   Create the `appendPageLinks function`.
***/
function getPageNumber() {
  return Math.ceil(studentList.length / studentsPerPage);
}



const appendPagelinks = () => {
  let div = document.createElement("div");
  let ul = document.createElement("ul");
  let page = document.querySelector(".page");
  div.className = "pagination";

  div.appendChild(ul);
  page.appendChild(div);

  for (let i = 1; i <= getPageNumber(); i += 1) {
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.setAttribute("href", "#");
    li.appendChild(a);
    ul.appendChild(li);
    a.textContent = i;
    if (i == 1) {
      a.className = "active";
    }
    a.addEventListener("click", e => {
      let a = document.querySelectorAll(".pagination li a");
      for (let k = 0; k < a.length; k += 1) {
        a[k].className = "";
      }
      e.target.className = "active";
      showPage(studentList, event.target.textContent);
    });
  }
};

showPage(studentList, 1);
appendPagelinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
