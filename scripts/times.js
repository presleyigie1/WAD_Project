
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '608f2d2638msh44841900d983c3ep1db646jsn526b4be970c8',
		'X-RapidAPI-Host': 'ryanair.p.rapidapi.com'
	}
};

fetch('https://ryanair.p.rapidapi.com/flights?origin_code=LGW&destination_code=DUB&origin_departure_date=2023-09-28&destination_departure_date=2023-10-28', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        let data = response
        //on load data retrieves all this information from the API
        //displaying table data and headers for slot 1
        const displayText=document.getElementById("print")
        const headrOne = document.createElement("h3")
        const headTxtOne = document.createTextNode("Destination Code:")
        const headrTwo = document.createElement("h3")
        const headTxtTwo = document.createTextNode("Origin Code:")
        const headrThree = document.createElement("h3")
        const headTxtThree = document.createTextNode("Flight Duration:")
        const headrFour = document.createElement("h3")
        const headTxtFour = document.createTextNode("Departure Time:")
        const headrFive = document.createElement("h3")
        const headTxtFive= document.createTextNode("Arrival Time:")
        const headrSix = document.createElement("h3")
        const headTxtSix = document.createTextNode("Currency Used:")
        const headrSeven = document.createElement("h3")
        const headTxtSeven = document.createTextNode("Flight Number:")
        //table data and headers for slot 2
        const displayText2=document.getElementById("print2")
        const headrOne2 = document.createElement("h3")
        const headTxtOne2 = document.createTextNode("Destination Code:")
        const headrTwo2 = document.createElement("h3")
        const headTxtTwo2 = document.createTextNode("Origin Code:")
        const headrThree2 = document.createElement("h3")
        const headTxtThree2 = document.createTextNode("Flight Duration:")
        const headrFour2 = document.createElement("h3")
        const headTxtFour2 = document.createTextNode("Departure Time:")
        const headrFive2 = document.createElement("h3")
        const headTxtFive2= document.createTextNode("Arrival Time:")
        const headrSix2 = document.createElement("h3")
        const headTxtSix2 = document.createTextNode("Currency Used:")
        const headrSeven2 = document.createElement("h3")
        const headTxtSeven2 = document.createTextNode("Flight Number:")
        //table data and headers for slot 3
        const displayText3=document.getElementById("print3")
        const headrOne3 = document.createElement("h3")
        const headTxtOne3 = document.createTextNode("Destination Code:")
        const headrTwo3 = document.createElement("h3")
        const headTxtTwo3 = document.createTextNode("Origin Code:")
        const headrThree3 = document.createElement("h3")
        const headTxtThree3 = document.createTextNode("Flight Duration:")
        const headrFour3 = document.createElement("h3")
        const headTxtFour3 = document.createTextNode("Departure Time:")
        const headrFive3 = document.createElement("h3")
        const headTxtFive3= document.createTextNode("Arrival Time:")
        const headrSix3 = document.createElement("h3")
        const headTxtSix3 = document.createTextNode("Currency Used:")
        const headrSeven3 = document.createElement("h3")
        const headTxtSeven3 = document.createTextNode("Flight Number:")
        //table data for timeslot 1
        const para1 = document.createElement("p")
        const textOne = document.createTextNode(response.destination_to_origin_trip[0][0].destination_code)
        const para2 = document.createElement("p")
        const textTwo = document.createTextNode(response.destination_to_origin_trip[0][0].origin_code)
        const para3 = document.createElement("p")
        const textThree = document.createTextNode(response.destination_to_origin_trip[0][0].duration_hours)
        const para4 = document.createElement("p")
        const textFour = document.createTextNode(response.destination_to_origin_trip[0][0].departure_datetime_utc)
        const para5 = document.createElement("p")
        const textFive = document.createTextNode(response.destination_to_origin_trip[0][0].arrival_datetime_utc)
        const para6 = document.createElement("p")
        const textSix = document.createTextNode(response.destination_to_origin_trip[0][0].currency)
        const para7 = document.createElement("p")
        const textSeven = document.createTextNode(response.destination_to_origin_trip[0][0].flight_number)
        //Time slot 2
        const timeSlot = document.createElement("p")
        const des1 = document.createTextNode(response.destination_to_origin_trip[1][0].destination_code)
        const timeSlot2 = document.createElement("p")
        const orCode = document.createTextNode(response.destination_to_origin_trip[1][0].origin_code)
        const timeSlot3= document.createElement("p")
        const hours = document.createTextNode(response.destination_to_origin_trip[1][0].duration_hours)
        const timeSlot4 = document.createElement("p")
        const dep = document.createTextNode(response.destination_to_origin_trip[1][0].departure_datetime_utc)
        const timeSlot5 = document.createElement("p")
        const arr= document.createTextNode(response.destination_to_origin_trip[1][0].arrival_datetime_utc)
        const timeSlot6 = document.createElement("p")
        const currency = document.createTextNode(response.destination_to_origin_trip[1][0].currency)
        const timeSlot7= document.createElement("p")
        const number = document.createTextNode(response.destination_to_origin_trip[1][0].flight_number)
        //Time slot 3
        const timeS = document.createElement("p")
        const des2 = document.createTextNode(response.destination_to_origin_trip[2][0].destination_code)
        const timeSlot22 = document.createElement("p")
        const orCode2 = document.createTextNode(response.destination_to_origin_trip[2][0].origin_code)
        const timeSlot32= document.createElement("p")
        const hours2 = document.createTextNode(response.destination_to_origin_trip[2][0].duration_hours)
        const timeSlot42 = document.createElement("p")
        const dep2 = document.createTextNode(response.destination_to_origin_trip[2][0].departure_datetime_utc)
        const timeSlot52 = document.createElement("p")
        const arr2= document.createTextNode(response.destination_to_origin_trip[2][0].arrival_datetime_utc)
        const timeSlot62 = document.createElement("p")
        const currency2 = document.createTextNode(response.destination_to_origin_trip[2][0].currency)
        const timeSlot72 = document.createElement("p")
        const number2 = document.createTextNode(response.destination_to_origin_trip[2][0].flight_number)
        //Contents for time slot 1
        displayText.appendChild(headrOne)
        headrOne.appendChild(headTxtOne)
        displayText.appendChild(para1)
        para1.appendChild(textOne)
        //desination
        displayText.appendChild(headrTwo)
        headrTwo.appendChild(headTxtTwo)
        displayText.appendChild(para2)
        para2.appendChild(textTwo)
        //origin code
        displayText.appendChild(headrThree)
        headrThree.appendChild(headTxtThree)
        displayText.appendChild(para3)
        para3.appendChild(textThree)
        //duration hours
        displayText.appendChild(headrFour)
        headrFour.appendChild(headTxtFour)
        displayText.appendChild(para4)
        para4.appendChild(textFour)
        //departure
        displayText.appendChild(headrFive)
        headrFive.appendChild(headTxtFive)
        displayText.appendChild(para5)
        para5.appendChild(textFive)
        //currency 
        displayText.appendChild(headrSix)
        headrSix.appendChild(headTxtSix)
        displayText.appendChild(para6)
        para6.appendChild(textSix)
        //Flight Number
        displayText.appendChild(headrSeven)
        headrSeven.appendChild(headTxtSeven)
        displayText.appendChild(para7)
        para7.appendChild(textSeven)
        //contents for time slot 2
        //Destination
        displayText2.appendChild(headrOne2)
        headrOne2.appendChild(headTxtOne2)
        displayText2.appendChild(timeSlot)
        timeSlot.appendChild(des1)
        //origin code
        displayText2.appendChild(headrTwo2)
        headrTwo2.appendChild(headTxtTwo2)
        displayText2.appendChild(timeSlot2)
        timeSlot2.appendChild(orCode)
        //hours
        displayText2.appendChild(headrThree2)
        headrThree2.appendChild(headTxtThree2)
        displayText2.appendChild(timeSlot3)
        timeSlot3.appendChild(hours)
        //departure time
        displayText2.appendChild(headrFour2)
        headrFour2.appendChild(headTxtFour2)
        displayText2.appendChild(timeSlot4)
        timeSlot4.appendChild(dep)
        //arrival time
        displayText2.appendChild(headrFive2)
        headrFive2.appendChild(headTxtFive2)
        displayText2.appendChild(timeSlot5)
        timeSlot5.appendChild(arr)
        //currency
        displayText2.appendChild(headrSix2)
        headrSix2.appendChild(headTxtSix2)
        displayText2.appendChild(timeSlot6)
        timeSlot6.appendChild(currency)
        //Flight Number
        displayText2.appendChild(headrSeven2)
        headrSeven2.appendChild(headTxtSeven2)
        displayText2.appendChild(timeSlot7)
        timeSlot7.appendChild(number)
        //contents for time slot 3
        //Destination
        displayText3.appendChild(headrOne3)
        headrOne3.appendChild(headTxtOne3)
        displayText3.appendChild(timeS)
        timeS.appendChild(des2)
        //origin code
        displayText3.appendChild(headrTwo3)
        headrTwo3.appendChild(headTxtTwo3)
        displayText3.appendChild(timeSlot22)
        timeSlot22.appendChild(orCode2)
        //hours
        displayText3.appendChild(headrThree3)
        headrThree3.appendChild(headTxtThree3)
        displayText3.appendChild(timeSlot32)
        timeSlot32.appendChild(hours2)
        //departure time
        displayText3.appendChild(headrFour3)
        headrFour3.appendChild(headTxtFour3)
        displayText3.appendChild(timeSlot42)
        timeSlot42.appendChild(dep2)
        //arrival time
        displayText3.appendChild(headrFive3)
        headrFive3.appendChild(headTxtFive3)
        displayText3.appendChild(timeSlot52)
        timeSlot52.appendChild(arr2)
        //currency
        displayText3.appendChild(headrSix3)
        headrSix3.appendChild(headTxtSix3)
        displayText3.appendChild(timeSlot62)
        timeSlot62.appendChild(currency2)   
        //Flight Number
        displayText3.appendChild(headrSeven3)
        headrSeven3.appendChild(headTxtSeven3)
        displayText3.appendChild(timeSlot72)
        timeSlot72.appendChild(number2)  
    })
	.catch(err => console.error(err));

    $("hide").click(function(){
        $("p").hide()
    })
    $("show").click(function(){
        $("p").show()

    })


