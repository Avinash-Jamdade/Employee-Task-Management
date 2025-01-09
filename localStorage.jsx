

const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {   "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Compile and submit the monthly performance report.",
                "taskDate": "2024-12-01",
                "category": "Reporting",
                
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client follow-up",
                "taskDescription": "Follow up with client X regarding the project timeline.",
                "taskDate": "2024-11-28",
                "category": "Client Management",
                
            },
            { 
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update CRM",
                "taskDescription": "Update the customer database with recent interactions.",
                "taskDate": "2024-11-30",
                "category": "Data Management",
               
            }
        ],
    },
    {
        "id": 2,
        "firstName": "Rahul",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory check",
                "taskDescription": "Conduct a complete inventory check for the warehouse.",
                "taskDate": "2024-11-29",
                "category": "Operations",
                
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Organize and lead the weekly team meeting.",
                "taskDate": "2024-11-27",
                "category": "Leadership",
            
            }
        ],
    },
    {
        "id": 3,
        "firstName": "Priya",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Research competitors",
                "taskDescription": "Compile a report on competitors' marketing strategies.",
                "taskDate": "2024-12-02",
                "category": "Market Analysis",
                
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Social media updates",
                "taskDescription": "Post updates on the company's social media channels.",
                "taskDate": "2024-11-28",
                "category": "Marketing",
                
            }
        ],
    },
    {
        "id": 4,
        "firstName": "Aarav",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create presentation",
                "taskDescription": "Prepare a presentation for the quarterly review.",
                "taskDate": "2024-11-30",
                "category": "Documentation",
                
            }
        ],
        
    },
    {
        "id": 5,
        "firstName": "Ananya",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix website bugs",
                "taskDescription": "Resolve reported issues on the company website.",
                "taskDate": "2024-11-29",
                "category": "Technical",
                
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backup data",
                "taskDescription": "Ensure all critical data is backed up securely.",
                "taskDate": "2024-11-27",
                "category": "IT",
            
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update documentation",
                "taskDescription": "Review and update internal process documents.",
                "taskDate": "2024-12-01",
                "category": "Documentation",
            
            }
        ],
       
    }
]


const admin = [
    {
        "id": 1,
        "firstName": "Vikas",
        "email": "admin@example.com",
        "password": "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
};
