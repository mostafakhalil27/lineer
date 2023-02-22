// the start of the oop \\
new Promise( ( resolve , reject ) => {
    setTimeout(() => {
        document.getElementById("link-one").style.visibility = "visible" ;
        resolve()
    }, 100);
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-two").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-three").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-four").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-five").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-six").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-seven").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-eight").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-nine").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-ten").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-eleven").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-twelve").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
.then( () => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            document.getElementById("link-thirteen").style.visibility = "visible" ;
            resolve()
        }, 100);
    })
})
// the end \\

// the start of the slider \\
function add(){
    let old = document.getElementById("active");
    old.id = ""
    old.classList.remove("active")
    if(old.nextElementSibling != null){
        old.nextElementSibling.classList.add("active")
        old.nextElementSibling.id = "active"
    }else{
        old.previousElementSibling.previousElementSibling.classList.add("active")
        old.previousElementSibling.previousElementSibling.id = "active"
    }
}
document.getElementById("next").onclick = add;


function remove(){
    let old = document.getElementById("active");
    old.id = ""
    old.classList.remove("active")
    if(old.previousElementSibling != null){
        old.previousElementSibling.classList.add("active")
        old.previousElementSibling.id = "active"
    }else{
        old.nextElementSibling.nextElementSibling.classList.add("active")
        old.nextElementSibling.nextElementSibling.id = "active"
    }
}    
document.getElementById("prev").onclick = remove;
// the end \\

// the start of about us section \\  
$(document).ready(function(){
        $("#text-button").click(function(){
        $("#about-img").show(5000);
    });
  });
// the end \\  

// Back to Top Button \\
$(document).ready(function(){
    $("#Back-To-Top").click(function(){
        $(window).scrollTop(0);
    });
});
// the end \\