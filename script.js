window.onload = function() {
  //var frame = "<form action=''/file-upload' class='dropzone' id='dropzone'> Drag File Here </form>"
  var form = document.createElement("form");
  var script = document.createElement("script");
  var progress = document.createElement("progress")
  progress.setAttribute("id", "progress");
  progress.setAttribute("value", "0");
  progress.setAttribute("max", "100");
  script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js");
  script.setAttribute("type", "text/javascript");
  form.setAttribute("class", "dropzone");
  form.setAttribute("action", "/file-upload");
  form.setAttribute("id", "dropzone");

  document.getElementById("suggest-title").innerHTML = "";
  document.getElementById("url-field").style.cssText = "width: 500px !important; text-align: center !important;";

  document.getElementById("url-field").appendChild(form);
  document.getElementById("url-field").appendChild(progress);
  document.body.appendChild(script);
  document.getElementById("dropzone").style.cssText = "overflow: auto !important;border-radius: 5px !important ;width: 500px !important; height: 355px !important; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; background-color: white !important;";


 var dropzone = new Dropzone("#dropzone", {
   init: function() {
   this.on("success", function(e, res) {
     var link =`${res.data.link}`;
     document.getElementById("url").value = `${link}`;
    }); //Print the link inside the imgur json response, do the same with gfycat
   this.on("error", function(file, err){
     document.getElementById("url").value = "ERROR CHECK CONSOLE";
     document.getElementById("url").style.cssText = "color: red !important;";
     //progress.style.cssText = "background-color: red !important;"

     if(err.data.error.message == undefined){
       console.error(`UPLOAD ERROR: ${err.data.error}`)
     }else{console.error(`UPLOAD ERROR: ${err.data.error.message}`);}

 });
   this.on("totaluploadprogress", function(totalprogress){progress.setAttribute("value", totalprogress);});
 },
   url: "https://api.imgur.com/3/upload",
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
