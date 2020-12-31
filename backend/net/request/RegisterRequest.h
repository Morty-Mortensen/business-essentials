#ifndef BACKEND_REGISTERREQUEST_H
#define BACKEND_REGISTERREQUEST_H

#include <string>
#include <json/json.h>
#include "../IJsonDeserializer.h"
//#include "../../config/mongoose/Request.h"

using namespace std;

class RegisterRequest : public IJsonDeserializer
{
private:
    string _firstname;
    string _lastname;
    string _username;
    string _password;
    string _imageBase64;

public:
    const string FIRSTNAME = "firstname";
    const string LASTNAME = "lastname";
    const string USERNAME = "username";
    const string PASSWORD = "password";
    const string IMAGE_BASE_64 = "image_base_64";

    RegisterRequest() {}
    RegisterRequest(const string& firstname, const string& lastname, const string& username, const string& password, const string& imageBase64)
    {
        this->_firstname = firstname;
        this->_lastname = lastname;
        this->_username = username;
        this->_password = password;
        this->_imageBase64 = imageBase64;
    }

    string getFirstname() const
    {
        return _firstname;
    }

    string getLastname() const
    {
        return _lastname;
    }

    string getImageBase64() const
    {
        return _imageBase64;
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
        this->_firstname = request.get(this->FIRSTNAME,"");
        this->_username = request.get(this->LASTNAME,"");
        this->_imageBase64 = request.get(this->IMAGE_BASE_64,"");
        this->_username = request.get(this->USERNAME,"");
        this->_password = request.get(this->PASSWORD, "");
    }
};

#endif //BACKEND_REGISTERREQUEST_H
