import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {

        return axios.get('http://localhost:8080/hello-bean')
    }
}

export default new HelloWorldService()