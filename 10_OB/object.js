const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"vaibahv"
}
//console.log(course.courseInstructor);     //1 way to access the value

const {courseInstructor}=course;
console.log(courseInstructor);

const{coursename:name}=course;
console.log(name);

//JSON strucure

// {
//     "name":"vaibhav",
//     coursename:"js"
// }
