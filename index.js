// function addRole() {
//     db.query("SELECT * FROM department", function (err, results) {
//       if (err) throw err;
//       const deptRoles = results.map((dept) => ({
//         name: `${dept.name}`,
//         value: dept.id,
//       }));
  
//       inquirer
//         .prompt([{
//             type: "input",
//             message: "What is the name of the role?",
//             name: "title"
//           },
//           {
//             type: "input",
//             message: "What is the salary of the role?",
//             name: "salary"
//           },
//           {
//             type: "list",
//             message: "Which department does the role belong to?",
//             choices: deptRoles,
//             name: "department"
//           }
//         ])
//         .then(response => {
//           const sql = `INSERT INTO role SET ?`;
//           const obj = {
//             title: response.title,
//             salary: response.salary,
//             department_id: response.department
//           }
//           db.query(sql, obj, function (err, result) {
//             if (err) {
//               console.log(err);
//               process.exit(1);
//             }
//             mainMenu();
//           });
//         })
//     })
//   }