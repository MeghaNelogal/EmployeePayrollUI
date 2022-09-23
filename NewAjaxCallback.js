let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;

function showTime()
{
    const date=new Date();
    return date.getHours()+" Hrs: "+date.getMinutes()+ " Mins : "+date.getSeconds()+" secs: ";

}

function makeAJAXCall(methodType,url,callback,async=true,data=null)
{
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4)
        {
            if(xhr.status===200 || xhr.status===201)
            {
                callback(xhr.responseText);
            }else if(xhr.status>=400)
            {
                console.log("handle 400 client error or 500 client server error");
            }
        }
    }

    xhr.open(methodType,url,async);
    xhr.send();
    console.log(methodType+"request sent to the server at : "+showTime());
}

    const getURL="http://localhost:4000/employees/3";

    function getUserDetails(data)
    {

        console.log("Get User Dta at : "+showTime()+ "data :"+data);
    }

    makeAJAXCall("Get",getURL,getUserDetails,true);

    console.groupCollapsed("Made Get Ajax Call to Server at "+showTime());
