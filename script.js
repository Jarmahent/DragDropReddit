window.onload = function() {
  //var frame = "<form action=''/file-upload' class='dropzone' id='dropzone'> Drag File Here </form>"
  var form = document.createElement("form");
  var script = document.createElement("script");
  script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js");
  script.setAttribute("type", "text/javascript");
  form.setAttribute("class", "dropzone");
  form.setAttribute("action", "/file-upload");
  form.setAttribute("id", "dropzone");

  document.getElementById("suggest-title").innerHTML = "";
  document.getElementById("url-field").style.cssText = "width: 500px !important; text-align: center !important;";

  document.getElementById("url-field").appendChild(form);
  document.body.appendChild(script);
  document.getElementById("dropzone").style.cssText = "border-radius: 5px !important ;width: 500px !important; height: 355px !important; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; background-color: white !important;";


 var dropzone = new Dropzone("#dropzone", {
   init: function() {
   this.on("success", function(e, res) {
     var link =`${res.data.link}`;
     document.getElementById("url").value = `${link}`;
    }); //Print the link inside the imgur json response, do the same with gfycat
   this.on("error", function(file, err){
     document.getElementById("status").innerHTML = err.data.error.message;
     document.getElementById("status").style.cssText = "color: red;";
 });
   //this.on("uploadprogress", function(file, prog){console.log(prog);});
 },
   url: "https://api.imgur.com/3/image",
   headers: {
   'Authorization': 'Client-ID e5df71c6267ac42',
   'Accept': 'application/json',
   'Cache-Control': '',
   'X-Requested-With': '',
   }
 });





  Dropzone.options.dropzone = {

    }


}
