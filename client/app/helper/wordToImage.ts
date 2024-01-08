const wordToImage = (word: string) => {
    if (word === "lunch")
        return "https://www.yummytoddlerfood.com/wp-content/uploads/2022/04/Homemade-Lunch-1-horiz.jpg"
    else if (word === "breakfast")
        return "https://www.eatingwell.com/thmb/ZIsM-f-uVmqWx7JlJNsBFMCVOaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HashBrown-5-e1941c86066346e8a592e4c589d4933d.jpg"
    else if (word === "dinner")
        return "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Crab-pappardelle-8b41fd1.jpg?quality=90&resize=556,505"
    else if (word === "sweets")
        return "https://static.toiimg.com/photo/87304656.cms"
    else if (word === "healthy_meal")
        return "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg"
    else if (word === "all")

        return "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg"

    else return "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg"
}

export default wordToImage