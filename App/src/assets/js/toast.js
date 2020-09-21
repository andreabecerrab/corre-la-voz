function activateT() {
  $(document).ready(function () {
    $("#edited").click(function () {
      $(".toast").toast({ delay: 1000 });
      $(".toast").toast("show");
    });
  });
}
