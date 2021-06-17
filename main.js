class DigitalClock {
    constructor(element){
        this.element = element;
    }
     start(){
         this.update();
         setInterval(()=>{
             this.update();
         }, 500)
     }
    update(){
      const parts = this.getClockParts();
      const minuteFormated = parts.minute.toString().padStart(2, "0")
      const secondsFormated = parts.seconds.toString().padStart(2, "0")
      const timeFormatted = `${parts.hour}:${minuteFormated}:${secondsFormated}`
      const amPm = parts.isAm ? "AM" : "PM"
      const dayFormatted = parts.dd.toString().padStart(2,"0")
      const monthFormatted = (parts.mm).toString().padStart(2, "0")
      const dateFormatted = `${monthFormatted} ${dayFormatted}, ${parts.yyyy}`
      
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
      this.element.querySelector(".date").textContent =  dateFormatted;
    }

    getClockParts(){
        const now = new Date();
        const months = new Array('January','Feburary','March','April','May','June','July','August','September','October','November','December')
        return{
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            seconds: now.getSeconds(),
            isAm: now.getHours() < 12,
            dd: now.getDate(),
            mm: months[now.getMonth()],
            yyyy: now.getFullYear()
        }
    }
}
const clockElement = document.querySelector(".clock")
clockObject = new DigitalClock(clockElement);

clockObject.start();