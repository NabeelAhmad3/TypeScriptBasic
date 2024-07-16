function noAdd(msg,code):never
{
     throw{message:msg,apicode:code}
}
console.log(noAdd("error",404))