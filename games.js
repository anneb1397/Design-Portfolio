// JavaScript source code
var currentDesignBlock = 0;

function changeDesignBlock(index) {

    hideCurrentDesignBlock();
    currentDesignBlock = index;
    switch (index) {
        case 0:
            //Display background
            document.getElementsByClassName("backgroundInfo")[0].style.display = "inline";

            break;
        case 1:
            //Display code
            document.getElementsByClassName("codeInfo")[0].style.display = "inline";
            break;
        case 2:
            //display story
            document.getElementsByClassName("storyInfo")[0].style.display = "inline";
            break;
        case 3:
            //display walkthrough
            document.getElementsByClassName("walkthroughInfo")[0].style.display = "inline";
            break;
    }
}

function hideCurrentDesignBlock() {
    switch (currentDesignBlock) {
        case 0:
            //hide background
            document.getElementsByClassName("backgroundInfo")[0].style.display = "none";
            break;
        case 1:
            //Hide code
            document.getElementsByClassName("codeInfo")[0].style.display = "none";
            break;
        case 2:
            //hide story
            document.getElementsByClassName("storyInfo")[0].style.display = "none";
            break;
        case 3:
            //hide walkthrough
            document.getElementsByClassName("walkthroughInfo")[0].style.display = "none";
            break;

    }
}