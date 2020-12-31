//
// Created by Tyler Mortensen on 12/22/20.
//

#include <string>
#include "Response.h"
#include "../IJsonSerializer.h"

using namespace std;

#ifndef BACKEND_LOGINRESPONSE_H
#define BACKEND_LOGINRESPONSE_H

class LoginResponse : public Response, public IJsonSerializer
{

public:
    LoginResponse() = default;
    ~LoginResponse() = default;

    LoginResponse(bool success, string message)
    : Response(success, message) {}

    LoginResponse(bool success)
    : Response(success) {}

    void serialize( Json::Value& root ) override
    {
        root[this->SUCCESS] = this->_success;
        root[this->MESSAGE] = this->_message;
    }
};

#endif //BACKEND_LOGINRESPONSE_H
