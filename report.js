// PROGRESSBAR
const allProgress = document.querySelectorAll("main .card .progress");

allProgress.forEach((item) => {
  item.style.setProperty("--value", item.dataset.value);
});

let display = 0;
// APEXCHART
var options = {
  series: [
    {
      name: "Planned Effort",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Actual Effort",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#charts"), options);
chart.render();

function updateChartContent() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("head").innerHTML = `
               <h3>Work Visualization</h3>
              <div>
                <button id="extbut">External</button>
                <button id="extbut">Export</button>
                <button id="extbut3">Raise Concern</button>
              </div>

`;
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaU5K2Kz0Yvo-540P1IZ0Wg9" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

`;

  document.getElementById("content-data").innerHTML = ` <div class="order">
              <div class="head">
                <h3>Work Item</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Courses</th>
                    <th>Quantity</th>
                    <th>Quality</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onclick= "updateSubVideo1()">
                    <td>
                      <img src="./img/boy.png" />
                      <p>Digital System</p>
                    </td>
                    <td>10</td>
                    <td><div class="status completed">In Progress</div></td>
                    <td><div class="status completed">In Progress</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo2()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>Signal and Systems</p>
                    </td>
                    <td>25</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo3()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>Sensor and Measurement</p>
                    </td>
                    <td>15</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo4()">
                    <td>
                      <img src="./img/good-person.png" />
                      <p>Principle of PIC16F887</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Trace</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo5()">
                    <td>
                      <img src="./img/process.png" />
                      <p>PIC18F4550 Laboratory</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo6()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Data Com Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo7()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Digital System Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo8()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Communication System</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo9()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Basic Electronics</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo10()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Electromagnetic Field</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo11()">
                    <td>
                      <img src="./img/process.png" />
                      <p>VLSI Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo12()">
                    <td>
                      <img src="./img/process.png" />
                      <p>DSP Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo13()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Digital Signal Processing</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo14()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Communication System Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo15()">
                    <td>
                      <img src="./img/process.png" />
                      <p>FPGA Lab</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo16()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Digital Communication</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo17()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Principle of STM32</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                </tbody>
              </table>
            </div>`;
}

function updateSubVideo1() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaXnQG9P8YgNc0z_bkbM7ev1" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo2() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUGJCYm1IdIdXxB04KQZHPa" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo3() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUYXztxCAlHshQEHAQHrbXF" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo4() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaVJL-gINJFgGQ3fogordQRI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo5() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaWQW5UckKyxL417sh9B1v75" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo6() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaWH16qHw4sBDLNvgTPCdbHx" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo7() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUMnZWMYUOOhF90UqIwnf6A" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo8() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUe4geytcjR2l3HVSl8hN_-" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo9() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaV3-abAGw6MoxXBDFIFdDDB" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo10() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUovx-rh7lHYehoK9iU0MuM" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo11() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaW8OUB55Mj9iBKBdgGKQAnT" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo12() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaW8it7mIbaAra7N-JEU7P08" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    
  </div>
</div>
`;
}
function updateSubVideo13() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUb_CPN1Kq67AnnD2Akv8PO" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo14() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUclnPbHnA3hx31WTLWW1hd" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo15() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaUB7KMzf123oTr4Wvu5F-8t" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo16() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaVjPnJ_J98uWw65ido202Tk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo17() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/videoseries?list=PLp722n3WNwaU5K2Kz0Yvo-540P1IZ0Wg9" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

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

// .......................Telecom...................................
function updateChartContent2() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("head").innerHTML = `
               <h3>Work Visualization</h3>
              <div>
                <button id="extbut">External</button>
                <button id="extbut">Export</button>
                <button id="extbut3">Raise Concern</button>
              </div>

`;
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/xGkyZw98Tug" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

`;

  document.getElementById("content-data").innerHTML = ` <div class="order">
              <div class="head">
                <h3>Work Item</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Courses</th>
                    <th>Quantity</th>
                    <th>Quality</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onclick= "updateSubVideo1x()">
                    <td>
                      <img src="./img/boy.png" />
                      <p>Wireless Future</p>
                    </td>
                    <td>10</td>
                    <td><div class="status completed">In Progress</div></td>
                    <td><div class="status completed">In Progress</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo2x()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>ECIT Engineering</p>
                    </td>
                    <td>25</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo3x()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>The Explained Channel</p>
                    </td>
                    <td>15</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo4x()">
                    <td>
                      <img src="./img/good-person.png" />
                      <p>NPTEL-NOC IITM</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Trace</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo5x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>GURUKULA</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo6x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Ali Muqaibel</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo7x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Er. Manish Sachdeva</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo8x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Easy Engineering Classes</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo9x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>LTE</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo10x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>WISLABi</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo11x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>alantalkstech</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo12x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Network Direction</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo13x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>MATLAB</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo14x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>IEEE Spectrum</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo15x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Computer Science Lessons</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo16x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Electronics Subjectified</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo17x()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Leslie Rusch</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                </tbody>
              </table>
            </div>`;
}

function updateSubVideo1x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/xGkyZw98Tug" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo2x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/8T7orRAQgic" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo3x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/kxLcwIMYmr0" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo4x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/TStEvPx_IWI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo5x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/xvsuwvqmtyk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo6x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/NLcnRoH9kBU" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo7x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/L1luL74ceHc" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo8x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/GT-tYP8RGIs" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo9x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/rKy5dOl3Et4" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo10x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/rmYbz11Jct0" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo11x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/xWivTR7YraE" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo12x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/9SIjoeE93lo" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    
  </div>
</div>
`;
}
function updateSubVideo13x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/57S6av_bRtk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo14x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/aacnhn8IcHI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo15x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/OLsbONSQFUI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo16x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/sFiCgEVpTWs" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo17x() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/i3LBGw8Yle4" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

// ....................................................Process Management...................................
function updateChartContent3() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("head").innerHTML = `
               <h3>Work Visualization</h3>
              <div>
                <button id="extbut">External</button>
                <button id="extbut">Export</button>
                <button id="extbut3">Raise Concern</button>
              </div>

`;
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/89yWXXIOisk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

`;

  document.getElementById("content-data").innerHTML = ` <div class="order">
              <div class="head">
                <h3>Work Item</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Courses</th>
                    <th>Quantity</th>
                    <th>Quality</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onclick= "updateSubVideo1xx()">
                    <td>
                      <img src="./img/boy.png" />
                      <p>Jenkins</p>
                    </td>
                    <td>10</td>
                    <td><div class="status completed">In Progress</div></td>
                    <td><div class="status completed">In Progress</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo2xx()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>ASIPE</p>
                    </td>
                    <td>25</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo3xx()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>SDLC</p>
                    </td>
                    <td>15</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo4xx()">
                    <td>
                      <img src="./img/good-person.png" />
                      <p>BPM</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Trace</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo5xx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Requirement Management</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                </tbody>
              </table>
            </div>`;
}

function updateSubVideo1xx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/89yWXXIOisk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo2xx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/Ye5-lyOBgNw" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo3xx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/Fi3_BjVzpqk" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo4xx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/H8kdXXq-pGU" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
function updateSubVideo5xx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/DDZrnHmiFBw" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

// ......................................................other channels................................................
function updateChartContent4() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("head").innerHTML = `
               <h3>Work Visualization</h3>
              <div>
                <button id="extbut">External</button>
                <button id="extbut">Export</button>
                <button id="extbut3">Raise Concern</button>
              </div>

`;
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/vO8M8ygIyA0" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

`;

  document.getElementById("content-data").innerHTML = ` <div class="order">
              <div class="head">
                <h3>Work Item</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Courses</th>
                    <th>Quantity</th>
                    <th>Quality</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onclick= "updateSubVideo1xxx()">
                    <td>
                      <img src="./img/boy.png" />
                      <p>Thang Aucostic</p>
                    </td>
                    <td>10</td>
                    <td><div class="status completed">In Progress</div></td>
                    <td><div class="status completed">In Progress</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo2xxx()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>Co Chi</p>
                    </td>
                    <td>25</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo3xxx()">
                    <td>
                      <img src="./img/man1.png" />
                      <p>Thay Trang</p>
                    </td>
                    <td>15</td>
                    <td><div class="status process">New</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo4xxx()">
                    <td>
                      <img src="./img/good-person.png" />
                      <p>Thay Tan</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Trace</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo5xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Co Hai</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                   <tr onclick= "updateSubVideo6xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Thay Phu</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                  <tr onclick= "updateSubVideo7xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Thay Phuc</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                   <tr onclick= "updateSubVideo8xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Thay Son</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                   <tr onclick= "updateSubVideo9xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Thay Hiep</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                   <tr onclick= "updateSubVideo10xxx()">
                    <td>
                      <img src="./img/process.png" />
                      <p>Anh Toan</p>
                    </td>
                    <td>10</td>
                    <td><div class="status checking">In Check</div></td>
                    <td><div class="status process">New</div></td>
                  </tr>
                </tbody>
              </table>
            </div>`;
}

function updateSubVideo1xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/vO8M8ygIyA0" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo2xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/2h2nVXJ437U" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo3xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/y77FfvvFH1M" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo4xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/4h74-JSFctI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo5xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/Yp0sSxq6ptU" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo6xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/os462yqOEwI" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo7xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/YIXrJGX4WT0" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo8xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/m4l8dd18yVc" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo9xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/CiTA5FwQhwc" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}

function updateSubVideo10xxx() {
  // Thay đổi nội dung trong phần chart
  document.getElementById("chart").innerHTML = `<div class="chart">
  <div id="chart">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/aGwYP_Hrb98" 
        title="YouTube video playlist player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
`;
}
