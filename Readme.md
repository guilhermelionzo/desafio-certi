# 💪 Challenge - Instituto Certi Sapientia

This project is part of the selection process entitled Certi Sapientia. The project consists of an HTTP server that, for each GET request, returns a JSON whose long key is the number
in full the number sent in the path. Numbers can be in the range **[-99999, 99999]**.

Feel free to 

 ## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Firstly, you will need to install:

* [Docker](https://docs.docker.com/v17.09/engine/installation/#server) 🐳

* [Node.js](https://nodejs.org/en/download/) 🚀

* [GitHub cli](https://gist.github.com/derhuerst/1b15ff4652a867391f03) :octocat:

### Installing

A step by step that will guide you on how to run the project on your computer.

Clone the project repository:
```
> git clone https://github.com/guilhermelionzo/desafio-certi.git
```

Go to the project directory:
```
> cd desafio-certi
```

Create the project container:

```
> docker build -t desafio_g_lionco
```

Run the container on the port 3000:
```
> docker run -p 3000:3000 -d desafio_g_lionco
```

Run the command bellow to make sure the application 'desafio_g_lionco' is running: 
```
> docker ps
```

Now just access port 3000, on localhost, putting the number to be converted in words.
```
> curl http://localhost:3000/NUMERO_A_SER_CONVERTIDO
```
It is worth to mention that the number must be integer and be contained between -99999 and 99999. Any other input will result the following JSON:

```
{"error":"The input number another_input is greather than |99999| or is divergent from the standard"}
```

## 🔨Built With

* [Node.js](https://nodejs.org/en/download/) - JavaScript interpreter
* [Express](https://expressjs.com/) - Web framework
* [Docker](https://www.docker.com/) - Container environment

## 🙌 Authors

* **Guilherme Silva Lionço** - [LinkedIn](https://www.linkedin.com/in/guilherme-lion%C3%A7o-005564189/)

## 📃License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
