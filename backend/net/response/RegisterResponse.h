#ifndef BACKEND_REGISTERRESPONSE_H
#define BACKEND_REGISTERRESPONSE_H

#include <string>
#include "Response.h"
#include "../IJsonSerializer.h"
using namespace std;

class RegisterResponse : public Response, public IJsonSerializer
{
    RegisterResponse(bool success, const string& message)
            : Response(success, message) {}

    RegisterResponse(bool success)
            : Response(success) {}

    void serialize( Json::Value& root ) override
    {
        root[this->SUCCESS] = this->_success;
        root[this->MESSAGE] = this->_message;
    }
};


#endif //BACKEND_REGISTERRESPONSE_H
