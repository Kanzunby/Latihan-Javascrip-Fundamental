// Class
// 1. simpelnya

class Student {
  constructor(name, age, address, hobby) {
    this.nameProp = name;
    this.ageProp = age;
    this.addressProp = address;
    this.hobbyPorp = hobby;
    this.fullData = name + age + address + hobby;
  }
  panggilName() {
    console.log("nama adalah" + this.nameProp);
  }

  chekName(nameToCheck) {
    return this.nameProp === nameToCheck;
  }
}

const stud = new Student("Kanzun", 23, "Kebumen", "Reading");
console.log(stud.fullData);
console.log(stud.ageProp);
