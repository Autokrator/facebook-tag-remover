function removeTagComments() {
	$('li.UFIComment:has(a[href$="hc_location=ufi"])').next().filter('.UFIReplyList').remove();
	$('li.UFIComment:has(a[href$="hc_location=ufi"])').remove();
}

setInterval(removeTagComments, 1000);