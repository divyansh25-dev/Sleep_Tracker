# Sleep Tracker

## About The Application

This sleep tracker application can be used to track the timings of sleep.Which will further helps in analysis of sleep patterns and can give various insights
if one uses the data for creating charts!

### Tech Stack : MERN

### The Schema : 

This App has two schemas one is for user details containing name,email,password etc.
The other one is for sleep details it contains sessionid,sleep start time,end time etc.

### Routes

#### User Routes:

get("/user") = To get user details

post('/user') = To register User.


post('/user/login') = To login User.


delete('/:id') = To Delete User.



#### Sleep Routes:

get('/:id') = To get details by Uid or Session Id

post('/start/:id') = To post start time of the user

post("/end/:id") = To post end time of user

post("/del/:sid") = To delete a record by session id



