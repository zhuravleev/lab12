var App = {
    data() {
        return {
            kolvo: 0,
            Surname: '',
            Name: '',
            notes: [],
            visible: true,
            button: true
        }
    },
    methods: {
        Ev1(event) {
            this.Surname=event.target.value
            this.kolvo=this.Surname.length+this.Name.length
            if (this.Surname!='' && this.Name!='') {
                this.button=false
            }
        },
        Ev2(event) {
            this.Name=event.target.value
            this.kolvo=this.Surname.length+this.Name.length
            if (this.Surname!='' && this.Name!='') {
                this.button=false
            }
        },
        Add() {
            if (this.Surname!='' && this.Name!='') {
                this.notes.push(Upper(this.Surname)+" "+Upper(this.Name))
                this.Surname=""
                this.Name=""
                this.kolvo=0
                this.visible=false
                this.button=true
            }
        }
    }
}
var app=Vue.createApp(App)
var i=0;
app.mount('#app')

function Upper(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
