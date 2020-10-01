
let Day = {
"8 AM": "",
"9 AM": "",
"10 AM": "",
"11 AM": "",
"12 PM": "",
"2 PM": "",
"3 PM": "",
"4 PM": "",
"5 PM": "",
"6 PM": "",

};


$(document).ready(function(){
  if(!localStorage.getItem("Day")){

    calenderTask(Day);
  }
  else {
 
    calenderTask(JSON.parse(localStorage.getItem("Day")));

  }

})


$("today-date").text(moment().format("dddd") + "," + moment().format("mmmm do yyyy, h:mm:ss a"));

let counter = 1;

for (const property in Day) {

    let textEntry = "#text-entry" + counter;
    $(textEntry).text(Day[property]);
    let idTime = "#time" + counter;
    let hourTime = moment().hour();
    let stringTime = $(idTime).text();
let NumberTime = NumberofHour(stringTime);
    
if(numberTime < hourTime) {
    $(textEntry).addClass("old-time");
}
else if (numberTime > hourTime) {
    $(textEntry).addClass("future-time");
}
counter ++;
}

$("button").click(function() {
  value = $(this).siblings("textarea").val();
  hourTime = $(this).siblings("div").text();

  scheduleSaved(stringHour, value);


});

function NumberofHour(stringHour) {
 switch(stringHour) {
   
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 1;
    case "2 PM": return 2;
    case "3 PM": return 3;
    case "4 PM": return 4;
    case "5 PM": return 5;
    case "6 PM": return 6;


 }


}

function loadData() {
 
    result = localstorage.getItem("Day");
    return (result ? result : Day);

}

function initializelocalStorage() {

    localstorage.setItem("Day", JSON.stringify(day));

};

function savelocalStorage(dayOBJ) {

    localStorage.setItem("Day", stringify(Day));
};

function saveSchedule(stringHour, val) {

    if(!localStorage.getItem("Day")) {

        initializelocalStorage();
    }
}


let hoursWork = JSON.parse(localstorage.getItem("Day"));
hoursWork[stringHour] = val

savelocalStorage(hoursWork);

function updateCalender(Object) {
   var calenderRow =  $(".calender-row")
   console.log(calenderRow)

 calenderRow.each(function() {
    
    
    let task = $(this).children("div");
     $(this).children("textarea").text(Object[task.text()]); 
 })

    



};