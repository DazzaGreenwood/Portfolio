var back_image = "/img/ababackground.gif";  // background image for site (color behind left navbar...)
var top_px = "75"; //number of pixels from top of window left nav begins
var left_px = "5"; //number of pixels from left side of window left nav begins
var mouse_over_color = "#cccc66"; //Color for left nav links to turn during mouseover (text or hex)


// For the following section, leave blank if you do not know
var entity_name = "Section of Science & Technology Law"; // Name of entity
var entity_street = "321 N. Clark St."; // Entity address
var entity_street2 =""; // Entity address 2nd line
var entity_city = "Chicago"; // Entity city
var entity_state = "IL"; // Entity state
var entity_zip = "60610"; // Entity zip code
var entity_phone = "(312) 988-5599"; // Entity phone number
var entity_fax = ""; // Entity fax number
var entity_email = "sciencetech@abanet.org"; // entity email address



//  Don't touch these 2 lines
var menublock=new Array() // no need to change this
var plus_i=0 // no need to change this

// No Submenus
menublock[0]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Section Home|http://www.abanet.org/scitech|;"   // text and URL of mainlink
			 
menublock[1]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Membership|https://meetings.abanet.org/osm/sections/osm_sect_edit.cfm?host=www.abanet.org&url=/scitech/home.html&role=st|;"   // text and URL of mainlink			 

menublock[2]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Calendar|/scitech/scimeet.html|;"   // text and URL of mainlink			 

menublock[3]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Committees|/scitech/scitechlist.html|;"   // text and URL of mainlink		


menublock[4]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Publications|http://www.abanet.org/abastore/index.cfm?type=b&x=16&p=1&section=main&k=&y=8&fm=Product.Search&fid=2&cid=&eid=ST&sort=d|new;"   // text and URL of mainlink


menublock[5]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Sites of Interest|/scitech/scilinks.html|;"   // text and URL of mainlink

menublock[6]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "National Conference of Lawyers and Scientists (NCLS)|/scitech/sci_ncls_aaas.html|;"   // text and URL of mainlink

menublock[7]="Arial,Helvetica,sans-serif;"+ 			// font mainlink
			 "2;"+				// fontsize mainlink
			 "FFFFFF;"+			// fontcolor mainlink
             "1;"+				// fontweight mainlink, 1 means bold, 0 means normal
             ";;;;"+ 		    // leave it empty
			 "Contact Us|/scitech/contact.html|;"   // text and URL of mainlink


// No need to change anything below	 
//  **********************************************************************************
	 
	 
var menusplit
var urlsplit
var font_weight_main
var font_weight_sub
var font_weight_sub

var minusimg=new Image()
minusimg.src="/img/minus131.gif"

var plusimg=new Image()
plusimg.src="/img/plus131.gif"
			 
var showsubmenus=new Array()
for (i=0;i<=menublock.length-1;i++) {
	showsubmenus[i]=-1
}

var plusminusimg=new Array()
for (i=0;i<=menublock.length-1;i++) {
	plusminusimg[i]=plusimg.src
}

function openandclose(visi) {
	showsubmenus[visi]=(-1)*showsubmenus[visi]
    var menucontent=""
    if (showsubmenus[visi]==1) {plusminusimg[visi]=minusimg.src}
    if (showsubmenus[visi]==-1) {plusminusimg[visi]=plusimg.src}
    menucontent+="<table width=138>"
	for (i=0;i<=menublock.length-1;i++) {
		menusplit=menublock[i].split(";")
		urlsplit=menusplit[8].split("|")
		if (menusplit[3]==1) {font_weight_main="<b>"}
		if (menusplit[3]==0) {font_weight_main=""}
		if (menusplit[7]==1) {font_weight_sub="<b>"}
		if (menusplit[7]==0) {font_weight_sub=""} 
		menucontent+="<tr><td valign=top>"

        
       if (menusplit[9].length==0) {
            menucontent+="&nbsp;</td>"
            menucontent+="<td>"
            menucontent+=font_weight_main
            menucontent+="<a style='text-decoration:none' href="+urlsplit[1]+" target="+urlsplit[2]+">"
            menucontent+="<font onMouseOver=\"this.style.color = '" + mouse_over_color + "'\" onMouseOut=\"this.style.color = 'white'\" face="+menusplit[0]+" color="+menusplit[2]+" size="+menusplit[1]+">"
            menucontent+=urlsplit[0]
            menucontent+="</font></a></td></tr>"
            plus_i++ 
        }
        
        if (menusplit[9].length!=0) {
            var thismainmenu=i+plus_i
            menucontent+="<a style='text-decoration:none' href='javascript:openandclose("+i+")'>"
            menucontent+="<img src='"+plusminusimg[i]+"' border=0></a></td>"
            menucontent+="<td>"
            menucontent+=font_weight_main
            menucontent+="<a style='text-decoration:none' href='javascript:openandclose("+i+")'>"
            menucontent+="<font onMouseOver=\"this.style.color = '" + mouse_over_color + "'\" onMouseOut=\"this.style.color = 'white'\" face="+menusplit[0]+" color="+menusplit[2]+" size="+menusplit[1]+">"
            menucontent+=urlsplit[0]
            menucontent+="</font></a></td></tr>"
   
		    if (showsubmenus[i]==1) {
			    for (ii=9;ii<=menusplit.length-1;ii++) {
				    urlsplit=menusplit[ii].split("|")
                    menucontent+="<tr><td></td><td>"
    			    menucontent+=font_weight_sub
                    menucontent+="<a style='text-decoration:none' href="+urlsplit[1]+" target="+urlsplit[2]+">"
                    menucontent+="<font onMouseOver=\"this.style.color = '" + mouse_over_color + "'\" onMouseOut=\"this.style.color = 'white'\" face="+menusplit[4]+" color="+menusplit[6]+" size="+menusplit[5]+">"
                    menucontent+=urlsplit[0]
                    menucontent+="</font></a></td></tr>"
			    }
		    }
        }    
	}
    menucontent+="</table>"
	if (document.all) {
		menu2.innerHTML='<z>' + menucontent + '</z>'  
	}
	if (document.layers) {
		document.menu2.document.open()
		document.menu2.document.write(menucontent)
		document.menu2.document.close()
	}
	
	var isNS6 = (navigator.userAgent.indexOf("Gecko")    > 0) ? 1 : 0;
	
	if (isNS6)
	document.getElementById("menu2").innerHTML = menucontent;

 
	
}
