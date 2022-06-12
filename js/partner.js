const forms = document.querySelectorAll("form");
const reader = new FileReader();
for (let i = 1; i <= 4; i++) {
  // сюда будем помещать drug-&-drop файлы (4)
  window["uploadDragFiles_" + i] = new Object();
}

document
  .querySelectorAll(".upload-file__wrapper")
  .forEach(function (current_item, index) {
    const inputFile = current_item.querySelector(".upload-file__input");

    // создаём массив файлов
    let fileList = [];

    /////////// Кнопка «Прикрепить файл» ///////////
    let textSelector = current_item.querySelector(".upload-file__text");

    // Событие выбора файла(ов)
    inputFile.addEventListener("change", function () {
      fileList.push(...inputFile.files);
      // console.log(inputFile.files);
      // вызов функции для каждого файла
      fileList.forEach((file) => {
        uploadFile(file);
      });
    });

    // Проверяем размер файлов и выводим название
    const uploadFile = (file) => {
      // размер файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert("Файл должен быть не более 5 МБ.");
        return;
      }
      console.log(file);
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event) => {
        textSelector.innerHTML = "";
        const img = document.createElement("img");
        img.style.height = "400px";
        img.style.width = "400px";
        textSelector.appendChild(img);
        img.src = event.target.result;
        img.alt = file.name;
      });
      // Показ загружаемых файлов
      fileList = [];
    };

    /////////// Загрузка файлов при помощи «Drag-and-drop» ///////////
    // const dropZones = document.querySelectorAll(".upload-file__label");
    const dropZone = current_item.querySelector(".upload-file__label");
    const dropZoneText = current_item.querySelector(".upload-file__text");
    const maxFileSize = 5000000; // максимальный размер файла - 5 мб.

    // Проверка поддержки «Drag-and-drop»
    if (typeof window.FileReader == "undefined") {
      dropZone.textContent = "Drag&Drop Не поддерживается браузером!";
      dropZone.classList.add("error");
    }
    // Событие - перетаскивания файла
    dropZone.ondragover = function () {
      this.classList.add("hover");
      return false;
    };
    // Событие - отмена перетаскивания файла
    dropZone.ondragleave = function () {
      this.classList.remove("hover");
      return false;
    };
    // Событие - файл перетащили
    dropZone.addEventListener("drop", function (e) {
      e.preventDefault();
      this.classList.remove("hover");
      this.classList.add("drop");
      console.log(e.dataTransfer.files[0]);
      uploadDragFiles = e.dataTransfer.files[0]; // один файл

      // Проверка размера файла
      if (uploadDragFiles.size > maxFileSize) {
        dropZoneText.textContent = "Размер превышает допустимое значение!";
        this.addClass("error");
        return false;
      }

      // Показ загружаемых файлов
      reader.readAsDataURL(e.dataTransfer.files[0]);
      reader.addEventListener("load", (event) => {
        dropZoneText.innerHTML = "";
        const img = document.createElement("img");
        img.style.height = "400px";
        img.style.width = "400px";
        dropZoneText.appendChild(img);
        img.src = event.target.result;
        img.alt = e.dataTransfer.files[0].name;
      });

      // добавляем файл в объект "uploadDragFiles_i"
      window["uploadDragFiles_" + index] = uploadDragFiles;
    });
  });