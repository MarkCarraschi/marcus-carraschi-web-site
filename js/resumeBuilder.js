
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
        var formattedGihub = HTMLgithub.replace(DATA, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

        //var formattedBioPic = HTMLlocation.replace(DATA, bio.biopic);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedGihub + formattedLocation)
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


bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);