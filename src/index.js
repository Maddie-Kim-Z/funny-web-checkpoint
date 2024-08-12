document.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector(".iconfont");
btn.addEventListener('click',function(){


    const name = document.getElementById("name");
    const bir = document.getElementById("bir");
    const email = document.getElementById("email");
    const ID = document.getElementById("ID");

    name.innerHTML = faker.internet.userName();
    bir.innerHTML = faker.date.past();
    email.innerHTML = faker.internet.email();
    ID.innerHTML = faker.datatype.uuid();

});
});