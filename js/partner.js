const forms = document.querySelectorAll("form");
for (let i = 1; i <= 4; i++) {
  // сюда будем помещать drug-&-drop файлы (4)
  window["uploadDragFiles_" + i] = new Object();
}

document
  .querySelectorAll(".upload-file__wrapper")
  .forEach(function (current_item, index) {
    const inputFile = document.querySelectorAll(".upload-file__input");
    // создаём массив файлов
    let fileList = [];
inputFile.forEach(function (current_input, index){
    current_input.addEventListener("change", function (event) {
      let curInp = event.target;
      let ii=curInp.parentNode;
      let textSelector = ii.querySelector(".upload-file__text");
      fileList.push(...current_input.files);
      // console.log(inputFile.files);
      // вызов функции для каждого файла
      fileList.forEach((file) => {
        console.log(textSelector);
        uploadFile(file, textSelector);
      });
    });
});
    // Событие выбора файла(ов)


    // Проверяем размер файлов и выводим название
    const uploadFile = (file, textSelector) => {
      console.log(textSelector);
      // размер файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert("Файл должен быть не более 5 МБ.");
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event) => {
        textSelector.innerHTML = "";
        const img = document.createElement("img");
        textSelector.style.height = "100%";
        textSelector.appendChild(img);
        img.src = event.target.result;
        img.alt = file.name;
      });
      // Показ загружаемых файлов
      fileList = [];
    };
  });
