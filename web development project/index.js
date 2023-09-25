
// slider code

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

// slider code ends

// team and player data
var playerData = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.75 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://www.whoa.in/download/images-for-hardik-pandya-cricket',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.10 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 2,
        "playerName": "Shubham Gill",
        "from": "GT",
        "price": "10.50 Cr",
        "isPlaying": false,
        "description": "Bowler",
        "playerImg": 'https://th-i.thgim.com/public/incoming/p45zlo/article66903728.ece/alternates/FREE_1200/20230526207L.jpg',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 3,
        "playerName": "Jayant Yadav",
        "from": "GT",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://staticg.sportskeeda.com/editor/2018/02/33466-1517483632-800.jpg',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "1.60 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://i0.wp.com/padhohindime.in/wp-content/uploads/2023/05/Biography-Of-Rashid-Khan-1.png?fit=1000%2C500&ssl=1',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 5,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.80 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://images.news18.com/ibnlive/uploads/2022/09/collage-maker-08-sep-2022-09.38-pm-16626533104x3.jpg',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.45 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 7,
        "playerName": "Shahbaz Ahmed",
        "from": "RCB",
        "price": "1.20cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://cricgram.b-cdn.net/wp-content/uploads/2022/04/Shahbaz-Ahmed-Biography.jpg",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 8,
        "playerName": "Mohhamad Siraj",
        "from": "RCB",
        "price": "5.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_06/story_41260/assets/13.jpeg?time=1686227288",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 9,
        "playerName": "Dinesh Kartik",
        "from": "RCB",
        "price": "3.00cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://images.news18.com/ibnlive/uploads/2022/11/dinesh-karthik-india-1600-afp.jpg",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://www.millenniumpost.in/h-upload/2023/03/04/679350-page-11.webp",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Mayank Markande",
        "from": "MI",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/87.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 14,
        "playerName": "Rahul Budhhi",
        "from": "MI",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "bowler",
        "playerImg": "https://staticg.sportskeeda.com/editor/2022/03/4e452-16466546411470-1920.jpg",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 15,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 16,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://c.ndtvimg.com/2020-10/a1t85uco_dwayne-bravo-bcciipl_650x400_21_October_20.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 17,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "02.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/127.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 18,
        "playerName": "Ambati Raydu",
        "from": "CSK",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://staticg.sportskeeda.com/editor/2023/05/1a2fc-16853024800598-1920.jpg",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 19,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 20,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://media.licdn.com/dms/image/C4D03AQEodP_nWwvFlA/profile-displayphoto-shrink_800_800/0/1657525077381?e=2147483647&v=beta&t=QXUPEhBybx8mTqxcqnNZ6jfeviSwVCkkfdOqJTYm4No",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 21,
        "playerName": "Mandeep Singh",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://league11-media-bucket.s3.amazonaws.com/media/players/photos/mandeep-singh.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 22,
        "playerName": "Lalit Yadav",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://starsunfolded.com/wp-content/uploads/2020/10/Lalit-Yadav.jpg",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 23,
        "playerName": "Prithvi shaw",
        "from": "DC",
        "price": "18.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png",
        "playerTeam": "Delhi Capitals"
    },

    {
        "id": 24,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Karun Nair",
        "from": "RR",
        "price": "01.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://c.ndtvimg.com/2020-08/g85mhgp_karun-nair-instagram_625x300_13_August_20.jpg",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 26,
        "playerName": "Dhruv Jurel",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://www.rajasthanroyals.com/static-assets/images/players/71370.png?v=5.55",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 27,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "03.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://cricgram.b-cdn.net/wp-content/uploads/2021/02/Riyan-Parag-Biography-768x768.jpg",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 28,
        "playerName": "Devdutt Paddikal",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 29,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://images.mid-day.com/images/images/2018/apr/Shreyas-Iyer-Delhi.jpg",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 30,
        "playerName": "Abhijeet Tomar",
        "from": "KKR",
        "price": "18.50 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://images.news18.com/ibnlive/uploads/2022/05/all-you-need-to-know-about-kkrs-debutant-abhijeet-tomar.jpg",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 31,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://cricfit.com/wp-content/uploads/2023/06/2292.jpg",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 32,
        "playerName": "Ashok Sharma",
        "from": "KKR",
        "price": "18 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://cricketaddictor.com/wp-content/uploads/2022/04/Ashok-Sharma.jpg",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 33,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 34,
        "playerName": "Rahul Tripathi",
        "from": "SH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://wikibio.in/wp-content/uploads/2023/01/Rahul-Tripathi.jpg",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 35,
        "playerName": "Anukul Sharma",
        "from": "SH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/160.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 36,
        "playerName": "Abdul Samad",
        "from": "SH",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/10/4/w1200X800/Abdul_IPL.jpg",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 37,
        "playerName": "Nicolas Pooran",
        "from": "SH",
        "price": "3.50 Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320109.png",
        "playerTeam": "Sunrises Hyderabad"
    },


];

var teamData = [

    {
        "id": 0,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname": "MI (Mumbai Indians)",
        "teamIcon": "https://staticg.sportskeeda.com/editor/2022/12/7ee7f-16711715104523.png",
        "WonCount": 5,
    },
    {
        "id": 1,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname": "CSK (Chennai Super King)",
        "teamIcon": "https://hindustantimes.com/static-content/1y/cricket-logos/teams/CSK.png?2",
        "WonCount": 5,
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname": "RCB (Royal challengers Bangalore)",
        "teamIcon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
        "WonCount": 0,
    },
    {
        "id": 3,
        "teamFullName": "Kolkata Knight Riders",
        "sName": "KKR",
        "fullSname": "KKR (Kolkata Knight Riders)",
        "teamIcon": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
        "WonCount": 2,
    },
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname": "DC (Delhi Capitals)",
        "teamIcon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
        "WonCount": 0,
    },
    {
        "id": 5,
        "teamFullName": "Gujarat Titan",
        "sName": "GT",
        "fullSname": "GT (Gujarat Tistan)",
        "teamIcon": "https://www.ipltickets.net/wp-content/uploads/2022/02/GTmedium-1.png",
        "WonCount": 1,
    },

    {
        "id": 6,
        "teamFullName": "Rajasthan Royals",
        "sName": "RR",
        "fullSname": "RR (Rajasthan Royals)",
        "teamIcon": "https://sportsmintmedia.com/wp-content/uploads/2023/04/IPL-2023-Sponsors-Watch_-Rajasthan-Royals-2.jpg",
        "WonCount": 1,
    },
    {
        "id": 7,
        "teamFullName": "Sunrises Hyderabad",
        "sName": "SH",
        "fullSname": "SH (Sunrises Hyderabad)",
        "teamIcon": "https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png",
        "WonCount": 1,
    },
    {
        "id": 8,
        "teamFullName": "Lucknow super Giants",
        "sName": "LSG",
        "fullname": "LSG (Lucknow super giants)",
        "teamIcon": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/1200px-Lucknow_Super_Giants_IPL_Logo.svg.png",
        "wonCount": 0

    }


];



// var A1teamclicked = () => {
//     window.open("./A1team.html", "_self")
// }
// var A1playerClicked = () => {
//     window.open("./A1player.html", "_self")
// }





let detailofTeam = [];
let detailOfPlayer = [];
var teamGrid = document.getElementById("container_teams")

if (localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));

if (localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));





// search bar code goes here

var suggestArray = [];
for (var i = 0; i < detailofTeam.length; i++) {
    suggestArray.push(detailofTeam[i].sName)

}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");



inputBox.onkeyup = (e) => {
    if (e.keyCode == 13) {
        icon.click()
    }
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {

        emptyArray = suggestArray.filter((data) => {

            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {

            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {

            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    } else {
        searchBar.classList.remove("active");
    }
}
function currentLi(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {

        window.open(`A4teams.html?name=${element.textContent}`, "_self")

    }
    searchBar.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// search bar code ends here

// grid cards for teams goes here

var teamMainBox = document.getElementById("container_teams")
for (var i = 0; i < detailofTeam.length; i++) {
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${i}')"    class="minibox">

<img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>

</div>

`

}

function makethisinclick(res) {
    var clickedCard = detailofTeam[res].sName

    window.open(`A4teams.html?name=${clickedCard}`, "_self")


}

