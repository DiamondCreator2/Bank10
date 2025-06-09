var account;
var bank10 = 0;
var data;
var splitUrl = [];
var strName;
var savedData;
var selection = 0;
var options = ["Soccer", "Gymnastics", "Softball/Baseball", "Other Sports", "School", "Church", "Chores", "10 plus ones", "In Bed", "Minecraft", "Movies/Videos", "Money", ""];
var users = ["G", "L","E"]
var given;
var date;
var userData = [];

function loadMainScreen() {
  console.log(window.location.href)
  splitUrl = window.location.href.split("#");
  strName = splitUrl[1].toLowerCase();
  strName = strName.charAt(0).toUpperCase() + strName.slice(1);
  if(users.includes(strName) !== true) {
    window.open("index.html", "_parent")
  }
  loadStats();
  document.getElementById("bankDisplay").innerHTML = account + " has " + bank10 + " Bank 10s."
}

function loadStats() {
  account = strName;
  document.getElementById("headAcc").innerHTML = account+`'s Bank 10s`;
  loadData();
}

function saveData() {
  localStorage.setItem(account, userData);
  console.log("Saved: " + userData)
}

function loadData() {
  savedData = localStorage.getItem(account);
  if (savedData) {
    userData = savedData;
    userData = userData.split(",")
    console.log("Loaded: " + userData);
    bank10 = 0;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i] == parseInt(userData[i])) {
        bank10 += parseInt(userData[i]);
      }
    	userData.splice(i, 1, userData[i].replaceAll("§", ","))
    }
  } else {
    userData = [];
    bank10 = 0;
  }

}

window.onload = loadMainScreen;


function addOrSubtract() {
  if (selection == 13) {
    options.splice(12, 1, document.getElementById("otherInp").value)
  }
  document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>How Many Bank 10s would you like to add or subtract?</h2></center>
  <center><input type="number" step="1" id="numbInp" value=""><br><br><button class="continue-button" onclick="dateTing()">Continue</button></center>`
}

function whyBank() {
  selection = 0;
  document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>Reason of Bank 10?</h2></center>
  <center><nav id="breakLine">
      <ul>
        <li><a href="javascript:(select(1))" id="s1">Soccer</a></li>
        <li><a href="javascript:(select(2))" id="s2">Gymnastics</a></li>
        <li><a href="javascript:(select(3))" id="s3">Softball/Baseball</a></li>
        <li><a href="javascript:(select(4))" id="s4">Other Sports</a></li>
        <li><a href="javascript:(select(5))" id="s5">School</a></li>
        <li><a href="javascript:(select(6))" id="s6">Church</a></li>
        <li><a href="javascript:(select(7))" id="s7">Chores</a></li>
        <li><a href="javascript:(select(8))" id="s8">10 plus ones</a></li>
        <li><a href="javascript:(select(9))" id="s9">In Bed</a></li>
        <li><a href="javascript:(select(10))" id="s10">Minecraft</a></li>
        <li><a href="javascript:(select(11))" id="s11">Movies/Videos</a></li>
        <li><a href="javascript:(select(12))" id="s12">Money</a></li>
        <li><a href="javascript:(select(13))" id="s13">Other</a></li>
      </ul>
    </nav>
    <br><button class="disabledbttn" onclick="addOrSubtract()">Continue</button>
    </center>`
}

function select(num) {
  if (num == 13 && selection != 13) {
    document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>Reason of Bank 10?</h2></center>
  <center><nav id="breakLine">
      <ul>
        <li><a href="javascript:(select(1))" id="s1">Soccer</a></li>
        <li><a href="javascript:(select(2))" id="s2">Gymnastics</a></li>
        <li><a href="javascript:(select(3))" id="s3">Softball/Baseball</a></li>
        <li><a href="javascript:(select(4))" id="s4">Other Sports</a></li>
        <li><a href="javascript:(select(5))" id="s5">School</a></li>
        <li><a href="javascript:(select(6))" id="s6">Church</a></li>
        <li><a href="javascript:(select(7))" id="s7">Chores</a></li>
        <li><a href="javascript:(select(8))" id="s8">10 plus ones</a></li>
        <li><a href="javascript:(select(9))" id="s9">In Bed</a></li>
        <li><a href="javascript:(select(10))" id="s10">Minecraft</a></li>
        <li><a href="javascript:(select(11))" id="s11">Movies/Videos</a></li>
        <li><a href="javascript:(select(12))" id="s12">Money</a></li>
        <li><a href="javascript:(select(13))" id="s13">Other</a></li>
      </ul>
    </nav>
    <textarea id="otherInp" placeholder="Please Specify..." rows="6" cols="30"></textarea><br>
    <br><button class="continue-button" onclick="addOrSubtract()">Continue</button>
    </center>`
  }

  if (num != 13) {
    document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>Reason of Bank 10?</h2></center>
  <center><nav id="breakLine">
      <ul>
        <li><a href="javascript:(select(1))" id="s1">Soccer</a></li>
        <li><a href="javascript:(select(2))" id="s2">Gymnastics</a></li>
        <li><a href="javascript:(select(3))" id="s3">Softball/Baseball</a></li>
        <li><a href="javascript:(select(4))" id="s4">Other Sports</a></li>
        <li><a href="javascript:(select(5))" id="s5">School</a></li>
        <li><a href="javascript:(select(6))" id="s6">Church</a></li>
        <li><a href="javascript:(select(7))" id="s7">Chores</a></li>
        <li><a href="javascript:(select(8))" id="s8">10 plus ones</a></li>
        <li><a href="javascript:(select(9))" id="s9">In Bed</a></li>
        <li><a href="javascript:(select(10))" id="s10">Minecraft</a></li>
        <li><a href="javascript:(select(11))" id="s11">Movies/Videos</a></li>
        <li><a href="javascript:(select(12))" id="s12">Money</a></li>
        <li><a href="javascript:(select(13))" id="s13">Other</a></li>
      </ul>
    </nav>
    <br><button class="continue-button" onclick="addOrSubtract()">Continue</button>
    </center>`
  }

  selection = num;

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.style.backgroundColor = "transparent";
  });
  document.getElementById("s" + selection).style.backgroundColor = "lightgrey";
}

function dateTing() {
  given = document.getElementById("numbInp").value;
  if (given === '') {
    given = 0;
  }
  document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>Choose the Date given/used.</h2></center>
  <center><input type="date" id="dateTing" name="dateTing"><br><br><button class="continue-button" onclick="finalize()">Continue</button></center>`
}

function finalize() {
  date = document.getElementById("dateTing").value;
  if (date === '') {
    date = "Date not given.";
  }
  document.body.innerHTML = `<header><h1>`+account+`'s Bank 10s</h1></header><br>
  <center><h2>Are you sure you would like to give ` + account + " " + given + ` bank 10s for ` + options[selection - 1] + ` on ` + date + `?</h2></center>
  <center><button class="continue-button" onclick="yesClk()">Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="continue-button" onclick="noClk()">No</button></center>`
}

function yesClk() {
  userData.push(given, options[selection - 1].replaceAll(",", "§"), date);
  saveData();
  location.reload();
}

function noClk() {
  location.reload();
}

function viewHistory() {
  var htmlBodyTxt = `<header><h1>`+account+`'s Bank 10 History</h1></header><br><table><tr>
    <th>Date</th>
    <th>Reason</th>
    <th>Amount</th>
  </tr>`

  for (let i = 0; i < userData.length; i += 3) {
    htmlBodyTxt = htmlBodyTxt + `<tr>
    <td>` + userData[i + 2] + `</td>
    <td>` + userData[i + 1] + `</td>
    <td>` + userData[i] + `</td>
  </tr>
  `
  }
  htmlBodyTxt = htmlBodyTxt + `</table>`;
  htmlBodyTxt = htmlBodyTxt + `<br><center><button class="continue-button" onclick="noClk()">Back</button></center>`
  document.body.innerHTML = htmlBodyTxt;
}

function reset() {
  userData = [];
  saveData();
}
