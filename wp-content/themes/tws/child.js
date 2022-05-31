var siteTitle = document.title;
$(".entry-content img").each(function () {
var alt = this.alt;
var src = this.src;
if (!alt) {
$(this).attr("alt", siteTitle);
}
$(this).wrap("<a href='"+ src +"' data-fancybox='group' data-caption='"+ siteTitle +"' title='"+ siteTitle +"'></a>");
});
$('[data-fancybox]').fancybox({
buttons: ["slideShow","zoom","fullScreen","thumbs","close"],
transitionEffect: "zoom-in-out",
protect: true
})
