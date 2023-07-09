navToggle = document.querySelector('yt-icon-button#guide-button.style-scope.ytd-masthead');

document.addEventListener('yt-page-data-fetched', action);
document.addEventListener('readystatechange', action);
navToggle.addEventListener('click', action);


function action() {
    var findAndHide = function () {

        const elements = [
            // Recommendation to right of video // Should be in toggle mode
            // "div#secondary.style-scope.ytd-watch-flexy",

            // Ads type 1 to right of video
            "ytd-action-companion-ad-renderer.style-scope.ytd-companion-slot-renderer",

            // Ads type 2 to right of video
            "ytd-promoted-sparkles-web-renderer.style-scope.ytd-in-feed-ad-layout-renderer.sparkles-light-cta",

            // Ads above comments
            "div#contents.style-scope.ytd-rich-metadata-row-renderer",

            // Shorts Side bar option : Maximized
            '#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[title="Shorts"]',

            // Shorts Side bar option : Minimized
            'a#endpoint.yt-simple-endpoint.style-scope.ytd-mini-guide-entry-renderer[title="Shorts"]',

            // Video Comments 
            '#comments',

            // Merch ads below video
            'div#main.style-scope.ytd-merch-shelf-renderer'
        ];

        elements.forEach(findAndHideLoop);
        function findAndHideLoop(item, index, arr) {
            arr[index] = document.querySelector(item);
            if (arr[index]) {
                arr[index].style.cssText = 'display:none !important'
            }
        }
    }
    var hideAndWrite = function () {
        // Recommendations home
        var home = document.querySelector('ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer');
        if (home) {
            home.innerHTML = "Focus mode on";
            home.style.cssText = 'display:block !important;font-size: 80px;color: #8780809e;font-family: math;text-align: center;vertical-align: middle;padding-top: 15%;'
        }
    }

    hideAndWrite()
    findAndHide()

    setTimeout(findAndHide, 1000);
    setTimeout(findAndHide, 2000);
    setTimeout(findAndHide, 3000);
}
