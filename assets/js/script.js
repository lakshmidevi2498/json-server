
      //  CRUD operations using fetch()

// let sDetails=document.querySelector("tbody");
// let add=document.getElementById("add");
// let saveb=document.getElementById("save");
// let cancel=document.getElementById("cancel");
// let edit=document.getElementById("edit");
// let deletebtn=document.getElementById("delete");
// let frominput = document.querySelector(".form");
// let url='http://localhost:3000/student';

// let details=[];

// let resultId=null;

// let addData={};
 
// let action=null;



// function getStudent()
// {
//   fetch(url)
//   .then((response)=>response.json()
//     .then((data)=>{
       
//         details=data;
//         updateTable();
//     })
//    )
// }






// function updateTable()
// {   
//   let data="";
//   console.log(details);
//   details.map(item => {
//     data+= `<tr id=${item.id}>
//                 <td >${item.Initial}</td>
//                 <td >${item.Name}</td>
//                 <td >${item.Branch}</td>
//                 <td><button class="btn btn-primary" onclick="editBtn(event)">Edit</button></td>
//                 <td><button class="btn btn-danger" onclick="deleteBtn(event)">Delete</button></td>
//             </tr>`;
// });
//   sDetails.innerHTML=data;
// }



// function addStudent()
//  {   
//      clearForm();
//         frominput.classList.add('active');
//         action='POST'    
// }


//  function cancelBtn()
//  {
//    frominput.classList.remove('active');
//  }



//  function deleteBtn(e)
//  {
//     resultId=e.target.parentElement.parentElement.id;
    
//     fetch(url+"/"+resultId,
//     {
//         method:'DELETE'
//     })
//     .then(()=>{
        
//         getStudent();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//   });
  
//  }



//  function saveBtn()
//  {
//   addData.Initial=document.getElementById("initial").value;
//   addData.Name=document.getElementById("name").value;
//   addData.Branch=document.getElementById("branch").value;
//   if(document.getElementById("initial").value==""||document.getElementById("name").value==""||document.getElementById("branch").value=="")
//   {
//       alert("Please enter the details")
//   }
//   else
//   {
//       if(action==='PUT')
//       {
//         addData.id=resultId;
//         console.log(action)
      
//       fetch(url+"/"+resultId, {
//         method: action,
//         body: JSON.stringify(addData),
//         headers: {
//             "Content-Type": "application/json" 
//         }
//       })

//       .then(()=>{
//         clearForm();
//         frominput.classList.remove('active');
//         getStudent();
//       })
//       .catch(error => {
//       console.error('Error:', error);
//       });

//       }
//       else
//       {
//         fetch(url, {
//             method: action,
//             body: JSON.stringify(addData),
//             headers: {
//                 "Content-Type": "application/json" 
//             }
//         })
        
//           .then(()=>{
//             clearForm();
//             frominput.classList.remove('active');
//             getStudent();
//         })
//         .catch(error => {
//           console.error('Error:', error);
//       });
      
//       }
//   }
//  }
  

//  function editBtn(e)
//  {
//     frominput.classList.add('active');
//     action='PUT';
//     resultId=e.target.parentElement.parentElement.id;
  
//     let rowData = details.find(student => student.id === resultId);
//    console.log(rowData)
//     document.getElementById('initial').value = rowData.Initial;
//     document.getElementById('name').value = rowData.Name;
//     document.getElementById('branch').value = rowData.Branch;
//  }
    
 
//  function clearForm()
//  {
//     document.getElementById("initial").value=null;
//     document.getElementById("name").value=null;
//     document.getElementById("branch").value=null;

//  }


      // CRUD operations using axios()


// let sDetails=document.querySelector("tbody");
// let add=document.getElementById("add");
// let saveb=document.getElementById("save");
// let cancel=document.getElementById("cancel");
// let edit=document.getElementById("edit");
// let deletebtn=document.getElementById("delete");
// let frominput = document.querySelector(".form");
// let url='http://localhost:3000/student';

// let details=[];

// let resultId=null;

// let addData={};
 
// let action=null;

// function getStudent()
// {
//   axios.get(url)
//     .then((data)=>{
       
//         details=data;
//         updateTable();
//     })
   
// }

// function updateTable()
// {

//   let data="";
//   console.log(details);
//   details.data.map((item) => {
//     data+= `<tr id=${item.id}>
//                 <td >${item.Initial}</td>
//                 <td >${item.Name}</td>
//                 <td >${item.Branch}</td>
//                 <td><button class="btn btn-primary" onclick="editBtn(event)">Edit</button></td>
//                 <td><button class="btn btn-danger" onclick="deleteBtn(event)">Delete</button></td>
//             </tr>`;
//   });
//   sDetails.innerHTML=data;
// }

// function addStudent()
//  {   
//      clearForm();
//         frominput.classList.add('active');
//         action='POST'    
// }


//  function cancelBtn()
//  {
//    frominput.classList.remove('active');
//  }

  

//   function deleteBtn(e)
//  {
//     resultId=e.target.parentElement.parentElement.id;
    
//     axios.delete(url+"/"+resultId)
   
//     .then(()=>{
        
//         getStudent();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//   });
  
//  }

//   function saveBtn()
//  {
//   addData.Initial=document.getElementById("initial").value;
//   addData.Name=document.getElementById("name").value;
//   addData.Branch=document.getElementById("branch").value;
//   if(document.getElementById("initial").value==""||document.getElementById("name").value==""||document.getElementById("branch").value=="")
//   {
//       alert("Please enter the details")
//   }
//   else
//   {
//    if(action==='PUT')
//    {
//     addData.id=resultId;
  
//     axios.put((url+"/"+resultId),addData, {
   
//     headers: {
//         "Content-Type": "application/json" 
//     }
//     })

//    .then(()=>{
//     clearForm();
//     frominput.classList.remove('active');
//     getStudent();
//    })
//    .catch(error => {
//    console.error('Error:', error);
//    });

//   }
//   else
//   {
//     axios.post(url,addData,{
   
//       headers: {
//           "Content-Type": "application/json" 
//       }
//     })  
//       .then(()=>{
    
//         clearForm();
//         frominput.classList.remove('active');
//         getStudent();
//     })
  
//     .catch(error => {
//       console.error('Error:', error);
//    });
  
//   }
//  }
// }
  

//  function editBtn(e)
//  {
//     frominput.classList.add('active');
//     action='PUT';
//     resultId=e.target.parentElement.parentElement.id;
 
//     let rowData = details.data.find(student => student.id === resultId);
//     console.log(rowData)
//     document.getElementById('initial').value = rowData.Initial;
//     document.getElementById('name').value = rowData.Name;
//     document.getElementById('branch').value = rowData.Branch;
//  }



//  function clearForm()
//  {
//     document.getElementById("initial").value=null;
//     document.getElementById("name").value=null;
//     document.getElementById("branch").value=null;

//  }
    


          // CRUD operation using ajax()

 let sDetails=document.querySelector("tbody");
let add=document.getElementById("add");
let saveb=document.getElementById("save");
let cancel=document.getElementById("cancel");
let edit=document.getElementById("edit");
let deletebtn=document.getElementById("delete");
let frominput = document.querySelector(".form");
let url='http://localhost:3000/student';

let details=[];

let resultId=null;

let addData={};
 
let action=null;

function getStudent()
{
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        details=data;
        
        updateTable();
    },
    error: function(error) {
        console.error("Error loading data:",error);
    }
});
}

function updateTable() {
  let data = ''; // Initialize data variable
  details.map((item) => {
    data += `<tr id="${item.id}">
                <td>${item.Initial}</td>
                <td>${item.Name}</td>
                <td>${item.Branch}</td>
                <td><button class="btn btn-primary" onclick="editBtn(event)">Edit</button></td>
                 <td><button class="btn btn-danger" onclick="deleteBtn(event)">Delete</button></td>
            </tr>`;
  });
  sDetails.innerHTML = data;
}

function addStudent()
 {   
     clearForm();
        frominput.classList.add('active');
        action='POST'    
 }


 function cancelBtn()
 {
   frominput.classList.remove('active');
 }

  

  function deleteBtn(e)
 {
    resultId=e.target.parentElement.parentElement.id;

    $.ajax({
      url: url+"/"+resultId,
      method: 'DELETE',
      dataType: 'json',
    success:function()
     {
      getStudent();
     },
    
    error: function(error) {
      console.error("Error loading data:",error);
     }
   });
  
 }



 function saveBtn()
 {
  addData.Initial=document.getElementById("initial").value;
  addData.Name=document.getElementById("name").value;
  addData.Branch=document.getElementById("branch").value;
  if(document.getElementById("initial").value==""||document.getElementById("name").value==""||document.getElementById("branch").value=="")
  {
      alert("Please enter the details")
  }
  else
  {
      if(action==='PUT')
      {
        addData.id=resultId;
      

        $.ajax({
          url: url+"/"+resultId,
          method: 'PUT',
          data: JSON.stringify(addData),
        success:function()
            
          { clearForm();
                frominput.classList.remove('active');
                getStudent();},
        
        error: function(error) {
          console.log("Error loading data:",error);
        }
      });


      }
      else
      {
      

        $.ajax({
          url: url,addData,
          method: 'POST',
          data: JSON.stringify(addData),
        success:function()
            
          { clearForm();
                frominput.classList.remove('active');
                getStudent();},

        error: function(error) {
          console.log("Error loading data:",error);
        }
        });
      }
   }
 }

 function editBtn(e)
 {
    frominput.classList.add('active');
    action='PUT';
    resultId=e.target.parentElement.parentElement.id;
 
    let rowData = details.find(student => student.id === resultId);
    console.log(rowData)
    document.getElementById('initial').value = rowData.Initial;
    document.getElementById('name').value = rowData.Name;
    document.getElementById('branch').value = rowData.Branch;
 }

 function clearForm()
 {
    document.getElementById("initial").value=null;
    document.getElementById("name").value=null;
    document.getElementById("branch").value=null;

 }
