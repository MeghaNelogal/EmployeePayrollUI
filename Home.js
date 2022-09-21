let empParrollList;

window.addEventListener('DOMContentLoaded',(event)=>
{
   empParrollList=getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector('.emp-count').textContent=empParrollList.length;
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml=()=>
{
    const headerHTml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

   if(empParrollList.length==0) 
    { let innerHtml=`${headerHTml}`;
    document.querySelector('#display').innerHTML=innerHtml;
    return;}


    let innerHtml=`${headerHTml}`;
     //empParrollList=createEmployeePayrollJSON();
    for(const empParrollData of empParrollList)
     { 

        innerHtml=`${innerHtml}

    
    <tr>
    <td><img class = "profile" alt="" src=${empParrollData._profilePic}></td>
    <td>${empParrollData._name}</td>
    <td>${empParrollData._gender}</td>  
    
    <td>${getDepthtml(empParrollData._department)}</td>
    
    
    
    <td>${empParrollData._salary}</td>
    <td>${empParrollData._startDate}</td>
    <td>
        <button name="${empParrollData._name}" onclick = "remove(this)">Delete</button>
        <button name="${empParrollData._name}" onclick = "update(this)">Edit</button>   
    </td>  
    </tr>
    `};
    document.querySelector('#display').innerHTML=innerHtml;
     
}

const getDepthtml=(depList)=>
{
    let depHtml='';
    for(const dept of depList)
    {
        depHtml=`${depHtml}<div class ='dept-label'>${dept}</div>`

    }
    return depHtml;
}
/*const createEmployeePayrollJSON=()=>
{
    let empPayrollListLocal=
    [
    {
        _name: 'Kiran',
        _gender: 'male',
        _department: ['Finance','HR'],
        _salary: '80000',
        _startDate:'8 Oct 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile3.png'

    },

    {
        _name: 'Megha',
        _gender: 'Female',
        _department: ['Engineering','HR'],
        _salary: '70000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'Krithi',
        _gender: 'Female',
        _department: ['Engineering','HR'],
        _salary: '990000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'Milan',
        _gender: 'male',
        _department: ['Engineering','HR'],
        _salary: '70000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile3.png'

    },

    {
        _name: 'Shalu',
        _gender: 'Female',
        _department: ['Engineering','HR'],
        _salary: '70000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'lakshmi',
        _gender: 'Female',
        _department: ['Engineering','HR'],
        _salary: '70000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'shreya',
        _gender: 'Female',
        _department: ['Engineering','HR'],
        _salary: '70000',
        _startDate:'8 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },


    {
        _name: 'Rahul',
        _gender: 'female',
        _department: ['HR' ,'Finance'],
        _salary: '60000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile3.png'

    },

    {
        _name: 'Savita',
        _gender: 'Male',
        _department: ['HR' ,'Sales'],
        _salary: '40000',
        _startDate:'05 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile5.png'

    },

    {
        _name: 'Shalu',
        _gender: 'female',
        _department: ['HR' ,'Quality'],
        _salary: '600000',
        _startDate:'20 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile4.png'

    },

    

   
];
return empPayrollListLocal;

}
*/

const remove=(node)=>
{
    let empPayrollData=empParrollList.find(empData=>empData._name==node.name);
    if(!empPayrollData)return;
    const index=empParrollList
    .map(empData=>empData._name)
    .indexOf(empPayrollData._name);
    empParrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empParrollList));
    document.querySelector('.emp-count').textContent=empParrollList.length;
createInnerHtml();
}

const update=(node)=>{
    let empPayrollData=empParrollList.find(empData=>empData._name==node.name);
    if(!empPayrollData)return;
    localStorage.setItem('editEmp',JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}

