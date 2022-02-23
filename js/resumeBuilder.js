
var DATA = '%data%';

var bio = {
    name: 'Marcus Vinicius Nobre Carraschi',
    role: 'Full Stack Software Developer',
    // company: 'Add company here'
    contacts: {
        mobile: '+55 (11) 98544 9857',
        email: 'marcuscarraschy@gmail.com',
        github: 'https://github.com/MarkCarraschi',
        linkedin: 'www.linkedin.com/in/marcus-carraschi',
        location: 'São Paulo - Brasil'
    },
    skills: ['C#', 'REST APIs', 'Javascript', 'HTML', 'Git', 'Docker',
        'AngularJs', 'VueJs', 'Dapper', 'Sql Server', ''],
    introMessage: '',
    //biopic: 'https://avatars.githubusercontent.com/u/11094622?s=400&u=0ac58f346639bbd90cc41988fb645013a7ff7ab8&v=4',

    display: function () {
        var formattedName = HTMLheaderName.replace(DATA, bio.name);
        var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

        var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
        var formattedLinkedin = HTMLlinkedin.replace(DATA, bio.contacts.linkedin);
        var formattedGihub = HTMLgithub.replace(DATA, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

        //var formattedBioPic = HTMLlocation.replace(DATA, bio.biopic);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedLinkedin + formattedGihub + formattedLocation)
        //$('#header').append(formattedBioPic);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0, len = bio.skills.length; i < len; i++) {
                var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
                $('#skills').append(formattedSkills);
            }
        }

    }

};

var education = {

    schools: [
        {
            'name': 'University center FEI',
            'location': 'São Bernardo do Campo, São Paulo, Brazil',
            'degree': 'Bachelor of Computer Science',
            'majors': ['Computer Science'],
            'dates': '2015-2019',
            'url': ''
        },
        {
            'name': 'Technical School ETEC',
            'location': 'São Bernardo do Campo, São Paulo, Brazil',
            'degree': 'Technical course of computing',
            'majors': ['Computing'],
            'dates': '2013-2014',
            'url': ''
        }
    ],
    onlineCourses: [
        {
            'title': 'Creating APIs Data Driven with ASP.NET Core 3 e EF Core 3',
            'school': 'balta.io',
            'dates': '2021',
            'url': 'https://balta.io/certificados/52ddaf70-26f0-42b4-9ef2-f7c19abf1ac6'
        },
        {
            'title': 'Fundamentals of microservices',
            'school': 'balta.io',
            'dates': '2021',
            'url': 'https://balta.io/certificados/be7edafa-71dc-4050-9048-3be084132d8b'
        },
    ]

};

var work = {
    jobs: [
        {
            employer: 'Linx (Stone Group)',
            title: 'Full Stack Software Developer - Pl',
            location: 'Remote Work - Brazil',
            dates: 'November 2021 - Until now',
            description: ' I working as a full stack software development at Linx on digital' +
                'retail solutions using .NET, RESTfull API, TypeScript/VueJs, ' +
                'relational databases (e.g. SQL Server, Dapper) and Azure Devops.'
        },
        {
            employer: 'Atech - Negócios em tecnologias S/A',
            title: 'Junior Full Stack Software Developer',
            location: 'São Paulo - Brazil',
            dates: 'November 2019 - October 2021',
            description: 'Development of internal software and systems used by the departments of ' +
                'company (e.g. document managements, human resource process, APIs extractions) ' +
                'using .NET Core, Python, HTML, CSS, Javascript, SQL Server, Oracle DB.<br>' +
                'Process automation and utility scripts development utilizing Bash and Groovy ' +
                '(e.g. application deployment, pipelines);<br>' +
                'The deployment of applications were made by Jenkins and Docker on machines with ' +
                'CentOs operating system;<br>' +
                'Build management and DevOps of air traffic management systems Git, GitLab Runners ' +
                'and SonarQube (e.g. version control).'
        },
        {
            employer: 'Matrix Sistemas',
            title: 'Junior Full Stack Developer',
            location: 'São Paulo - Brazil',
            dates: 'May 2019 - October 2019',
            description: 'Full stack development on the CRM system. I worked with development software' +
                'routines using .NET, web technologies (e.g. bootstrap framework, javascript) ' +
                'and database Sql Server. I studied and make a Progressive Web Application to apply ' +
                'in the system of company.'
        },
        {
            employer: 'EGS - Ericsson Gestão e Serviços',
            title: 'Software Developer Inter',
            location: 'São Paulo - Brazil',
            dates: 'May 2018 - January 2019',
            description: 'I worked in project of Vivo company with ETL process (e.g. data transformation, ' +
                'OLAP cube) using PowerCenter tool and Oracle database.'
        },
        {
            employer: 'GAC Group (Brazil)',
            title: 'Innovation Intern',
            location: 'São Paulo - Brazil',
            dates: 'October 2016 - April 2018',
            description: 'Follow-up of qualify projects in law 11.196/05 and assessment of the' +
                'eligibility of new projects for the tax benefit. Assistance in organizing' +
                'project and product documents, monitoring process mapping, preparing' +
                'descriptions of technology projects adopted by large corporations (e.g. insurance' +
                'companies, investment banking, billing systems).'
        }
    ],
    display: function () {
        if (work.jobs.length > 0) {
            for (var i = 0, len = work.jobs.length; i < len; i++) {
                var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
                var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedEmployerTitle);
                $('.work-entry:last').append(formattedDates);
                $('.work-entry:last').append(formattedLocation);
                $('.work-entry:last').append(formattedDescription);
            }
        }

    }
};


bio.display();
//education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);