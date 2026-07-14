const container_1=document.getElementById('container_1')
const insect_list=document.getElementsByClassName('insect')
const insect_legs=document.getElementsByClassName('insect_leg')
container_1.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log(event.target.clientWidth,event.target.clientHeight);
    insect_creator(event)
})

container_1.addEventListener('mousemove',(event)=>{

    setTimeout(() => {
        let elem_x_calc=0
        let elem_y_calc=0
        for (const element of insect_list) {
            element.style.left=`${event.clientX-elem_x_calc}px`
            element.style.top=`${event.clientY-elem_y_calc}px`  
            elem_x_calc+=30
            elem_y_calc+=30
        }
    }, 400);
    insect_legs_movement()
})

container_1.addEventListener('touchmove',(event)=>{

    setTimeout(() => {
        let elem_x_calc=0
        let elem_y_calc=0
        for (const element of insect_list) {
            element.style.left=`${event.clientX-elem_x_calc}px`
            element.style.top=`${event.clientY-elem_y_calc}px`  
            elem_x_calc+=30
            elem_y_calc+=30
        }
    }, 400);
    insect_legs_movement()  
})



function insect_creator(event) {
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

    // Insect Leg Properties
    insect_leg_1.classList.add('insect_leg','leg_1')
    insect_leg_1.style.transform='rotate(0deg)'

    insect_leg_2.classList.add('insect_leg','leg_2')
    insect_leg_2.style.transform='rotate(60deg)'

    insect_leg_3.classList.add('insect_leg','leg_3')
    insect_leg_3.style.transform='rotate(120deg)'

    insect_leg_4.classList.add('insect_leg','leg_4')
    insect_leg_4.style.transform='rotate(180deg)'

    insect_leg_5.classList.add('insect_leg','leg_5')
    insect_leg_5.style.transform='rotate(240deg)'
          
    insect_leg_6.classList.add('insect_leg','leg_6')
    insect_leg_6.style.transform='rotate(300deg)'




    container_1.appendChild(insect)


    insect.appendChild(insect_head)
    insect.appendChild(insect_leg_1)
    insect.appendChild(insect_leg_2)
    insect.appendChild(insect_leg_3)
    insect.appendChild(insect_leg_4)
    insect.appendChild(insect_leg_5)
    insect.appendChild(insect_leg_6)
    
}


function insect_legs_movement() {
    
    for (const element of insect_legs) {
        let prev_deg=element.style.transform

        if(prev_deg.length==13){
            prev_deg=prev_deg.slice(7,9)
            prev_deg=Number(prev_deg);
            if (prev_deg<0) {
                prev_deg=prev_deg*(-1)
            }
            const randomInt = Math.floor(Math.random() * 10) + 1;
            if (randomInt%2==0) {
                element.style.transform=`rotate(${prev_deg-10}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg+10}deg)`
            }
        }

        else if(prev_deg.length==14){
            prev_deg=prev_deg.slice(7,10)
            prev_deg=Number(prev_deg);
            if (prev_deg<0) {
                prev_deg=prev_deg*(-1)
            }
            const randomInt = Math.floor(Math.random() * 10) + 1;
            if (randomInt%2==0) {
                element.style.transform=`rotate(${prev_deg-10}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg+10}deg)`
            }
        }

        else if(prev_deg==12){
            prev_deg=prev_deg.slice(7,8)
            prev_deg=Number(prev_deg);
            if (prev_deg<0) {
                prev_deg=prev_deg*(-1)
            }
            const randomInt = Math.floor(Math.random() * 10) + 1;
            if (randomInt%2==0) {
                element.style.transform=`rotate(${prev_deg-10}deg)`
            }
            else{
                element.style.transform=`rotate(${prev_deg+10}deg)`
            }
        }
        
    }
}