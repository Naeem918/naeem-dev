var projectList = [
    {
        projectId: 1,
        projectName: "O.M.Management",
        Categroy: "Website Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "https://www.ommanagement.com",
        description: `OM Management, an organization that provides management services and solutions to 
        businesses. The company focuses on assisting companies in various aspects of their operations, 
        including project management, resource allocation, and strategic planning.`,
        imageList: [
            "assets/img/portfolio/om-manage/1.png",
            "assets/img/portfolio/om-manage/2.png",
            "assets/img/portfolio/om-manage/3.png"
        ]

    },
    {
        projectId: 2,
        projectName: "Baby Shark",
        Categroy: "Website Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "https://www.babyshark.pk",
        description: `BabyShark.pk aims to revolutionize the vision of retail shopping for parents and kids across Pakistan.
                      By operating online, BabyShark.pk provides convenience for parents and caregivers to shop for children's 
                      clothing from the comfort of their homes. The website may offer user-friendly navigation, clear product 
                      images, detailed descriptions, and secure payment options to enhance the shopping experience.`,
        imageList: [
            "assets/img/portfolio/baby/1.png",
            "assets/img/portfolio/baby/2.png",
            "assets/img/portfolio/baby/3.png",
            "assets/img/portfolio/baby/4.png",
        ]

    },
    {
        projectId: 6,
        projectName: "Chattanooga Auto Square",
        Categroy: "Website Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "https://www.chattanoogaautosquare.com",
        description: "Online platform of a car dealership located in Chattanooga, Tennessee, USA. The purpose of the website is to provide customers with information about the dealership's inventory of new and used vehicles, financing options, and automotive services. Customers can browse the website to find the car of their choice, schedule a test drive, apply for financing, and even value their trade-in vehicle. The website also includes information about the dealership's team, hours of operation, and location. Overall, the purpose of the website is to facilitate the process of buying a car and provide a seamless customer experience.",
        imageList: [
            "assets/img/portfolio/auto/1.png",
            "assets/img/portfolio/auto/2.png"
        ]

    },
    {
        projectId: 7,
        projectName: "ARD-PRO",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "SPEDPro an automated system to find and manage cases for special-needs students across the entire Texas State. The SPEDPro system bring the student’s case information to teachers, parents, diagnosticians, case specialists and representatives of relevant government authorities from identification to actual deployment of the goal-based study plan for the special-needs students at the school.",
        imageList: [
            "assets/img/portfolio/ard-pro/1.webp",
            "assets/img/portfolio/ard-pro/2.webp",
            "assets/img/portfolio/ard-pro/3.webp",
            "assets/img/portfolio/ard-pro/4.webp",
            "assets/img/portfolio/ard-pro/5.webp"
        ]

    },
    {
        projectId: 8,
        projectName: "AOTUTOR",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "We helped an innovative founder launch an online tutoring platform with the aim to bring students looking to gain additional help and tutors willing to invest more into education can come together. The concept was to establish virtual classrooms that teachers can host and registered students can join",
        imageList: [
            "assets/img/portfolio/autotur/aotutor1.png",
            "assets/img/portfolio/autotur/aotutor2.png",
            "assets/img/portfolio/autotur/aotutor3.png",
            "assets/img/portfolio/autotur/aotutor4.png"
        ]

    },
    {
        projectId: 9,
        projectName: "Nova",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "Software application that enables hotel managers to streamline their daily operations, manage bookings, and maintain customer data in an efficient manner. It includes features such as room reservations, check-in and check-out procedures, inventory management, billing and payment processing, employee management, and reporting.",
        imageList: [
            "assets/img/portfolio/nova/1.png",
            "assets/img/portfolio/nova/2.png",
            "assets/img/portfolio/nova/3.png",
            "assets/img/portfolio/nova/4.png"
        ]

    },
    {
        projectId: 10,
        projectName: "B-SMS",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "A bulk SMS sender website is a platform that enables users to send large volumes of SMS messages to multiple recipients simultaneously. These websites are commonly used by businesses, organizations, and individuals who need to send messages to a large audience quickly and efficiently.",
        imageList: [
            "assets/img/portfolio/bulk-sms/2.png",
            "assets/img/portfolio/bulk-sms/3.png",
            "assets/img/portfolio/bulk-sms/4.png",
            "assets/img/portfolio/bulk-sms/5.png"
        ]

    }
];

var skillList =[
    {
        skillName:"HTML",
        imageUrl:"assets/img/portfolio/skills/html5.png"
    },
    {
        skillName:"CSS3",
        imageUrl:"assets/img/portfolio/skills/css3.png"
    },
    {
        skillName:"Boostrap",
        imageUrl:"assets/img/portfolio/skills/bootstrap.png"
    },
    
    {
        skillName:"Javascript",
        imageUrl:"assets/img/portfolio/skills/javascript.png"
    },
    {
        skillName:"Jquery",
        imageUrl:"assets/img/portfolio/skills/jquery.png"
    },
 

    {
        skillName:"Angular 2+",
        imageUrl:"assets/img/portfolio/skills/angular.png"
    },
    {
        skillName:"React.js",
        imageUrl:"assets/img/portfolio/skills/react.png"
    },
    {
        skillName:"Vue.js",
        imageUrl:"assets/img/portfolio/skills/vue.png"
    },
    {
        skillName:"Node Js",
        imageUrl:"assets/img/portfolio/skills/node.png"
    },
    {
        skillName:"Express Js",
        imageUrl:"assets/img/portfolio/skills/express.png"
    },
     {
        skillName:"Asp.net",
        imageUrl:"assets/img/portfolio/skills/asp.net.png"
    },
     {
        skillName:"Asp.net Core",
        imageUrl:"assets/img/portfolio/skills/.netcore.png"
    },
    {
        skillName:"SQL",
        imageUrl:"assets/img/portfolio/skills/sql.png"
    },
    {
        skillName:"GreenPlum",
        imageUrl:"assets/img/portfolio/skills/greenplum.png"
    },
    {
        skillName:"ClickHouse",
        imageUrl:"assets/img/portfolio/skills/clickhouse.png"
    }
]

function functionToCall() {
   this.addProjectIntoTheProfolio();
   this.addSkillsIntoSkillSection();
}


function loadProjectDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');
    let portfolioDetail = document.getElementById("portfolio-images");
    const projectData = projectList.find(x => x.projectId == projectId);
    if (projectData) {
        //#region adding images of my recents projects to slider
        let html = "";
        for (let i = 0; i < projectData.imageList?.length; i++) {
            html += `<div class="swiper-slide">
                <img src=${projectData.imageList[i]} alt="">
                </div>`;
        }
        portfolioDetail.innerHTML = html;
        //#endregion

        //#region added project info
        let projectInfo = document.getElementById("project-info");
        let projectInfoHtml = "";

        if (projectData.projectName?.length > 0) {
            projectInfoHtml += `<li><strong>Project Name</strong>: ${projectData.projectName}</li>`;
        }

        if (projectData.Categroy?.length > 0) {
            projectInfoHtml += `<li><strong>Category</strong>: ${projectData.Categroy}</li>`;
        }

        if (projectData.Client?.length > 0) {
            projectInfoHtml += `<li><strong>Client</strong>: ${projectData.Client}</li>`;
        }

        if (projectData.projectUrl?.length > 0) {
            projectInfoHtml += `<li><strong>Project URL</strong>:   <a href="${projectData.projectUrl}">${projectData.projectUrl}</a></li>`;
        }
        projectInfo.innerHTML = projectInfoHtml;
        //#endregion

        //#region add project description
        let projectDescription = document.getElementById("project-description");
        projectDescription.innerHTML = projectData.description;
        //#endregion


    }
}

//#region Adding Project List into the portfolio section of the website.
function addProjectIntoTheProfolio(){
 //#region adding project into the portfolio section from projectList array
 let portfolioSection = document.getElementById("portfolio-section");
 let portfolioSectionHtml = "";
 for (let i = 0; i < projectList?.length; i++) {
     let projectInfo = projectList[i];
     portfolioSectionHtml += ` <div class="col-lg-4 col-md-6 portfolio-item filter-web">
       <div class="portfolio-wrap">
         <img src=${projectInfo.imageList[0]} class="img-fluid portfolio-image" alt="">
         <div class="portfolio-links">
           <a href=${projectInfo.imageList[0]} data-gallery="portfolioGallery"
             class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
           <a href="portfolio-details.html?projectId=${projectInfo.projectId}"  title="More Details"><i class="bx bx-link"></i></a>
         </div>
       </div>
     </div>`;

 }
 portfolioSection.innerHTML += portfolioSectionHtml;
 //#endregion
}
//#endregion

//#region add skills into the skills section 
function addSkillsIntoSkillSection(){
    

    let skillSections = document.getElementById("skill-sections");
    let skillListHtml ="";
   for(let i=0;i<skillList?.length;i++){
    skillListHtml += `<div class="col-sm-12  col-md-4 col-lg-3" data-aos="fade-up">
    <div class="card">
        <div class="row m-l-0">
        <div class="col-4">
          <img src=${skillList[i].imageUrl}
            class="skill-image rounded-start" 
            
            alt="..."
          />
        </div>
        <div class="col-8  card-body">
       
            <h4 class="card-title">${skillList[i].skillName}</h4>
     
        </div>
      </div>
    </div>
  </div>`
   }

   skillSections.innerHTML = skillListHtml;
}

//#endregion
