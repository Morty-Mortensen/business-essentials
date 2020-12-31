cmake_minimum_required(VERSION 3.16)
project(backend)

set(CMAKE_CXX_STANDARD 14)

add_executable(backend
        main.cpp
        net/response/Response.h
        net/response/RegisterResponse.h
        net/response/LoginResponse.h
        net/request/RegisterRequest.h
        net/request/LoginRequest.h
        config/mongoose.c
        config/mongoose.h
        config/mongoose/Controller.cpp
        config/mongoose/Controller.h
        config/mongoose/JsonController.cpp
        config/mongoose/JsonController.h
        config/mongoose/JsonResponse.cpp
        config/mongoose/JsonResponse.h
        config/mongoose/Mutex.cpp
        config/mongoose/Mutex.h
        config/mongoose/Request.cpp
        config/mongoose/Request.h
        config/mongoose/RequestHandler.h
        config/mongoose/Response.cpp
        config/mongoose/Response.h
        config/mongoose/Server.cpp
        config/mongoose/Server.h
        config/mongoose/Session.cpp
        config/mongoose/Session.h
        config/mongoose/Sessions.cpp
        config/mongoose/Sessions.h
        config/mongoose/StreamResponse.cpp
        config/mongoose/StreamResponse.h
        config/mongoose/UploadFile.cpp
        config/mongoose/UploadFile.h
        config/mongoose/Utils.cpp
        config/mongoose/Utils.h
        config/mongoose/WebController.cpp
        config/mongoose/WebController.h
        config/mongoose/WebSocket.cpp
        config/mongoose/WebSocket.h
        config/mongoose/WebSockets.cpp
        config/mongoose/WebSockets.h
        net/IJsonSerializer.h
        net/IJsonDeserializer.h
        net/StaticJsonSerializer.h)

target_link_libraries(backend ${CMAKE_SOURCE_DIR}/config/libjsoncpp.a)