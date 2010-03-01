dynspace = new Object();

function parameterize()
{
  var uri = "?";
  for(var key in dynspace)
  {
    if(dynspace[key]!="")
    {
      if (uri!="?")
      {
        uri += "&";
      }
      uri += key+"="+dynspace[key];
    }
  }
  return uri;
}

function configureforms()
{
  var insert = "";
  for (var variable in dynspace)
  {
    if(dynspace[variable]!="")
    {
      insert += '<input type="hidden" name="'+variable+'" value="'+dynspace[variable] +'">';
    }
  }
  var elem = document.createElement("div");
  elem.innerHTML = insert; //Fz1iz2 tLvLz rzuzmL
  var allforms = document.getElementsByTagName("form");
  for (var i=0; i<allforms.length; i++)
  {
    allforms[i].appendChild(elem);
  }
}

function configurelinks()
{
  uri = parameterize();
  for(var foo in document.links)
  {
    document.links[foo].href = document.links[foo].href + uri;
  }
}

function init()
{  
  dynspace = new Object();  
  dynspace["Account0"] = "kiu";  
  dynspace["Account1"] = "";
  dynspace["Account2"] = "";
  dynspace["Account3"] = "";
  dynspace["Account4"] = "";
  dynspace["Account5"] = "";
  dynspace["Account6"] = "";
  dynspace["Accountval0"] = "";
  dynspace["Accountval1"] = "";
  dynspace["Accountval2"] = "";
  dynspace["Accountval3"] = "";
  dynspace["Accountval4"] = "";
  dynspace["Accountval5"] = "";
  dynspace["Accountval6"] = "";
  dynspace["Transact0"] = "";
  dynspace["Transact1"] = "";
  dynspace["Transact2"] = "";
  dynspace["Transact3"] = "";
  dynspace["Transact4"] = "";
  dynspace["Transact5"] = "";
  dynspace["Transact6"] = "";
  dynspace["Transact7"] = "";
  dynspace["Transact8"] = "";
  dynspace["Transact9"] = "";
  dynspace["expires"] = ""; 
  var temps = (document.URL).split("?");
  if(temps.length==2)
  {
    var args = temps[1].split("&");
    for (var i=0;i<args.length;i++)
    {
      var temparg = args[i].split("=");
      if (temparg.length==2)
      {
        dynspace[temparg[0]]=temparg[1];
      }
    }
  }
  configurelinks();
  configureforms();
}

function exists(requestedkey)
{
  for (var key in dynspace)
  {
    if (key==requestedkey)
    {
      return true;
    }
  } 
  return false;
}

function set(requestedkey, value)
{
  dynspace[requestedkey] = value;
  configurelinks();
  configureforms();
}

function get(requestedkey)
{
  return dynspace[requestedkey];
}

function insert(requestedkey)
{
  var thegame = get(requestedkey);
  document.getElementById(requestedkey).innerHTML = thegame;
  var temp = document.getElementsByTagName("input");
  for(var i=0;i<temp.length;i++)
  {
    if(temp[i].name==requestedkey)
    {
      temp[i].value = thegame;
    }
  }
}

function setaccountselects(requestedname)
{
  var insert = new Array;
  for(var i=0;i<7;i++)
  {
    if(get("Account"+i)!="")
    {
      var temp = document.createElement("option");
      temp.appendChild(document.createTextNode(get("Account"+i)));
      insert.push(temp);
    }
  }
  var elem = document.getElementsByTagName("select");
  for(i=0;i<elem.length;i++)
  {
    if(elem[i].name==requestedname)
    {
      var k = elem[i].childNodes.length;
      for(var j=0; j<k;j++)
      {
        elem[i].removeChild(elem[i].firstChild);
      }
      for(var j=0; j<insert.length;j++)
      {
        elem[i].appendChild(insert[j]);
      }
    }
  }
}

function showdynspace()
{
  for(var key in dynspace)
  {
    document.write(key+": "+dynspace[key]+"<br>");
  }
}

function establishfunctionality()
{
  init();
  showdynspace();
}

function setvars(reference, location)
{
  var result = "";
  for(var key in dynspace)
  {
    if(dynspace[key]!="")
    {
      if (result!="")
      {
        result += "&";
      }
      result += key+"="+dynspace[key];
    }
  }
  document.URL = location + result; 
}

