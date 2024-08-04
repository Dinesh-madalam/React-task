const IplData = [
    
    {
        team : "Chenni Super Kings",
        cups : 5,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4c_Ksfgz7Y3VtxgR9vltd1MSvk0Xkp0dJA&s",
        players : 11,
        runners : 6
    
    },
   

{
    team : "mumbai indians",
    cups : 5,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU",
    players : 11,
    runners : 6

},

{
    team: "Kolkata Knight riders",
    cups : 3,
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpGRdaNrc2kU6IoZnS9esJB1nHbp6ltu46Q&s",
    players : 11,
    runners : 1

},
{
    team: "Sunriser's Hyderabad",
    cups : 2,
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ksxlmJyf7whK0eqivqZfyyTcOnEsAfsYPw&s",
    players : 11,
    runners : 2

},
{
    team: "Delhi Capitals",
    cups : 0,
    image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",
    players : 11,
    runners : 0

},
{
    team: "Gujarat Titans",
    cups : 1,
    image: "https://images-cricketcom.imgix.net/news-1710939356555?auto=compress,format&dpr=1&w=976&h400&q=80",
    players : 11,
    runners : 3

},
{
    team: "Luck now super Gaints",
    cups : 0,
    image: "https://imgk.timesnownews.com/media/Lucknow_Super_Giants_logo_1.png",
    players : 11,
    runners : 3

},
{
    team: "Punjab Kings",
    cups : 0,
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdV3Lq3sT7x87uEiZl49Wj_df3w2eCQeZZcg&s",
    players : 11,
    runners : 3

},
{
    team : "royal challenges banglore",
    cups : 0,
    image: "https://i.pinimg.com/236x/a6/40/a6/a640a6cd05dc2dfb58ce3ff3467df677.jpg",
    players : 11,
    runners : 4

},
{
team : "Rajasthan royals",
cups : 2,
image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYb1zMpzFMI5K-yKFjDORQpliGHhxMooW94Q&s",
players : 11,
runners : 3
}
]

export default IplData;



IplData.sort((a,b) => b.cups-a.cups);

export const Navlist = ["Home","Matches","Stadiums","Points Table"];


