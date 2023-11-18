class Course {
    #price;
    set coursePrice(value) {
        if(value< 0 ) {
            throw 'Invalid Value!'
        } 
        this.#price = value;
    }

    get priceString() {
        return '$'+ this.#price;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.coursePrice= price;
    }

    getLengthByPriceValue () {
        return (this.length/ this.#price).toFixed(2);
    }

    getCourseSummary() {
        const summary = `${this.title} - course is ${this.length} hours long and comes at a price of ${this.priceString}`
        return summary;
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numberOfExercises) {
        super(title, length, price);
        this.numberOfExercises = numberOfExercises;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }
    publish() {
        console.log('Published!');
    }
}

const course1 = new Course('Intro to JS', 50, 100);
console.log(course1);
console.log(course1.getLengthByPriceValue());
console.log(course1.getCourseSummary());
const course2 = new Course('Namaste React', 42, 200);
console.log(course2);
console.log(course2.getLengthByPriceValue());
console.log(course2.getCourseSummary());

const course3 = new PracticalCourse('System Design', 24, 60, 12)
console.log(course3);
console.log(course3.getLengthByPriceValue());
console.log(course3.getCourseSummary());

const course4 = new TheoreticalCourse('DSA', 80, 40);
course4.coursePrice = 20;
console.log(course4);
course4.publish();
console.log(course4.getLengthByPriceValue());
console.log(course4.getCourseSummary());