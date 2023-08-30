class Education{
    constructor(major, name, time){
        this.major = major
        this.name = name
        this.time = time
    }
    getHtml(){
        return `
        <div class="education">
            <div class="major_time">
                <div class="major">${this.major}</div>
                <div class="time">${this.time}</div>
            </div>
            <div class="school">${this.name}</div>
        </div>
        `
    }
}
const arrEducaton = [
    new Education("Information Technology [ Software]","Van Lang University", "2020 - 2024")
]
const education = document.querySelector(".educations")
arrEducaton.forEach(edu =>{
    education.insertAdjacentHTML("beforeend",edu.getHtml())
})