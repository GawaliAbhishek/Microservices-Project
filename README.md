# Microservices

The Project contains two microservices running on different ports communicating with each other. other 3 services are Eureka Server for Service Registry , Hystrix Dashboard server for Service Monitoring and Fault handing , API Gateway to centralized the all requests

Micro-services :- Microservices is an architectural style that structures an application as a collection of services that are Highly maintainable and testable,Loosely coupled, Independently deployable ,Organized around business capabilities,Owned by a small team

View to Overall project

![Screenshot (162)](https://user-images.githubusercontent.com/89680568/197445838-97cba8a2-e82d-4607-a1bc-345e283ec827.png)



User-Service :- User-Service is a microservice that is connected with the mongodb atlas instance and provides the data of user in format of json this service gets successfully register on Eureka server as Eureka client also it has enabled hystrix in it for fault tolerance. it makes a Synchronous Rest call using RestTemplate to contact service to get data from it to append the same in its response

Accessing user-service via API-gateway running on port 8080 

![Screenshot (161)](https://user-images.githubusercontent.com/89680568/197446050-3096188e-a806-45ed-a79a-5ffe66c73df3.png)


Contact-Service :- Contact-Service is a microservice that is connected with the MYSQL instanace and provides the data of contacts of users. it uses DataJPA for connection with Database and performing read oprations.it gets sucessfully register on eureka server itself and also has enabled hystrix to fault tolorance

Accessing contact-service via API-gateway running on port 8080 

![Screenshot (160)](https://user-images.githubusercontent.com/89680568/197446176-e2ae1b8f-6f5a-4624-b27a-d5d182b4e5d0.png)




Login-Service :- Login-Service is a microservice that is connected with the MYSQL instanace and provides the data of contacts of users. it uses DataJPA for connection with Database. it also communicates with the Contact and user service to get the user Data.it gets sucessfully register on eureka server itself and also has enabled hystrix to fault tolorance

Accessing login-service via API-gateway running on port 8080 

![Screenshot (159)](https://user-images.githubusercontent.com/89680568/197446531-85d5d5b3-273c-4a4b-a019-f3406542d1ac.png)



EServer :- Eureka-Server is also a microservice used to register other microservices on it. every microservice has diffrent port numbers that perticular port number is registered on eureka. we give specific name to microservice by using eureka so that whenever we want we can access it using its name not by port number so if any microservice changes port or scales we dont have to change any code. eureka register that microservice port whenever it starts

All the microservices get registered at Eureka server . Eureka Dashboard

![Screenshot (155)](https://user-images.githubusercontent.com/89680568/197446582-4a4f91ad-db06-4bb2-814d-d1c3479ccaf2.png)


API-GateWay :- API Gateway is also a microservice which centralized all microservices . it is a comman gateway from which we can access any microservice of project it is implemented using spring-cloud-starter-gateway. also added with circuit breaker and actuator for fault handling by hystrix



Hystrix-Dashboard :- Hystrix is used to fault tolerance. also hystrix dashboard is used to monitor the requests comming to the server

Hystrix Dashboard for Monitaring the microservices 

![Screenshot (156)](https://user-images.githubusercontent.com/89680568/197446630-64d5dfb5-8c0a-4703-8597-ad855e0965e1.png)

This is Overall how the 5 loosly coupled services run together as microservice architectured Application 



# React 

The project also contains the React application interacting with these microservices for the data using rest api calls
a website with all required pages is designed in react 
incluing landing page, Login ,signup profile ,error page

Glance view to the Front End

The Login Page 

![Screenshot (164)](https://user-images.githubusercontent.com/89680568/197446977-18cb25fe-7b9b-4c07-bb59-8161c8e30de2.png)

The Signup page

![Screenshot (165)](https://user-images.githubusercontent.com/89680568/197447026-2a3c7379-df88-4e53-ba33-ba7f1001bb2f.png)

Landing Page

![Screenshot (166)](https://user-images.githubusercontent.com/89680568/197447065-f56f5a4e-faee-4efd-8165-1a8c0337a9cf.png)

Create Contact Page 

![Screenshot (167)](https://user-images.githubusercontent.com/89680568/197447113-5af9c7bf-f64c-475c-827e-4d6a2e3378cf.png)

Update Contact Page

![Screenshot (169)](https://user-images.githubusercontent.com/89680568/197447175-6a2992f9-e7f0-4db2-a635-cf5bf59985f2.png)

Profile Page

![Screenshot (172)](https://user-images.githubusercontent.com/89680568/197447225-b20fbef7-f918-45c2-830e-870ec309ed44.png)

Search Page

![Screenshot (168)](https://user-images.githubusercontent.com/89680568/197447319-0af68267-1643-4d28-9fec-67a727ef2fbd.png)

Delete Page

![Screenshot (171)](https://user-images.githubusercontent.com/89680568/197447341-9be6fa1d-3d18-4f8f-a567-ce493e232c8a.png)
