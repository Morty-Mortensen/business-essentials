//
// Created by Tyler Mortensen on 12/22/20.
//

#ifndef BACKEND_IJSONSERIALIZER_H
#define BACKEND_IJSONSERIALIZER_H
#include <json/json.h>

class IJsonSerializer
{
public:
    virtual void serialize(Json::Value& root) = 0;

};

#endif //BACKEND_IJSONSERIALIZER_H
