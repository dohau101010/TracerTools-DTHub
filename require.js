document.getElementById("overview-btn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
        <table class="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Artifact</th>
                    <th>Description</th>
                    <th>Main Component</th>
                    <th>Detail</th>
                    <th>Method</th>
                    <th>Work State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Work Statement</td>
                    <td>Get list of your expected work item to cart</td>
                    <td>E-Print</td>
                    <td>List of Item name</td>
                    <td>Automation/Manual</td>
                    <td><button id="state_1">Available</button></td>
                  </tr>
                  <tr class="active">
                    <td>02</td>
                    <td>Subject</td>
                    <td>List of subject material file</td>
                    <td>File</td>
                    <td>Document/Presentation</td>
                    <td>Manual</td>
                    <td><button id="state_2">Available</button></td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Project</td>
                    <td>List of mini project in practice</td>
                    <td>File</td>
                    <td>Document/Exe/Source</td>
                    <td>Manual</td>
                    <td><button id="state_3">Available</button></td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Container</td>
                    <td>Contain your list order</td>
                    <td>E-File</td>
                    <td>Drag E-File and Drop here</td>
                    <td>Manual</td>
                    <td><button id="state_4">Available</button></td>
                  </tr>
                </tbody>
              </table>
`;

  document.getElementById("attendance_1").innerHTML =
    ' <img src="./img/LORA_1.jpg" alt="" style="width: 50%;"/>';
});

document.getElementById("slave-btn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
      
        <table class="table">
          <thead>
             <tr>
              <th>No</th>
              <th>Artifact</th>
              <th>Description</th>
              <th>Main Component</th>
              <th>Detail</th>
              <th>Method</th>
              <th>Work State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>General Test</td>
              <td>Must be passed to get activated code</td>
              <td>E-Form</td>
              <td>Do the test directly in web</td>
              <td>On-Site</td>
              <td><button id="state_1">Available</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Manual Test</td>
              <td>Same to General test but done in local </td>
              <td>File</td>
              <td>Do the test directly in file then upload</td>
              <td>In-Local</td>
              <td><button id="state_1">In Progress</button></td>
            </tr>
          </tbody>
        </table>
   
  
    `;
  document.getElementById("attendance_1").innerHTML =
    '  <div class="gradient-bar"></div> <img src="./img/LORA_2.jpg" alt="" style="width: 35%;"/>';
});

document.getElementById("master-btn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
     
        <table class="table">
          <thead>
              <tr>
              <th>No</th>
              <th>Artifact</th>
              <th>Description</th>
              <th>Main Component</th>
              <th>Detail</th>
              <th>Method</th>
              <th>Work State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Check Process</td>
              <td>Check your process before clone execution</td>
              <td>Work Statement/Cert Key</td>
              <td>E-File/Key code</td>
              <td>Automation</td>
              <td><button id="state_1">In Progress</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Clone command</td>
              <td>Download file by command</td>
              <td>Process check is done</td>
              <td>Process cert</td>
              <td>Automation</td>
              <td><button id="state_1">In Progress</button></td>
            </tr>
        
          </tbody>
        </table>
    
      
    `;
  document.getElementById("attendance_1").innerHTML =
    ' <img src="./img/LORA_3.jpg" alt="" style="width: 35%;" />';
});
// Function to handle multiple file downloads
function handleFilesDownload() {
  // List of file names to download
  var fileNames = ["Requirement.docx", "SDK.pptx"];

  var folderPath = "Requirement"; // Path to the folder
  var storage = firebase.storage();
  var storageRef = storage.ref();

  fileNames.forEach(function (fileName) {
    var fileRef = storageRef.child(folderPath).child(fileName); // Set path to each file

    fileRef
      .getDownloadURL()
      .then(function (url) {
        // Create a link element to initiate download
        var link = document.createElement("a");
        link.href = url;
        link.download = fileName; // Suggest filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        // Handle errors
        console.error("Download error for " + fileName + ":", error);
        alert("Error downloading file: " + error.message);
      });
  });
}

// Set up event listener for FETCH BUTTON
document
  .getElementById("fetch-btn")
  .addEventListener("click", handleFilesDownload);

const userName = sessionStorage.getItem("userName");
console.log(userName);
if (userName) {
  const currentHour = new Date().getHours(); // Lấy giờ hiện tại
  let greeting;

  // Xác định thông điệp dựa trên giờ
  if (currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good night!";
  }

  // Hiển thị thông điệp
  document.getElementById("username").textContent = `${greeting} ${userName}`;
} else {
  console.log("Không có tên người dùng trong sessionStorage.");
}

document.getElementById("explore-pay").addEventListener("click", function () {
  window.location.href = "infor.html";
});
