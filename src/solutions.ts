const multiplyValue = (value : number, multiplier? : number) : number => {

 
    if(value === 0 || multiplier === 0){
        return 0;
    }else if(multiplier === undefined){
        return Math.abs(value*2)
    }else{
        return value*multiplier;
    }

} 




type Value = string | number | boolean;

const processInput = (value : Value) : Value => {
    if(typeof value === "string"){
        return JSON.stringify(value.trim().toLowerCase());
    }else if(typeof value === "number"){
        return Math.abs(value*10);
    }else if(typeof value === "boolean"){
        if(value){
            return JSON.stringify("Active")
        }else{
            return JSON.stringify("Inactive")
        }
    }else{
        const otherValue : never = value;
        return otherValue;
    }
}



type LocationType = readonly [number, number, string]

const formatCoordinate = (location : LocationType) : string =>{

    const [latitude, longitude, locationName] = location;

    return JSON.stringify(`Location: ${locationName} (${latitude}, ${longitude})`);
}




const concatenateArrays = <T>(...arrays: T[][])  : T[] =>{
    return ([] as T[]).concat(...arrays); 
}




interface Course {
   readonly title : string;
    students : number;
    isPublished : boolean;
} 


const getPopularCourses = (courses : Course[], minStudents : number) : Course[] => {
       const popularCourses:Course[] = [];
       for(const course of courses) {
         if(course.isPublished && course.students >= minStudents){
           popularCourses.push(course)
        }
       }
       return popularCourses;
}


const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))



