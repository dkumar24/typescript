enum gender{
    MALE,
    FEMALE,
    TRANSGENDER
}

console.log(gender.FEMALE); //print 1
console.log(gender.MALE); //print 0

enum genderWithStringValue{
    MALE="male",
    FEMALE="female",
    TRANSGENDER="transgender"
}

console.log(gender.FEMALE); //print female
console.log(gender.MALE); //print male
