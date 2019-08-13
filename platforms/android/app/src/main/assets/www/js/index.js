//
$(document).ready(function() {

    const date = new Date();
    const add = document.querySelector('.footer__icon-add');
    const ul = document.querySelector('.main__list--ul');
    const clsButton = document.querySelector('#button');
    const input = document.querySelector('.todolist');


    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));

    var app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener('deviceready', app.onDeviceReady);


        },
        onDeviceReady: function() {
            document.addEventListener('pause', app.onPause);
            document.addEventListener('resume', app.onResume);
            app.receivedEvent('deviceready');
            data.forEach(item => {
                console.log('item', item);
                if (item != "")
                    app.createListElement(item);
            });
            app.currentTime();


        },
        onPause: function() {
            console.log("Device on pause");
        },
        onResume: function() {
            // console.log("Device on resume");
            alert("Welcome back, Let's kill this task!");
        },
        // Update DOM on a Received Event
        receivedEvent: function(id) {
            add.addEventListener('click', app.storeList);
            clsButton.addEventListener('click', app.clearBtn);

        },
        userInputLength: function() {
            return input.value.length;
        },
        createListElement: text => {
            const li = document.createElement('li');
            li.textContent = text;
            li.classList.add("ui-li-static", "ui-body-inherit");
            ul.appendChild(li);
            li.addEventListener('click', function() {
                li.classList.toggle('done');
            });
        },
        storeList: function(e) {
            e.preventDefault();

            itemsArray.push(input.value);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            if (app.userInputLength() > 0) {
                app.createListElement(input.value);
                input.value = '';
            }
        },
        clearBtn: function() {
            localStorage.removeItem('items');
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild)
            };
        },
        currentTime: function() {
            app.getDay();
            app.getMonth();
            const getDate = date.getDate();

            const headerContainer = document.querySelector('.current-date');
            const headerDate = `
                ${app.getDay() + ' ' + app.getMonth() + ' ' + getDate}
                `;
            headerContainer.textContent = headerDate;
        },
        getDay: function() {
            switch (date.getDay()) {

                case 0:
                    return "SUNDAY"
                    break;
                case 1:
                    return "MONDAY"
                    break;
                case 2:
                    return "TUESDAY"
                    break;
                case 3:
                    return "WEDNESDAY"
                    break;
                case 4:
                    return "THURSDAY"
                    break;
                case 5:
                    return "FRIDAY"
                    break;
                case 6:
                    return "SATURDAY"
                    break;

                default:
                    break;
            }
        },
        getMonth: function() {
            switch (date.getMonth()) {

                case 0:
                    return "January"
                    break;
                case 1:
                    return "February"
                    break;
                case 2:
                    return "March"
                    break;
                case 3:
                    return "April"
                    break;
                case 4:
                    return "May"
                    break;
                case 5:
                    return "June"
                    break;
                case 6:
                    return "July"
                    break;
                case 7:
                    return "August"
                    break;
                case 8:
                    return "September"
                    break;
                case 9:
                    return "October"
                    break;
                case 10:
                    return "November"
                    break;
                case 11:
                    return "December"
                    break;

                default:
                    break;
            }
        }


    };


    app.initialize();

    // Swipe to remove list item
    $(document).on("swipeleft swiperight", "#list li", function(event) {
        var listitem = $(this),
            // These are the classnames used for the CSS transition
            dir = event.type === "swipeleft" ? "left" : "right",
            // Check if the browser supports the transform (3D) CSS transition
            transition = $.support.cssTransform3d ? dir : false;
        confirmAndDelete(listitem, transition);
    });
    // If it's not a touch device...
    if (!$.mobile.support.touch) {
        // Remove the class that is used to hide the delete button on touch devices
        $("#list").removeClass("touch");
        // Click delete split-button to remove list item
        $(".delete").on("click", function() {
            var listitem = $(this).parent("li");
            confirmAndDelete(listitem);
        });
    };

    function confirmAndDelete(listitem, transition) {
        // Highlight the list item that will be removed
        listitem.children(".ui-btn").addClass("ui-btn-active");
        // Inject topic in confirmation popup after removing any previous injected topics
        $("#confirm .topic").remove();
        $("#confirm .topic").remove();
        listitem.find(".topic").clone().insertAfter("#question");
        // Show the confirmation popup
        $("#confirm").popup("open");
        // Proceed when the user confirms
        $("#confirm #yes").on("click", function() {
            // Remove with a transition
            if (transition) {
                listitem
                // Add the class for the transition direction
                    .addClass(transition)
                    // When the transition is done...
                    .on("webkitTransitionEnd transitionend otransitionend", function() {
                        // ...the list item will be removed
                        listitem.remove();
                        // ...the list will be refreshed and the temporary class for border styling removed
                        $("#list").listview("refresh").find(".border-bottom").removeClass("border-bottom");

                    })
                    // During the transition the previous button gets bottom border
                    .prev("li").children("a").addClass("border-bottom")
                    // Remove the highlight
                    .end().end().children(".ui-btn").removeClass("ui-btn-active");
            }
            // If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
            else {
                listitem.remove();
                $("#list").listview("refresh");
            }
        });
        // Remove active state and unbind when the cancel button is clicked
        $("#confirm #cancel").on("click", function() {
            listitem.children(".ui-btn").removeClass("ui-btn-active");
            $("#confirm #yes").off();
        });
    };

});