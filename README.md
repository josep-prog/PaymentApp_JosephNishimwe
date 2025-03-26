Link : machine20learning.tech  
Link : [www.machine20learning.tech](http://www.machine20learning.tech)

 ***Rwanda Payment Platform***

Hello, my name is Joseph Nishimwe. This project integrates a payment system into a website using the Flutterwave API, enabling MTN Mobile Money and Airtel payments. Clients can order and pay for services directly from the website.

***Table of Contents***

1\. Project Overview  
2\. Features  
3\. Directory Structure  
4\. Local Setup and Execution  
5\. Deployment Instructions  
6\. Load Balancer Configuration  
7\. Error Handling  
8\. Demo Video  
9\. API Documentation and Attribution  
10\. Notes

 		 	1\.***Project Overview***

The goal of this project is to provide a seamless and secure payment experience for clients using MTN Mobile Money and Airtel. By integrating the Flutterwave API, clients can enter their phone number and payment amount, and immediately receive a prompt on their phone to complete the transaction.

**Key Benefits:**

\- ***Convenience:*** Clients no longer need to make unnecessary calls to complete payments.

\- ***Security Clients*** can verify payment completion, and Flutterwave provides transaction history for both clients and website owners.

\- ***Efficiency***: Payments are processed quickly and securely.

**Features**

\- ***Payment Integration***: Use Flutterwave API to process payments via MTN Mobile Money and Airtel.

\- ***User Interaction***: Clients can enter their phone number and payment amount directly on the website.  
\- ***OTP Verification:*** Clients receive an OTP via SMS to authorize payments.

***Directory Structure***

PaymentApp\_JosephNishimwe/  
├── counter.js  
├── index.html  
├── main.js  
├── package-lock.json  
├── package.json  
├── payment.js  
└── style.css

***Local Setup and Execution***

To run this project locally, follow these steps:

1\. *Prerequisites:*

   \- Ensure Node.js is installed on your machine. If not, download it from   
       
     nodejs.org(https://nodejs.org/).

2\. Install Dependencies:  
     
     npm install

*Initialize Node.js:*

     	npm init \-y

*Run the Application:*

node index.js

*Access the Application:*

	

| Link  | DESTINATION |
| :---- | :---- |
| [www.machine20learning.tech](http://www.machine20learning.tech)  | This will take you to payment page  |
| Machine20learning.tech  | This will take you to payment page   |

* Enter your phone number , name , email .  
    
* Continue with procedure  
    
* payment amount to proceed with the payment.

**Deployment Instructions**

To deploy this application on the provided web servers (Web01 and Web02), follow these steps:

***SSH into the Servers:***

ssh 6410-web-01@web01  
ssh 6410-web-02@web02

***Clone the Repository:***

git clone https://github.com/josep-prog/PaymentApp\_JosephNishimwe.git

***Install Dependencies:***

 TO RUN THIS 

* cd PaymentJosephNishimwe

* Within “script.js” add your Flutterwave api key

***Configure the Load Balancer:***

* Load balancer : lb-01 uses nginx to balance traffic request between web01 and web02  
    
* I installed nginx :   
  * After installing nginx, enter   
  * /var/www/html; place project here   
  * /etc/nginx/sites-enabled/default , make sure that project location is configured correctly,   “/var/www/html/PaymentApp\_JosephNishimwe;”  
    

***Load Balancer Configuration***

* To configure the load balancer (Lb01) for traffic distribution:  
    
* Edit the Load Balancer Configuration File:  
    
* Locate the configuration file “ /etc/nginx/sites-available/load\_balancer ”

upstream backend {  
    server 54.89.196.80:80;  
    server 54.196.136.88:80;  
}

server {  
    listen 80;  
    server\_name localhost;

    location / {  
        proxy\_pass http://backend;  
        proxy\_set\_header Host $host;  
        proxy\_set\_header X-Real-IP $remote\_addr;  
        proxy\_set\_header X-Forwarded-For $proxy\_add\_x\_forwarded\_for;  
        add\_header X-Served-By $upstream\_addr;  
    }  
}

***Demo Video***

A demo video showcasing the application's features is available here:

Link : 

***API Documentation and Attribution***

This project uses the Flutterwave API for payment processing. this allow integration of MTN api integration and airtel as will to allow client to pay without unnecessary complexities in payment process

Notes: 

* The Flutterwave API is currently in test mode. To activate live mode, you must provide the following documents:

* RRA (Rwanda Revenue Authority) document

* RDB (Rwanda Development Board) document

* Account owner's National ID

Link API Document: [https://developer.flutterwave.com/docs/getting-started](https://developer.flutterwave.com/docs/getting-started)  
 

**Author :** Joseph Nishimwe

**GitHub:** josep-prog  
Project Repository: https://github.com/josep-prog/PaymentJosephNishimwe.git

