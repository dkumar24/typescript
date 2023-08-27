function cloneSimple<T>(obj:T):T{
    return Object.apply({},obj);
}

let arrowClone = <T>(obj:T):T =>{
    return Object.apply({},obj);
}