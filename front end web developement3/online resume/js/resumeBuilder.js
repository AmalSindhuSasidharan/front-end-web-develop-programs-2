 // $("#main").append("Amal Sindhu Sasidharan. ");
 // var awesomeThoughts="I am Amal and I am AWESOME!";
 // var funThought=awesomeThoughts.replace("AWESOME","FUN");
 // $("#main").append(funThought);
 // quiz 19 of lesson9
 // ;
 // ;
 // ;
 // ;
 var bio = {
     "name": "Amal Sindhu Sasidharan",
     "role": "Electrical Engineer / Web Developer",
     "contacts": {
         "mobile": "+91 7356012260",

         "email": "amal0109@gmail.com",
         "github": "amal0109@gmail.com",
         "location": "Kerala, INDIA",
     },
     "welcomeMessage": "My Online Resume Page",
     "skills": ["C programming", "Circuitry", "Autocad", "Electrical work"],
     "biopic": "images/me.jpg"

 };



 bio.display = function() {

     var role = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(role);
     var myName = HTMLheaderName.replace("%data%", bio.name);
     $("#header").prepend(myName);




     var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#topContacts,#footerContacts").append(formattedPhone);

     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#topContacts,#footerContacts").append(formattedEmail);

     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#topContacts,#footerContacts").append(formattedGithub);

     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#topContacts,#footerContacts").append(formattedLocation);


     var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#header").append(welcomeMsg);

     var pic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#header").append(pic);

     if (bio.skills.length > 0) {

         $("#header").append(HTMLskillsStart);

         for (var i = 0; i < bio.skills.length; i++) {
             var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
             $("#skills").append(formattedSkill);
         }

     }

 };
 bio.display();




 //  var formattedName=HTMLheaderName.replace("%data%",bio.name);
 //  var role=HTMLheaderRole.replace("%data%",bio.role);
 //  $("#header").prepend(role);
 //  $("#header").prepend(formattedName);



 // var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
 //  $("#topContacts").append(formattedLocation);

 //  var formattedPhone= HTMLmobile.replace("%data%",bio.contacts.phone);
 //  $("#topContacts").append(formattedPhone);

 //  var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
 //  $("#topContacts").append(formattedEmail);

 //  var formattedGithub=  HTMLgithub.replace("%data%",bio.contacts.github);
 //  $("#topContacts").append(formattedGithub);


 // var welcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 // $("#header").append(welcomeMsg);




 // $("#header").append(HTMLskillsStart);

 // for (var i=0; i<bio.skills.length; i++){
 // var Skills= HTMLskills.replace("%data%",bio.skills[i]);
 // $("#header").append(Skills);
 // }
 // ;
 // ;
 // ;
 // quiz 19 of lesson9

 function inName(name) {
     name = name.trim().split(" ");
     console.log(name);
     name[1] = name[1].toUpperCase();
     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
     return name[0] + " " + name[1];
 }
 $("#main").append(internationalizeButton);




 // function inName(internnName){
 //    var nename=internnName;
 //    var nename1;
 //    nename1=nename.split(" ");

 //     var second=nename1[1].toUpperCase();
 //     var first=nename1[0].toLowerCase();
 //     first=first.replace(first[0],first[0].toUpperCase());
 //     var final=first+" "+second;
 //     return final;
 // }

 // $("#main").append(internationalizeButton);




 // var work={
 //     "jobPosition":"Systems Engineer",
 //     "employer":"Infosys Ltd.",
 //     "years":"Fresher",
 //     "city":"Banglore"
 // };
 // // work.jobPosition="Systems Engineer";
 // // work.employer="Infosys Ltd.";
 // // work.years="Fresher";
 // // work.city="Banglore";
 // var position= HTMLworkTitle.replace("%data%",work.jobPosition);
 // $("#main").append(position);



 // quiz 19 of lesson9
 // ;
 // ;
 // ;
 // ;

 // var work={
 //         "employer":"Infosys Ltd.",
 //         "title":"Systems Engineer",
 //         "location":"Banglore",
 //         "dates":"whole working day",
 //         "description":"Its an IT job"
 //     };
 // var emplo=HTMLworkEmployer.replace("%data%",work.employer);
 // $("#main").append(emplo);
 // var tit=HTMLworkTitle.replace("%data%",work.title);
 // $("#main").append(tit);
 // var loc=HTMLworkLocation.replace("%data%",work.location);
 // $("#main").append(loc);
 // var dat=HTMLworkDates.replace("%data%",work.dates);
 // $("#main").append(dat);
 // var des=HTMLworkDescription.replace("%data%",work.description);
 // $("#main").append(des);
 // ;
 // ;
 // ;

 // quiz 19 of lesson9




 var work = {
     "jobs": [{
             "employer": "Infosys Ltd.",
             "title": "Systems Engineer",
             "location": "Banglore",
             "dates": "whole working day",
             "description": "Waiting for the Call Letter"
         },
         {
             "employer": "Cochin shipyard",
             "title": "Electrical Engineering student internship",
             "location": "Kochi",
             "dates": "Two week programme",
             "description": "Acquired knowledge on ship building"
         },
         {
             "employer": "TELK",
             "title": "Electrical Engineering student internship",
             "location": "Ernakulam",
             "dates": "Three day programme",
             "description": "Acquired knowledge on Transformer construction"
         }
     ]
 };



 work.display = function() {


     // for(job in work.jobs){
     for (var i = 0; i < work.jobs.length; i++) {


         $("#workExperience").append(HTMLworkStart);

         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;
         $(".work-entry:last").append(formattedEmployerTitle);

         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
         $(".work-entry:last").append(formattedDates);
         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
         $(".work-entry:last").append(formattedDescription);
         var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
         $(".work-entry:last").append(formattedLocation);

     }


 };

 work.display();




 // quiz 19 of lesson9
 // ;
 // ;
 // ;
 // ;



 // var education={

 //     "name":"TocH Institute of Science And Technology",
 //     "years":"4",
 //     "city":"Ernakulam",
 // };
 // // education["name"]="TocH Institute of Science And Technology";
 // // education["years"]="4";
 // // education["city"]="Ernakulam";
 // var schoolname=HTMLschoolName.replace("%data%",education.name);
 // $("#main").append(schoolname);
 // ;
 // ;
 // ;
 // ;

 // quiz 19 of lesson9

 var education = {
     "schools": [{
             "name": "C.C.P.L.M.Anglo Indian High School",
             "location": "cochin",
             "degree": "SSLC",
             "dates": "Completed by 2011",

             "majors": ["Maths", "Chemistry", "Physics", "S.S"],
             "url": "https://ccplm.com"
         },
         {
             "name": "SACRED HEART",
             "location": "cochin",
             "degree": "Higher Secondary Education",
             "dates": "Completed by 2013",

             "majors": ["Physics", "Chemistry", "Maths"],
             "url": "https://sacredheart.com"
         }
     ],
     "onlineCourses": [{
             "title": "Front end web developement",
             "school": "Udacity",
             "dates": "5 months",
             "url": "https://udacity.com"
         }

     ]
 };
 education.display = function() {
     for (var i = 0; i < education.schools.length; i++) {
         $("#education").append(HTMLschoolStart);



         var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
         // $(".education-entry:last").append(formattedName);
         var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
         // $(".education-entry:last").append(formattedDegree);
         var formattedNameDegree = formattedName + formattedDegree;
         $(".education-entry:last").append(formattedNameDegree);



         var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
         $(".education-entry:last").append(formattedLocation);



         var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
         $(".education-entry:last").append(formattedDates);

         for (var j = 0; j < education.schools[i].majors.length; j++) {
             var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
             $(".education-entry:last").append(formattedMajor);
         }


         var formatdUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
         $(".education-entry:last").append(formatdUrl);

     }


     for (var k = 0; k < education.onlineCourses.length; k++) {

         $("#education").append(HTMLonlineClasses);

         var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);

         var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);

         var formattedTitleSchool = formattedTitle + formattedSchool;
         $(".onlineeducation-entry").append(formattedTitleSchool);



         var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
         $(".onlineeducation-entry").append(formattedDate);

         var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
         $(".onlineeducation-entry").append(formattedUrl);

     }

 };
 education.display();




 var projects = {
     "projects": [{
             "title": "SOLAR AIDED UPS",
             "dates": "10 months",
             "description": "both hardware and software",
             "images": ["images/solar.jpg", "images/solar2.jpg"]
         },
         {
             "title": "APFC",
             "dates": "6 months",
             "description": "both hardware and software",
             "images": ["images/apfc.jpg", "images/apfc2.jpg"]
         }
     ]
 };
 // var proname=HTMLworkDescription.replace("%data%",project.name);
 // $("#mainthanks").append(proname);


 projects.display = function() {
     // for(proj in project.projects)
     for (var i = 0; i < projects.projects.length; i++) {
         $("#projects").append(HTMLprojectStart);

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
         $(".project-entry:last").append(formattedDates);

         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
         $(".project-entry:last").append(formattedDescription);

         for (var l = 0; l < projects.projects[i].images.length; l++) {

             var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[l]);
             $(".project-entry:last").append(formattedImage);
         }




     }
 };
 projects.display();




 //code for finding user click location....

 $(document).click(function(loc) {
     // your code goes here
     var x = loc.pageX;
     var y = loc.pageY;

     logClicks(x, y);
 });




 $("#mapDiv").append(googleMap);




 /*
This is empty on purpose! Your code to build the resume will go here.
 */