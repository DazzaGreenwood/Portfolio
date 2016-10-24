
function body_tag(MenuCust) {

//Check for passed parameters
if ((MenuCust == "1") || (MenuCust == "3")) {NavWidth = "100%"} else {NavWidth = "768"}
if ((MenuCust == "2") || (MenuCust == "3")) {LeftNavWidth = "0"} else {LeftNavWidth = "155"}

//====================================================
//Test if URL have HTTPS ?

var secureUrl = "http";
var loc = location.href.toString();
var index = loc.indexOf(":");
var prot = loc.substring(0,index);
var url = loc.substring(index,loc.length);
if (prot == "https") { 
secureUrl = "https";
}

//====================================================
//function clearDefault() {document.LoginForm.userid.value= ""} 
var off = false;
var previous_entry = "";
var mname = "";
var customid = "";
var memname = " ";
var logmasage ="";
var wel = "";
var fname = "";
var firstname = "";
var result = "";
 //=========================================     
	  var pattern = /(.+)(FNAME=)(\w*)/;
      var result=document.cookie.match(pattern);
	  if(document.cookie.match(pattern) !=null){
		   firstname = result[3];
	  }

 //=============================================

//if (document.cookie != "") {
	//memname = readCookie('name');
	//alert('Here is javascript cookie:'+memname);
	
if(firstname == ""){
	wel= "";
	fname = "";
	logmasage = "<a href=\"https://www.abanet.org/abanet/common/MyABA/home.cfm\" style=\"color: white\">Member Login</a>"
}else {
	
	wel = "<font style='font-size: 12px'>Welcome, "+firstname+"</font>";
	logmasage = "<font size='1'>"+wel+"<br><a href=\"http://meetings.abanet.org/aba_timssnet/demographics/aba_addressupdate.cfm\" style=\"color: white\">Member Profile</a><br><a href=\"http://www.abanet.org/abanet/common/MyABA/home.cfm\" style=\"color: white\">MyABA</a><br><a href= "+location.href+" onClick=\"window.open('http://www.abanet.org/abanet/common/MyABA/templates/add.cfm?url="+location.href+"&title="+document.title+"','popup' ,'width=400,height=120,buttons=no,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=300,top=300'); return false\" style=\"color: white\">Add Bookmark</a><br><a href=\"http://www.abanet.org/abanet/common/MyABA/home.cfm?logout=yes\" style=\"color: white\">Log Out</a></font>"
}
//}

//if (document.cookie != "") {
	function readCookie(name)
	{
		 var nameEQ = name + "=";
		 var ca = document.cookie.split(';');
		 for(var i=0;i < ca.length;i++)
	{
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0)
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	  
	}
return null;
}



  // mname = document.cookie.split("; ")[0]
  // customid = document.cookie.split("; ")[1]
//}

function mySuspend() {
    // Only save entry the first time they turn it off
    if (off == false) {
       previous_entry = document.searchform.searchArea.selectedIndex;
       off = true;
    }
    // since it is suspended, force the entry to Not Available
    // assume the "Not Available" option is the last choice in the list.
    document.searchform.searchArea.selectedIndex = document.searchform.searchArea.length-1;
}

function myResume() {
    // Only restore the saved entry when they first call this function
    if (off) {
       document.searchform.searchArea.selectedIndex = previous_entry;
       off = false;
    }
}

//Calculate filename and path for query string
//for printview function

var dir = location.href.substring(0,location.href.lastIndexOf('/')+1);
var url = location.href.substring(dir.length,location.href.length+1);
var jsp = /\.jsp/i;
var servlet = /servlet/i;
var result = url.match(jsp);
var result2 = dir.match(servlet);



// This is used for the bookmark functionality
var name = escape(document.title);
if ( (document.title == null) || (document.title == "") ) {
	name = "American Bar Assocation";
}

document.write("</HEAD>");

if ((MenuCust != "2") && (MenuCust != "3")) {
	document.write("<BODY BACKGROUND='" + back_image + "' topmargin='0' leftmargin='0' marginheight='0' marginwidth='0'  ONLOAD='openandclose(1000)'>");
	} else {
	document.write("<BODY topmargin='0' leftmargin='0' marginheight='0' marginwidth='0' >");
	}
	
	
function doCheck()
{
 if ( (customid == null) || (customid == "") ) {
	alert("Please, Login First");
}
}
//popup window for the bookmark 
function popitup(url)
{
	newwindow=window.open(url,'name','height=200,width=150');
	//if (window.focus) {newwindow.focus()}
	return false;
}


// the end popup window for the bookmark 



//Start Top Nav

//Accessible Invisible Jump Link and ABA Logo


document.write("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\" " + NavWidth + " \"><tr><td rowspan=\"2\" width=\"100\" align=\"center\" nowrap bgcolor=\"#FFFFFF\"><a href=\"#safetop\"><img src=\""+secureUrl+"://www.abanet.org/img/spacer1pixel.gif\" border=\"0\" alt=\"Jump to Content\" width=\"1\" height=\"1\"></a><a href=\"http://www.abanet.org/\"><img src=\""+secureUrl+"://www.abanet.org/img/aba_logo_blue.gif\" alt=\"American Bar Association:  Defending Liberty, Pursuing Justice\" height=\"45\" width=\"70\" border=\"0\"></a></td>");

//ABA Title Words

document.write("<td valign=\"bottom\" align=\"center\" bgcolor=\"#FFFFFF\"><a href=\"http://www.abanet.org\"><img src=\""+secureUrl+"://www.abanet.org/img/aba_words.jpg\" alt=\"Welcome to the American Bar Association\" height=\"43\" width=\"506\" border=\"0\"></a></td><td bgcolor=\"#FFFFFF\" rowspan=\"2\"><img src=\""+secureUrl+"://www.abanet.org/img/scoop.gif\" width=\"25\" height=\"68\" alt=\"Graphic Spacer\" align=\"right\" border=\"0\" hspace=\"0\" vspace=\"0\"></td>");
//Login Box


document.write("<td valign=\"center\" class=\"abanavfxnbox\" rowspan=\"2\"><font color='white' style='font-weight:bold'><img src=\""+secureUrl+"://www.abanet.org/img/spacer1pixel.gif\" height=\"65\" width=\"5\" alt=\"Graphic Spacer\" align=\"left\">" +logmasage +"</td></tr>");



//alert(mname);
//alert(customid);
//alert(document.cookie);

//Top Navigation Links
document.write("<tr><td align=\"center\" bgcolor=\"#FFFFFF\" nowrap><a class=\"abanavnavtab\" href=\"http://www.abanet.org\">Home</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/join/\">JOIN</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/cle/home.html\">CLE</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/lawyer.html\">Lawyers</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/students.html\">Education</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/public.html\">Public</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/abastore/index.cfm?section=Main&fm=static&url=http://www.abanet.org/abastore/front_end/static/home_page.html&r=1\">Store</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/mtd/\">Events</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/about/home.html\">About</a> | <a class=\"abanavnavtab\" href=\"http://www.abanet.org/email.html\">Contact</a></td></tr>");

//Dividing Line
document.write("<tr><td colspan=\"4\" bgcolor=\"#000099\"><img src=\""+secureUrl+"://www.abanet.org/img/spacer1pixel.gif\" width=\"1\" height=\"3\" alt=\"line\"></td></tr></table>");



//Specialty Buttons and Tools, Search, Print, etc.
document.write("<table width=\" " + NavWidth + " \" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><form name=\"gs\" method=\"GET\" action=\"http://search.abanet.org/search\"><tr><td width=\"150\" nowrap></td><td align=\"right\" valign=\"middle\" class=\"abanavsearchbox\"><input type=\"hidden\" name=\"sort\" value=\"date:D:L:d1\" /><input type=\"hidden\" name=\"access\" value=\"a\" /><input type=\"hidden\" name=\"output\" value=\"xml_no_dtd\" /><input type=\"hidden\" name=\"ie\" value=\"UTF-8\" /><input type=\"hidden\" name=\"oe\" value=\"UTF-8\" /><input type=\"hidden\" name=\"client\" value=\"default_frontend\" /><input type=\"hidden\" name=\"proxystylesheet\" value=\"default_frontend\" /><b>Search:</b>&nbsp;<input type=\"text\" name=\"q\" size=\"40\" maxlength=\"256\" value=\"\" style=\"font-size:10px\" /><select name=\"site\" style=\"font-size:10px\"><option value=\"website\">Web Site</option></select><input type=\"submit\" name=\"btnG\" value=\"Go\" align=\"middle\" style=\"font-size:10px\" /></td><td><span style=\"font-size:10px\">&nbsp;<a href=\"http://search.abanet.org/search?access=a&sort=date%3AD%3AL%3Ad1&output=xml_no_dtd&site=default_collection&ie=UTF-8&oe=UTF-8&client=default_frontend&proxystylesheet=default_frontend&ip=10.1.21.51&proxycustom=%3CADVANCED/%3E\">Advanced Search</a> <br />&nbsp;<a href=\"http://www.abanet.org/aztopics.html\">Topics A-Z</a></span> </td>");

document.write("<td align=\"right\" valign=\"top\" nowrap bgcolor=\"#FFFFFF\" class=\"abanavsearchbox\"><a class=\"abanavhanglink\" href=\"http://www.abanet.org/abanet/common/print/printview.cfm?Ref=" + dir + url + "\">&nbsp;&nbsp;&nbsp;Print&nbsp;&nbsp;&nbsp;</a></td></tr></form></table>");

	


//End Top Nav

//Begin ABA Template Layout

//Navwidth determines whether screen goes 100 percent or some pixel restricted size
document.write("<TABLE border=0 WIDTH=" + NavWidth + " cellspacing=0 cellpadding=0>");
document.write("<TR>");

//Accessible Invisible Jump Link Target
document.write("<TD WIDTH=" + LeftNavWidth + " valign=top></form><a name=\"safetop\">&nbsp;</a></TD>");
document.write("<TD align=left>");
}

function doNothing() {} 


function loadfooter() {
document.write("<br><table align='left' width='100%'><tr><td width='" + LeftNavWidth + "'>&nbsp;</td><td align='left'>");
document.write("<a href='http://www.abanet.org/privacy.html'><font size=1 face=arial>ABA Copyright Statement</font></a>&nbsp;&nbsp;<a href='http://www.abanet.org/privacy_statement.html'><font size=1 face=arial>ABA Privacy Statement</font></a></td></table>");
}

function footer_tag(display) {

document.write("<div align='center'><font class=copy>");
if (entity_name == "" && entity_street == "" && entity_street2 == "" && entity_city == "" && entity_state == "" && entity_zip== "" && entity_phone== "" && entity_fax== "" && entity_email== "" || display == 1) {}

else {
document.write("<b>Contact information:</b><br>")
if (entity_name != "") {document.write(entity_name + "<br>")}
if (entity_street != "") {document.write(entity_street)}

if (entity_street2 == "") {document.write("<br>")}
	else {document.write(", " + entity_street2 + "<br>")}

if (entity_city != "") {document.write(entity_city)}
if (entity_state != "") {document.write(", " + entity_state)}
if (entity_zip != "") {document.write(", " + entity_zip + "<br>")}
if (entity_phone != "") {document.write("phone: " + entity_phone + "<br>")}
if (entity_fax != "") {document.write("fax: " + entity_fax + "<br>")}
if (entity_email != "") {document.write("<a href='mailto:" + entity_email + "'>" + entity_email + "</a>")}

if ( typeof( entity_url ) != "undefined" && entity_url != "") {document.write("<a href='" + entity_url + "'>" + entity_url + "</a>")} 


document.write("</font></div>")
}

document.write("<br><br><table align='left' width='100%'><tr><td align='left'>");

document.write("<a href='http://www.abanet.org/privacy.html'><font class='levelone'>ABA Copyright Statement</font></a>&nbsp;&nbsp;<a href='http://www.abanet.org/privacy_statement.html'><font class='levelone'>ABA Privacy Statement</a></font><br><br>");



document.write("</td></table>");
document.write("</TD></TR></TABLE>");



document.write("<DIV ID='menu2' STYLE='position:absolute; top:" + top_px + "px; left:" + left_px + "px; width:147'></DIV>");

}

// Commented out on 5-4-2005
// Begin Cookie Code for ABA Survey -- Remove when survey time has expired
//function getCookie(NameOfCookie) {

// First we check to see if there is a cookie stored.
// Otherwise the length of document.cookie would be zero.

//if (document.cookie.length > 0)
//{

// Second we check to see if the cookie's name is stored in the
// "document.cookie" object for the page.

// Since more than one cookie can be set on a
// single page it is possible that our cookie
// is not present, even though the "document.cookie" object
// is not just an empty text.
// If our cookie name is not present the value -1 is stored
// in the variable called "begin".

//begin = document.cookie.indexOf(NameOfCookie+"=");
//if (begin != -1) // Note: != means "is not equal to"
//{

// Our cookie was set.
// The value stored in the cookie is returned from the function.

//begin += NameOfCookie.length+1;
//end = document.cookie.indexOf(";", begin);
//if (end == -1) end = document.cookie.length;
//return unescape(document.cookie.substring(begin, end)); }
//}
//return null;

// Our cookie was not set.
// The value "null" is returned from the function.

//}

//today = new Date();
//arrivehere = Math.round(today.getTime()/1000);
//showsurvey = getCookie('S1_SHOW_SURVEY');
//arrivaltime = getCookie('S1_ARRIVAL');

//if (showsurvey == "display" && arrivaltime.length != 0) {

//	if ((arrivehere - arrivaltime) > 30) {
//		setTimeout('initStatLyr()', 15000);		
//	} else {
//		setTimeout('initStatLyr()', 30000);
//	}

//}
// End Cookie Code for ABA Survey -- Remove when survey time has expired