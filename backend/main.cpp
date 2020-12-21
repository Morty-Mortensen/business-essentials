#include <iostream>
#include <string>

#include <zconf.h>
#include "config/mongoose/Server.h"
#include "config/mongoose/WebController.h"
//#include <json/json.h>


using namespace std;
using namespace Mongoose;

class TestController : public WebController
{
public:
    void hello(Request &request, StreamResponse &response)
    {
        // LoginRequest
        string username = request.get("username");
        string password = request.get("password");
        cout << "DATA: " << request.getData() << endl;

        cout << "Client username: " << username << endl;
        cout << "Client password: " << password << endl;

        response << "{\"success\":\"true\"}" << endl;
//        response << "{\"success\":\"true\", \"message\":\"\"\"\"}" << endl;


        // LoginResponse
//        response  << "{\"request\":\"Hello " << request.get("name", "... what is your name?") << "\"}" << endl;
    }

    void setup()
    {
        addRoute("GET", "/login", TestController, hello);
    }
};



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






    return 0;
}
