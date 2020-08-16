#ifndef asmdom_test_utils_hpp
#define asmdom_test_utils_hpp

#include "../../src/cpp/asm-dom.hpp"
#include <emscripten/val.h>
#include <string>

void assertEquals(emscripten::val actual, emscripten::val expected);
void assertNotEquals(emscripten::val actual, emscripten::val expected);
emscripten::val getBodyFirstChild();
emscripten::val getRoot();
emscripten::val getNode(asmdom::VNode* vnode);
bool onClick(emscripten::val event);

#endif