#include <iostream>
#include <string>

#include <zconf.h>
#include "config/mongoose/Server.h"
#include "config/mongoose/WebController.h"
#include "net/request/LoginRequest.h"
#include "net/response/LoginResponse.h"
#include <json/json.h>
#include "net/StaticJsonSerializer.h"


using namespace std;
using namespace Mongoose;


class TestController : public WebController
{
public:
    void login(Request &request, StreamResponse &response)
    {
        // LoginRequest

        cout << "I made it!" << endl;

        // Converts request to LoginRequest object.
        LoginRequest loginRequest;
        StaticJsonSerializer::deserialize(&loginRequest, request);

        cout << "Username = " << loginRequest.getUsername() << endl;
        cout << "Password = " << loginRequest.getPassword() << endl;

        LoginResponse loginResponse = LoginResponse();
        if (loginRequest.getUsername() == "Tyler" && loginRequest.getPassword() == "Password1" )
        {
            loginResponse.setSuccess(true);
        }
        else
        {
            loginResponse.setSuccess(false);
            loginResponse.setMessage("Incorrect Username or Password");
        }


        // Converts LoginResponse to JSON and stores it in "output".
        string output;
        StaticJsonSerializer::serialize(&loginResponse, output);

        cout << output << endl;

        response << output << endl;
    }

    void setup()
    {
        addRoute("GET", "/login", TestController, login);
    }
};

//void jsonTest(string testString, auto classType)
//{
//
//}



// -- Opens up chrome browser with CORS disabled.
// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
int main(int argc, char** argv) {
    TestController testController;

    Server server(8080);
    server.registerController(&testController);

    server.start();

    while (true) {
        sleep(10);
    }

//    string username = "Tyler";
//    string password = "123";
//
//    LoginRequest request = LoginRequest(username, password);
//    LoginResponse response = LoginResponse(true);
//
//
//    Json::Value root;
//    root["success"] = response.getSuccess();
//    root["message"] = response.getMessage();
//
//    Json::StyledWriter writer;
//    string output = writer.write(root);
//
//    cout << output << endl;











    return 0;
}
