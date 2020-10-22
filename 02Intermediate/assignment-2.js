let myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    meetingDone: function(meetingAttend){
        this.meetDone = this.meetings - meetingAttend
        console.log(`You have completed ${this.meetingDone} meeting`) 
    },
    
    summery: function(){
        return `You have ${this.meetings} meetings today!`
    },

    resetMeeting: function(meetingAttend){
        this.meetings = 0
        meetingAttend.meetDone = 0
    }

}

myTodos.addMeeting(4)
myTodos.meetingDone(2)
console.log(myTodos.summery());
