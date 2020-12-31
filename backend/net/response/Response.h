//
// Created by Tyler Mortensen on 12/22/20.
//
#include <string>

using namespace std;

#ifndef BACKEND_RESPONSE_H
#define BACKEND_RESPONSE_H

class Response
{
protected:
    bool _success;
    string _message;
public:
    const string SUCCESS = "success";
    const string MESSAGE = "message";

    Response() {}
    ~Response() = default;

    Response(bool success)
    {
        this->_success = success;
    }
    Response(bool success, const string& message)
    {
        this->_success = success;
        this->_message = message;
    }

    string getMessage()
    {
        return _message;
    }

    void setMessage(const string& message)
    {
        this->_message = message;
    }

    bool getSuccess()
    {
        return _success;
    }

    void setSuccess(bool success)
    {
        this->_success = success;
    }

};

#endif //BACKEND_RESPONSE_H
