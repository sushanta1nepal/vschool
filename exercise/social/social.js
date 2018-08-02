var mountainClimber = {
    name: "Sushant",
    age: 30,
    climbName: "Mount Kilmanjaro",
    difficulty: 7,
    countryOfClimb: "Tanzania",
    showFriends: function () {
        console.log(this.name, this.age)
        for (var i = 0; i < this.mountainClimbingFriends.length; i++) {
            console.log(this.mountainClimbingFriends[i].name, this.mountainClimbingFriends[i].age)
            for (var j = 0; j < this.mountainClimbingFriends[i].favoriteClimb.length, j++) {
                console.log(this.mountainClimbingFriends[i].favoriteClimb[j].climbName)
            }


        }
    },
    print: function () {
        console.log(this.name, this.age)
    },
    climbInfo: function () {
        console.log(this.climbName, this.difficulty, this.countryOfClimb)
    },
    mountainClimbingFriends: [{
            name: "Dillion",
            age: 31,
            print: function () {
                console.log(this.name, this.age)
            },
            favoriteClimb: [{
                climbName: "Mount Everest",
                difficulty: 9.5,
                countryOfClimb: "Nepal",
                friendClimbInfo: function () {
                    console.log(this.climbName, this.difficulty, this.countryOfClimb)
                },
            }],
        },
        {
            name: "Vlad",
            age: 29,
            print: function () {
                console.log(this.name, this.age)
            },
            favoriteClimb: [

                {
                    climbName: "Mount K2",
                    difficulty: 10,
                    countryOfClimb: "Pakistan",
                    friendClimbInfo: function () {
                        console.log(this.climbName, this.difficulty, this.countryOfClimb)
                    },
                }
            ],
        }
    ],

}
mountainClimber.print()
mountainClimber.climbInfo()
mountainClimber.mountainClimbingFriends[0].print()
mountainClimber.mountainClimbingFriends[0].favoriteClimb[0].friendClimbInfo()
mountainClimber.mountainClimbingFriends[1].print()
mountainClimber.mountainClimbingFriends[1].favoriteClimb[0].friendClimbInfo()
mountainClimber.showFriends()