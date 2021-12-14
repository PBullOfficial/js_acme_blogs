//1. createElemWithText
function createElemWithText(htmlString = "p", textContent = "", className = ""){

    let htmlElement = document.createElement(htmlString);
    htmlElement.textContent = textContent;
    htmlElement.className = className;
    return htmlElement;

}

// 2.a. Preparing JSON (from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
let requestURL = 'https://jsonplaceholder.typicode.com/users'
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const userData = request.response;

}

//2.b. createSelectOptions
function createSelectOptions(userData){
    
    if (!userData) return undefined;
    
    let myArray = [];

    for (let i = 0; i < userData.length; i++) {
        let user = userData[i];
        let option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        myArray[i] = option;
    }

    return myArray;

}

//3. toggleCommentSection
function toggleCommentSection(postId) {
    if (!postId) return undefined;
    const user = document.querySelector("[data-post-id = 'postId']")
    if (!user) return null;
    user.toggle("hide");
    return user;
}

//4. toggleCommentButton
function toggleCommentButton(postId) {
    if (!postId) return undefined;
    const myButton = document.getElementById(postId);
    if (myButton === null) return null;
    myButton.textContent === "Show Comments" ? "Hide Comments" : "Show Comments";

    return myButton
}

//5. deleteChildElements
function deleteChildElements (parentElement) {

    if(!parentElement?.HTML) return;

    let theChild = parentElement.lastElementChild;

    while (parentElement.hasChildNodes())
        parentElement.removeChild(theChild);
        theChild = parentElement.lastElementChild;

    return parentElement;

}

//6. addButtonListeners
function addButtonListeners() {

    let allButtons = document.querySelectorAll('button');
    if (allButtons) {
        for (button of allButtons) {
            button = document.querySelector(`button[data-post-id='${postId}']`);
            postId = button.dataset.postId;
            button.addEventListener("click", function (e) {toggleComments(e, postId)}, false);

        };
    }
    return allButtons;

}

//7. removeButtonListeners
function removeButtonListeners() {


}

//8. createComments
function createComments(userDataComments) {

}

//9. populateSelectMenu
function populateSelectMenu(userData) {

}

//10. getUsers
function getUsers(userData) {

}

//11. getUserPosts
function getUserPosts(userId) {

}

//12. getUser
function getUser(userId) {

}

//13. getPostComments
function getPostComments(postId) {

}

//14. displayComments
function displayComments(postId) {

}

//15. createPosts
function createPosts(userDataPosts) {

}

//16. displayPosts
function displayPosts(userDataPosts) {

}

//17. toggleComments
function toggleComments(event, postId) {



}

//18. refreshPosts
function refreshPosts(userDataPosts) {

}

//19. selectMenuChangeEventHandler
function selectMenuChangeEventHandler(event) {

}

//20. initPage
function initPage() {

}

//21. initApp
function initApp() {
    //initPage();
   //const menuSelect = document.getElementById(#selectMenu);
    //document.addEventListener(menuSelect, selectMenuChangeEventHandler());
}

document.addEventListener("DOMContentLoaded", initApp);