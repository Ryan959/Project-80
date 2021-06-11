var names_of_people = []
var new_person;

function submit(){
    new_person = document.getElementById("name_input").value;
    names_of_people.push(new_person);
    document.getElementById("guest_list").innerHTML = names_of_people;
}

function sort(){
    document.getElementById("sorted_list").innerHTML = names_of_people.sort();
}