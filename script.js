function uploadCompleted() {
  setTimeout(() => {
    addNotification("Файл обрабатывается");
    setTimeout(() => {
      addNotification("Файл обработан");
      setTimeout(() => {
        addNotification("Сохранение файла...");
        setTimeout(() => {
          addNotification("Файл успешно сохранен");
          buttonEnabled(button);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function startUpload(callback) {
  addNotification("Файл загружается");

  document.getElementById("progressInfo").style.display = "block";

  let progress = 0;

  const intervalId = setInterval(() => {
    const increment = Math.floor(Math.random() * 6) + 5;
    progress += increment;

    if (progress >= 100) {
      progress = 100;
    }
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("progressText").textContent =
      `Прогресс: ${progress}%`;

    if (progress >= 100) {
      clearInterval(intervalId);
      addNotification("Загрузка файла успешно завершена");

      document.getElementById("progressInfo").style.display = "none";

      if (callback) {
        uploadCompleted();
      }
    }
  }, 1000);
}

function addNotification(message) {
  const notificationDiv = document.getElementById("notifications");
  notificationDiv.textContent = message;
}

const button = document.getElementById("button");

function buttonDisabled(button) {
  button.style.cssText = "background-color: #eee; border-color:#ddd";
  button.disabled = true;
  button.textContent = "Загрузка...";
}
function buttonEnabled(button) {
  button.style.cssText = "background-color: ; border-color:";
  button.disabled = false;
  button.textContent = "Загрузить файл";
}
button.addEventListener("click", () => {
  startUpload(uploadCompleted);
  buttonDisabled(button);
});

