const data = [
{
    id: 1,
    name: "Alice Smith",
    department: "Engineering",
    role: "Software Engineer",
    startDate: "2022-03-15"
},
{
    id: 2,
    name: "Bob Johnson",
    department: "Marketing",
    role: "Content Strategist",
    startDate: "2021-11-07"
},
{
    id: 3,
    name: "Carla Ruiz",
    department: "HR",
    role: "HR Manager",
    startDate: "2020-05-22"
},
{
    id: 4,
    name: "Daniel Lee",
    department: "Finance",
    role: "Accountant",
    startDate: "2023-01-10"
},
{
    id: 5,
    name: "Emma Patel",
    department: "Engineering",
    role: "QA Analyst",
    startDate: "2022-08-01"
}];

const table = document.querySelector(".body");

const tableheader = 

/*const tableHeaderRow = document.createElement("tr");

const div = document.querySelector("div.gameboard")

const headers = ["ID", "Name", "Department", "Role", "Start Date"];

const createGameboard = () => {
  
}*/
headers.forEach(headerText => {
  const th = document.createElement("th");
  th.textContent = headerText;
  tableHeaderRow.appendChild(th);
});

table.appendChild(tableHeaderRow);

data.forEach(rowData => {
  const row = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.textContent = rowData.id;
  row.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = rowData.name;
  row.appendChild(nameCell);

  const departmentCell = document.createElement("td");
  departmentCell.textContent = rowData.department;
  row.appendChild(departmentCell);

  const roleCell = document.createElement("td");
  roleCell.textContent = rowData.role;
  row.appendChild(roleCell);

  const startDateCell = document.createElement("td");
  startDateCell.textContent = rowData.startDate;
  row.appendChild(startDateCell);

  table.appendChild(row);
});


