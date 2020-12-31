#ifndef BACKEND_LOGINREQUEST_H
#define BACKEND_LOGINREQUEST_H

#include <string>
#include "../IJsonDeserializer.h"
using namespace std;

class LoginRequest : public IJsonDeserializer
{
private:
    string _username;
    string _password;

public:
    const string USERNAME = "username";
    const string PASSWORD = "password";

    LoginRequest() {}
    LoginRequest(const string& username, const string& password)
    {
        this->_username = username;
        this->_password = password;
    }

    string getUsername() const
    {
        return _username;
    }

    string getPassword() const
    {
        return _password;
    }


    void deserialize( Mongoose::Request& request ) override
    {
        this->_username = request.get(this->USERNAME,"");
        this->_password = request.get(this->PASSWORD, "");
    }


};

#endif //BACKEND_LOGINREQUEST_H
