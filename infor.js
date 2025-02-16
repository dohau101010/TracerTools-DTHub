//   ..........................................................
document.querySelector(".chat-input button").addEventListener("click", () => {
  const input = document.querySelector(".chat-input input");
  const message = input.value.trim();

  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    messageElement.textContent = message;
    document.querySelector(".chat-messages").appendChild(messageElement);

    input.value = ""; // Clear the input
  }
});

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

function sendMessage() {
  const inputField = document.getElementById("chat-input");
  const message = inputField.value.trim();
  const chatMessages = document.getElementById("chat-messages");
  const spinner = document.getElementById("spinner");

  if (message) {
    // Hiển thị tin nhắn của người dùng
    const userMessage = document.createElement("div");
    userMessage.className = "message sent";
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Hiển thị biểu tượng xoay
    spinner.style.display = "inline-block";

    inputField.value = ""; // Xóa nội dung ô nhập

    // Mô phỏng chờ phản hồi (1 giây)
    setTimeout(() => {
      spinner.style.display = "none"; // Ẩn biểu tượng xoay

      // Tạo phản hồi dựa trên nội dung tin nhắn
      const botMessage = document.createElement("div");
      botMessage.className = "message received";
      if (message === "dth_init") {
        botMessage.textContent = "Set up completed!";
      } else if (message === "dth_proc_check") {
        botMessage.textContent = "Your process is not adapted! Try again..";
      } else {
        botMessage.textContent = "I didn't understand that command.";
      }
      chatMessages.appendChild(botMessage);
    }, 1000);
  }
}
