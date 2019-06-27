/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing//

 
// MY Global Variables(studentList and studentsPerPage. )//

const studentList = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

//This Is my showPage function create tomake sure that I have only ten students on the page at a time.//

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

/*** This is My appendPageLink and getPageNumber function used to break the 
studentList into groups of ten (studentsPerPage) for each page of ten students you have.
Also I had to create a click button to go through all the list of students instead of the list
being stuck on one group of ten students.
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


