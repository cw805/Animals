baseurl      = "/sis/";
bookstoreurl = "https://stolaf.bncollege.com/shop/st-olaf/home";

browserargs = "toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes";

// course information window

//function sis_courseinfo_openwindow(allowselect, yearterm) {
//	cwindow = window.open(baseurl + "tool-ci.cfm?yearterm=" + yearterm + "&allowselect=" + allowselect, "courseinfo", browserargs + ",width=800,height=500,left=0,top=0");
//	return(cwindow);
//}

// course description
function sis_coursedesc(clbid) {
	cwindow = window.open(baseurl + "public-coursedesc.cfm?clbid=" + clbid, "coursedescription", browserargs + ",width=600,height=300,left=0,top=0");
	//return false;
}

// clearinghouse enrollment (external site)
function sis_clearinghouse_openwindow(idnum) {
	window.open(baseurl + "st-clearinghouse.cfm", "clearinghouseopopup", browserargs + ",width=800,height=600");
}

// student information window
function sis_stuinfo_openwindow(idnum) {
	window.open(baseurl + "tool-stuinfo.cfm?idnum=" + idnum, "stuinfo", browserargs + ",width=900,height=800");
}

// schedule window
//function sis_showschedule_openwindow() {
//	w = window.open("", "showschedule", "toolbar=no,menubar=yes,location=no,directories=no,status=no,scrollbars=no,resizable=yes,width=1000,height=550");
//	document.forms.showschedule.submit();
//	w.focus();
//}

// olecard checkbalance window
function sis_checkbalance_openwindow(x) {
	w = window.open("", "checkbalance", browserargs + ",width=1000,height=600");
	document.forms.checkbalance.acct.value = x;
	document.forms.checkbalance.submit();
	w.focus();
}

// faculty information window

function sis_facinfo_openwindow(ppnum) {
	w = window.open("", "facinfo", browserargs + ",width=550,height=350");
	w.location.href = baseurl + "public-facinfo.cfm?ppnum=" + ppnum;
}

// room information window

function sis_roominfo_openwindow(roomid) {
	if ( roomid.match(/[a-zA-Z][0-9][0-9]$/)) {
		roomid = roomid.substring(0, 2) + "0" + roomid.substring(2, 4);
	}
	window.open("http://www.stolaf.edu/apps/classrooms/index.cfm?fuseaction=room&id=" + roomid);
}

// ge requirement information window

function sis_geinfo_openwindow(geid) {
	window.open(baseurl + "geinfo.cfm");
}

// bookstore 

function sis_bookstore_openwindow(coursenum) {
	window.open(bookstoreurl + "?coursenum=" + coursenum);
}

// lowgrade 

function sis_lowgrade_openwindow(clbid, stnum) {
	window.open(baseurl + "tool-lowgrade.cfm?clbid=" + clbid + "&stnum=" + stnum, "lowgrade" + stnum, browserargs + ",width=600,height=660");
}

// olecard

function sis_oc_openwindow(url) {
	window.open(url, "olecardwindow", "toolbar=yes,location=no,directories=no,status=yes,scrollbars=yes,resizable=yes,width=1000,height=700");
}

// generic open window

function sis_openwindow(url) {
	//window.open(url, "sissupportwindow", "toolbar=yes,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,width=760,height=450");
	window.open(url, "sissupportwindow", "toolbar=yes,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,width=1200,height=800");
}

// statement window
function sis_statementwindow(url) {
	w = window.open(url, "sisstatement", "toolbar=yes,menubar=yes,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,width=760,height=450");
	w.focus();
	
}

// statement pdf window
function sis_pdfwindow(url) {
	w = window.open(url, "sispdf", "toolbar=yes,menubar=no,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,width=760,height=450");
	w.focus();
}

// person search

//function sis_personsearch_openwindow(allowselect) {
//	pwindow = window.open('tool-personsearch.cfm?allowselect=' + allowselect, 'personsearch', 'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=700,height=550');
//	return(pwindow);
//}
//function sis_personsearch_openwindow2(allowselect, searchtype, what) {
//	pwindow = window.open('tool-personsearch2.cfm?allowselect=' + allowselect + '&searchtype=' + searchtype + '&what=' + what, 'personsearch', 'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=700,height=550');
//	return(pwindow);
//}

// GPA calculator
// todo(rives): remove when new navigation goes live
// function sis_gpacalculator_openwindow() {
// 	gwindow = window.open('tool-gpacalculator.cfm', 'gpacalculator', 'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=800,height=600');
// 	return(gwindow);
// }

// pie graph open window

function sis_piegraph_openwindow(url) {
	window.open(url, "sispiegraph", "toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,width=300,height=200");
}

// TMS pop-up
function sis_tms_openwindow(url) {
	window.open(url, "sistms", "toolbar=no,location=yes,directories=no,status=no,scrollbars=yes,resizable=yes,width=1100,height=800");
}


// go to fa-courses.cfm with a certain type specified
// todo(rives): remove when new navigation goes live
// function sis_facourses(c) {
// 	document.forms.facourses.type.value = c;
// 	document.forms.facourses.submit();
// }

// go to cd-stulist.cfm with a certain type specified
// todo(rives): remove when new navigation goes live
// function sis_cdstulist(c) {
// 	document.forms.cdstulist.type.value = c;
// 	document.forms.cdstulist.submit();
// }

//
function sis_utilemail(f, ppnum) {
	var i = f.theaction.selectedIndex;
	if (f.theaction[i].value.substring(0,13) == 'UTILEMAILLIST') {
		document.forms.utilemail.rcptlist.value = ppnum;
		document.forms.utilemail.submit();
		return false;
	}
	return true;
}

//
function sis_setaddc(clbid, courseno, coursename, credits, varcredits, pn) {
	document.forms.addcourse.clbid.value = clbid;

	document.forms.addcourse.credits.value = credits;

	if (pn == 'Y') {
		document.forms.addcourse.gradeoption.value = "P";
	} else {
		document.forms.addcourse.gradeoption.value = "G";
	}

	document.forms.addcourse.searchresults.value = encode64(document.getElementById('results').innerHTML);

	document.forms.addcourse.submit();
}
