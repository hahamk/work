// 헤더를 가져와서 header 요소에 삽입
fetch("components/header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
  });

// 푸터를 가져와서 footer 요소에 삽입
fetch("components/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });

// 공통레이어
function openPopup(popupId) {
  const popupContainer = document.getElementById(popupId);
  popupContainer.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup(popupId) {
  const popupContainer = document.getElementById(popupId);
  popupContainer.style.display = "none";
  document.body.style.overflow = "";
}

document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("popup-container") &&
    event.target.classList.contains("popup-container")
  ) {
    closePopup(event.target.id);
  }
});
