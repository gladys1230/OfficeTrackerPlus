 

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
 
function MM_findObj(n, d) { //v3.0
 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
 
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
 
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
 
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
 
}
 
function MM_validateForm() { //v3.0
 
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
 
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
 
    if (val) { nm=val.name; if ((val=val.value)!="") {
  
    if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
 
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
 
      } else if (test!='R') { num = parseFloat(val);
 
        if (val!=''+num) errors+='- '+nm+' must contain a number.\n';
 
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
 
          min=test.substring(8,p); max=test.substring(p+1);
 
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';

    
    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
 

  }
 
 if (document.getElementById('PO').checked==false)
                {
                        if (document.getElementById('CardType').value=='') errors+='- Must Select Card Type.\n' ;
                        if (document.getElementById('card#').value=='') errors+='- Card # must contain a valid Credit Card Number.\n';
                        if (document.getElementById('cardfirstname').value=='') errors+='- Cardholder must contain a First Name.\n';
      if (document.getElementById('cardlastname').value=='') errors+='- Cardholder must contain a Last Name.\n';

                }
                else if(document.getElementById('PO').checked==true && document.getElementById('PO#').value=='') errors+='- PO# must contain a Purchase Order number.\n' ;

 
  if (errors){ 

  
  alert('The following error(s) occurred:\n'+errors);
 }
  document.MM_returnValue = (errors == '');
 
}

var currentInfo=null
function HideShowInfo(layer,whichAddon,operation){
if (whichAddon=='blackberry')
{
  document.getElementById(layer+'Text').innerHTML='The Blackberry Sync allows users to tansfer schedule information to/from Office Tracker from their Blackberry device. The license cost is based on the total user license you are purchasing.'
}
if (whichAddon=='webviewer')
{
  document.getElementById(layer+'Text').innerHTML='Web Viewer allows you to "host" a public calendar on your web site displaying events you have posted to public calendars. Users can e-mail schedule requests to your scheduling department.'
}
if (whichAddon=='selfscheduling')
{
  document.getElementById(layer+'Text').innerHTML='Self-Service Web Scheduling allows you to put an area on your own web site where your customers or others can find available event times and schedule themselves. Users create accounts in your Office Tracker system via an automated e-mail verification.'
}
//document.getElementById(layer).innerHTML=document.getElementById(layer).innerHTML+' <div align="right" style="vertical-align:bottom; position:absolute; color:#FF0000 " onClick="HideShowInfo("AddOnInfo",null,"close")">x <span style="text-decoration:underline ">close</span></div>'

if (operation){
  document.getElementById(layer).style.visibility='hidden'
  }
else if (document.getElementById(layer).style.visibility=='hidden')
  {
    document.getElementById(layer).style.visibility="visible"
  }
else if (whichAddon==currentInfo)
  {
    document.getElementById(layer).style.visibility="hidden"
  }
currentInfo=whichAddon
} 
 
function HideShow(layer){
if (whichForm=='support')
{
    if (layer=='order')
    {
      document.getElementById('numberuserstotal').style.visibility='hidden'
      document.getElementById('supportonly').style.visibility='hidden'
      document.getElementById('shippingpayment').style.visibility='visible'
      window.scroll(0,0)
      document.getElementById('first_name').focus()
    }
    else
    {
      document.getElementById('NumberOfUsers').value=parseInt(document.getElementById('NumberOfUsers').value)
      document.getElementById('AddUsers').value=parseInt(document.getElementById('AddUsers').value)
      document.getElementById('numberuserstotal').style.visibility='visible'
      document.getElementById('supportonly').style.visibility='visible'
      document.getElementById('shippingpayment').style.visibility='hidden'
      window.scroll(0,0)
    }
}
else
{
  if (layer=='order')
  {
    if (document.getElementById('NumberOfUsers').value > 0)
    {
      document.getElementById('numberuserstotal').style.visibility='hidden'
      document.getElementById('shippingpayment').style.visibility='visible'
      window.scroll(0,0)
      document.getElementById('first_name').focus()
                        if (whichForm!='support')
                        {
                           document.getElementById('Choose_Upgrade').style.visibility='visible'
                        }
    }
    else
    {
    //  alert("Please Select Number of Users.")
      document.getElementById('NumberOfUsers').focus()
      return 
    }
  }
  else
  {
    document.getElementById('NumberOfUsers').value=parseInt(document.getElementById('NumberOfUsers').value)
    document.getElementById('AddUsers').value=parseInt(document.getElementById('AddUsers').value)
    document.getElementById('numberuserstotal').style.visibility='visible'
    document.getElementById('shippingpayment').style.visibility='hidden'
    window.scroll(0,0)
                document.getElementById('Choose_Upgrade').style.visibility='hidden' 
  }
}
}
//
var total=""
//
var StandardPercent=1.20
//
var Server=395*StandardPercent
var License=105*StandardPercent
var License35=80*StandardPercent
var ViewOnly=License*.36
var HostedViewOnly=License*.40
// License normally 30, Base 100
 
 
var WebClientLicense=0*StandardPercent
var BaseWebClient=0*StandardPercent
// License normall 40, Base 120
var ContactsLicense=0*StandardPercent
var BaseContacts=0*StandardPercent
//
var OTPalmLicense=0*StandardPercent
var BasePalm=0*StandardPercent
//
var BBSyncLicense=30*StandardPercent
var BaseBBSync=100*StandardPercent
//
var SSWLicense=40*StandardPercent
var BaseSSW=120*StandardPercent
//
var WVLicense=0*StandardPercent
var BaseWV=495*StandardPercent
//
var AnnualPercent=49-((2-StandardPercent)*10)
var YearLicense1=60
var YearLicense2=55
var YearLicense3=53
var VersionLicense=79
var HostedPercent=80
var BaseHosted=62 
var HostedSetup=99
//below baseDiscount is the discount for bundle of contacts and web client
var baseDiscount=0
//below multiAddonDiscount isn't currently being used (as of August 11, 2008) it may mess up the math?
var multiAddonDiscount=0  
///Specials currently this form doesn't allow Support only orders so I discounted support for the 'with product' $100 discount
var Support1Yr=795
var Support6Months=695
var Support90Days=495
var SupportPerIncident=125
var EduPercent=.90
var UpgPercent=.80
var AddPercent=1.25
var sizeForSpecial=200
//above only impacts the itemForSpecial
var itemForSpecial='bbsync,ssw' 
 //free add ons is the itemForSpecial such as bbsync,ssw, etc.
var whichForm=location.search.substr(1)
if (whichForm=='support')
{
var Support1Yr=Support1Yr+100
}
if (whichForm=='edu')
{
var Server=Server*EduPercent
var License=License*EduPercent
var License35=License35*EduPercent
var ViewOnly=ViewOnly*EduPercent
var AddUserLicense=License*AddPercent
var WebClientLicense=WebClientLicense*EduPercent
var BaseWebClient=BaseWebClient*EduPercent
var ContactsLicense=ContactsLicense*EduPercent
var BaseContacts=BaseContacts*EduPercent
var OTPalmLicense=OTPalmLicense*EduPercent
var BasePalm=BasePalm*EduPercent
var WVLicense=WVLicense*EduPercent
var BaseWV=BaseWV*EduPercent
var BBSyncLicense=BBSyncLicense*EduPercent
var BaseBBSync=BaseBBSync*EduPercent
var SSWLicense=SSWLicense*EduPercent
var BaseSSW=BaseSSW*EduPercent
}
if (whichForm=='upgrade')
{
var Server=Server*UpgPercent
var AddUserLicense=License*AddPercent
var License=License*UpgPercent
var License35=License35*UpgPercent
var ViewOnly=ViewOnly*UpgPercent
var sizeForSpecial=200
//not giving discounts to add ons for upgrade in this form right now.
//var WebClientLicense=WebClientLicense*UpgPercent
//var ContactsLicense=ContactsLicense*UpgPercent
//var OTPalmLicense=OTPalmLicense*UpgPercent
//var WVLicense=WVLicense*UpgPercent
}
 
function resetForm(){
document.getElementById('WebViewerTotal').innerHTML='&nbsp;'
document.getElementById('BundleDiscount').innerHTML='&nbsp;'
document.getElementById('AddOnsPerUser').innerHTML='&nbsp;'
document.getElementById('SubTotal').innerHTML="Sub-Total: $0.00"
document.getElementById('PricePerUser').innerHTML="Price/user: $0.00"
document.getElementById('SupportTotal').innerHTML="Support: $0.00"
document.getElementById('Tax').innerHTML='&nbsp;'
document.getElementById('TotalOrder').innerHTML="Total: $0.00"
document.getElementById('TotalOrder2').innerHTML="Your Office Tracker Total: $0.00  <a href=\"javascript:HideShow('userinfo')\">Edit</a>"
 
}
 
var adds=new Array('WebClient','Contacts','WebViewer','OTPalm','BBSync','SSW')
function UpdateForm(){

document.getElementById('realname').value=document.getElementById('first_name').value+" "+document.getElementById('last_name').value
document.getElementById('cardholder').value=document.getElementById('cardfirstname').value+" "+document.getElementById('cardlastname').value

 
//document.getElementById('Standard').disabled=false
//document.getElementById('StandardOption').disabled=false
//document.getElementById('Hosted').disabled=false
//document.getElementById('HostedOption').disabled=false
//if (document.getElementById('Standard').checked==true)
//{
//  document.getElementById('Hosted').disabled=true
//  document.getElementById('HostedOption').disabled=true
//}
//if (document.getElementById('Hosted').checked==true)
//{
//  document.getElementById('Standard').disabled=true
//  document.getElementById('StandardOption').disabled=true
 
//}
  selectedOptions=0
  var Annual=1
  var Hosted=1
  var AddHosted=0
  var Multi=1
  if (document.getElementById('license').value=="1year")
  {
    Annual=YearLicense1/100
  }
  else if (document.getElementById('license').value=="2year")
  {
    Annual=YearLicense2/100
    Multi=2
  }
  else if (document.getElementById('license').value=="3year")
  {
    Annual=YearLicense3/100
    Multi=3
  }
  else if (document.getElementById('license').value=="version")
  {
    Annual=VersionLicense/100
    Multi=3
  }
  else if (document.getElementById('license').value=="monthly")
  {
    Hosted=(HostedPercent/100)/12
    if (whichForm=="upgrade")
    {
      Hosted=Hosted/UpgPercent
    }   
    AddHosted=BaseHosted
  }
 
  for (i=0;i<adds.length;i++)
  {
    document.getElementById(adds[i]).disabled=false
  }
  if (parseInt(document.getElementById('NumberOfUsers').value) > 0 && parseInt(document.getElementById('NumberOfUsers').value) <= 100)
  {
    if (parseInt(document.getElementById('NumberOfUsers').value) < 36)
    {
    users=(Number(Annual)*Number(Hosted)*Number(Multi)*(Number(Server)+Number(parseInt(document.getElementById('NumberOfUsers').value)*License)))+Number(AddHosted)
    }
    else
    {
    users=((Number(Annual)*Number(Hosted)*Number(Multi)*Number((parseInt(document.getElementById('NumberOfUsers').value)-35)*License35)))+((Number(Annual)*Number(Hosted)*Number(Multi)*(Number(Server)+Number(parseInt(35)*License)))+Number(AddHosted))
    } 
      if (document.getElementById('numberuserstotal').style.visibility=='hidden')
                document.getElementById('NumberOfUsers').value=document.getElementById('NumberOfUsers').value
//    document.getElementById('NumberOfUsers').value=document.getElementById('NumberOfUsers').value+" Users @: $"+users
  }
  else if (parseInt(document.getElementById('NumberOfUsers').value) > 100)
  {
    resetForm()
    alert("Please Contact Milum Corporation for a Custom Quote on Larger Sizes\n                    Toll-free:(800) 257-2120")
    return 
  }
  else if (whichForm=='support')
  {
    users=0
  }
  else 
  {
    resetForm()
    alert("Please Select Number of Users.")
    document.getElementById('NumberOfUsers').focus()
    return 
  }
  var addUsers=0
  if (parseInt(document.getElementById('AddUsers').value) > 0)
  {
    addUsers=Number(Annual)*Number(Hosted)*Number(Multi)*(Number(parseInt(document.getElementById('AddUsers').value)*AddUserLicense))
    if (document.getElementById('numberuserstotal').style.visibility=='hidden')
    {
  //    document.getElementById('AddUsers').value=document.getElementById('AddUsers').value+"Additional Users @: $"+addUsers
    }
    var AddUsers=NumToCurrency(addUsers)
    document.getElementById('AddUsersTotal').innerHTML='Additional Licenses: $'+AddUsers
  }
  else

  {
    document.getElementById('AddUsersTotal').innerHTML='&nbsp;'
  }
  var viewUsers=0
  if (parseInt(document.getElementById('NumberOfViewOnly').value) > 0 && parseInt(document.getElementById('NumberOfViewOnly').value) <= 200 )
  {
    if (document.getElementById('license').value=="monthly")
    {
    ViewOnly=HostedViewOnly
    }
      viewUsers=Number(Annual)*Number(Hosted)*Number(Multi)*(Number(parseInt(document.getElementById('NumberOfViewOnly').value)*ViewOnly))
    if (document.getElementById('numberuserstotal').style.visibility=='hidden')
    {
      //document.getElementById('NumberOfViewOnly').value=document.getElementById('NumberOfViewOnly').value+"View Only Users @: $"+viewUsers
    }
    var ViewUsers=NumToCurrency(viewUsers)
    document.getElementById('ViewOnlyTotal').innerHTML='View Only Users: $'+ViewUsers
  }
 else if (parseInt(document.getElementById('NumberOfViewOnly').value) > 200)
        {
                resetForm()
                alert("Please Contact Milum Corporation for a Custom Quote on Larger Sizes\n                      Toll-free:(800) 257-2120")
                return
        }

  else
  {
    document.getElementById('ViewOnlyTotal').innerHTML='&nbsp;'
  }
  if (document.getElementById('WebClient').checked==true)
  {
    webclient=Number(Annual)*Number(Hosted)*Number(Multi)*(BaseWebClient+WebClientLicense*parseInt(document.getElementById('NumberOfUsers').value))
//    document.getElementById('WebClient').value='Add WebClient @: $'+webclient
    selectedOptions=selectedOptions+1
  }
  else
  {
    webclient=0
  }
  if (document.getElementById('Contacts').checked==true)
  {
    contacts=Number(Annual)*Number(Hosted)*Number(Multi)*(BaseContacts+ContactsLicense*parseInt(document.getElementById('NumberOfUsers').value))
//    document.getElementById('Contacts').value='Add Contacts @: $'+contacts
    selectedOptions=selectedOptions+1
  }
  else
  {
    contacts=0
  }
  if (document.getElementById('OTPalm').checked==true)
  {
    otpalm=Number(Annual)*Number(Hosted)*Number(Multi)*(BasePalm+OTPalmLicense*parseInt(document.getElementById('NumberOfUsers').value))
//    document.getElementById('OTPalm').value='Add OTPalm @: $'+otpalm
    //selectedOptions=selectedOptions+1
  }
  else
  {
    otpalm=0
  }
  if (document.getElementById('BBSync').checked==true)
  {
    bbsync=Number(Annual)*Number(Hosted)*Number(Multi)*(BaseBBSync+BBSyncLicense*parseInt(document.getElementById('NumberOfUsers').value))
//    document.getElementById('BBSync').value='Add BBSync @: $'+bbsync
    //not using this in the bundle discount -- selectedOptions=selectedOptions+1
  }
  else
  {
    bbsync=0
  }
  if (document.getElementById('SSW').checked==true)
  {
    ssw=Number(Annual)*Number(Hosted)*Number(Multi)*(BaseSSW+SSWLicense*parseInt(document.getElementById('NumberOfUsers').value))
//    document.getElementById('SSW').value='Yes Add SSW @: $'+ssw
    //not using this in the bundle discount -- selectedOptions=selectedOptions+1
  }
  else
  {
    ssw=0
  }
  
  if (document.getElementById('WebViewer').checked==true)
  {
    webviewer=Number(Annual)*Number(Hosted)*Number(Multi)*(BaseWV+WVLicense*parseInt(document.getElementById('NumberOfUsers').value))
    var WebViewerTotal=NumToCurrency(webviewer)
//    document.getElementById('WebViewer').value='Yes Add WebViewer @: $'+webviewer
    //document.getElementById('WebViewerTotal').innerHTML='Web Viewer: $'+WebViewerTotal
    //selectedOptions=selectedOptions+1
  }
  else
  {
    document.getElementById('WebViewerTotal').innerHTML='&nbsp;'
    webviewer=0
  }
  addOns=Number(webclient)+Number(contacts)+Number(otpalm)+Number(webviewer)+Number(bbsync)+Number(ssw)
  if (selectedOptions > 1)
  {
    //var discount=Number(selectedOptions)*(Number(multiAddonDiscount)*Number(selectedOptions-1))*Number(parseInt(document.getElementById('NumberOfUsers').value))
    var discount=(Number(addOns)-Number(otpalm)-Number(webviewer))*((Number(baseDiscount)/100)+(Number(selectedOptions-2)*Number(multiAddonDiscount)/100))
    var BundleDiscount=NumToCurrency(discount)
    //document.getElementById('BundleDiscount').innerHTML='Bundle Savings: - $'+BundleDiscount
    if (discount >0)
    {
      document.getElementById('BundleDiscount').innerHTML='Bundle Savings: - $'+BundleDiscount
    }
    else
    {
      document.getElementById('BundleDiscount').innerHTML='&nbsp;'
    } 
  }
  else
  {
    var discount=0
    document.getElementById('BundleDiscount').innerHTML='&nbsp;'
  }
  var newDiscount=false
  if (parseInt(document.getElementById('NumberOfUsers').value) >= sizeForSpecial)
  {
    var newDiscount=false
    var itemsForSpecial=itemForSpecial.split(',')
    if (itemsForSpecial.length > 1)
    {
      var itemsSelected=''
      var includedItem=''
      for (i=0;i<itemsForSpecial.length; i++)
      {
        for (z=0;z<adds.length; z++)
        {
          if (itemsForSpecial[i] == adds[z].toLowerCase())
          {
            if (document.getElementById(adds[z]).checked==true)
            {
              itemsSelected=itemsSelected+adds[z]+','
            }
          }
        }
      }
      var whichItems=itemsSelected.split(',')
      if (itemsSelected == '')
        {
        newDiscount=false
        itemOptions=''
        for (i=0;i<itemsForSpecial.length; i++)
        {
          for (z=0;z<adds.length; z++)
          {
            if (itemsForSpecial[i] == adds[z].toLowerCase())
            {
            if (adds[z].toLowerCase()=="bbsync")
            {
              itemOptions=itemOptions+'Blackberry Sync'+' or '
            
            }
            else if (adds[z].toLowerCase()=="ssw")
            {
              itemOptions=itemOptions+'Self Service Web Scheduling'+' or '
            }
            else
            {
              itemOptions=itemOptions+adds[z]+' or '
            }
            }
          }
        }
        newDiscount=true
        includedItem=itemOptions.slice(0, itemOptions.length-4)
        }
      else if (whichItems.length -1 > 1)
      {
        var includedItem=''
        var newDiscount=false
        var itemToDiscount=''
        var amountToDiscount=''
        for (i=0;i<whichItems.length -1;i++)
        {
          if (whichItems[i].toLowerCase() == 'webviewer')
          {
            if(webviewer>amountToDiscount)
            {
              amountToDiscount=webviewer
              itemToDiscount=whichItems[i]
            }
          }
          if (whichItems[i].toLowerCase() == 'bbsync')
          {
            if(bbsync>amountToDiscount)
            {
              amountToDiscount=bbsync
              //itemToDiscount=whichItems[i]
              itemToDiscount="Blackberry Sync"
            }
          }
          if (whichItems[i].toLowerCase() == 'ssw')
          {
            if(ssw>amountToDiscount)
            {
              amountToDiscount=ssw
              //itemToDiscount=whichItems[i]
              itemToDiscount="Self Service Web Scheduling"
            }
          }
          if (whichItems[i].toLowerCase() == 'otpalm')
          {
            if(otpalm>amountToDiscount)
            {
              amountToDiscount=otpalm
              itemToDiscount=whichItems[i]
            }
          }
          if (whichItems[i].toLowerCase() == 'contacts')
          {
            if(contacts>amountToDiscount)
            {
              amountToDiscount=contacts
              itemToDiscount=whichItems[i]
            }
          }
          if (whichItems[i].toLowerCase() == 'webclient')
          {
            if(webclient>amountToDiscount)
            {
              amountToDiscount=webclient
              itemToDiscount=whichItems[i]
            }
          }
          
        }
          newDiscount=true
          addOns=addOns-amountToDiscount
          discount=discount+amountToDiscount
          includedItem=itemToDiscount
      }
      else
      {
//        document.getElementById(whichItems[0]).value='Add '+adds[i]+' @: $0.00 - Special'
        if (whichItems[0].toLowerCase() == 'webviewer')
        {
          discount=discount+webviewer
          addOns=addOns-webviewer
          includedItem=whichItems[0]
        }
        if (whichItems[0].toLowerCase() == 'otpalm')
        {
          discount=discount+otpalm
          addOns=addOns-otpalm
          includedItem=whichItems[0]
        }
        if (whichItems[0].toLowerCase() == 'bbsync')
        {
          discount=discount+bbsync
          addOns=addOns-bbsync
          includedItem="Blackberry Sync"
        }
        if (whichItems[0].toLowerCase() == 'ssw')
        {
          discount=discount+ssw
          addOns=addOns-ssw
          includedItem="Self Service Web Scheduling"
        }
        
        if (whichItems[0].toLowerCase() == 'contacts')
        {
          discount=discount+contacts
          addOns=addOns-contacts
          includedItem=whichItems[0]
        }
        if (whichItems[0].toLowerCase() == 'webclient')
        {
          discount=discount+webclient
          addOns=addOns-webclient
          includedItem=whichItems[0]
        }
        newDiscount=true


        
      }
    }
    else
    {
      var newDiscount=false
      var includedItem=''
      for (i=0;i <adds.length; i++)
      {
        if (itemForSpecial == adds[i].toLowerCase())
        {
          document.getElementById(adds[i]).checked=true
          document.getElementById(adds[i]).disabled=true
//          document.getElementById(adds[i]).value='Add '+adds[i]+' @: $0.00 - Special'
          if (itemForSpecial == 'webviewer')
          {
            discount=discount+webviewer
            addOns=addOns-webviewer
            includedItem=adds[i]
          }
          if (itemForSpecial == 'otpalm')
          {
            discount=discount+otpalm
            addOns=addOns-otpalm
            includedItem=adds[i]
          }
          if (itemForSpecial == 'bbsync')
          {
            discount=discount+bbsync
            addOns=addOns-bbsync
            includedItem="Blackberry Sync"
          }
          if (itemForSpecial == 'ssw')
          {
            discount=discount+ssw
            addOns=addOns-ssw
            includedItem="Self Service Web Scheduling"
          }
          
          if (itemForSpecial == 'contacts')
          {
            discount=discount+contacts
            addOns=addOns-contacts
            includedItem=adds[i]
          }
          if (itemForSpecial == 'webclient')
          {
            discount=discount+webclient
            addOns=addOns-webclient
            includedItem=adds[i]
          }
          newDiscount=true
          
        }
      }
      if (itemForSpecial == 'all')
      {
        for (i=0;i <adds.length; i++)
        {
          document.getElementById(adds[i]).checked=true
          document.getElementById(adds[i]).disabled=true
//          document.getElementById(adds[i]).value='Add '+adds[i]+' @: $0.00 - Special'
        }
        discount=discount+webviewer+webclient+contacts+otpalm+bbsync+ssw
        addOns=addOns-webviewer-webclient-contacts-otpalm-bbsync-ssw
        newDiscount=true
        includedItem="WebViewer, Blackberry Sync, and Self Service Web Scheduling Module"
          
      }
    }
  }
  if (newDiscount==true)
  {
    document.getElementById('SpecialDiscount').innerHTML=sizeForSpecial+'+ Users Includes Free: '+includedItem+' Add-on'
    if (sizeForSpecial < 2 )
    {
    document.getElementById('SpecialDiscount').innerHTML='Free: '+includedItem+' Add-on with all Purchases'
    }
    
  }
 
  else
  {
    document.getElementById('SpecialDiscount').innerHTML='&nbsp;'
  }
  if (document.getElementById('license').value=="monthly")
  {
    document.getElementById('SpecialDiscount').innerHTML=document.getElementById('SpecialDiscount').innerHTML+'<br>Hosted Accounts have a One Time Setup Fee of $'+NumToCurrency(HostedSetup)+'<br> Not included in Total. <br>'
//    document.getElementById('BundleDiscount').innerHTML='$'+NumToCurrency(HostedSetup)
  }

// -- Turned the warning off for hosted accounts  
//  if (document.getElementById('license').value=="version")
//  {
//    document.getElementById('ViewOnlyWarn').innerHTML=''
//  }

//  else if (document.getElementById('license').value=="monthly")
//  {
//    document.getElementById('ViewOnlyWarn').innerHTML='Not Available for Hosted'
//    document.getElementById('NumberOfViewOnly').disabled=true
//    viewUsers=''
//  }
//  else
//  {
//    document.getElementById('ViewOnlyWarn').innerHTML='&nbsp;'
//    document.getElementById('NumberOfViewOnly').disabled=false
//  }     
  var AddOns=NumToCurrency(addOns)
  //var AddOnsPerUser=NumToCurrency((addOns-Number(webviewer)-Number(otpalm))/parseInt(document.getElementById('NumberOfUsers').value))
  if (addOns==0)
  {
    document.getElementById('AddOnsPerUser').innerHTML='&nbsp;'
  }
  else
  {
    document.getElementById('AddOnsPerUser').innerHTML="Add-ons w/ purchase: $"+AddOns
  }
  if (parseInt(document.getElementById('NumberOfUsers').value) >= sizeForSpecial && itemsForSpecial=='all')
  {
    document.getElementById('AddOnsPerUser').innerHTML=sizeForSpecial+'+ Packages Include All Add-ons'
 
  }
  
  
  subTotal=Number(users)+Number(webclient)+Number(contacts)+Number(webviewer)+Number(otpalm)+Number(ssw)+Number(bbsync)+Number(addUsers)+Number(viewUsers)-Number(discount)
  
  var SubTotal=NumToCurrency(subTotal)
  if (whichForm!='support')
  {
    var PricePerUser=NumToCurrency(Number(users)/parseInt(document.getElementById('NumberOfUsers').value))
    document.getElementById('PricePerUser').innerHTML="Price/user: $"+PricePerUser
  }
  document.getElementById('SubTotal').innerHTML="Sub-Total: $"+SubTotal
  //if (document.getElementById('Standard').checked==false)
  //{
  if (document.getElementById('license').value=="1year")
  {
    document.getElementById('SubTotal').innerHTML=document.getElementById('SubTotal').innerHTML+'/year'
  }
  if (document.getElementById('license').value=="2year")
  {
    document.getElementById('SubTotal').innerHTML=document.getElementById('SubTotal').innerHTML+'/2 years'
  }
  if (document.getElementById('license').value=="3year")
  {
    document.getElementById('SubTotal').innerHTML=document.getElementById('SubTotal').innerHTML+'/3 years'
  }
  if (document.getElementById('license').value=="version")
  {
    document.getElementById('SubTotal').innerHTML=document.getElementById('SubTotal').innerHTML
  }
  if (document.getElementById('license').value=="monthly")
  {
    document.getElementById('SubTotal').innerHTML=document.getElementById('SubTotal').innerHTML+'/month'
  }
  //}
 
  var support=''
  for (i=0; i < document.forms[0].Support.length;i++)
  {
    if (document.forms[0].Support[i].checked)
    {
      support=parseInt(document.forms[0].Support[i].value)
    }
  }
  if (support==90)
  {
    support=Support90Days
//    document.forms[0].Support[1].value="90 Days Support @: $"+support
//    document.forms[0].Support[4].value="90 Days Support @: $"+support
  }
  else if (support==6)
  {
    support=Support6Months
//    document.forms[0].Support[2].value="6 Months Support @: $"+support
//    document.forms[0].Support[5].value="6 Months Support @: $"+support
  }
  else if (support==1)
  {
    support=Support1Yr
//    document.forms[0].Support[3].value="1 Year Support @: $"+support
//    document.forms[0].Support[6].value="1 Year Support @: $"+support
  }
  else if (support==0)
  {
    support=SupportPerIncident
//    document.forms[0].Support[7].value="0 Per Incident Support @: $"+support
  }
  else 
  {
    support=0
  }
  var SupportAmount=NumToCurrency(support)
  document.getElementById('SupportTotal').innerHTML="Support: $"+SupportAmount
  var tax=0
  document.getElementById('Tax').innerHTML='&nbsp;'
  if (document.getElementById('SalesTax').checked)
  {
    tax=subTotal*(0.0825)
    var TaxAmount=NumToCurrency(tax)
    document.getElementById('Tax').innerHTML='Sales Tax: $'+TaxAmount
//    document.getElementById('SalesTax').value='Add Sales Tax @: $'+TaxAmount
  }
  var promo=PromoCode(document.getElementById('Promo').value)
  total=Number(subTotal)+Number(support)+Number(tax)//-Number(promo)
  if (whichForm=='support')
  {
  total=Number(support)+Number(tax)
  }
  if (promoType=='percent')
  {
  total = total - total*Number(promo)
  }
  else if (promoType=='flat')
  {
  total=total-Number(promo)
  }
  Total=NumToCurrency(total)
  var TotalText=Total
  if ( whichForm!='support')
  {
    if (document.getElementById('license').value=="1year")
    {
      TotalText=TotalText+'/year'
    }
    if (document.getElementById('license').value=="2year")
    {
      TotalText=TotalText+'/2 years'
    }
    if (document.getElementById('license').value=="3year")
    {
      TotalText=TotalText+'/3 years'
    }
    if (document.getElementById('license').value=="version")
    {
      TotalText=TotalText
    }
    if (document.getElementById('license').value=="monthly")
    {
      TotalText=TotalText+'/month'
    }
  }
 
  document.getElementById('TotalOrder').innerHTML="Total: $"+TotalText
  document.getElementById('TotalOrder2').innerHTML="Office Tracker Total: $"+TotalText+"  <a href=\"javascript:HideShow('userinfo')\">Edit</a>"
  var order="On-line Order for: $"
  if (whichForm=='edu')
  {
    order="On-line EDU Order for: $"
  }
  if (whichForm=='upgrade')
  {
    order="On-line Upgrade Order for: $"
  }
  if (whichForm=='addon')
  {
    order="On-line Add-on Order for: $"
  }
  if (whichForm=='support')
  {
    order="On-line Support Order for: $"
  }
  document.getElementById('subject').value=order+TotalText
       document.getElementById('totalorderform').value=order+TotalText
}
 
//PROMO CODE
var promoType=null
function PromoCode(code){
code=code.toLowerCase()
var discount=0
document.getElementById('PromoDiscount').innerHTML='&nbsp;'
//change document.getElementById('Standard').checked==(true/false) to make a promo only work for Annual or Standard (false=Annual only,true=Standard only)
//remove document.getElementById('Standard').checked==(true/false) to have promo work for both
if (code=='nocode'&& document.getElementById('Standard').checked==true && parseInt(document.getElementById('NumberOfUsers').value) >=1)
{
discount=.2//20%
 
//below is extra setting to optionally give no discount to packages under 3 users
if (parseInt(document.getElementById('NumberOfUsers').value) <= 3)
{
discount=.10//10% 
}
 
var Discount=discount*100;
promoType='percent'
//NumToCurrency(discount)
document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  '+Discount+'%'
}
 
if (code=='notvalidupgradenow' && whichForm=='upgrade')
{
discount=.10
var Discount=discount*100;
promoType='percent'
 
document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  '+Discount+'%'
}
if (code=='extra10' && document.getElementById('license').value!="monthly" && whichForm!='upgrade')
{
discount=.30
if (parseInt(document.getElementById('NumberOfUsers').value) < 20)
{
discount=.25
}
if (parseInt(document.getElementById('NumberOfUsers').value) < 10)
{
discount=.20
}
var Discount=discount*100;
promoType='percent'
 
document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  '+Discount+'%'
}


if (code=='extra5' && document.getElementById('license').value!="monthly" && whichForm!='upgrade')
{
discount=.25
if (parseInt(document.getElementById('NumberOfUsers').value) < 20)
{
discount=.20
}
if (parseInt(document.getElementById('NumberOfUsers').value) < 11)
{
discount=.15
}
var Discount=discount*100;
promoType='percent'

document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  '+Discount+'%'
}




if (code=='savemore' && document.getElementById('license').value!="monthly" && whichForm!='upgrade')
{
discount=.20
if (parseInt(document.getElementById('NumberOfUsers').value) < 20)
{
discount=.15
}
if (parseInt(document.getElementById('NumberOfUsers').value) < 11)
{
discount=.10
}
var Discount=discount*100;
promoType='percent'
 
document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  '+Discount+'%'
}
 
 
 
if (code=='ainthappenin' && document.getElementById('Standard').checked==false && document.getElementById('license').value!="monthly" && whichForm!='upgrade' && parseInt(document.getElementById('NumberOfUsers').value) >=5)
{
discount=0
if (parseInt(document.getElementById('NumberOfUsers').value) >=5)
{
var extras=parseInt((document.getElementById('NumberOfUsers').value)/5)*2
discount=0
}
 
var Discount=NumToCurrency(discount)
promoType='flat'
if (parseInt(document.getElementById('NumberOfUsers').value) >=5)
{
document.getElementById('PromoDiscount').innerHTML='This Month Get <strong>'+extras+'</strong> Extra View Only Users with <strong>'+parseInt(document.getElementById('NumberOfUsers').value)+'</strong> Full Users!'
}

document.getElementById('SpecialDiscount').innerHTML=document.getElementById('SpecialDiscount').innerHTML+document.getElementById('PromoDiscount').innerHTML
//document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  $'+Discount
 
}
 
else if (code=='nocode' && document.getElementById('Standard').checked==false && whichForm=='upgrade' && parseInt(document.getElementById('NumberOfUsers').value) >=1)
{
discount=0
if (parseInt(document.getElementById('NumberOfUsers').value) >=11)
{
discount=0
}
if (parseInt(document.getElementById('NumberOfUsers').value) >30)
{
discount=0
}
var Discount=NumToCurrency(discount)
promoType='flat'
document.getElementById('PromoDiscount').innerHTML='Special Savings Discount:  $'+Discount
 
}
else if (code=='80429' && whichForm=='support' && document.forms[0].Support[6].checked==true)
{
discount=100
var Discount=NumToCurrency(discount)
promoType='flat'
document.getElementById('PromoDiscount').innerHTML='Special Support Discount:  $'+Discount
}
return discount
}
 
//ends here

function submitOrder(theOrder) {


if (MM_validateForm('firstname','','R','lastname','','R','Company','','R','Phone','','R','email','','RisEmail','Street Address','','R','city','','R','zip','','R'))
{
return document.MM_returnValue
}

else
{
//emails
theOrder.action="https://www.officetracker.com/cgi-bin/test.cgi"
theOrder.target="nonsubmit"
theOrder.submit()

//paypals

var itemDescription=document.getElementById('NumberOfUsers').value+ " Full Users"

if (document.getElementById('NumberOfViewOnly').value > 0)
{
itemDescription=itemDescription+" with "+document.getElementById('NumberOfViewOnly').value+" View-Only Users"
}


//document.getElementsByName("item_name").value=itemDescription
//document.getElementsByName("amount").value=Number(total)
document.forms[0].elements[6].value=Number(total)
document.forms[0].elements[7].value=itemDescription
document.forms[0].elements[10].value=document.getElementsByName("Street Address").value
document.forms[0].elements[9].value=document.getElementsByName("redirect").value



//document.getElementsByName("return").value=document.getElementsByName("redirect").value
//document.getElementsByName("address1").value=document.getElementsByName("Street Address").value

//alert(document.getElementsByName("item_name").value)
//alert(document.getElementsByName("amount").value)
//alert(document.forms[0].elements[10].name)
//document.forms[0].action="https://www.paypal.com/cgi-bin/webscr"
//document.forms[0].target="_top"

//document.forms[0].submit()
}
}
 
 
function NumToCurrency(number){
dollar=parseInt(Math.round(Number(number)*Math.pow(10,2))/Math.pow(10,2).toFixed(2))
cents=Math.round(Number(number)*Math.pow(10,2))/Math.pow(10,2).toFixed(2)-Number(dollar)
dollar=dollar.toString()
cents=cents.toFixed(2).toString()
full=parseInt(dollar.length/3)
extra=dollar.length%3
if (extra > 0)
{
  totalnum=dollar.substring(0,extra)
}
else
{
  totalnum=''
}
if (full > 1 && extra ==0)
{
totalnum=dollar.substring(0,3)
for (i=1; i<full; i ++)
  {
  totalnum=totalnum+','+dollar.substring((extra+(i)*3),extra+(i+1)*3)
  }
}
else if (full > 1 || extra >0)
{
  for (i=0; i<full; i ++)
  {
  totalnum=totalnum+','+dollar.substring((extra+(i)*3),extra+(i+1)*3)
  }
}
else
  {
  totalnum=dollar
}
return totalnum+cents.substr(1)
}

var Header=' '
var subHeader='Schedule More, Save More - SAVE up to 20% <br><div style="font-size:14px; font-weight:normal; margin-top:4x;"> Use promo code: <span class="style16"> savemore </span> to see your savings </div>'
var whichForm=location.search.substr(1)
if (whichForm=='edu')
{
//add an extra row for the form with Bootstrap nav bar
document.getElementById('AddOnRow').style.visibility='hidden'
Header='Office Tracker Non-Profit Org. Order Form'
//-- to make same as regular SubHeader:   subHeader=subHeader
subHeader=subHeader

//-- moves input boxes to correct placement - adds 15px
//Found where to move the input boxes for edu, YEAH!!!
document.getElementById('NumberOfUsersdiv').style.top="135px"
document.getElementById('NumberofViewOnlydiv').style.top="175px"
document.getElementById('licensediv').style.top="208px"
document.getElementById('WebViewerdiv').style.top="225px"
document.getElementById('SSWdiv').style.top="245px"


}
if (whichForm=='upgrade')
{
Header='Office Tracker Upgrade Order Form'
//-- to make same as regular SubHeader:   subHeader=subHeader
subHeader='Upgrade Prices for Version 9 Or Later'
document.getElementById('AddOnRow').style.visibility='hidden'
}
if (whichForm=='support')
{
Header='Office Tracker Support Order Form'
//-- to make same as regular SubHeader:   subHeader=subHeader
subHeader=''
document.getElementById('supportonly').style.visibility='visible'
document.getElementById('supportonly').style.zIndex=1
}
else
{
document.getElementById('supportonly').style.zIndex=0
}
document.getElementById('Header').innerHTML=Header
document.getElementById('subHeader').innerHTML=subHeader

