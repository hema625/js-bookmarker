const submit = document.forms['myform'];

submit.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("target");
    const siteName = document.getElementById('sitename').value;
    const siteURL = document.getElementById('siteurl').value;
    console.log("sitename",siteName);
    console.log("siteurl",siteURL);

    if(!validateForm(siteName,siteURL)){
        return false;
    }

    var bookmark = {
        name : siteName,
        url : siteURL
    }

    if(localStorage.getItem('bookmarks')===null){
        var arr = [];
        arr.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(arr)); //arr or bookmark [object] [object]
    } //JSON.stringify(bookmark) --{name: "Google1", url: "https://www.google.com"}
    else {
       var arr1 = JSON.parse(localStorage.getItem('bookmarks'));
       console.log("book",arr);
        arr1.push(bookmark);
     localStorage.setItem('bookmarks',JSON.stringify(arr1));
    }
    document.getElementById('myform').reset();
    fetchbooks();
});

function deleteBookmark(url) {
   
    var arr = JSON.parse(localStorage.getItem('bookmarks'));
    final = arr.filter(item=>{
        return item.url!== url;
    })
    localStorage.setItem('bookmarks',JSON.stringify(final));
    fetchbooks();
}

function fetchbooks(){
    var arr = JSON.parse(localStorage.getItem('bookmarks'));
    console.log("book",arr);
    var bookmarkresults = document.getElementById('bookmarkresults');
    bookmarkresults.innerHTML = ' ';
    arr.forEach(function(book){
        var name = book.name;
        var url = book.url;
        bookmarkresults.innerHTML += '<div class = "card card-body">' +
                                            '<h3>' + name + '   ' +
                           '<a class = "btn btn-primary" target = "_blank" href = "'+url+'">Visit </a>' + '   ' +
       '<a onclick = "deleteBookmark(\''+url+'\')" class = "btn btn-danger" href = "#">Delete </a>' +
                                            '</h3>'
                                            '</div>';
    })
}

function validateForm(siteName,siteURL) {
    if(!siteName||!siteURL) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteURL.match(regex)) {
        alert("Please enter a valid URL");
        return false;
      }
      return true;
}
    
    // final = arr.forEach(function(book,index){
    //     console.log(book);       
    //     if(book.url===url) {
    //        arr.splice(index,1);
    //     }
    // });
    // console.log("final",final);

// console.log("bookmark",bookmark);
    // localStorage.setItem("hema1","hemalatha1");
    // console.log(localStorage.getItem("hema1"));
    //  localStorage.removeItem('bookmarks');
    // console.log(localStorage.getItem("hema1"));

        // Test if bookmarks is null

//   if(localStorage.getItem('bookmarks') === null){
//     // Init array
//     var bookmarks = [];
//     // Add to array
//     bookmarks.push(bookmark);
//     // Set to localStorage
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//   } else {
//     // Get bookmarks from localStorage
//     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     // Add bookmark to array
//     bookmarks.push(bookmark);
//     // Re-set back to localStorage
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//   }