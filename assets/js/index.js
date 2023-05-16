var projectList = [
    {
        projectId: 1,
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
        projectId: 2,
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
        projectId: 2,
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
