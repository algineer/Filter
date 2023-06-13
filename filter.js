var set_up = true
const filter = document.createElement('textarea')

var filter_once = false



//Comment Filter
function Filter() {
    let comments = document.querySelector("div.css-181veuo > select")
    if (comments != null) {

        if (!filter_once) {
            comments.parentElement.insertBefore(filter, comments)
            filter_once = true
            filter.focus()
        }

        comments.childNodes.forEach(
            function(comment) {
                if (filter.value == '')
                    comment.style.display = ''
                else {
                    if (!comment.value.toLowerCase().includes(filter.value.toLowerCase().trim()))
                        comment.style.display = 'none'
                    else
                        comment.style.display = ''
                }
            })

    } else {
        filter_once = false
        filter.value = ''
    }
};



if (window.location.href.includes("MESH"))
    requestAnimationFrame(clip_loop);

function clip_loop() {

    Filter()

    requestAnimationFrame(clip_loop)
}
