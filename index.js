// ELEMENTS SELECTOR
const container_1=document.getElementById('container_1')
const insect_list=document.getElementsByClassName('insect')
const insect_legs=document.getElementsByClassName('insect_leg')
const insect_moving_legs=document.getElementsByClassName('moving_legs')



// INSECT CREATOR AT DOUBLECLICK
let insect_counter=0
container_1.addEventListener('dblclick',(event)=>{
    insect_counter+=1
    if (insect_counter<11) {
        insect_creator(event,insect_counter)
    }
})


// RANDOM PLACING OF INSECT AT CLICK
container_1.addEventListener('click',(event)=>{

    for (let index = 0; index < insect_list.length; index++) {
        const element = insect_list[index];
        let rect=container_1.getBoundingClientRect()
        let width=rect.width
        let height=rect.height
        let random_placing_height=Math.floor(Math.random() * height) -22;
        let random_placing_width=Math.floor(Math.random() * width) -34;
        element.style.top=`${random_placing_height}px`
        element.style.left=`${random_placing_width}px`

        let movement_interval=setInterval(() => {
            insect_legs_movement()
        }, 1);

        setTimeout(() => {
            clearInterval(movement_interval)
        }, 3200);
        
    }

})

// INSECT MOVEMENT APPLIER AT MOUSEMOVEMENT

let top_setter=0
let left_setter=0
let size_push=0
container_1.addEventListener('mousemove',(event)=>{
    for (let index = 0; index < insect_list.length; index++) {
        const randomInt=Math.floor(Math.random()*50)+1
        if (randomInt%2==0) {
            size_push+=randomInt
        }
        else{
            size_push-=randomInt
        }
        const element = insect_list[index];
        element.style.top=`${event.clientY-size_push+27}px`
        element.style.left=`${event.clientX+size_push-15}px`
    }
    size_push=0
    insect_legs_movement()
})



// Insect Creation Function
function insect_creator(event,head_count) {
    // Element Creator
    const insect=document.createElement('div')
    const insect_head=document.createElement('div')
    const insect_leg_1=document.createElement('div')
    const insect_leg_2=document.createElement('div')
    const insect_leg_3=document.createElement('div')
    const insect_leg_4=document.createElement('div')
    const insect_leg_5=document.createElement('div')
    const insect_leg_6=document.createElement('div')

    // Insect Properties
    insect.style.top=`${event.clientY}px`
    insect.style.left=`${event.clientX}px`
    insect.classList.add('insect')
    
    // Insect Head Properties
    insect_head.classList.add('insect_head')
    const randomInt=Math.floor(Math.random()*4)+1
    if (randomInt==1) {
        insect_head.style.background='red'
    }
    if (randomInt==2) {
        insect_head.style.background='green'
    }
    if (randomInt==3) {
        insect_head.style.background='blue'
    }
    if (randomInt==4) {
        insect_head.style.background='yellow'
    }
    insect_head.innerHTML=`${head_count}`

    // Insect Leg Properties
    insect_leg_1.classList.add('insect_leg','leg_1')
    insect_leg_1.style.transform='rotate(0deg)'

    insect_leg_2.classList.add('insect_leg','leg_2','moving_legs')
    insect_leg_2.style.transform='rotate(60deg)'

    insect_leg_3.classList.add('insect_leg','leg_3','moving_legs')
    insect_leg_3.style.transform='rotate(120deg)'

    insect_leg_4.classList.add('insect_leg','leg_4')
    insect_leg_4.style.transform='rotate(180deg)'

    insect_leg_5.classList.add('insect_leg','leg_5','moving_legs')
    insect_leg_5.style.transform='rotate(240deg)'
          
    insect_leg_6.classList.add('insect_leg','leg_6','moving_legs')
    insect_leg_6.style.transform='rotate(300deg)'

    // Adding of Child Elements
    container_1.appendChild(insect)

    insect.appendChild(insect_head)
    insect.appendChild(insect_leg_1)
    insect.appendChild(insect_leg_2)
    insect.appendChild(insect_leg_3)
    insect.appendChild(insect_leg_4)
    insect.appendChild(insect_leg_5)
    insect.appendChild(insect_leg_6)
    
}


// Insect Legs Movement Function
let flap_counter=0
function insect_legs_movement() {
    
    for (const element of insect_moving_legs) {
        let prev_deg=element.style.transform
        let degree_of_movement=5

        // Range of angle 10-99
        if(prev_deg.length==13){
            prev_deg=prev_deg.slice(7,9)
            prev_deg=Number(prev_deg)
            if (flap_counter%2==0) {
                element.style.transform=`rotate(${prev_deg+degree_of_movement}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg-degree_of_movement}deg)`
            }       
        }
        
        // Range of angle 100-999
        else if(prev_deg.length==14){
            prev_deg=prev_deg.slice(7,10)
            prev_deg=Number(prev_deg)
            if (flap_counter%2==0) {
                element.style.transform=`rotate(${prev_deg+degree_of_movement}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg-degree_of_movement}deg)`
            }
        }
        
        
        // Range of angle 0-9
        else if(prev_deg==12){
            prev_deg=prev_deg.slice(7,8)
            prev_deg=Number(prev_deg)
            if (flap_counter%2==0) {
                element.style.transform=`rotate(${prev_deg+degree_of_movement}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg-degree_of_movement}deg)`
            }
        }
        
    }
    flap_counter+=1
}