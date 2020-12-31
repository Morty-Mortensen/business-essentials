//
// Created by Tyler Mortensen on 12/22/20.
//

#ifndef BACKEND_IJSONDESERIALIZER_H
#define BACKEND_IJSONDESERIALIZER_H

#include <json/json.h>
class IJsonDeserializer
{
public:
    virtual void deserialize(Mongoose::Request& request) = 0;
};

#endif //BACKEND_IJSONDESERIALIZER_H
