//
// Created by Tyler Mortensen on 12/22/20.
//

#ifndef BACKEND_STATICJSONSERIALIZER_H
#define BACKEND_STATICJSONSERIALIZER_H

#include <json/json.h>
#include <string>
#include "IJsonSerializer.h"
#include "IJsonDeserializer.h"

using namespace std;


class StaticJsonSerializer
{
public:
    static bool serialize( IJsonSerializer* pObj, string& output )
    {
        if (pObj == NULL)
        {
            return false;
        }

        Json::Value serializeRoot;
        pObj->serialize(serializeRoot);

        Json::StyledWriter writer;
        output = writer.write( serializeRoot );

        return true;
    }

    static bool deserialize( IJsonDeserializer* pObj, Mongoose::Request& request )
    {
        if (pObj == NULL)
        {
            return false;
        }


        pObj->deserialize(request);
        return true;
    }
};


#endif //BACKEND_STATICJSONSERIALIZER_H
