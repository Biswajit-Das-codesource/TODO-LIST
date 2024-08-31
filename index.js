let btn = document.querySelector(".add");

btn.addEventListener("click", () => {
  let text = document.querySelector(".input");
  if (text.value == "") {
    alert("please fill it");
  } else {
    let textcontent = text.value;
    console.log(textcontent);
    let div = document.createElement("div");
    div.innerHTML = `<div class="result">
            <p class="result-para">${textcontent}</p>
            <button class="delete1" onclick="deletelist(this)">DELETE</button>
        </div>`;
    document.querySelector(".list").appendChild(div);
    text.value = " ";
  }
});

const result = document.querySelector(".result");
    const deletebtn = document.querySelector(".delete1");
    console.log(deletebtn);
    deletebtn.addEventListener("click", function () {
      result.style.display = "none";
    });

    
function deletelist(button){
    alert("list will be deleted")
    document.querySelector(".result").remove()
}
