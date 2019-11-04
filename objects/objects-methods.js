let resturant = {
    name: 'Timbuktu Delight',
    guestCapacity: 120,
    guestCount: 0,
    checkAvailability: function (partySize){
        console.log(partySize)
    }
}


resturant.checkAvailability(5)
