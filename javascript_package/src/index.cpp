#include <napi.h>
#include <string>
#include "greeting.h"

// native C++ function that is assigned to 'greetHello' property on exports object
Napi::String greetHello(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  // call 'helloUser' function from the 'greeting.cpp' file 
  // Since a Napi::Function type receives Napi::CallbackInfo object and we can access arguments passed by the caller to this function from this object and we should be able to utilize helloUser function properly.
  // If you take a look at the CallbackInfo object documentation, we should be able to access arguments from the CallbackInfo object itself. An argument on this object is accessed using an index using CallbackInfo[index] syntax.
  // This syntax returns a Napi::Value object. If you take a look at Napi::Value documentation, it is inherited by other concrete classes. Hence, by using its As method, we should be able to cast a value to an appropriate type.
  //However, Napi::Value also provide some shortcut methods like ToString and ToNumber which converts argument value to a specific data type. As we are expecting the first argument to be a string, we’ll use ToString method.
  std::string user = (std::string) info[0].ToString();
  std::string result = helloUser( user );
  return Napi::String::New(env, result);
}


// callback method when module is registed with node.js
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(
    Napi::String::New(env, "greetHello"), // property name => 'greetHello'
    Napi::Function::New(env, greetHello) // property name => 'greetHello' function
  );

  // return exports object (always)
  return exports;
}

// register greet module which calls 'Init' method
NODE_API_MODULE(greet, Init)