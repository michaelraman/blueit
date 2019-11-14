function addItem(){
    var ul = document.getElementById("dynamic-list");
    var topic = document.getElementById("topic");
    var li = document.createElement("li");
    li.setAttribute('id',topic.value);
    li.innerHTML = '<a href=\"messages.html?topic=' + topic.value + '\">' + topic.value + '</a>'  // '<a href="#hOME">HTML</a>'
    li.setAttribute('href', topic.value + ".html")
    //li.appendChild(document.createTextNode(topic.value));
    ul.appendChild(li);
}

function addMessage() {     // change later
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}
