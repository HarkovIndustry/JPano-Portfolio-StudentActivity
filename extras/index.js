//delay pop
ScrollReveal().reveal(".fast", { delay: 250 });
ScrollReveal().reveal(".medium", { delay: 500 });
ScrollReveal().reveal(".slow", { delay: 750 });
//navbar
function confirmLeave() {
  Swal.fire({
    title: "Leaving this page?",
    text: "You are about to leave your current page.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Proceed",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "extras/projects.html";
    }
  });
  return false; // Prevent default anchor click behavior
}
//special
window.onscroll = function () {
  const button = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//contacts
function showAlert() {
  Swal.fire({
    title: "Copy number?",
    text: "Would you like to copy the number",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Copy number",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText("(+63)0993-885-9567");
      Swal.fire(
        "Copied!",
        "The number has been copied to your clipboard.",
        "success"
      );
    }
  });
}
function showSweetAlert(link, visitText, copyText) {
  Swal.fire({
    title: "Choose action",
    text: `${link}`,
    showCancelButton: true,
    confirmButtonText: visitText,
    cancelButtonText: copyText,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(link, "_blank");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      copyLink(link);
    }
  });
}
function copyLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    Swal.fire(
      "Copied!",
      "The link has been copied to your clipboard.",
      "success"
    );
  });
}
