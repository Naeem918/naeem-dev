var projectList = [
    {
        projectId: 1,
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
        projectId: 1,
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
        projectId: 2,
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
        projectId: 3,
        projectName: "Nova",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "Software application that enables hotel managers to streamline their daily operations, manage bookings, and maintain customer data in an efficient manner. It includes features such as room reservations, check-in and check-out procedures, inventory management, billing and payment processing, employee management, and reporting.",
        imageList: [
            "assets/img/portfolio/nova/2.png",
            "assets/img/portfolio/nova/3.png",
            "assets/img/portfolio/nova/4.png",
            "assets/img/portfolio/nova/5.png"
        ]

    },
    {
        projectId: 4,
        projectName: "B-SMS",
        Categroy: "Web Development",
        projectDate: "5/16/2023",
        Client: "",
        projectUrl: "",
        description: "Software application that enables allow .",
        imageList: [
            "assets/img/portfolio/bulk-sms/1.png",
            "assets/img/portfolio/bulk-sms/2.png",
            "assets/img/portfolio/bulk-sms/3.png",
            "assets/img/portfolio/bulk-sms/4.png"
        ]

    }
];

function functionToCall() {
    console.log("This function is called when the dom is laoded");
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
            projectInfoHtml += `<li><strong>Client</strong>: ${projectData.projectUrl}</li>`;
        }
        projectInfo.innerHTML = projectInfoHtml;
        //#endregion

        //#region add project description
        let projectDescription = document.getElementById("project-description");
        projectDescription.innerHTML = projectData.description;
        //#endregion


    }
}
