Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var Int8View = global.Int8Array;
  var Int16View = global.Int16Array;
  var Int32View = global.Int32Array;
  var Uint8View = global.Uint8Array;
  var Uint16View = global.Uint16Array;
  var Uint32View = global.Uint32Array;
  var Float32View = global.Float32Array;
  var Float64View = global.Float64Array;
  var HEAP8 = new Int8View(buffer);
  var HEAP16 = new Int16View(buffer);
  var HEAP32 = new Int32View(buffer);
  var HEAPU8 = new Uint8View(buffer);
  var HEAPU16 = new Uint16View(buffer);
  var HEAPU32 = new Uint32View(buffer);
  var HEAPF32 = new Float32View(buffer);
  var HEAPF64 = new Float64View(buffer);
  var byteLength = global.byteLength;


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var __emval_call_void_method=env.__emval_call_void_method;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var upcastPointer=env.upcastPointer;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var ___assert_fail=env.___assert_fail;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
  var getShiftFromSize=env.getShiftFromSize;
  var __emval_get_property=env.__emval_get_property;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var runDestructor=env.runDestructor;
  var throwInstanceAlreadyDeleted=env.throwInstanceAlreadyDeleted;
  var RegisteredPointer_fromWireType=env.RegisteredPointer_fromWireType;
  var __emval_get_global=env.__emval_get_global;
  var init_RegisteredPointer=env.init_RegisteredPointer;
  var ClassHandle_isAliasOf=env.ClassHandle_isAliasOf;
  var flushPendingDeletes=env.flushPendingDeletes;
  var makeClassHandle=env.makeClassHandle;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var __embind_register_class_constructor=env.__embind_register_class_constructor;
  var __emval_allocateDestructors=env.__emval_allocateDestructors;
  var init_ClassHandle=env.init_ClassHandle;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var ___syscall140=env.___syscall140;
  var ClassHandle_clone=env.ClassHandle_clone;
  var ___syscall146=env.___syscall146;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var throwBindingError=env.throwBindingError;
  var RegisteredClass=env.RegisteredClass;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __embind_register_value_object_field=env.__embind_register_value_object_field;
  var embind_init_charCodes=env.embind_init_charCodes;
  var __emval_as=env.__emval_as;
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var __embind_register_class_property=env.__embind_register_class_property;
  var __embind_register_emval=env.__embind_register_emval;
  var __embind_finalize_value_object=env.__embind_finalize_value_object;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var init_embind=env.init_embind;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var __emval_addMethodCaller=env.__emval_addMethodCaller;
  var heap32VectorToArray=env.heap32VectorToArray;
  var __emval_lookupTypes=env.__emval_lookupTypes;
  var __emval_call_method=env.__emval_call_method;
  var __emval_run_destructors=env.__emval_run_destructors;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var __embind_register_class=env.__embind_register_class;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __emval_take_value=env.__emval_take_value;
  var __embind_register_value_object=env.__embind_register_value_object;
  var _embind_repr=env._embind_repr;
  var _pthread_getspecific=env._pthread_getspecific;
  var __embind_register_class_function=env.__embind_register_class_function;
  var RegisteredPointer=env.RegisteredPointer;
  var craftInvokerFunction=env.craftInvokerFunction;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var _pthread_key_create=env._pthread_key_create;
  var __emval_set_property=env.__emval_set_property;
  var _pthread_setspecific=env._pthread_setspecific;
  var init_emval=env.init_emval;
  var shallowCopyInternalPointer=env.shallowCopyInternalPointer;
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var _abort=env._abort;
  var requireHandle=env.requireHandle;
  var getTypeName=env.getTypeName;
  var validateThis=env.validateThis;
  var exposePublicSymbol=env.exposePublicSymbol;
  var __embind_register_std_string=env.__embind_register_std_string;
  var __emval_get_method_caller=env.__emval_get_method_caller;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var getInheritedInstance=env.getInheritedInstance;
  var __emval_typeof=env.__emval_typeof;
  var setDelayFunction=env.setDelayFunction;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var __embind_register_void=env.__embind_register_void;
  var __embind_register_function=env.__embind_register_function;
  var RegisteredPointer_getPointee=env.RegisteredPointer_getPointee;
  var __emval_register=env.__emval_register;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var getStringOrSymbol=env.getStringOrSymbol;
  var __emval_incref=env.__emval_incref;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var readLatin1String=env.readLatin1String;
  var getBasestPointer=env.getBasestPointer;
  var getInheritedInstanceCount=env.getInheritedInstanceCount;
  var __embind_register_float=env.__embind_register_float;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var emval_get_global=env.emval_get_global;
  var genericPointerToWireType=env.genericPointerToWireType;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var __emval_new_cstring=env.__emval_new_cstring;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

function _emscripten_replace_memory(newBuffer) {
  if ((byteLength(newBuffer) & 0xffffff || byteLength(newBuffer) <= 0xffffff) || byteLength(newBuffer) > 0x80000000) return false;
  HEAP8 = new Int8View(newBuffer);
  HEAP16 = new Int16View(newBuffer);
  HEAP32 = new Int32View(newBuffer);
  HEAPU8 = new Uint8View(newBuffer);
  HEAPU16 = new Uint16View(newBuffer);
  HEAPU32 = new Uint32View(newBuffer);
  HEAPF32 = new Float32View(newBuffer);
  HEAPF64 = new Float64View(newBuffer);
  buffer = newBuffer;
  return true;
}

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __ZN38EmscriptenBindingInitializer_vnodedataC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 __ZN10emscripten12register_mapINSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES7_EENS_6class_INS1_3mapIT_T0_NS1_4lessISA_EENS5_INS1_4pairIKSA_SB_EEEEEENS_8internal11NoBaseClassEEEPKc($1,2364);
 __ZN10emscripten12register_mapINSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbEENS_6class_INS1_3mapIT_T0_NS1_4lessISA_EENS5_INS1_4pairIKSA_SB_EEEEEENS_8internal11NoBaseClassEEEPKc($1,2380);
 __embind_register_class((1144|0),(1152|0),(1168|0),(0|0),(3242|0),(3|0),(3245|0),(0|0),(3245|0),(0|0),(2394|0),(3247|0),(11|0));
 __embind_register_class_constructor((1144|0),1,(1760|0),(3242|0),(4|0),(1|0));
 $2 = (__Znwj(4)|0);
 store4($2,36);
 $3 = (__Znwj(4)|0);
 store4($3,36);
 __embind_register_class_property((1144|0),(2404|0),(1080|0),(3250|0),(1|0),($2|0),(1080|0),(3757|0),(1|0),($3|0));
 $4 = (__Znwj(4)|0);
 store4($4,48);
 $5 = (__Znwj(4)|0);
 store4($5,48);
 __embind_register_class_property((1144|0),(2408|0),(1080|0),(3250|0),(1|0),($4|0),(1080|0),(3757|0),(1|0),($5|0));
 $6 = (__Znwj(4)|0);
 store4($6,12);
 $7 = (__Znwj(4)|0);
 store4($7,12);
 __embind_register_class_property((1144|0),(2411|0),(1024|0),(3250|0),(2|0),($6|0),(1024|0),(3757|0),(2|0),($7|0));
 $8 = (__Znwj(4)|0);
 store4($8,0);
 $9 = (__Znwj(4)|0);
 store4($9,0);
 __embind_register_class_property((1144|0),(2417|0),(1024|0),(3250|0),(2|0),($8|0),(1024|0),(3757|0),(2|0),($9|0));
 $10 = (__Znwj(4)|0);
 store4($10,24);
 $11 = (__Znwj(4)|0);
 store4($11,24);
 __embind_register_class_property((1144|0),(2423|0),(1104|0),(3250|0),(3|0),($10|0),(1104|0),(3757|0),(3|0),($11|0));
 STACKTOP = sp;return;
}
function __ZN10emscripten12register_mapINSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES7_EENS_6class_INS1_3mapIT_T0_NS1_4lessISA_EENS5_INS1_4pairIKSA_SB_EEEEEENS_8internal11NoBaseClassEEEPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$repack4$i$i = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_class((1024|0),(1032|0),(1048|0),(0|0),(3242|0),(5|0),(3245|0),(0|0),(3245|0),(0|0),($1|0),(3247|0),(12|0));
 __embind_register_class_constructor((1024|0),1,(1680|0),(3242|0),(6|0),(2|0));
 $2 = (__Znwj(8)|0);
 store4($2,(7));
 $$repack4$i$i = ((($2)) + 4|0);
 store4($$repack4$i$i,0);
 __embind_register_class_function((1024|0),(2881|0),2,(1684|0),(3250|0),(4|0),($2|0),0);
 $3 = (__Znwj(4)|0);
 store4($3,(5));
 __embind_register_class_function((1024|0),(2886|0),3,(1692|0),(3374|0),(6|0),($3|0),0);
 $4 = (__Znwj(4)|0);
 store4($4,(4));
 __embind_register_class_function((1024|0),(2890|0),4,(1704|0),(3379|0),(4|0),($4|0),0);
 return;
}
function __ZN10emscripten12register_mapINSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbEENS_6class_INS1_3mapIT_T0_NS1_4lessISA_EENS5_INS1_4pairIKSA_SB_EEEEEENS_8internal11NoBaseClassEEEPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$repack4$i$i = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_class((1104|0),(1112|0),(1128|0),(0|0),(3242|0),(8|0),(3245|0),(0|0),(3245|0),(0|0),($1|0),(3247|0),(13|0));
 __embind_register_class_constructor((1104|0),1,(1720|0),(3242|0),(9|0),(3|0));
 $2 = (__Znwj(8)|0);
 store4($2,(10));
 $$repack4$i$i = ((($2)) + 4|0);
 store4($$repack4$i$i,0);
 __embind_register_class_function((1104|0),(2881|0),2,(1724|0),(3250|0),(6|0),($2|0),0);
 $3 = (__Znwj(4)|0);
 store4($3,(7));
 __embind_register_class_function((1104|0),(2886|0),3,(1732|0),(3374|0),(7|0),($3|0),0);
 $4 = (__Znwj(4)|0);
 store4($4,(5));
 __embind_register_class_function((1104|0),(2890|0),4,(1744|0),(3379|0),(5|0),($4|0),0);
 return;
}
function __ZN34EmscriptenBindingInitializer_vnodeC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 __embind_register_value_object((1184|0),(2434|0),(3769|0),(4|0),(3247|0),(14|0));
 $2 = (__Znwj(4)|0);
 store4($2,0);
 $3 = (__Znwj(4)|0);
 store4($3,0);
 __embind_register_value_object_field((1184|0),(2440|0),(1080|0),(3250|0),(8|0),($2|0),(1080|0),(3757|0),(6|0),($3|0));
 $4 = (__Znwj(4)|0);
 store4($4,12);
 $5 = (__Znwj(4)|0);
 store4($5,12);
 __embind_register_value_object_field((1184|0),(2404|0),(1080|0),(3250|0),(8|0),($4|0),(1080|0),(3757|0),(6|0),($5|0));
 $6 = (__Znwj(4)|0);
 store4($6,24);
 $7 = (__Znwj(4)|0);
 store4($7,24);
 __embind_register_value_object_field((1184|0),(2444|0),(1080|0),(3250|0),(8|0),($6|0),(1080|0),(3757|0),(6|0),($7|0));
 $8 = (__Znwj(4)|0);
 store4($8,36);
 $9 = (__Znwj(4)|0);
 store4($9,36);
 __embind_register_value_object_field((1184|0),(2449|0),(1144|0),(3250|0),(9|0),($8|0),(1144|0),(3757|0),(7|0),($9|0));
 $10 = (__Znwj(4)|0);
 store4($10,96);
 $11 = (__Znwj(4)|0);
 store4($11,96);
 __embind_register_value_object_field((1184|0),(2454|0),(1064|0),(3250|0),(10|0),($10|0),(1064|0),(3757|0),(8|0),($11|0));
 $12 = (__Znwj(4)|0);
 store4($12,100);
 $13 = (__Znwj(4)|0);
 store4($13,100);
 __embind_register_value_object_field((1184|0),(2458|0),(1224|0),(3250|0),(11|0),($12|0),(1224|0),(3757|0),(9|0),($13|0));
 __embind_finalize_value_object((1184|0));
 __ZN10emscripten15register_vectorI5VNodeEENS_6class_INSt3__26vectorIT_NS3_9allocatorIS5_EEEENS_8internal11NoBaseClassEEEPKc($1,2467);
 STACKTOP = sp;return;
}
function __ZN10emscripten15register_vectorI5VNodeEENS_6class_INSt3__26vectorIT_NS3_9allocatorIS5_EEEENS_8internal11NoBaseClassEEEPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$repack4$i$i = 0, $$repack4$i$i28 = 0, $$repack4$i$i34 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_class((1224|0),(1248|0),(1264|0),(0|0),(3242|0),(11|0),(3245|0),(0|0),(3245|0),(0|0),($1|0),(3247|0),(15|0));
 __embind_register_class_constructor((1224|0),1,(1764|0),(3242|0),(12|0),(5|0));
 $2 = (__Znwj(8)|0);
 store4($2,(1));
 $$repack4$i$i = ((($2)) + 4|0);
 store4($$repack4$i$i,0);
 __embind_register_class_function((1224|0),(3902|0),3,(1768|0),(3757|0),(10|0),($2|0),0);
 $3 = (__Znwj(8)|0);
 store4($3,(11));
 $$repack4$i$i28 = ((($3)) + 4|0);
 store4($$repack4$i$i28,0);
 __embind_register_class_function((1224|0),(3912|0),4,(1780|0),(3379|0),(6|0),($3|0),0);
 $4 = (__Znwj(8)|0);
 store4($4,(13));
 $$repack4$i$i34 = ((($4)) + 4|0);
 store4($$repack4$i$i34,0);
 __embind_register_class_function((1224|0),(2881|0),2,(1796|0),(3250|0),(12|0),($4|0),0);
 $5 = (__Znwj(4)|0);
 store4($5,(13));
 __embind_register_class_function((1224|0),(2886|0),3,(1804|0),(3374|0),(8|0),($5|0),0);
 $6 = (__Znwj(4)|0);
 store4($6,(9));
 __embind_register_class_function((1224|0),(2890|0),4,(1816|0),(4008|0),(1|0),($6|0),0);
 return;
}
function __Z7tagNameN10emscripten3valE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = load4($1);
 $4 = (__emval_new_cstring((2607|0))|0);
 $5 = (__emval_get_property(($3|0),($4|0))|0);
 __emval_decref(($4|0));
 store4($2,$5);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$2);
 $6 = load4($2);
 __emval_decref(($6|0));
 STACKTOP = sp;return;
}
function __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = load4($1);
 $4 = (+__emval_as(($3|0),(1080|0),($2|0)));
 $5 = load4($2);
 $6 = (~~(($4))>>>0);
 $7 = $6;
 $8 = ((($7)) + 4|0);
 $9 = load4($7);
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($0,$8,$9);
 __emval_run_destructors(($5|0));
 STACKTOP = sp;return;
}
function __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = (__emval_new_cstring(($1|0))|0);
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = (($12) + 4)|0;
 $14 = (_malloc($13)|0);
 store4($14,$12);
 $15 = ((($14)) + 4|0);
 $16 = load4($2);
 $17 = $8 ? $16 : $2;
 _memcpy(($15|0),($17|0),($12|0))|0;
 store4($3,$14);
 $18 = (__emval_take_value((1080|0),($3|0))|0);
 __emval_set_property(($4|0),($5|0),($18|0));
 __emval_decref(($18|0));
 __emval_decref(($5|0));
 STACKTOP = sp;return;
}
function __Z14getTextContentN10emscripten3valE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = load4($1);
 $4 = (__emval_new_cstring((2615|0))|0);
 $5 = (__emval_get_property(($3|0),($4|0))|0);
 __emval_decref(($4|0));
 store4($2,$5);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($0,$2);
 $6 = load4($2);
 __emval_decref(($6|0));
 STACKTOP = sp;return;
}
function __Z9isElementN10emscripten3valE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = load4($0);
 $3 = (__emval_new_cstring((2627|0))|0);
 $4 = (__emval_get_property(($2|0),($3|0))|0);
 __emval_decref(($3|0));
 $5 = (+__emval_as(($4|0),(1616|0),($1|0)));
 $6 = load4($1);
 __emval_run_destructors(($6|0));
 __emval_decref(($4|0));
 $7 = (~~(($5)));
 $8 = ($7|0)==(1);
 STACKTOP = sp;return ($8|0);
}
function __Z6isTextN10emscripten3valE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = load4($0);
 $3 = (__emval_new_cstring((2627|0))|0);
 $4 = (__emval_get_property(($2|0),($3|0))|0);
 __emval_decref(($3|0));
 $5 = (+__emval_as(($4|0),(1616|0),($1|0)));
 $6 = load4($1);
 __emval_run_destructors(($6|0));
 __emval_decref(($4|0));
 $7 = (~~(($5)));
 $8 = ($7|0)==(3);
 STACKTOP = sp;return ($8|0);
}
function __Z9isCommentN10emscripten3valE($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = load4($0);
 $3 = (__emval_new_cstring((2627|0))|0);
 $4 = (__emval_get_property(($2|0),($3|0))|0);
 __emval_decref(($3|0));
 $5 = (+__emval_as(($4|0),(1616|0),($1|0)));
 $6 = load4($1);
 __emval_run_destructors(($6|0));
 __emval_decref(($4|0));
 $7 = (~~(($5)));
 $8 = ($7|0)==(8);
 STACKTOP = sp;return ($8|0);
}
function __Z9isDefinedN10emscripten3valE($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp + 4|0;
 $2 = sp;
 $3 = load4($0);
 $4 = (__emval_typeof(($3|0))|0);
 store4($2,$4);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($1,$2);
 $5 = load4($2);
 __emval_decref(($5|0));
 $6 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($1,2636)|0);
 $7 = ($6|0)==(0);
 if ($7) {
  $10 = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($1);
  STACKTOP = sp;return ($10|0);
 }
 $8 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($1,2646)|0);
 $9 = ($8|0)!=(0);
 $10 = $9;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($1);
 STACKTOP = sp;return ($10|0);
}
function __Z5addNSR5VNode($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ((($0)) + 84|0);
 ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($1,2651,26);
 $3 = ((($2)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = load4($2);
  store1($6,0);
  $7 = ((($0)) + 88|0);
  store4($7,0);
 } else {
  store1($2,0);
  store1($3,0);
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($2,0);
 ; store8($2,load8($1,4),4); store4($2+8 | 0,load4($1+8 | 0,4),4);
 ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($1);
 $8 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($0,2678)|0);
 $9 = ($8|0)==(0);
 if ($9) {
  STACKTOP = sp;return;
 }
 $10 = ((($0)) + 100|0);
 $11 = load4($10);
 $12 = ((($0)) + 104|0);
 $13 = load4($12);
 $14 = ($11|0)==($13|0);
 if ($14) {
  STACKTOP = sp;return;
 }
 $15 = $11;
 $16 = $13;
 $17 = (($16) - ($15))|0;
 $18 = ($17|0)==(0);
 if ($18) {
  STACKTOP = sp;return;
 }
 $19 = (($17|0) / 112)&-1;
 $20 = (($19) + -1)|0;
 $21 = (($11) + (($20*112)|0)|0);
 __Z5addNSR5VNode($21);
 $22 = ($20|0)==(0);
 if ($22) {
  STACKTOP = sp;return;
 } else {
  $24 = $20;
 }
 while(1) {
  $$pre = load4($10);
  $23 = (($24) + -1)|0;
  $25 = (($$pre) + (($23*112)|0)|0);
  __Z5addNSR5VNode($25);
  $26 = ($23|0)==(0);
  if ($26) {
   break;
  } else {
   $24 = $23;
  }
 }
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = load4($0);
 $4 = (($2) - ($3))|0;
 $5 = (($4|0) / 112)&-1;
 return ($5|0);
}
function __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 36|0);
 $3 = ((($0)) + 40|0);
 store4($3,0);
 $4 = ((($0)) + 44|0);
 store4($4,0);
 $5 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($2,$5);
 $6 = ((($0)) + 48|0);
 $7 = ((($0)) + 52|0);
 store4($7,0);
 $8 = ((($0)) + 56|0);
 store4($8,0);
 $9 = ((($0)) + 52|0);
 store4($6,$9);
 $10 = ((($0)) + 60|0);
 $11 = ((($0)) + 64|0);
 store4($11,0);
 $12 = ((($0)) + 68|0);
 store4($12,0);
 $13 = ((($0)) + 64|0);
 store4($10,$13);
 $14 = ((($0)) + 72|0);
 ; store8($14,i64_const(0,0),4); store8($14+8|0,i64_const(0,0),4); store8($14+16|0,i64_const(0,0),4);
 $15 = ((($0)) + 96|0);
 store4($15,(1));
 $16 = ((($0)) + 100|0);
 store4($16,0);
 $17 = ((($0)) + 104|0);
 store4($17,0);
 $18 = ((($0)) + 108|0);
 store4($18,0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($0,$1)|0);
 $19 = ((($0)) + 12|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($19,$14)|0);
 $20 = ((($0)) + 11|0);
 $21 = load1($20);
 $22 = ($21<<24>>24)<(0);
 $23 = ((($0)) + 4|0);
 $24 = load4($23);
 $25 = $21&255;
 $26 = $22 ? $24 : $25;
 $27 = ($26>>>0)>(2);
 if (!($27)) {
  return;
 }
 $28 = load4($0);
 $29 = $22 ? $28 : $0;
 $30 = load1($29);
 $31 = ($30<<24>>24)==(115);
 if (!($31)) {
  return;
 }
 $32 = ((($29)) + 1|0);
 $33 = load1($32);
 $34 = ($33<<24>>24)==(118);
 if (!($34)) {
  return;
 }
 $35 = ((($29)) + 2|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)==(103);
 if (!($37)) {
  return;
 }
 $38 = ($26|0)==(3);
 L13: do {
  if (!($38)) {
   $39 = ((($29)) + 3|0);
   $40 = load1($39);
   switch ($40<<24>>24) {
   case 35: case 46:  {
    break L13;
    break;
   }
   default: {
   }
   }
   return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 return;
}
function __ZN5VNodeD2Ev($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 100|0);
 $2 = load4($1);
 $3 = ($2|0)==(0|0);
 if (!($3)) {
  $4 = ((($0)) + 104|0);
  $5 = load4($4);
  $6 = ($5|0)==($2|0);
  if ($6) {
   $11 = $2;
  } else {
   $8 = $5;
   while(1) {
    $7 = ((($8)) + -112|0);
    store4($4,$7);
    __ZN5VNodeD2Ev($7);
    $9 = load4($4);
    $10 = ($9|0)==($2|0);
    if ($10) {
     break;
    } else {
     $8 = $9;
    }
   }
   $$pre = load4($1);
   $11 = $$pre;
  }
  __ZdlPv($11);
 }
 $12 = ((($0)) + 96|0);
 $13 = load4($12);
 __emval_decref(($13|0));
 $14 = ((($0)) + 84|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($14);
 $15 = ((($0)) + 72|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($15);
 $16 = ((($0)) + 60|0);
 $17 = ((($0)) + 64|0);
 $18 = load4($17);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($16,$18);
 $19 = ((($0)) + 48|0);
 $20 = ((($0)) + 52|0);
 $21 = load4($20);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($19,$21);
 $22 = ((($0)) + 36|0);
 $23 = ((($0)) + 40|0);
 $24 = load4($23);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($22,$24);
 $25 = ((($0)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($25);
 $26 = ((($0)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($26);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($0);
 return;
}
function __Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 36|0);
 $4 = ((($0)) + 40|0);
 store4($4,0);
 $5 = ((($0)) + 44|0);
 store4($5,0);
 $6 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($3,$6);
 $7 = ((($0)) + 48|0);
 $8 = ((($0)) + 52|0);
 store4($8,0);
 $9 = ((($0)) + 56|0);
 store4($9,0);
 $10 = ((($0)) + 52|0);
 store4($7,$10);
 $11 = ((($0)) + 60|0);
 $12 = ((($0)) + 64|0);
 store4($12,0);
 $13 = ((($0)) + 68|0);
 store4($13,0);
 $14 = ((($0)) + 64|0);
 store4($11,$14);
 $15 = ((($0)) + 72|0);
 ; store8($15,i64_const(0,0),4); store8($15+8|0,i64_const(0,0),4); store8($15+16|0,i64_const(0,0),4);
 $16 = ((($0)) + 96|0);
 store4($16,(1));
 $17 = ((($0)) + 100|0);
 store4($17,0);
 $18 = ((($0)) + 104|0);
 store4($18,0);
 $19 = ((($0)) + 108|0);
 store4($19,0);
 if ($2) {
  $20 = ((($0)) + 24|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($20,$1)|0);
 } else {
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($0,$1)|0);
 }
 $21 = ((($0)) + 12|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($21,$15)|0);
 $22 = ((($0)) + 11|0);
 $23 = load1($22);
 $24 = ($23<<24>>24)<(0);
 $25 = ((($0)) + 4|0);
 $26 = load4($25);
 $27 = $23&255;
 $28 = $24 ? $26 : $27;
 $29 = ($28>>>0)>(2);
 if (!($29)) {
  return;
 }
 $30 = load4($0);
 $31 = $24 ? $30 : $0;
 $32 = load1($31);
 $33 = ($32<<24>>24)==(115);
 if (!($33)) {
  return;
 }
 $34 = ((($31)) + 1|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)==(118);
 if (!($36)) {
  return;
 }
 $37 = ((($31)) + 2|0);
 $38 = load1($37);
 $39 = ($38<<24>>24)==(103);
 if (!($39)) {
  return;
 }
 $40 = ($28|0)==(3);
 L17: do {
  if (!($40)) {
   $41 = ((($31)) + 3|0);
   $42 = load1($41);
   switch ($42<<24>>24) {
   case 35: case 46:  {
    break L17;
    break;
   }
   default: {
   }
   }
   return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 return;
}
function __Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE5VNode($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre$i$i$i = 0, $$pre$i$i6 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi9$i$iZ2D = 0, $$pre8$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp;
 $4 = sp + 16|0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$1);
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 $5 = ((($0)) + 100|0);
 __ZN5VNodeC2ERKS_($4,$2);
 $6 = (__Znwj(112)|0);
 $7 = ((($6)) + 112|0);
 $8 = $6;
 $9 = $7;
 __ZN5VNodeC2ERKS_($6,$4);
 $10 = ((($6)) + 112|0);
 $11 = load4($5);
 $12 = ($11|0)==(0|0);
 $13 = $10;
 if ($12) {
  $$pre$i$i6 = ((($0)) + 104|0);
  $$pre8$i$i = ((($0)) + 108|0);
  $$pre$phi$i$iZ2D = $$pre$i$i6;$$pre$phi9$i$iZ2D = $$pre8$i$i;
 } else {
  $14 = ((($0)) + 104|0);
  $15 = load4($14);
  $16 = ($15|0)==($11|0);
  if ($16) {
   $21 = $11;
  } else {
   $18 = $15;
   while(1) {
    $17 = ((($18)) + -112|0);
    store4($14,$17);
    __ZN5VNodeD2Ev($17);
    $19 = load4($14);
    $20 = ($19|0)==($11|0);
    if ($20) {
     break;
    } else {
     $18 = $19;
    }
   }
   $$pre$i$i$i = load4($5);
   $21 = $$pre$i$i$i;
  }
  __ZdlPv($21);
  $22 = ((($0)) + 108|0);
  store4($22,0);
  store4($14,0);
  store4($5,0);
  $$pre$phi$i$iZ2D = $14;$$pre$phi9$i$iZ2D = $22;
 }
 store4($5,$8);
 store4($$pre$phi$i$iZ2D,$13);
 store4($$pre$phi9$i$iZ2D,$9);
 __ZN5VNodeD2Ev($4);
 $23 = ((($0)) + 12|0);
 $24 = ((($0)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($23,$24)|0);
 $25 = ((($0)) + 11|0);
 $26 = load1($25);
 $27 = ($26<<24>>24)<(0);
 $28 = ((($0)) + 4|0);
 $29 = load4($28);
 $30 = $26&255;
 $31 = $27 ? $29 : $30;
 $32 = ($31>>>0)>(2);
 if (!($32)) {
  STACKTOP = sp;return;
 }
 $33 = load4($0);
 $34 = $27 ? $33 : $0;
 $35 = load1($34);
 $36 = ($35<<24>>24)==(115);
 if (!($36)) {
  STACKTOP = sp;return;
 }
 $37 = ((($34)) + 1|0);
 $38 = load1($37);
 $39 = ($38<<24>>24)==(118);
 if (!($39)) {
  STACKTOP = sp;return;
 }
 $40 = ((($34)) + 2|0);
 $41 = load1($40);
 $42 = ($41<<24>>24)==(103);
 if (!($42)) {
  STACKTOP = sp;return;
 }
 $43 = ($31|0)==(3);
 L22: do {
  if (!($43)) {
   $44 = ((($34)) + 3|0);
   $45 = load1($44);
   switch ($45<<24>>24) {
   case 35: case 46:  {
    break L22;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZN5VNodeC2ERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($0,$1);
 $2 = ((($0)) + 12|0);
 $3 = ((($1)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($2,$3);
 $4 = ((($0)) + 24|0);
 $5 = ((($1)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$5);
 $6 = ((($0)) + 36|0);
 $7 = ((($1)) + 36|0);
 __ZN9VNodeDataC2ERKS_($6,$7);
 $8 = ((($0)) + 96|0);
 $9 = ((($1)) + 96|0);
 $10 = load4($9);
 store4($8,$10);
 __emval_incref(($10|0));
 $11 = ((($0)) + 100|0);
 $12 = ((($1)) + 100|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($11,$12);
 return;
}
function __Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$1);
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 $4 = ((($0)) + 24|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($4,$2)|0);
 STACKTOP = sp;return;
}
function __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$byval_copy4 = 0, $$byval_copy5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $$byval_copy5 = sp + 24|0;
 $$byval_copy4 = sp + 20|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = sp + 8|0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($5,$1);
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 $6 = ((($0)) + 36|0);
 $7 = ($6|0)==($2|0);
 if (!($7)) {
  $8 = load4($2);
  store4($3,$8);
  $9 = ((($2)) + 4|0);
  store4($4,$9);
  ; store4($$byval_copy4,load4($3,4),4);
  ; store4($$byval_copy5,load4($4,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($6,$$byval_copy4,$$byval_copy5);
 }
 if (!($7)) {
  $10 = ((($2)) + 12|0);
  $11 = ((($0)) + 48|0);
  $12 = load4($10);
  store4($3,$12);
  $13 = ((($2)) + 16|0);
  store4($4,$13);
  ; store4($$byval_copy4,load4($3,4),4);
  ; store4($$byval_copy5,load4($4,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($11,$$byval_copy4,$$byval_copy5);
 }
 if ($7) {
  $18 = ((($0)) + 72|0);
  $19 = ((($2)) + 36|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($18,$19)|0);
  $20 = ((($0)) + 84|0);
  $21 = ((($2)) + 48|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($20,$21)|0);
  STACKTOP = sp;return;
 }
 $14 = ((($2)) + 24|0);
 $15 = ((($0)) + 60|0);
 $16 = load4($14);
 store4($3,$16);
 $17 = ((($2)) + 28|0);
 store4($4,$17);
 ; store4($$byval_copy4,load4($3,4),4);
 ; store4($$byval_copy5,load4($4,4),4);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($15,$$byval_copy4,$$byval_copy5);
 $18 = ((($0)) + 72|0);
 $19 = ((($2)) + 36|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($18,$19)|0);
 $20 = ((($0)) + 84|0);
 $21 = ((($2)) + 48|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($20,$21)|0);
 STACKTOP = sp;return;
}
function __Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorI5VNodeNS3_IS7_EEEE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$1);
 __Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE($0,$3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 $4 = ((($0)) + 100|0);
 $5 = ($4|0)==($2|0);
 if (!($5)) {
  $6 = load4($2);
  $7 = ((($2)) + 4|0);
  $8 = load4($7);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($4,$6,$8);
 }
 $9 = ((($0)) + 12|0);
 $10 = ((($0)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($9,$10)|0);
 $11 = ((($0)) + 11|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)<(0);
 $14 = ((($0)) + 4|0);
 $15 = load4($14);
 $16 = $12&255;
 $17 = $13 ? $15 : $16;
 $18 = ($17>>>0)>(2);
 if (!($18)) {
  STACKTOP = sp;return;
 }
 $19 = load4($0);
 $20 = $13 ? $19 : $0;
 $21 = load1($20);
 $22 = ($21<<24>>24)==(115);
 if (!($22)) {
  STACKTOP = sp;return;
 }
 $23 = ((($20)) + 1|0);
 $24 = load1($23);
 $25 = ($24<<24>>24)==(118);
 if (!($25)) {
  STACKTOP = sp;return;
 }
 $26 = ((($20)) + 2|0);
 $27 = load1($26);
 $28 = ($27<<24>>24)==(103);
 if (!($28)) {
  STACKTOP = sp;return;
 }
 $29 = ($17|0)==(3);
 L16: do {
  if (!($29)) {
   $30 = ((($20)) + 3|0);
   $31 = load1($30);
   switch ($31<<24>>24) {
   case 35: case 46:  {
    break L16;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData5VNode($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$pre$i$i$i = 0, $$pre$i$i7 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi9$i$iZ2D = 0, $$pre8$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0;
 $4 = sp + 60|0;
 $5 = sp;
 $6 = sp + 72|0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$1);
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $7 = ((($5)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
 $8 = ((($5)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($8);
 $9 = ((($5)) + 24|0);
 $10 = ((($5)) + 28|0);
 $11 = load4($10);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($9,$11);
 $12 = ((($5)) + 12|0);
 $13 = ((($5)) + 16|0);
 $14 = load4($13);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($12,$14);
 $15 = ((($5)) + 4|0);
 $16 = load4($15);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($5,$16);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 $17 = ((($0)) + 100|0);
 __ZN5VNodeC2ERKS_($6,$3);
 $18 = (__Znwj(112)|0);
 $19 = ((($18)) + 112|0);
 $20 = $18;
 $21 = $19;
 __ZN5VNodeC2ERKS_($18,$6);
 $22 = ((($18)) + 112|0);
 $23 = load4($17);
 $24 = ($23|0)==(0|0);
 $25 = $22;
 if ($24) {
  $$pre$i$i7 = ((($0)) + 104|0);
  $$pre8$i$i = ((($0)) + 108|0);
  $$pre$phi$i$iZ2D = $$pre$i$i7;$$pre$phi9$i$iZ2D = $$pre8$i$i;
 } else {
  $26 = ((($0)) + 104|0);
  $27 = load4($26);
  $28 = ($27|0)==($23|0);
  if ($28) {
   $33 = $23;
  } else {
   $30 = $27;
   while(1) {
    $29 = ((($30)) + -112|0);
    store4($26,$29);
    __ZN5VNodeD2Ev($29);
    $31 = load4($26);
    $32 = ($31|0)==($23|0);
    if ($32) {
     break;
    } else {
     $30 = $31;
    }
   }
   $$pre$i$i$i = load4($17);
   $33 = $$pre$i$i$i;
  }
  __ZdlPv($33);
  $34 = ((($0)) + 108|0);
  store4($34,0);
  store4($26,0);
  store4($17,0);
  $$pre$phi$i$iZ2D = $26;$$pre$phi9$i$iZ2D = $34;
 }
 store4($17,$20);
 store4($$pre$phi$i$iZ2D,$25);
 store4($$pre$phi9$i$iZ2D,$21);
 __ZN5VNodeD2Ev($6);
 $35 = ((($0)) + 12|0);
 $36 = ((($0)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($35,$36)|0);
 $37 = ((($0)) + 11|0);
 $38 = load1($37);
 $39 = ($38<<24>>24)<(0);
 $40 = ((($0)) + 4|0);
 $41 = load4($40);
 $42 = $38&255;
 $43 = $39 ? $41 : $42;
 $44 = ($43>>>0)>(2);
 if (!($44)) {
  STACKTOP = sp;return;
 }
 $45 = load4($0);
 $46 = $39 ? $45 : $0;
 $47 = load1($46);
 $48 = ($47<<24>>24)==(115);
 if (!($48)) {
  STACKTOP = sp;return;
 }
 $49 = ((($46)) + 1|0);
 $50 = load1($49);
 $51 = ($50<<24>>24)==(118);
 if (!($51)) {
  STACKTOP = sp;return;
 }
 $52 = ((($46)) + 2|0);
 $53 = load1($52);
 $54 = ($53<<24>>24)==(103);
 if (!($54)) {
  STACKTOP = sp;return;
 }
 $55 = ($43|0)==(3);
 L22: do {
  if (!($55)) {
   $56 = ((($46)) + 3|0);
   $57 = load1($56);
   switch ($57<<24>>24) {
   case 35: case 46:  {
    break L22;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZN9VNodeDataC2ERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i12 = 0, $$0$i$i$i$i$i$i23 = 0, $$0$i$i$i$i$i14 = 0, $$0$i$i$i$i$i25 = 0, $$05$i$i$i$i$i = 0, $$05$i$i$i$i$i17 = 0, $$05$i$i$i$i$i28 = 0, $$byval_copy2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy2 = sp + 4|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 store4($3,0);
 $4 = ((($0)) + 8|0);
 store4($4,0);
 $5 = ((($0)) + 4|0);
 store4($0,$5);
 $6 = load4($1);
 $7 = ((($1)) + 4|0);
 $8 = ($6|0)==($7|0);
 if (!($8)) {
  $9 = $5;
  $11 = $6;$13 = $6;
  while(1) {
   $10 = ((($11)) + 16|0);
   store4($2,$9);
   ; store4($$byval_copy2,load4($2,4),4);
   (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$$byval_copy2,$10,$10)|0);
   $12 = ((($13)) + 4|0);
   $14 = load4($12);
   $15 = ($14|0)==(0|0);
   if ($15) {
    $$0$i$i$i$i$i = $13;
    while(1) {
     $18 = ((($$0$i$i$i$i$i)) + 8|0);
     $19 = load4($18);
     $20 = load4($19);
     $21 = ($20|0)==($$0$i$i$i$i$i|0);
     if ($21) {
      $$05$i$i$i$i$i = $19;
      break;
     } else {
      $$0$i$i$i$i$i = $19;
     }
    }
   } else {
    $$0$i$i$i$i$i$i = $14;
    while(1) {
     $16 = load4($$0$i$i$i$i$i$i);
     $17 = ($16|0)==(0|0);
     if ($17) {
      $$05$i$i$i$i$i = $$0$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i = $16;
     }
    }
   }
   $22 = ($$05$i$i$i$i$i|0)==($7|0);
   if ($22) {
    break;
   } else {
    $11 = $$05$i$i$i$i$i;$13 = $$05$i$i$i$i$i;
   }
  }
 }
 $23 = ((($0)) + 12|0);
 $24 = ((($0)) + 16|0);
 store4($24,0);
 $25 = ((($0)) + 20|0);
 store4($25,0);
 $26 = ((($0)) + 16|0);
 store4($23,$26);
 $27 = ((($1)) + 12|0);
 $28 = load4($27);
 $29 = ((($1)) + 16|0);
 $30 = ($28|0)==($29|0);
 if (!($30)) {
  $31 = $26;
  $33 = $28;$35 = $28;
  while(1) {
   $32 = ((($33)) + 16|0);
   store4($2,$31);
   ; store4($$byval_copy2,load4($2,4),4);
   (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($23,$$byval_copy2,$32,$32)|0);
   $34 = ((($35)) + 4|0);
   $36 = load4($34);
   $37 = ($36|0)==(0|0);
   if ($37) {
    $$0$i$i$i$i$i14 = $35;
    while(1) {
     $40 = ((($$0$i$i$i$i$i14)) + 8|0);
     $41 = load4($40);
     $42 = load4($41);
     $43 = ($42|0)==($$0$i$i$i$i$i14|0);
     if ($43) {
      $$05$i$i$i$i$i17 = $41;
      break;
     } else {
      $$0$i$i$i$i$i14 = $41;
     }
    }
   } else {
    $$0$i$i$i$i$i$i12 = $36;
    while(1) {
     $38 = load4($$0$i$i$i$i$i$i12);
     $39 = ($38|0)==(0|0);
     if ($39) {
      $$05$i$i$i$i$i17 = $$0$i$i$i$i$i$i12;
      break;
     } else {
      $$0$i$i$i$i$i$i12 = $38;
     }
    }
   }
   $44 = ($$05$i$i$i$i$i17|0)==($29|0);
   if ($44) {
    break;
   } else {
    $33 = $$05$i$i$i$i$i17;$35 = $$05$i$i$i$i$i17;
   }
  }
 }
 $45 = ((($0)) + 24|0);
 $46 = ((($0)) + 28|0);
 store4($46,0);
 $47 = ((($0)) + 32|0);
 store4($47,0);
 $48 = ((($0)) + 28|0);
 store4($45,$48);
 $49 = ((($1)) + 24|0);
 $50 = load4($49);
 $51 = ((($1)) + 28|0);
 $52 = ($50|0)==($51|0);
 if ($52) {
  $67 = ((($0)) + 36|0);
  $68 = ((($1)) + 36|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($67,$68);
  $69 = ((($0)) + 48|0);
  $70 = ((($1)) + 48|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($69,$70);
  STACKTOP = sp;return;
 }
 $53 = $48;
 $55 = $50;$57 = $50;
 while(1) {
  $54 = ((($55)) + 16|0);
  store4($2,$53);
  ; store4($$byval_copy2,load4($2,4),4);
  (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($45,$$byval_copy2,$54,$54)|0);
  $56 = ((($57)) + 4|0);
  $58 = load4($56);
  $59 = ($58|0)==(0|0);
  if ($59) {
   $$0$i$i$i$i$i25 = $57;
   while(1) {
    $62 = ((($$0$i$i$i$i$i25)) + 8|0);
    $63 = load4($62);
    $64 = load4($63);
    $65 = ($64|0)==($$0$i$i$i$i$i25|0);
    if ($65) {
     $$05$i$i$i$i$i28 = $63;
     break;
    } else {
     $$0$i$i$i$i$i25 = $63;
    }
   }
  } else {
   $$0$i$i$i$i$i$i23 = $58;
   while(1) {
    $60 = load4($$0$i$i$i$i$i$i23);
    $61 = ($60|0)==(0|0);
    if ($61) {
     $$05$i$i$i$i$i28 = $$0$i$i$i$i$i$i23;
     break;
    } else {
     $$0$i$i$i$i$i$i23 = $60;
    }
   }
  }
  $66 = ($$05$i$i$i$i$i28|0)==($51|0);
  if ($66) {
   break;
  } else {
   $55 = $$05$i$i$i$i$i28;$57 = $$05$i$i$i$i$i28;
  }
 }
 $67 = ((($0)) + 36|0);
 $68 = ((($1)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($67,$68);
 $69 = ((($0)) + 48|0);
 $70 = ((($1)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($69,$70);
 STACKTOP = sp;return;
}
function __Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $4 = sp + 60|0;
 $5 = sp;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$1);
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $6 = ((($5)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
 $7 = ((($5)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
 $8 = ((($5)) + 24|0);
 $9 = ((($5)) + 28|0);
 $10 = load4($9);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($8,$10);
 $11 = ((($5)) + 12|0);
 $12 = ((($5)) + 16|0);
 $13 = load4($12);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$13);
 $14 = ((($5)) + 4|0);
 $15 = load4($14);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($5,$15);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 $16 = ((($0)) + 24|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($16,$3)|0);
 STACKTOP = sp;return;
}
function __Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $4 = sp + 60|0;
 $5 = sp;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$1);
 __ZN9VNodeDataC2ERKS_($5,$2);
 __Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData($0,$4,$5);
 $6 = ((($5)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
 $7 = ((($5)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
 $8 = ((($5)) + 24|0);
 $9 = ((($5)) + 28|0);
 $10 = load4($9);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($8,$10);
 $11 = ((($5)) + 12|0);
 $12 = ((($5)) + 16|0);
 $13 = load4($12);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$13);
 $14 = ((($5)) + 4|0);
 $15 = load4($14);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($5,$15);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 $16 = ((($0)) + 100|0);
 $17 = ($16|0)==($3|0);
 if (!($17)) {
  $18 = load4($3);
  $19 = ((($3)) + 4|0);
  $20 = load4($19);
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($16,$18,$20);
 }
 $21 = ((($0)) + 12|0);
 $22 = ((($0)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($21,$22)|0);
 $23 = ((($0)) + 11|0);
 $24 = load1($23);
 $25 = ($24<<24>>24)<(0);
 $26 = ((($0)) + 4|0);
 $27 = load4($26);
 $28 = $24&255;
 $29 = $25 ? $27 : $28;
 $30 = ($29>>>0)>(2);
 if (!($30)) {
  STACKTOP = sp;return;
 }
 $31 = load4($0);
 $32 = $25 ? $31 : $0;
 $33 = load1($32);
 $34 = ($33<<24>>24)==(115);
 if (!($34)) {
  STACKTOP = sp;return;
 }
 $35 = ((($32)) + 1|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)==(118);
 if (!($37)) {
  STACKTOP = sp;return;
 }
 $38 = ((($32)) + 2|0);
 $39 = load1($38);
 $40 = ($39<<24>>24)==(103);
 if (!($40)) {
  STACKTOP = sp;return;
 }
 $41 = ($29|0)==(3);
 L16: do {
  if (!($41)) {
   $42 = ((($32)) + 3|0);
   $43 = load1($42);
   switch ($43<<24>>24) {
   case 35: case 46:  {
    break L16;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $5 = sp + 84|0;
 $6 = sp + 72|0;
 $7 = sp + 12|0;
 $8 = sp;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($5,$1);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($6,$2);
 __ZN9VNodeDataC2ERKS_($7,$3);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($8,$4);
 __ZN5VNodeC2ENSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES6_9VNodeDataNS0_6vectorIS_NS4_IS_EEEE($0,$5,$6,$7,$8);
 $9 = load4($8);
 $10 = ($9|0)==(0|0);
 if (!($10)) {
  $11 = ((($8)) + 4|0);
  $12 = load4($11);
  $13 = ($12|0)==($9|0);
  if ($13) {
   $18 = $9;
  } else {
   $15 = $12;
   while(1) {
    $14 = ((($15)) + -112|0);
    store4($11,$14);
    __ZN5VNodeD2Ev($14);
    $16 = load4($11);
    $17 = ($16|0)==($9|0);
    if ($17) {
     break;
    } else {
     $15 = $16;
    }
   }
   $$pre$i = load4($8);
   $18 = $$pre$i;
  }
  __ZdlPv($18);
 }
 $19 = ((($7)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($19);
 $20 = ((($7)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($20);
 $21 = ((($7)) + 24|0);
 $22 = ((($7)) + 28|0);
 $23 = load4($22);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($21,$23);
 $24 = ((($7)) + 12|0);
 $25 = ((($7)) + 16|0);
 $26 = load4($25);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($24,$26);
 $27 = ((($7)) + 4|0);
 $28 = load4($27);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($7,$28);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 $29 = ((($0)) + 12|0);
 $30 = ((($0)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($29,$30)|0);
 $31 = ((($0)) + 11|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)<(0);
 $34 = ((($0)) + 4|0);
 $35 = load4($34);
 $36 = $32&255;
 $37 = $33 ? $35 : $36;
 $38 = ($37>>>0)>(2);
 if (!($38)) {
  STACKTOP = sp;return;
 }
 $39 = load4($0);
 $40 = $33 ? $39 : $0;
 $41 = load1($40);
 $42 = ($41<<24>>24)==(115);
 if (!($42)) {
  STACKTOP = sp;return;
 }
 $43 = ((($40)) + 1|0);
 $44 = load1($43);
 $45 = ($44<<24>>24)==(118);
 if (!($45)) {
  STACKTOP = sp;return;
 }
 $46 = ((($40)) + 2|0);
 $47 = load1($46);
 $48 = ($47<<24>>24)==(103);
 if (!($48)) {
  STACKTOP = sp;return;
 }
 $49 = ($37|0)==(3);
 L21: do {
  if (!($49)) {
   $50 = ((($40)) + 3|0);
   $51 = load1($50);
   switch ($51<<24>>24) {
   case 35: case 46:  {
    break L21;
    break;
   }
   default: {
   }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 __Z5addNSR5VNode($0);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i19 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,0);
 $2 = ((($0)) + 4|0);
 store4($2,0);
 $3 = ((($0)) + 8|0);
 store4($3,0);
 $4 = ((($1)) + 4|0);
 $5 = load4($4);
 $6 = load4($1);
 $7 = (($5) - ($6))|0;
 $8 = (($7|0) / 112)&-1;
 $9 = ($7|0)==(0);
 if ($9) {
  return;
 }
 $10 = ($8>>>0)>(38347922);
 if ($10) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $11 = (__Znwj($7)|0);
 store4($2,$11);
 store4($0,$11);
 $12 = (($11) + (($8*112)|0)|0);
 $13 = ((($0)) + 8|0);
 store4($13,$12);
 $14 = load4($1);
 $15 = load4($4);
 $16 = ($14|0)==($15|0);
 if ($16) {
  return;
 }
 $$0$i19 = $14;$17 = $11;
 while(1) {
  __ZN5VNodeC2ERKS_($17,$$0$i19);
  $18 = ((($$0$i19)) + 112|0);
  $19 = load4($2);
  $20 = ((($19)) + 112|0);
  store4($2,$20);
  $21 = ($18|0)==($15|0);
  if ($21) {
   break;
  } else {
   $$0$i19 = $18;$17 = $20;
  }
 }
 return;
}
function __ZN5VNodeC2ENSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES6_9VNodeDataNS0_6vectorIS_NS4_IS_EEEE($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($0,$1);
 $5 = ((($0)) + 12|0);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $6 = ((($0)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($6,$2);
 $7 = ((($0)) + 36|0);
 __ZN9VNodeDataC2ERKS_($7,$3);
 $8 = ((($0)) + 96|0);
 store4($8,(1));
 $9 = ((($0)) + 100|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($9,$4);
 return;
}
function __ZN39EmscriptenBindingInitializer_h_functionC2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_function((2692|0),2,(1872|0),(3250|0),(14|0),(2|0));
 __embind_register_function((2697|0),3,(1880|0),(3374|0),(10|0),(12|0));
 __embind_register_function((2703|0),3,(1892|0),(3374|0),(11|0),(13|0));
 __embind_register_function((2709|0),3,(1904|0),(3374|0),(12|0),(14|0));
 __embind_register_function((2715|0),3,(1916|0),(3374|0),(13|0),(15|0));
 __embind_register_function((2721|0),3,(1928|0),(3374|0),(14|0),(16|0));
 __embind_register_function((2727|0),4,(1940|0),(4008|0),(2|0),(7|0));
 __embind_register_function((2734|0),4,(1956|0),(4008|0),(3|0),(8|0));
 __embind_register_function((2741|0),4,(1972|0),(4008|0),(4|0),(9|0));
 __embind_register_function((2748|0),5,(1988|0),(4014|0),(1|0),(4|0));
 return;
}
function __Z8to_VNodeN10emscripten3valE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0217525 = 0, $$1218524 = 0, $$pre$i$i$i$i$i$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0.0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0.0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0;
 var $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0;
 var $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0;
 var $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0;
 var $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0;
 var $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0;
 var $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $2 = sp;
 $3 = sp + 232|0;
 $4 = sp + 228|0;
 $5 = sp + 216|0;
 $6 = sp + 212|0;
 $7 = sp + 208|0;
 $8 = sp + 188|0;
 $9 = sp + 196|0;
 $10 = sp + 192|0;
 $11 = sp + 72|0;
 $12 = sp + 184|0;
 $13 = sp + 48|0;
 $14 = sp + 36|0;
 $15 = sp + 32|0;
 $16 = sp + 28|0;
 $17 = sp + 24|0;
 $18 = sp + 20|0;
 $19 = sp + 16|0;
 $20 = sp + 12|0;
 $21 = ((($0)) + 36|0);
 $22 = ((($0)) + 40|0);
 store4($22,0);
 $23 = ((($0)) + 44|0);
 store4($23,0);
 $24 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($21,$24);
 $25 = ((($0)) + 48|0);
 $26 = ((($0)) + 52|0);
 store4($26,0);
 $27 = ((($0)) + 56|0);
 store4($27,0);
 $28 = ((($0)) + 52|0);
 store4($25,$28);
 $29 = ((($0)) + 60|0);
 $30 = ((($0)) + 64|0);
 store4($30,0);
 $31 = ((($0)) + 68|0);
 store4($31,0);
 $32 = ((($0)) + 64|0);
 store4($29,$32);
 $33 = ((($0)) + 72|0);
 ; store8($33,i64_const(0,0),4); store8($33+8|0,i64_const(0,0),4); store8($33+16|0,i64_const(0,0),4);
 $34 = ((($0)) + 96|0);
 store4($34,(1));
 $35 = ((($0)) + 100|0);
 store4($35,0);
 $36 = ((($0)) + 104|0);
 store4($36,0);
 $37 = ((($0)) + 108|0);
 store4($37,0);
 $38 = load4($1);
 store4($3,$38);
 __emval_incref(($38|0));
 $39 = (__Z9isElementN10emscripten3valE($3)|0);
 __emval_decref(($38|0));
 if (!($39)) {
  $247 = load4($1);
  store4($17,$247);
  __emval_incref(($247|0));
  $248 = (__Z6isTextN10emscripten3valE($17)|0);
  __emval_decref(($247|0));
  if ($248) {
   $249 = ((($0)) + 96|0);
   $250 = load4($1);
   __emval_incref(($250|0));
   $251 = load4($249);
   __emval_decref(($251|0));
   $252 = load4($1);
   store4($249,$252);
   $253 = ((($0)) + 24|0);
   $254 = $252;
   store4($18,$254);
   __emval_incref(($254|0));
   __Z14getTextContentN10emscripten3valE($2,$18);
   $255 = ((($253)) + 11|0);
   $256 = load1($255);
   $257 = ($256<<24>>24)<(0);
   if ($257) {
    $258 = load4($253);
    store1($258,0);
    $259 = ((($0)) + 28|0);
    store4($259,0);
   } else {
    store1($253,0);
    store1($255,0);
   }
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($253,0);
   ; store8($253,load8($2,4),4); store4($253+8 | 0,load4($2+8 | 0,4),4);
   ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
   __emval_decref(($254|0));
   STACKTOP = sp;return;
  }
  $260 = load4($1);
  store4($19,$260);
  __emval_incref(($260|0));
  $261 = (__Z9isCommentN10emscripten3valE($19)|0);
  __emval_decref(($260|0));
  if (!($261)) {
   STACKTOP = sp;return;
  }
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($2,2833,1);
  $262 = ((($0)) + 11|0);
  $263 = load1($262);
  $264 = ($263<<24>>24)<(0);
  if ($264) {
   $265 = load4($0);
   store1($265,0);
   $266 = ((($0)) + 4|0);
   store4($266,0);
  } else {
   store1($0,0);
   store1($262,0);
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($0,0);
  ; store8($0,load8($2,4),4); store4($0+8 | 0,load4($2+8 | 0,4),4);
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
  $267 = ((($0)) + 24|0);
  $268 = load4($1);
  store4($20,$268);
  __emval_incref(($268|0));
  __Z14getTextContentN10emscripten3valE($2,$20);
  $269 = ((($267)) + 11|0);
  $270 = load1($269);
  $271 = ($270<<24>>24)<(0);
  if ($271) {
   $272 = load4($267);
   store1($272,0);
   $273 = ((($0)) + 28|0);
   store4($273,0);
  } else {
   store1($267,0);
   store1($269,0);
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($267,0);
  ; store8($267,load8($2,4),4); store4($267+8 | 0,load4($2+8 | 0,4),4);
  ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
  __emval_decref(($268|0));
  STACKTOP = sp;return;
 }
 $40 = load4($1);
 store4($4,$40);
 __emval_incref(($40|0));
 __Z7tagNameN10emscripten3valE($2,$4);
 $41 = ((($2)) + 11|0);
 $42 = load1($41);
 $43 = ($42<<24>>24)<(0);
 $44 = load4($2);
 $45 = $43 ? $44 : $2;
 $46 = ((($2)) + 4|0);
 $47 = load4($46);
 $48 = $42&255;
 $49 = $43 ? $47 : $48;
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$45,$49)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
 __emval_decref(($40|0));
 $50 = load4($1);
 $51 = (__emval_new_cstring((2756|0))|0);
 $52 = (__emval_get_property(($50|0),($51|0))|0);
 __emval_decref(($51|0));
 store4($6,$52);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($5,$6);
 $53 = ((($5)) + 11|0);
 $54 = load1($53);
 $55 = ((($5)) + 4|0);
 $56 = load4($55);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 $57 = load4($6);
 __emval_decref(($57|0));
 $58 = ($54<<24>>24)<(0);
 $59 = $54&255;
 $60 = $58 ? $56 : $59;
 $61 = ($60|0)==(0);
 if (!($61)) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc($0,35);
  $62 = load4($1);
  $63 = (__emval_new_cstring((2756|0))|0);
  $64 = (__emval_get_property(($62|0),($63|0))|0);
  __emval_decref(($63|0));
  store4($7,$64);
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$7);
  $65 = ((($2)) + 11|0);
  $66 = load1($65);
  $67 = ($66<<24>>24)<(0);
  $68 = load4($2);
  $69 = $67 ? $68 : $2;
  $70 = ((($2)) + 4|0);
  $71 = load4($70);
  $72 = $66&255;
  $73 = $67 ? $71 : $72;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$69,$73)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
  $74 = load4($7);
  __emval_decref(($74|0));
 }
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($2,2772,5);
 $75 = load4($1);
 $76 = (__ZN10emscripten8internal12MethodCallerINS_3valEJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcOS9_($75,2759,$2)|0);
 store4($8,$76);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
 $77 = load4($8);
 $78 = (__emval_typeof(($77|0))|0);
 store4($10,$78);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($9,$10);
 $79 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($9,2778)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($9);
 $80 = load4($10);
 __emval_decref(($80|0));
 $81 = ($79|0)==(0);
 if ($81) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc($0,46);
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$8);
  $82 = ((($2)) + 11|0);
  $83 = load1($82);
  $84 = ($83<<24>>24)<(0);
  $85 = load4($2);
  $86 = $84 ? $85 : $2;
  $87 = ((($2)) + 4|0);
  $88 = load4($87);
  $89 = $83&255;
  $90 = $84 ? $88 : $89;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$86,$90)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
  $91 = ((($0)) + 11|0);
  $92 = load1($91);
  $93 = ($92<<24>>24)<(0);
  if ($93) {
   $94 = load4($0);
   $95 = ((($0)) + 4|0);
   $96 = load4($95);
   $100 = $96;$99 = $94;
  } else {
   $97 = $92&255;
   $100 = $97;$99 = $0;
  }
  $98 = (($99) + ($100)|0);
  $101 = ($100|0)==(0);
  if (!($101)) {
   $103 = $99;
   while(1) {
    $102 = load1($103);
    $104 = ($102<<24>>24)==(32);
    if ($104) {
     store1($103,46);
    }
    $105 = ((($103)) + 1|0);
    $106 = ($105|0)==($98|0);
    if ($106) {
     break;
    } else {
     $103 = $105;
    }
   }
  }
 }
 $107 = load4($1);
 $108 = (__emval_new_cstring((2785|0))|0);
 $109 = (__emval_get_property(($107|0),($108|0))|0);
 __emval_decref(($108|0));
 $110 = (__emval_new_cstring((2796|0))|0);
 $111 = (__emval_get_property(($109|0),($110|0))|0);
 __emval_decref(($110|0));
 $112 = (+__emval_as(($111|0),(1616|0),($2|0)));
 $113 = load4($2);
 __emval_run_destructors(($113|0));
 $114 = (~~(($112)));
 __emval_decref(($111|0));
 __emval_decref(($109|0));
 $115 = ($114|0)>(0);
 if ($115) {
  $116 = ((($13)) + 12|0);
  $$0217525 = 0;
  while(1) {
   $117 = load4($1);
   $118 = (__emval_new_cstring((2785|0))|0);
   $119 = (__emval_get_property(($117|0),($118|0))|0);
   __emval_decref(($118|0));
   store4($2,$$0217525);
   $120 = (__emval_take_value((1616|0),($2|0))|0);
   $121 = (__emval_get_property(($119|0),($120|0))|0);
   __emval_decref(($120|0));
   $122 = (__emval_new_cstring((2803|0))|0);
   $123 = (__emval_get_property(($121|0),($122|0))|0);
   __emval_decref(($122|0));
   store4($12,$123);
   __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($11,$12);
   $124 = load4($12);
   __emval_decref(($124|0));
   __emval_decref(($121|0));
   __emval_decref(($119|0));
   $125 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($11,2756)|0);
   $126 = ($125|0)==(0);
   if (!($126)) {
    $127 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($11,2772)|0);
    $128 = ($127|0)==(0);
    if (!($128)) {
     $129 = load4($1);
     $130 = (__emval_new_cstring((2785|0))|0);
     $131 = (__emval_get_property(($129|0),($130|0))|0);
     __emval_decref(($130|0));
     store4($2,$$0217525);
     $132 = (__emval_take_value((1616|0),($2|0))|0);
     $133 = (__emval_get_property(($131|0),($132|0))|0);
     __emval_decref(($132|0));
     $134 = (__emval_new_cstring((2812|0))|0);
     $135 = (__emval_get_property(($133|0),($134|0))|0);
     __emval_decref(($134|0));
     store4($15,$135);
     __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($14,$15);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($13,$11);
     ; store8($116,load8($14,4),4); store4($116+8 | 0,load4($14+8 | 0,4),4);
     ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
     $136 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($25,$2,$13)|0);
     $137 = load4($136);
     $138 = ($137|0)==(0|0);
     if ($138) {
      $139 = (__Znwj(40)|0);
      $140 = ((($139)) + 16|0);
      ; store8($140,load8($13,4),4); store4($140+8 | 0,load4($13+8 | 0,4),4);
      ; store8($13,i64_const(0,0),4); store4($13+8|0,0,4);
      $141 = ((($139)) + 28|0);
      ; store8($141,load8($116,4),4); store4($141+8 | 0,load4($116+8 | 0,4),4);
      ; store8($116,i64_const(0,0),4); store4($116+8|0,0,4);
      $142 = load4($2);
      store4($139,0);
      $143 = ((($139)) + 4|0);
      store4($143,0);
      $144 = ((($139)) + 8|0);
      store4($144,$142);
      store4($136,$139);
      $145 = load4($25);
      $146 = load4($145);
      $147 = ($146|0)==(0|0);
      if ($147) {
       $150 = $139;
      } else {
       $148 = $146;
       store4($25,$148);
       $$pre$i$i$i$i$i$i = load4($136);
       $150 = $$pre$i$i$i$i$i$i;
      }
      $149 = load4($26);
      __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($149,$150);
      $151 = load4($27);
      $152 = (($151) + 1)|0;
      store4($27,$152);
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($116);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($13);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($14);
     $153 = load4($15);
     __emval_decref(($153|0));
     __emval_decref(($133|0));
     __emval_decref(($131|0));
    }
   }
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($11);
   $154 = (($$0217525) + 1)|0;
   $155 = ($154|0)<($114|0);
   if ($155) {
    $$0217525 = $154;
   } else {
    break;
   }
  }
 }
 $156 = load4($1);
 $157 = (__emval_new_cstring((2822|0))|0);
 $158 = (__emval_get_property(($156|0),($157|0))|0);
 __emval_decref(($157|0));
 $159 = (__emval_new_cstring((2796|0))|0);
 $160 = (__emval_get_property(($158|0),($159|0))|0);
 __emval_decref(($159|0));
 $161 = (+__emval_as(($160|0),(1616|0),($2|0)));
 $162 = load4($2);
 __emval_run_destructors(($162|0));
 $163 = (~~(($161)));
 __emval_decref(($160|0));
 __emval_decref(($158|0));
 $164 = ($163|0)>(0);
 if ($164) {
  $165 = ((($0)) + 100|0);
  $166 = ((($0)) + 108|0);
  $167 = ((($11)) + 12|0);
  $168 = ((($11)) + 24|0);
  $169 = ((($11)) + 36|0);
  $170 = ((($11)) + 40|0);
  $171 = ((($11)) + 44|0);
  $172 = ((($11)) + 48|0);
  $173 = ((($11)) + 52|0);
  $174 = ((($11)) + 56|0);
  $175 = ((($11)) + 60|0);
  $176 = ((($11)) + 64|0);
  $177 = ((($11)) + 68|0);
  $178 = ((($11)) + 72|0);
  $179 = ((($11)) + 84|0);
  $180 = ((($11)) + 96|0);
  $181 = ((($11)) + 100|0);
  $182 = ((($11)) + 104|0);
  $183 = ((($11)) + 108|0);
  $184 = ((($11)) + 64|0);
  $185 = ((($11)) + 52|0);
  $186 = ((($11)) + 40|0);
  $$1218524 = 0;
  while(1) {
   $187 = load4($1);
   $188 = (__emval_new_cstring((2822|0))|0);
   $189 = (__emval_get_property(($187|0),($188|0))|0);
   __emval_decref(($188|0));
   store4($2,$$1218524);
   $190 = (__emval_take_value((1616|0),($2|0))|0);
   $191 = (__emval_get_property(($189|0),($190|0))|0);
   __emval_decref(($190|0));
   store4($16,$191);
   __Z8to_VNodeN10emscripten3valE($11,$16);
   $192 = load4($36);
   $193 = load4($166);
   $194 = ($192>>>0)<($193>>>0);
   if ($194) {
    ; store8($192,load8($11,4),4); store4($192+8 | 0,load4($11+8 | 0,4),4);
    ; store8($11,i64_const(0,0),4); store4($11+8|0,0,4);
    $195 = ((($192)) + 12|0);
    ; store8($195,load8($167,4),4); store4($195+8 | 0,load4($167+8 | 0,4),4);
    ; store8($167,i64_const(0,0),4); store4($167+8|0,0,4);
    $196 = ((($192)) + 24|0);
    ; store8($196,load8($168,4),4); store4($196+8 | 0,load4($168+8 | 0,4),4);
    ; store8($168,i64_const(0,0),4); store4($168+8|0,0,4);
    $197 = ((($192)) + 36|0);
    $198 = load4($169);
    store4($197,$198);
    $199 = ((($192)) + 40|0);
    $200 = load4($170);
    store4($199,$200);
    $201 = ((($192)) + 44|0);
    $202 = load4($171);
    store4($201,$202);
    $203 = ($202|0)==(0);
    $204 = ((($192)) + 40|0);
    if ($203) {
     store4($197,$204);
    } else {
     $205 = $200;
     $206 = ((($205)) + 8|0);
     store4($206,$204);
     store4($169,$186);
     store4($186,0);
     store4($171,0);
    }
    $207 = ((($192)) + 48|0);
    $208 = load4($172);
    store4($207,$208);
    $209 = ((($192)) + 52|0);
    $210 = load4($173);
    store4($209,$210);
    $211 = ((($192)) + 56|0);
    $212 = load4($174);
    store4($211,$212);
    $213 = ($212|0)==(0);
    $214 = ((($192)) + 52|0);
    if ($213) {
     store4($207,$214);
    } else {
     $215 = $210;
     $216 = ((($215)) + 8|0);
     store4($216,$214);
     store4($172,$185);
     store4($185,0);
     store4($174,0);
    }
    $217 = ((($192)) + 60|0);
    $218 = load4($175);
    store4($217,$218);
    $219 = ((($192)) + 64|0);
    $220 = load4($176);
    store4($219,$220);
    $221 = ((($192)) + 68|0);
    $222 = load4($177);
    store4($221,$222);
    $223 = ($222|0)==(0);
    $224 = ((($192)) + 64|0);
    if ($223) {
     store4($217,$224);
    } else {
     $225 = $220;
     $226 = ((($225)) + 8|0);
     store4($226,$224);
     store4($175,$184);
     store4($184,0);
     store4($177,0);
    }
    $227 = ((($192)) + 72|0);
    ; store8($227,load8($178,4),4); store4($227+8 | 0,load4($178+8 | 0,4),4);
    ; store8($178,i64_const(0,0),4); store4($178+8|0,0,4);
    $228 = ((($192)) + 84|0);
    ; store8($228,load8($179,4),4); store4($228+8 | 0,load4($179+8 | 0,4),4);
    ; store8($179,i64_const(0,0),4); store4($179+8|0,0,4);
    $229 = ((($192)) + 96|0);
    $230 = load4($180);
    store4($229,$230);
    store4($180,0);
    $231 = ((($192)) + 100|0);
    store4($231,0);
    $232 = ((($192)) + 104|0);
    store4($232,0);
    $233 = ((($192)) + 108|0);
    store4($233,0);
    $234 = load4($181);
    store4($231,$234);
    $235 = load4($182);
    store4($232,$235);
    $236 = load4($183);
    $237 = ((($192)) + 108|0);
    store4($237,$236);
    store4($183,0);
    store4($182,0);
    store4($181,0);
    $238 = load4($36);
    $239 = ((($238)) + 112|0);
    store4($36,$239);
   } else {
    __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIS1_EEvOT_($165,$11);
   }
   __ZN5VNodeD2Ev($11);
   __emval_decref(($191|0));
   __emval_decref(($189|0));
   $240 = (($$1218524) + 1)|0;
   $241 = ($240|0)<($163|0);
   if ($241) {
    $$1218524 = $240;
   } else {
    break;
   }
  }
 }
 $242 = ((($0)) + 96|0);
 $243 = load4($1);
 __emval_incref(($243|0));
 $244 = load4($242);
 __emval_decref(($244|0));
 $245 = load4($1);
 store4($242,$245);
 $246 = load4($8);
 __emval_decref(($246|0));
 STACKTOP = sp;return;
}
function __Z9sameVnode5VNodeS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$$i6 = 0, $$$i5 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 12|0);
 $3 = ((($1)) + 12|0);
 $4 = ((($2)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = ((($0)) + 16|0);
  $8 = load4($7);
  $19 = $8;
 } else {
  $9 = $5&255;
  $19 = $9;
 }
 $10 = ((($3)) + 11|0);
 $11 = load1($10);
 $12 = ($11<<24>>24)<(0);
 $13 = ((($1)) + 16|0);
 $14 = load4($13);
 $15 = $11&255;
 $16 = $12 ? $14 : $15;
 if ($6) {
  $17 = load4($2);
  $23 = $17;
 } else {
  $23 = $2;
 }
 $18 = ($16>>>0)<($19>>>0);
 $$sroa$speculated$i = $18 ? $16 : $19;
 $20 = ($$sroa$speculated$i|0)==(0);
 if (!($20)) {
  $21 = load4($3);
  $22 = $12 ? $21 : $3;
  $24 = (_memcmp($23,$22,$$sroa$speculated$i)|0);
  $25 = ($24|0)==(0);
  if (!($25)) {
   $53 = 0;
   return ($53|0);
  }
 }
 $26 = ($19>>>0)>=($16>>>0);
 $27 = $18 ^ 1;
 $or$cond = $26 & $27;
 if (!($or$cond)) {
  $53 = 0;
  return ($53|0);
 }
 $28 = ((($0)) + 11|0);
 $29 = load1($28);
 $30 = ($29<<24>>24)<(0);
 if ($30) {
  $31 = ((($0)) + 4|0);
  $32 = load4($31);
  $43 = $32;
 } else {
  $33 = $29&255;
  $43 = $33;
 }
 $34 = ((($1)) + 11|0);
 $35 = load1($34);
 $36 = ($35<<24>>24)<(0);
 $37 = ((($1)) + 4|0);
 $38 = load4($37);
 $39 = $35&255;
 $40 = $36 ? $38 : $39;
 if ($30) {
  $41 = load4($0);
  $47 = $41;
 } else {
  $47 = $0;
 }
 $42 = ($40>>>0)<($43>>>0);
 $$sroa$speculated$i2 = $42 ? $40 : $43;
 $44 = ($$sroa$speculated$i2|0)==(0);
 if ($44) {
  label = 18;
 } else {
  $45 = load4($1);
  $46 = $36 ? $45 : $1;
  $48 = (_memcmp($47,$46,$$sroa$speculated$i2)|0);
  $49 = ($48|0)==(0);
  if ($49) {
   label = 18;
  } else {
   $52 = $48;
  }
 }
 if ((label|0) == 18) {
  $50 = ($43>>>0)<($40>>>0);
  $$$i5 = $42&1;
  $$$$i6 = $50 ? -1 : $$$i5;
  $52 = $$$$i6;
 }
 $51 = ($52|0)==(0);
 $53 = $51;
 return ($53|0);
}
function __Z11emptyNodeAtN10emscripten3valE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$052$0 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $2 = sp + 20|0;
 $3 = sp + 16|0;
 $4 = sp + 12|0;
 $5 = sp + 8|0;
 $6 = sp + 4|0;
 $7 = sp;
 $8 = ((($0)) + 36|0);
 $9 = ((($0)) + 40|0);
 store4($9,0);
 $10 = ((($0)) + 44|0);
 store4($10,0);
 $11 = ((($0)) + 40|0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($8,$11);
 $12 = ((($0)) + 48|0);
 $13 = ((($0)) + 52|0);
 store4($13,0);
 $14 = ((($0)) + 56|0);
 store4($14,0);
 $15 = ((($0)) + 52|0);
 store4($12,$15);
 $16 = ((($0)) + 60|0);
 $17 = ((($0)) + 64|0);
 store4($17,0);
 $18 = ((($0)) + 68|0);
 store4($18,0);
 $19 = ((($0)) + 64|0);
 store4($16,$19);
 $20 = ((($0)) + 72|0);
 ; store8($20,i64_const(0,0),4); store8($20+8|0,i64_const(0,0),4); store8($20+16|0,i64_const(0,0),4);
 $21 = ((($0)) + 96|0);
 store4($21,(1));
 $22 = ((($0)) + 100|0);
 store4($22,0);
 $23 = ((($0)) + 104|0);
 store4($23,0);
 $24 = ((($0)) + 108|0);
 store4($24,0);
 $25 = ((($0)) + 96|0);
 $26 = load4($1);
 __emval_incref(($26|0));
 $27 = load4($25);
 __emval_decref(($27|0));
 $28 = load4($1);
 store4($25,$28);
 $29 = $28;
 store4($3,$29);
 __emval_incref(($29|0));
 __Z7tagNameN10emscripten3valE($2,$3);
 $30 = ((($2)) + 11|0);
 $31 = load1($30);
 $32 = ($31<<24>>24)<(0);
 $33 = load4($2);
 $34 = $32 ? $33 : $2;
 $35 = ((($2)) + 4|0);
 $36 = load4($35);
 $37 = $31&255;
 $38 = $32 ? $36 : $37;
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$34,$38)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
 __emval_decref(($29|0));
 $39 = ((($0)) + 11|0);
 $40 = load1($39);
 $41 = ($40<<24>>24)<(0);
 if ($41) {
  $42 = load4($0);
  $43 = ((($0)) + 4|0);
  $44 = load4($43);
  $45 = (($42) + ($44)|0);
  $49 = $42;$50 = $45;
 } else {
  $46 = $40&255;
  $47 = (($0) + ($46)|0);
  $49 = $0;$50 = $47;
 }
 $48 = ($49|0)==($50|0);
 if (!($48)) {
  $$sroa$052$0 = $49;$55 = $49;
  while(1) {
   $51 = load1($$sroa$052$0);
   $52 = $51 << 24 >> 24;
   $53 = (_tolower($52)|0);
   $54 = $53&255;
   store1($55,$54);
   $56 = ((($$sroa$052$0)) + 1|0);
   $57 = ((($55)) + 1|0);
   $58 = ($56|0)==($50|0);
   if ($58) {
    break;
   } else {
    $$sroa$052$0 = $56;$55 = $57;
   }
  }
 }
 $59 = load4($1);
 $60 = (__emval_new_cstring((2756|0))|0);
 $61 = (__emval_get_property(($59|0),($60|0))|0);
 __emval_decref(($60|0));
 store4($4,$61);
 $62 = (__Z9isDefinedN10emscripten3valE($4)|0);
 __emval_decref(($61|0));
 if ($62) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc($0,35);
  $63 = load4($1);
  $64 = (__emval_new_cstring((2756|0))|0);
  $65 = (__emval_get_property(($63|0),($64|0))|0);
  __emval_decref(($64|0));
  store4($5,$65);
  __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$5);
  $66 = ((($2)) + 11|0);
  $67 = load1($66);
  $68 = ($67<<24>>24)<(0);
  $69 = load4($2);
  $70 = $68 ? $69 : $2;
  $71 = ((($2)) + 4|0);
  $72 = load4($71);
  $73 = $67&255;
  $74 = $68 ? $72 : $73;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$70,$74)|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
  $75 = load4($5);
  __emval_decref(($75|0));
 }
 $76 = load4($1);
 $77 = (__emval_new_cstring((2843|0))|0);
 $78 = (__emval_get_property(($76|0),($77|0))|0);
 __emval_decref(($77|0));
 store4($6,$78);
 $79 = (__Z9isDefinedN10emscripten3valE($6)|0);
 __emval_decref(($78|0));
 if (!($79)) {
  STACKTOP = sp;return;
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc($0,46);
 $80 = load4($1);
 $81 = (__emval_new_cstring((2843|0))|0);
 $82 = (__emval_get_property(($80|0),($81|0))|0);
 __emval_decref(($81|0));
 store4($7,$82);
 __ZNK10emscripten3val2asINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEJEEET_DpT0_($2,$7);
 $83 = ((($2)) + 11|0);
 $84 = load1($83);
 $85 = ($84<<24>>24)<(0);
 $86 = load4($2);
 $87 = $85 ? $86 : $2;
 $88 = ((($2)) + 4|0);
 $89 = load4($88);
 $90 = $84&255;
 $91 = $85 ? $89 : $90;
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$87,$91)|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
 $92 = load4($7);
 __emval_decref(($92|0));
 $93 = load1($39);
 $94 = ($93<<24>>24)<(0);
 if ($94) {
  $95 = load4($0);
  $96 = ((($0)) + 4|0);
  $97 = load4($96);
  $100 = $95;$101 = $97;
 } else {
  $98 = $93&255;
  $100 = $0;$101 = $98;
 }
 $99 = (($100) + ($101)|0);
 $102 = ($101|0)==(0);
 if ($102) {
  STACKTOP = sp;return;
 } else {
  $104 = $100;
 }
 while(1) {
  $103 = load1($104);
  $105 = ($103<<24>>24)==(32);
  if ($105) {
   store1($104,46);
  }
  $106 = ((($104)) + 1|0);
  $107 = ($106|0)==($99|0);
  if ($107) {
   break;
  } else {
   $104 = $106;
  }
 }
 STACKTOP = sp;return;
}
function __Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0212 = 0, $$053 = 0, $$056 = 0, $$pre = 0, $$sink = 0, $$sroa$speculated = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0;
 var $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0;
 var $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $2 = sp;
 $3 = sp + 92|0;
 $4 = sp + 80|0;
 $5 = sp + 56|0;
 $6 = sp + 68|0;
 $7 = sp + 32|0;
 $8 = sp + 20|0;
 $9 = sp + 44|0;
 $10 = sp + 8|0;
 $11 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($0,2833)|0);
 $12 = ($11|0)==(0);
 if ($12) {
  $13 = ((($0)) + 24|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$13);
  $14 = load4(9352);
  $15 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($14,2533,$3)|0);
  $16 = ((($0)) + 96|0);
  $17 = load4($16);
  __emval_decref(($17|0));
  $18 = $15;
  store4($16,$18);
  __emval_decref((0|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
  $155 = ((($0)) + 96|0);
  $156 = load4($155);
  __emval_incref(($156|0));
  STACKTOP = sp;return ($156|0);
 }
 $19 = ((($0)) + 11|0);
 $20 = load1($19);
 $21 = ($20<<24>>24)<(0);
 $22 = ((($0)) + 4|0);
 $23 = load4($22);
 $24 = $20&255;
 $25 = $21 ? $23 : $24;
 $26 = ($25|0)==(0);
 if ($26) {
  $27 = ((($0)) + 24|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$27);
  $28 = load4(9352);
  $29 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($28,2518,$4)|0);
  $30 = ((($0)) + 96|0);
  $31 = load4($30);
  __emval_decref(($31|0));
  $32 = $29;
  store4($30,$32);
  __emval_decref((0|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
  $155 = ((($0)) + 96|0);
  $156 = load4($155);
  __emval_incref(($156|0));
  STACKTOP = sp;return ($156|0);
 }
 $33 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcj($0,35,0)|0);
 $34 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcj($0,46,$33)|0);
 $35 = ($33|0)==(-1);
 do {
  if ($35) {
   $36 = load1($19);
   $37 = ($36<<24>>24)<(0);
   if ($37) {
    $38 = load4($22);
    $49 = $38;
    break;
   } else {
    $39 = $36&255;
    $49 = $39;
    break;
   }
  } else {
   $49 = $33;
  }
 } while(0);
 $40 = ($34|0)!=(-1);
 do {
  if ($40) {
   $48 = $34;
  } else {
   $41 = load1($19);
   $42 = ($41<<24>>24)<(0);
   if ($42) {
    $43 = load4($22);
    $48 = $43;
    break;
   } else {
    $44 = $41&255;
    $48 = $44;
    break;
   }
  }
 } while(0);
 $45 = $34 & $33;
 $46 = ($45|0)==(-1);
 if ($46) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($5,$0);
 } else {
  $47 = ($48|0)<($49|0);
  $$sroa$speculated = $47 ? $48 : $49;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_jjRKS4_($5,$0,0,$$sroa$speculated,$0);
 }
 $50 = ((($0)) + 96|0);
 $51 = ((($0)) + 84|0);
 $52 = ((($51)) + 11|0);
 $53 = load1($52);
 $54 = ($53<<24>>24)<(0);
 $55 = ((($0)) + 88|0);
 $56 = load4($55);
 $57 = $53&255;
 $58 = $54 ? $56 : $57;
 $59 = ($58|0)==(0);
 if ($59) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($8,$5);
  $62 = load4(9352);
  $63 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($62,2488,$8)|0);
  $$053 = 1;$$056 = 0;$$sink = $63;
 } else {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($6,$51);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($7,$5);
  $60 = load4(9352);
  $61 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_EE4callEPNS0_7_EM_VALEPKcSA_SA_($60,2502,$6,$7)|0);
  $$053 = 0;$$056 = 1;$$sink = $61;
 }
 $64 = load4($50);
 __emval_decref(($64|0));
 $65 = $$sink;
 store4($50,$65);
 __emval_decref((0|0));
 if ($$053) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($8);
 }
 if ($$056) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
 }
 $66 = ($49|0)<($48|0);
 if ($66) {
  $67 = (($49) + 1)|0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_jjRKS4_($9,$0,$67,$48,$0);
  $68 = ((($9)) + 11|0);
  $69 = load1($68);
  $70 = ($69<<24>>24)<(0);
  $71 = ((($9)) + 4|0);
  $72 = load4($71);
  $73 = $69&255;
  $74 = $70 ? $72 : $73;
  $75 = (($74) + 4)|0;
  $76 = (_malloc($75)|0);
  store4($76,$74);
  $77 = ((($76)) + 4|0);
  $78 = load4($9);
  $79 = $70 ? $78 : $9;
  _memcpy(($77|0),($79|0),($74|0))|0;
  store4($2,$76);
  $80 = (__emval_take_value((1080|0),($2|0))|0);
  $81 = load4($50);
  $82 = (__emval_new_cstring((2756|0))|0);
  __emval_set_property(($81|0),($82|0),($80|0));
  __emval_decref(($82|0));
  __emval_decref(($80|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($9);
 }
 if ($40) {
  $83 = (($48) + 1)|0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_jjRKS4_($9,$0,$83,-1,$0);
  $84 = ((($9)) + 11|0);
  $85 = load1($84);
  $86 = ($85<<24>>24)<(0);
  $87 = load4($9);
  $88 = ((($9)) + 4|0);
  $89 = load4($88);
  $90 = $85&255;
  $91 = $86 ? $87 : $9;
  $92 = $86 ? $89 : $90;
  $93 = (($91) + ($92)|0);
  $94 = ($92|0)==(0);
  if ($94) {
   $101 = $85;
  } else {
   $96 = $91;
   while(1) {
    $95 = load1($96);
    $97 = ($95<<24>>24)==(46);
    if ($97) {
     store1($96,32);
    }
    $98 = ((($96)) + 1|0);
    $99 = ($98|0)==($93|0);
    if ($99) {
     break;
    } else {
     $96 = $98;
    }
   }
   $$pre = load1($84);
   $101 = $$pre;
  }
  $100 = ($101<<24>>24)<(0);
  $102 = ((($9)) + 4|0);
  $103 = load4($102);
  $104 = $101&255;
  $105 = $100 ? $103 : $104;
  $106 = (($105) + 4)|0;
  $107 = (_malloc($106)|0);
  store4($107,$105);
  $108 = ((($107)) + 4|0);
  $109 = load4($9);
  $110 = $100 ? $109 : $9;
  _memcpy(($108|0),($110|0),($105|0))|0;
  store4($2,$107);
  $111 = (__emval_take_value((1080|0),($2|0))|0);
  $112 = load4($50);
  $113 = (__emval_new_cstring((2843|0))|0);
  __emval_set_property(($112|0),($113|0),($111|0));
  __emval_decref(($113|0));
  __emval_decref(($111|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($9);
 }
 $114 = ((($0)) + 100|0);
 $115 = load4($114);
 $116 = ((($0)) + 104|0);
 $117 = load4($116);
 $118 = ($115|0)==($117|0);
 if ($118) {
  $136 = ((($0)) + 24|0);
  $137 = ((($136)) + 11|0);
  $138 = load1($137);
  $139 = ($138<<24>>24)<(0);
  $140 = ((($0)) + 28|0);
  $141 = load4($140);
  $142 = $138&255;
  $143 = $139 ? $141 : $142;
  $144 = ($143|0)==(0);
  if (!($144)) {
   $145 = load4($50);
   __emval_incref(($145|0));
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($10,$136);
   $146 = load4(9352);
   $147 = (__ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($146,2518,$10)|0);
   $148 = $147;
   $149 = load1(8760);
   $150 = ($149<<24>>24)==(0);
   if ($150) {
    $151 = (___cxa_guard_acquire(8760)|0);
    $152 = ($151|0)==(0);
    if (!($152)) {
     $153 = (__emval_get_method_caller(2,(1864|0))|0);
     store4(8788,$153);
    }
   }
   $154 = load4(8788);
   __emval_incref(($147|0));
   store4($2,$148);
   __emval_call_void_method(($154|0),($145|0),(2572|0),($2|0));
   __emval_decref(($147|0));
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($10);
   __emval_decref(($145|0));
  }
 } else {
  $$0212 = 0;
  while(1) {
   $119 = load4($50);
   __emval_incref(($119|0));
   $120 = load4($114);
   $121 = (($120) + (($$0212*112)|0)|0);
   $122 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($121,$1)|0);
   $123 = $122;
   $124 = load1(8760);
   $125 = ($124<<24>>24)==(0);
   if ($125) {
    $126 = (___cxa_guard_acquire(8760)|0);
    $127 = ($126|0)==(0);
    if (!($127)) {
     $128 = (__emval_get_method_caller(2,(1864|0))|0);
     store4(8788,$128);
    }
   }
   $129 = load4(8788);
   __emval_incref(($122|0));
   store4($2,$123);
   __emval_call_void_method(($129|0),($119|0),(2572|0),($2|0));
   __emval_decref(($122|0));
   __emval_decref(($119|0));
   $130 = (($$0212) + 1)|0;
   $131 = load4($116);
   $132 = load4($114);
   $133 = (($131) - ($132))|0;
   $134 = (($133|0) / 112)&-1;
   $135 = ($130|0)==($134|0);
   if ($135) {
    break;
   } else {
    $$0212 = $130;
   }
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 $155 = ((($0)) + 96|0);
 $156 = load4($155);
 __emval_incref(($156|0));
 STACKTOP = sp;return ($156|0);
}
function __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0932 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $6 = sp + 4|0;
 $7 = sp;
 $8 = ($3>>>0)>($4>>>0);
 if ($8) {
  STACKTOP = sp;return;
 }
 $$0932 = $3;
 while(1) {
  $9 = load4($0);
  __emval_incref(($9|0));
  $10 = load4($2);
  $11 = (($10) + (($$0932*112)|0)|0);
  $12 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($11,$5)|0);
  store4($6,$12);
  $13 = load4($1);
  store4($7,$13);
  __emval_incref(($13|0));
  __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($9,2547,$6,$7);
  $14 = load4($7);
  __emval_decref(($14|0));
  $15 = load4($6);
  __emval_decref(($15|0));
  __emval_decref(($9|0));
  $16 = (($$0932) + 1)|0;
  $17 = ($16>>>0)>($4>>>0);
  if ($17) {
   break;
  } else {
   $$0932 = $16;
  }
 }
 STACKTOP = sp;return;
}
function __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0726 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = ($2>>>0)>($3>>>0);
 if ($5) {
  STACKTOP = sp;return;
 }
 $$0726 = $2;
 while(1) {
  $6 = load4($0);
  __emval_incref(($6|0));
  $7 = load4($1);
  $8 = (((($7) + (($$0726*112)|0)|0)) + 96|0);
  $9 = load4($8);
  $10 = $9;
  __emval_incref(($9|0));
  $11 = load1(8760);
  $12 = ($11<<24>>24)==(0);
  if ($12) {
   $13 = (___cxa_guard_acquire(8760)|0);
   $14 = ($13|0)==(0);
   if (!($14)) {
    $15 = (__emval_get_method_caller(2,(1864|0))|0);
    store4(8788,$15);
   }
  }
  $16 = load4(8788);
  __emval_incref(($9|0));
  store4($4,$10);
  __emval_call_void_method(($16|0),($6|0),(2560|0),($4|0));
  __emval_decref(($9|0));
  __emval_decref(($6|0));
  $17 = (($$0726) + 1)|0;
  $18 = ($17>>>0)>($3>>>0);
  if ($18) {
   break;
  } else {
   $$0726 = $17;
  }
 }
 STACKTOP = sp;return;
}
function __Z14updateChildrenN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEES7_S7_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$013$i = 0, $$086 = 0, $$086$ph = 0, $$086$ph194 = 0, $$087 = 0, $$087$ph = 0, $$087$ph193 = 0, $$088$ph = 0, $$088$ph192 = 0, $$089$ph = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0;
 var $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0;
 var $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0;
 var $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0;
 var $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0;
 var $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0;
 var $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, $99 = 0, $or$cond = 0, $or$cond187 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1568|0;
 $4 = sp + 1552|0;
 $5 = sp + 1564|0;
 $6 = sp + 1544|0;
 $7 = sp + 1432|0;
 $8 = sp + 1096|0;
 $9 = sp + 984|0;
 $10 = sp + 760|0;
 $11 = sp + 632|0;
 $12 = sp + 408|0;
 $13 = sp + 1320|0;
 $14 = sp + 1208|0;
 $15 = sp + 872|0;
 $16 = sp + 648|0;
 $17 = sp + 520|0;
 $18 = sp + 296|0;
 $19 = sp + 276|0;
 $20 = sp + 272|0;
 $21 = sp + 160|0;
 $22 = sp + 48|0;
 $23 = sp + 40|0;
 $24 = sp + 36|0;
 $25 = sp + 280|0;
 $26 = sp + 32|0;
 $27 = sp + 28|0;
 $28 = sp + 24|0;
 $29 = sp + 20|0;
 $30 = sp + 16|0;
 $31 = sp + 12|0;
 $32 = sp + 8|0;
 $33 = sp + 4|0;
 $34 = sp;
 $35 = ((($1)) + 4|0);
 $36 = load4($35);
 $37 = load4($1);
 $38 = (($36) - ($37))|0;
 $39 = (($38|0) / 112)&-1;
 $40 = (($39) + -1)|0;
 $41 = ((($2)) + 4|0);
 $42 = load4($41);
 $43 = load4($2);
 $44 = (($42) - ($43))|0;
 $45 = (($44|0) / 112)&-1;
 $46 = (($45) + -1)|0;
 $47 = $37;
 __ZN5VNodeC2ERKS_($7,$47);
 $48 = load4($1);
 $49 = (($48) + (($40*112)|0)|0);
 __ZN5VNodeC2ERKS_($8,$49);
 $50 = load4($2);
 __ZN5VNodeC2ERKS_($9,$50);
 $51 = load4($2);
 $52 = (($51) + (($46*112)|0)|0);
 __ZN5VNodeC2ERKS_($10,$52);
 $53 = ((($11)) + 4|0);
 store4($53,0);
 $54 = ((($11)) + 8|0);
 store4($54,0);
 $55 = ((($11)) + 4|0);
 store4($11,$55);
 $56 = ((($12)) + 36|0);
 $57 = ((($12)) + 40|0);
 store4($57,0);
 $58 = ((($12)) + 44|0);
 store4($58,0);
 $59 = ((($12)) + 40|0);
 ; store8($12,i64_const(0,0),4); store8($12+8|0,i64_const(0,0),4); store8($12+16|0,i64_const(0,0),4); store8($12+24|0,i64_const(0,0),4); store4($12+32|0,0,4);
 store4($56,$59);
 $60 = ((($12)) + 48|0);
 $61 = ((($12)) + 52|0);
 store4($61,0);
 $62 = ((($12)) + 56|0);
 store4($62,0);
 $63 = ((($12)) + 52|0);
 store4($60,$63);
 $64 = ((($12)) + 60|0);
 $65 = ((($12)) + 64|0);
 store4($65,0);
 $66 = ((($12)) + 68|0);
 store4($66,0);
 $67 = ((($12)) + 64|0);
 store4($64,$67);
 $68 = ((($12)) + 72|0);
 ; store8($68,i64_const(0,0),4); store8($68+8|0,i64_const(0,0),4); store8($68+16|0,i64_const(0,0),4);
 $69 = ((($12)) + 96|0);
 store4($69,(1));
 $70 = ((($12)) + 100|0);
 store4($70,0);
 $71 = ((($12)) + 104|0);
 store4($71,0);
 $72 = ((($12)) + 108|0);
 store4($72,0);
 $73 = ((($8)) + 96|0);
 $74 = ((($7)) + 96|0);
 $75 = ((($25)) + 4|0);
 $76 = ((($25)) + 8|0);
 $77 = ((($25)) + 4|0);
 $78 = ((($9)) + 12|0);
 $79 = ((($12)) + 11|0);
 $80 = ((($12)) + 4|0);
 $81 = ((($9)) + 11|0);
 $82 = ((($9)) + 4|0);
 $$086$ph = $46;$$087$ph = $40;$$088$ph = 0;$$089$ph = 0;
 L1: while(1) {
  $$086$ph194 = $$086$ph;$$087$ph193 = $$087$ph;$$088$ph192 = $$088$ph;
  L3: while(1) {
   $$086 = $$086$ph194;$$087 = $$087$ph193;
   while(1) {
    $83 = ($$089$ph>>>0)>($$087>>>0);
    $84 = ($$088$ph192>>>0)>($$086>>>0);
    $or$cond = $83 | $84;
    if ($or$cond) {
     break L1;
    }
    __ZN5VNodeC2ERKS_($13,$7);
    __ZN5VNodeC2ERKS_($14,$9);
    $85 = (__Z9sameVnode5VNodeS_($13,$14)|0);
    __ZN5VNodeD2Ev($14);
    __ZN5VNodeD2Ev($13);
    if ($85) {
     label = 6;
     break L3;
    }
    __ZN5VNodeC2ERKS_($15,$8);
    __ZN5VNodeC2ERKS_($16,$10);
    $92 = (__Z9sameVnode5VNodeS_($15,$16)|0);
    __ZN5VNodeD2Ev($16);
    __ZN5VNodeD2Ev($15);
    if (!($92)) {
     break;
    }
    __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($8,$10,$3);
    $93 = (($$087) + -1)|0;
    $94 = load4($1);
    $95 = (($94) + (($93*112)|0)|0);
    (__ZN5VNodeaSERKS_($8,$95)|0);
    $96 = (($$086) + -1)|0;
    $97 = load4($2);
    $98 = (($97) + (($96*112)|0)|0);
    (__ZN5VNodeaSERKS_($10,$98)|0);
    $$086 = $96;$$087 = $93;
   }
   __ZN5VNodeC2ERKS_($17,$7);
   __ZN5VNodeC2ERKS_($18,$10);
   $99 = (__Z9sameVnode5VNodeS_($17,$18)|0);
   __ZN5VNodeD2Ev($18);
   __ZN5VNodeD2Ev($17);
   if ($99) {
    label = 10;
    break;
   }
   __ZN5VNodeC2ERKS_($21,$8);
   __ZN5VNodeC2ERKS_($22,$9);
   $113 = (__Z9sameVnode5VNodeS_($21,$22)|0);
   __ZN5VNodeD2Ev($22);
   __ZN5VNodeD2Ev($21);
   if ($113) {
    __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($8,$9,$3);
    $114 = load4($0);
    __emval_incref(($114|0));
    $115 = load4($73);
    store4($23,$115);
    __emval_incref(($115|0));
    $116 = load4($74);
    store4($24,$116);
    __emval_incref(($116|0));
    __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($114,2547,$23,$24);
    $117 = load4($24);
    __emval_decref(($117|0));
    $118 = load4($23);
    __emval_decref(($118|0));
    __emval_decref(($114|0));
    $119 = (($$087) + -1)|0;
    $120 = load4($1);
    $121 = (($120) + (($119*112)|0)|0);
    (__ZN5VNodeaSERKS_($8,$121)|0);
    $122 = (($$088$ph192) + 1)|0;
    $123 = load4($2);
    $124 = (($123) + (($122*112)|0)|0);
    (__ZN5VNodeaSERKS_($9,$124)|0);
    $$086$ph194 = $$086;$$087$ph193 = $119;$$088$ph192 = $122;
    continue;
   }
   $125 = load4($54);
   $126 = ($125|0)==(0);
   if ($126) {
    store4($75,0);
    store4($76,0);
    store4($25,$77);
    $$013$i = $$089$ph;
    while(1) {
     $127 = load4($1);
     $128 = (((($127) + (($$013$i*112)|0)|0)) + 12|0);
     $129 = ((($128)) + 11|0);
     $130 = load1($129);
     $131 = ($130<<24>>24)<(0);
     if ($131) {
      $132 = (((($127) + (($$013$i*112)|0)|0)) + 16|0);
      $133 = load4($132);
      $136 = $133;
     } else {
      $134 = $130&255;
      $136 = $134;
     }
     $135 = ($136|0)==(0);
     if (!($135)) {
      store4($4,$128);
      __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($6,$25,$128,9357,$4,$5);
      $137 = load4($6);
      $138 = ((($137)) + 28|0);
      store4($138,$$013$i);
     }
     $139 = (($$013$i) + 1)|0;
     $140 = ($139>>>0)>($$087>>>0);
     if ($140) {
      break;
     } else {
      $$013$i = $139;
     }
    }
    $141 = load4($55);
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$141);
    $142 = load4($25);
    store4($11,$142);
    $143 = load4($77);
    store4($55,$143);
    $144 = load4($76);
    store4($54,$144);
    $145 = ($144|0)==(0);
    if ($145) {
     $146 = $143;
     store4($11,$55);
     $149 = $146;
    } else {
     $147 = $143;
     $148 = ((($147)) + 8|0);
     store4($148,$55);
     store4($25,$77);
     store4($77,0);
     store4($76,0);
     $149 = 0;
    }
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($25,$149);
   }
   $150 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($11,$78)|0);
   $151 = ($150|0)==(0);
   if ($151) {
    $152 = load4($0);
    __emval_incref(($152|0));
    $153 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($9,$3)|0);
    store4($26,$153);
    $154 = load4($74);
    store4($27,$154);
    __emval_incref(($154|0));
    __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($152,2547,$26,$27);
    $155 = load4($27);
    __emval_decref(($155|0));
    $156 = load4($26);
    __emval_decref(($156|0));
    __emval_decref(($152|0));
    $157 = (($$088$ph192) + 1)|0;
    $158 = load4($2);
    $159 = (($158) + (($157*112)|0)|0);
    (__ZN5VNodeaSERKS_($9,$159)|0);
    $$086$ph194 = $$086;$$087$ph193 = $$087;$$088$ph192 = $157;
    continue;
   }
   store4($4,$78);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($6,$11,$78,9357,$4,$5);
   $160 = load4($6);
   $161 = ((($160)) + 28|0);
   $162 = load4($161);
   $163 = load4($1);
   $164 = (($163) + (($162*112)|0)|0);
   (__ZN5VNodeaSERKS_($12,$164)|0);
   $165 = load1($79);
   $166 = ($165<<24>>24)<(0);
   $167 = load4($80);
   $168 = $165&255;
   $169 = $166 ? $167 : $168;
   $170 = load1($81);
   $171 = ($170<<24>>24)<(0);
   $172 = load4($82);
   $173 = $170&255;
   $174 = $171 ? $172 : $173;
   $175 = ($174>>>0)<($169>>>0);
   $$sroa$speculated$i = $175 ? $174 : $169;
   $176 = ($$sroa$speculated$i|0)==(0);
   if ($176) {
    label = 29;
   } else {
    $177 = load4($12);
    $178 = $166 ? $177 : $12;
    $179 = load4($9);
    $180 = $171 ? $179 : $9;
    $181 = (_memcmp($178,$180,$$sroa$speculated$i)|0);
    $182 = ($181|0)==(0);
    if ($182) {
     label = 29;
    } else {
     label = 30;
    }
   }
   if ((label|0) == 29) {
    label = 0;
    $183 = ($169>>>0)>=($174>>>0);
    $184 = $175 ^ 1;
    $or$cond187 = $183 & $184;
    if ($or$cond187) {
     __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($12,$9,$3);
     store4($4,$78);
     __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($6,$11,$78,9357,$4,$5);
     $190 = load4($6);
     $191 = ((($190)) + 28|0);
     $192 = load4($191);
     $193 = load4($1);
     ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,9356,0);
     $194 = (((($193) + (($192*112)|0)|0)) + 12|0);
     $195 = ((($194)) + 11|0);
     $196 = load1($195);
     $197 = ($196<<24>>24)<(0);
     if ($197) {
      $198 = load4($194);
      store1($198,0);
      $199 = (((($193) + (($192*112)|0)|0)) + 16|0);
      store4($199,0);
     } else {
      store1($194,0);
      store1($195,0);
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($194,0);
     ; store8($194,load8($4,4),4); store4($194+8 | 0,load4($4+8 | 0,4),4);
     ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
     $200 = load4($0);
     __emval_incref(($200|0));
     $201 = load4($69);
     store4($30,$201);
     __emval_incref(($201|0));
     $202 = load4($74);
     store4($31,$202);
     __emval_incref(($202|0));
     __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($200,2547,$30,$31);
     $203 = load4($31);
     __emval_decref(($203|0));
     $204 = load4($30);
     __emval_decref(($204|0));
     __emval_decref(($200|0));
    } else {
     label = 30;
    }
   }
   if ((label|0) == 30) {
    label = 0;
    $185 = load4($0);
    __emval_incref(($185|0));
    $186 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($9,$3)|0);
    store4($28,$186);
    $187 = load4($74);
    store4($29,$187);
    __emval_incref(($187|0));
    __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($185,2547,$28,$29);
    $188 = load4($29);
    __emval_decref(($188|0));
    $189 = load4($28);
    __emval_decref(($189|0));
    __emval_decref(($185|0));
   }
   $205 = (($$088$ph192) + 1)|0;
   $206 = load4($2);
   $207 = (($206) + (($205*112)|0)|0);
   (__ZN5VNodeaSERKS_($9,$207)|0);
   $$086$ph194 = $$086;$$087$ph193 = $$087;$$088$ph192 = $205;
  }
  if ((label|0) == 6) {
   label = 0;
   __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($7,$9,$3);
   $86 = (($$089$ph) + 1)|0;
   $87 = load4($1);
   $88 = (($87) + (($86*112)|0)|0);
   (__ZN5VNodeaSERKS_($7,$88)|0);
   $89 = (($$088$ph192) + 1)|0;
   $90 = load4($2);
   $91 = (($90) + (($89*112)|0)|0);
   (__ZN5VNodeaSERKS_($9,$91)|0);
   $$086$ph = $$086;$$087$ph = $$087;$$088$ph = $89;$$089$ph = $86;
   continue;
  }
  else if ((label|0) == 10) {
   label = 0;
   __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($7,$10,$3);
   $100 = load4($0);
   __emval_incref(($100|0));
   $101 = load4($74);
   store4($19,$101);
   __emval_incref(($101|0));
   $102 = load4($73);
   __emval_incref(($102|0));
   $103 = (__emval_new_cstring((2595|0))|0);
   $104 = (__emval_get_property(($102|0),($103|0))|0);
   __emval_decref(($103|0));
   store4($20,$104);
   __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($100,2547,$19,$20);
   $105 = load4($20);
   __emval_decref(($105|0));
   __emval_decref(($102|0));
   $106 = load4($19);
   __emval_decref(($106|0));
   __emval_decref(($100|0));
   $107 = (($$089$ph) + 1)|0;
   $108 = load4($1);
   $109 = (($108) + (($107*112)|0)|0);
   (__ZN5VNodeaSERKS_($7,$109)|0);
   $110 = (($$086) + -1)|0;
   $111 = load4($2);
   $112 = (($111) + (($110*112)|0)|0);
   (__ZN5VNodeaSERKS_($10,$112)|0);
   $$086$ph = $110;$$087$ph = $$087;$$088$ph = $$088$ph192;$$089$ph = $107;
   continue;
  }
 }
 if ($83) {
  $208 = load4($0);
  store4($32,$208);
  __emval_incref(($208|0));
  $209 = (($$086) + 1)|0;
  $210 = load4($2);
  $211 = (((($210) + (($209*112)|0)|0)) + 96|0);
  $212 = load4($211);
  store4($33,$212);
  __emval_incref(($212|0));
  __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($32,$33,$2,$$088$ph192,$$086,$3);
  __emval_decref(($212|0));
  __emval_decref(($208|0));
  __ZN5VNodeD2Ev($12);
  $214 = load4($55);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$214);
  __ZN5VNodeD2Ev($10);
  __ZN5VNodeD2Ev($9);
  __ZN5VNodeD2Ev($8);
  __ZN5VNodeD2Ev($7);
  STACKTOP = sp;return;
 }
 if (!($84)) {
  __ZN5VNodeD2Ev($12);
  $214 = load4($55);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$214);
  __ZN5VNodeD2Ev($10);
  __ZN5VNodeD2Ev($9);
  __ZN5VNodeD2Ev($8);
  __ZN5VNodeD2Ev($7);
  STACKTOP = sp;return;
 }
 $213 = load4($0);
 store4($34,$213);
 __emval_incref(($213|0));
 __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($34,$1,$$089$ph,$$087);
 __emval_decref(($213|0));
 __ZN5VNodeD2Ev($12);
 $214 = load4($55);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($11,$214);
 __ZN5VNodeD2Ev($10);
 __ZN5VNodeD2Ev($9);
 __ZN5VNodeD2Ev($8);
 __ZN5VNodeD2Ev($7);
 STACKTOP = sp;return;
}
function __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre$phiZ2D = 0, $$pre46 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp + 60|0;
 $4 = sp + 56|0;
 $5 = sp + 44|0;
 $6 = sp + 40|0;
 $7 = sp + 36|0;
 $8 = sp + 32|0;
 $9 = sp + 28|0;
 $10 = sp + 16|0;
 $11 = sp + 12|0;
 $12 = sp;
 $13 = ((($1)) + 24|0);
 $14 = ((($13)) + 11|0);
 $15 = load1($14);
 $16 = ($15<<24>>24)<(0);
 $17 = ((($1)) + 28|0);
 $18 = load4($17);
 $19 = $15&255;
 $20 = $16 ? $18 : $19;
 $21 = ($20|0)==(0);
 if (!($21)) {
  $71 = ((($0)) + 24|0);
  $72 = ((($71)) + 11|0);
  $73 = load1($72);
  $74 = ($73<<24>>24)<(0);
  $75 = ((($0)) + 28|0);
  $76 = load4($75);
  $77 = $73&255;
  $78 = $74 ? $76 : $77;
  $79 = ($78>>>0)<($20>>>0);
  $$sroa$speculated$i = $79 ? $78 : $20;
  $80 = ($$sroa$speculated$i|0)==(0);
  if ($80) {
   label = 15;
  } else {
   $81 = load4($13);
   $82 = $16 ? $81 : $13;
   $83 = load4($71);
   $84 = $74 ? $83 : $71;
   $85 = (_memcmp($82,$84,$$sroa$speculated$i)|0);
   $86 = ($85|0)==(0);
   if ($86) {
    label = 15;
   }
  }
  if ((label|0) == 15) {
   $87 = ($20>>>0)>=($78>>>0);
   $88 = $79 ^ 1;
   $or$cond = $87 & $88;
   if ($or$cond) {
    STACKTOP = sp;return;
   }
  }
  $89 = ((($1)) + 96|0);
  $90 = load4($89);
  store4($11,$90);
  __emval_incref(($90|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($12,$13);
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($11,2615,$12);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($12);
  $91 = load4($11);
  __emval_decref(($91|0));
  STACKTOP = sp;return;
 }
 $22 = ((($1)) + 100|0);
 $23 = load4($22);
 $24 = ((($1)) + 104|0);
 $25 = load4($24);
 $26 = ($23|0)==($25|0);
 $27 = ((($0)) + 100|0);
 $28 = load4($27);
 $29 = ((($0)) + 104|0);
 $30 = load4($29);
 $31 = ($28|0)==($30|0);
 if ($26) {
  if (!($31)) {
   $52 = ((($1)) + 96|0);
   $53 = load4($52);
   store4($8,$53);
   __emval_incref(($53|0));
   $54 = load4($29);
   $55 = load4($27);
   $56 = (($54) - ($55))|0;
   $57 = (($56|0) / 112)&-1;
   $58 = (($57) + -1)|0;
   __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($8,$27,0,$58);
   __emval_decref(($53|0));
   STACKTOP = sp;return;
  }
  $59 = ((($0)) + 24|0);
  $60 = ((($59)) + 11|0);
  $61 = load1($60);
  $62 = ($61<<24>>24)<(0);
  $63 = ((($0)) + 28|0);
  $64 = load4($63);
  $65 = $61&255;
  $66 = $62 ? $64 : $65;
  $67 = ($66|0)==(0);
  if ($67) {
   STACKTOP = sp;return;
  }
  $68 = ((($1)) + 96|0);
  $69 = load4($68);
  store4($9,$69);
  __emval_incref(($69|0));
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($10,$59);
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($9,2615,$10);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($10);
  $70 = load4($9);
  __emval_decref(($70|0));
  STACKTOP = sp;return;
 }
 if (!($31)) {
  $32 = ((($1)) + 96|0);
  $33 = load4($32);
  store4($3,$33);
  __emval_incref(($33|0));
  __Z14updateChildrenN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEES7_S7_($3,$27,$22,$2);
  __emval_decref(($33|0));
  STACKTOP = sp;return;
 }
 $34 = ((($0)) + 24|0);
 $35 = ((($34)) + 11|0);
 $36 = load1($35);
 $37 = ($36<<24>>24)<(0);
 $38 = ((($0)) + 28|0);
 $39 = load4($38);
 $40 = $36&255;
 $41 = $37 ? $39 : $40;
 $42 = ($41|0)==(0);
 if ($42) {
  $$pre46 = ((($1)) + 96|0);
  $$pre$phiZ2D = $$pre46;
 } else {
  $43 = ((($1)) + 96|0);
  $44 = load4($43);
  store4($4,$44);
  __emval_incref(($44|0));
  ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
  __ZN10emscripten3val3setIA12_cNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEEvRKT_RKT0_($4,2615,$5);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
  $45 = load4($4);
  __emval_decref(($45|0));
  $$pre$phiZ2D = $43;
 }
 $46 = load4($$pre$phiZ2D);
 store4($6,$46);
 __emval_incref(($46|0));
 store4($7,(2));
 $47 = load4($24);
 $48 = load4($22);
 $49 = (($47) - ($48))|0;
 $50 = (($49|0) / 112)&-1;
 $51 = (($50) + -1)|0;
 __Z9addVnodesN10emscripten3valES0_RNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjjS7_($6,$7,$22,0,$51,$2);
 __emval_decref(((2)|0));
 __emval_decref(($46|0));
 STACKTOP = sp;return;
}
function __ZN5VNodeaSERKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$byval_copy4 = 0, $$byval_copy5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy5 = sp + 12|0;
 $$byval_copy4 = sp + 8|0;
 $2 = sp + 4|0;
 $3 = sp;
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($0,$1)|0);
 $4 = ((($0)) + 12|0);
 $5 = ((($1)) + 12|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($4,$5)|0);
 $6 = ((($0)) + 24|0);
 $7 = ((($1)) + 24|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($6,$7)|0);
 $8 = ($0|0)==($1|0);
 if (!($8)) {
  $9 = ((($1)) + 36|0);
  $10 = ((($0)) + 36|0);
  $11 = load4($9);
  store4($2,$11);
  $12 = ((($1)) + 40|0);
  store4($3,$12);
  ; store4($$byval_copy4,load4($2,4),4);
  ; store4($$byval_copy5,load4($3,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($10,$$byval_copy4,$$byval_copy5);
 }
 if (!($8)) {
  $13 = ((($1)) + 48|0);
  $14 = ((($0)) + 48|0);
  $15 = load4($13);
  store4($2,$15);
  $16 = ((($1)) + 52|0);
  store4($3,$16);
  ; store4($$byval_copy4,load4($2,4),4);
  ; store4($$byval_copy5,load4($3,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($14,$$byval_copy4,$$byval_copy5);
 }
 if (!($8)) {
  $17 = ((($1)) + 60|0);
  $18 = ((($0)) + 60|0);
  $19 = load4($17);
  store4($2,$19);
  $20 = ((($1)) + 64|0);
  store4($3,$20);
  ; store4($$byval_copy4,load4($2,4),4);
  ; store4($$byval_copy5,load4($3,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($18,$$byval_copy4,$$byval_copy5);
 }
 $21 = ((($0)) + 72|0);
 $22 = ((($1)) + 72|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($21,$22)|0);
 $23 = ((($0)) + 84|0);
 $24 = ((($1)) + 84|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($23,$24)|0);
 $25 = ((($0)) + 96|0);
 $26 = ((($1)) + 96|0);
 $27 = load4($26);
 __emval_incref(($27|0));
 $28 = load4($25);
 __emval_decref(($28|0));
 $29 = load4($26);
 store4($25,$29);
 if ($8) {
  STACKTOP = sp;return ($0|0);
 }
 $30 = ((($0)) + 100|0);
 $31 = ((($1)) + 100|0);
 $32 = load4($31);
 $33 = ((($1)) + 104|0);
 $34 = load4($33);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($30,$32,$34);
 STACKTOP = sp;return ($0|0);
}
function __Z11patch_vnodeR5VNodeS0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 384|0;
 $3 = sp + 368|0;
 $4 = sp + 256|0;
 $5 = sp + 16|0;
 $6 = sp + 12|0;
 $7 = sp + 8|0;
 $8 = sp + 4|0;
 $9 = sp + 240|0;
 $10 = sp + 128|0;
 $11 = sp;
 store4($3,0);
 $12 = ((($3)) + 4|0);
 store4($12,0);
 $13 = ((($3)) + 8|0);
 store4($13,0);
 __ZN5VNodeC2ERKS_($4,$1);
 __ZN5VNodeC2ERKS_($5,$2);
 $14 = (__Z9sameVnode5VNodeS_($4,$5)|0);
 __ZN5VNodeD2Ev($5);
 __ZN5VNodeD2Ev($4);
 if ($14) {
  __Z10patchVnodeR5VNodeS0_RNSt3__26vectorIS_NS1_9allocatorIS_EEEE($1,$2,$3);
 } else {
  $15 = ((($1)) + 96|0);
  $16 = load4($15);
  __emval_incref(($16|0));
  $17 = (__emval_new_cstring((2584|0))|0);
  $18 = (__emval_get_property(($16|0),($17|0))|0);
  __emval_decref(($17|0));
  __emval_decref(($16|0));
  $19 = (__Z9createElmR5VNodeRNSt3__26vectorIS_NS1_9allocatorIS_EEEE($2,$3)|0);
  __emval_decref(($19|0));
  store4($6,$18);
  __emval_incref(($18|0));
  $20 = (__Z9isDefinedN10emscripten3valE($6)|0);
  __emval_decref(($18|0));
  if ($20) {
   __emval_incref(($18|0));
   $21 = ((($2)) + 96|0);
   $22 = load4($21);
   store4($7,$22);
   __emval_incref(($22|0));
   $23 = load4($15);
   __emval_incref(($23|0));
   $24 = (__emval_new_cstring((2595|0))|0);
   $25 = (__emval_get_property(($23|0),($24|0))|0);
   __emval_decref(($24|0));
   store4($8,$25);
   __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($18,2547,$7,$8);
   $26 = load4($8);
   __emval_decref(($26|0));
   __emval_decref(($23|0));
   $27 = load4($7);
   __emval_decref(($27|0));
   __emval_decref(($18|0));
   __ZN5VNodeC2ERKS_($10,$1);
   store4($9,0);
   $28 = ((($9)) + 4|0);
   store4($28,0);
   $29 = ((($9)) + 8|0);
   store4($29,0);
   $30 = (__Znwj(112)|0);
   store4($28,$30);
   store4($9,$30);
   $31 = ((($30)) + 112|0);
   $32 = ((($9)) + 8|0);
   store4($32,$31);
   __ZN5VNodeC2ERKS_($30,$10);
   $33 = ((($30)) + 112|0);
   store4($28,$33);
   __ZN5VNodeD2Ev($10);
   store4($11,$18);
   __emval_incref(($18|0));
   __Z12removeVnodesN10emscripten3valERNSt3__26vectorI5VNodeNS1_9allocatorIS3_EEEEjj($11,$9,0,0);
   __emval_decref(($18|0));
   store4($28,$30);
   __ZN5VNodeD2Ev($30);
   __ZdlPv($30);
  }
  __emval_decref(($18|0));
 }
 __ZN5VNodeC2ERKS_($0,$2);
 $34 = load4($3);
 $35 = ($34|0)==(0|0);
 if ($35) {
  STACKTOP = sp;return;
 }
 $36 = load4($12);
 $37 = ($36|0)==($34|0);
 if (!($37)) {
  $39 = $36;
  while(1) {
   $38 = ((($39)) + -112|0);
   store4($12,$38);
   __ZN5VNodeD2Ev($38);
   $40 = ($38|0)==($34|0);
   if ($40) {
    break;
   } else {
    $39 = $38;
   }
  }
 }
 __ZdlPv($34);
 STACKTOP = sp;return;
}
function __Z13patch_elementN10emscripten3valER5VNode($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 8|0;
 $4 = sp;
 $5 = load4($1);
 store4($4,$5);
 __emval_incref(($5|0));
 __Z11emptyNodeAtN10emscripten3valE($3,$4);
 __emval_decref(($5|0));
 __Z11patch_vnodeR5VNodeS0_($0,$3,$2);
 __ZN5VNodeD2Ev($3);
 STACKTOP = sp;return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$0$i = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i24 = 0, $$0$i$i22 = 0, $$0$i$i26 = 0, $$0$i10$i = 0, $$0$i23 = 0, $$015$i = 0, $$041 = 0, $$05$i$i = 0, $$05$i$i29 = 0, $$2$lcssa = 0, $$pre = 0, $$pre$i$i = 0, $$sink$i = 0, $$sroa$0$0 = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0;
 var $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0;
 var $119 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 8|0);
 $4 = load4($3);
 $5 = ($4|0)==(0);
 L1: do {
  if (!($5)) {
   $6 = load4($0);
   $7 = ((($0)) + 4|0);
   store4($0,$7);
   $8 = load4($7);
   $9 = ((($8)) + 8|0);
   store4($9,0);
   store4($7,0);
   store4($3,0);
   $10 = ((($6)) + 4|0);
   $11 = load4($10);
   $12 = ($11|0)==(0|0);
   $$$i = $12 ? $6 : $11;
   $13 = ($$$i|0)==(0|0);
   if (!($13)) {
    $14 = $7;
    $15 = ((($0)) + 4|0);
    $$pre = load4($1);
    $$041 = $$$i;$18 = $$pre;$90 = $$pre;
    while(1) {
     $16 = load4($2);
     $17 = ($18|0)==($16|0);
     if ($17) {
      break;
     }
     $22 = ((($$041)) + 16|0);
     $23 = ((($18)) + 16|0);
     (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($22,$23)|0);
     $24 = ((($$041)) + 28|0);
     $25 = ((($18)) + 28|0);
     (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($24,$25)|0);
     $26 = ((($$041)) + 8|0);
     $27 = load4($26);
     $28 = ($27|0)==(0|0);
     do {
      if ($28) {
       $$0$i = 0;
      } else {
       $29 = load4($27);
       $30 = ($29|0)==($$041|0);
       if ($30) {
        store4($27,0);
        $31 = ((($27)) + 4|0);
        $32 = load4($31);
        $33 = ($32|0)==(0|0);
        if ($33) {
         $$0$i = $27;
         break;
        } else {
         $$0$i10$i = $32;
        }
        while(1) {
         $34 = load4($$0$i10$i);
         $35 = ($34|0)==(0|0);
         if (!($35)) {
          $$0$i10$i = $34;
          continue;
         }
         $36 = ((($$0$i10$i)) + 4|0);
         $37 = load4($36);
         $38 = ($37|0)==(0|0);
         if ($38) {
          break;
         } else {
          $$0$i10$i = $37;
         }
        }
        $$0$i = $$0$i10$i;
        break;
       } else {
        $39 = ((($27)) + 4|0);
        store4($39,0);
        $40 = ($29|0)==(0|0);
        if ($40) {
         $$0$i = $27;
         break;
        } else {
         $$0$i$i22 = $29;
        }
        while(1) {
         $41 = load4($$0$i$i22);
         $42 = ($41|0)==(0|0);
         if (!($42)) {
          $$0$i$i22 = $41;
          continue;
         }
         $43 = ((($$0$i$i22)) + 4|0);
         $44 = load4($43);
         $45 = ($44|0)==(0|0);
         if ($45) {
          break;
         } else {
          $$0$i$i22 = $44;
         }
        }
        $$0$i = $$0$i$i22;
        break;
       }
      }
     } while(0);
     $46 = load4($7);
     $47 = ($46|0)==(0|0);
     do {
      if ($47) {
       $$015$i = $7;$$sroa$0$0 = $14;
      } else {
       $48 = ((($22)) + 11|0);
       $49 = load1($48);
       $50 = ($49<<24>>24)<(0);
       $51 = ((($$041)) + 20|0);
       $52 = load4($51);
       $53 = $49&255;
       $54 = $50 ? $52 : $53;
       $55 = load4($22);
       $56 = $50 ? $55 : $22;
       $$0$i23 = $46;
       while(1) {
        $57 = ((($$0$i23)) + 16|0);
        $58 = ((($57)) + 11|0);
        $59 = load1($58);
        $60 = ($59<<24>>24)<(0);
        $61 = ((($$0$i23)) + 20|0);
        $62 = load4($61);
        $63 = $59&255;
        $64 = $60 ? $62 : $63;
        $65 = ($64>>>0)<($54>>>0);
        $$sroa$speculated$i$i$i$i$i = $65 ? $64 : $54;
        $66 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
        if ($66) {
         label = 20;
        } else {
         $67 = load4($57);
         $68 = $60 ? $67 : $57;
         $69 = (_memcmp($56,$68,$$sroa$speculated$i$i$i$i$i)|0);
         $70 = ($69|0)==(0);
         if ($70) {
          label = 20;
         } else {
          $72 = ($69|0)<(0);
          if ($72) {
           label = 22;
          } else {
           label = 24;
          }
         }
        }
        if ((label|0) == 20) {
         label = 0;
         $71 = ($54>>>0)<($64>>>0);
         if ($71) {
          label = 22;
         } else {
          label = 24;
         }
        }
        if ((label|0) == 22) {
         label = 0;
         $73 = load4($$0$i23);
         $74 = ($73|0)==(0|0);
         if ($74) {
          label = 23;
          break;
         } else {
          $$sink$i = $73;
         }
        }
        else if ((label|0) == 24) {
         label = 0;
         $76 = ((($$0$i23)) + 4|0);
         $77 = load4($76);
         $78 = ($77|0)==(0|0);
         if ($78) {
          label = 26;
          break;
         } else {
          $$sink$i = $77;
         }
        }
        $$0$i23 = $$sink$i;
       }
       if ((label|0) == 23) {
        label = 0;
        $75 = $$0$i23;
        $$015$i = $$0$i23;$$sroa$0$0 = $75;
        break;
       }
       else if ((label|0) == 26) {
        label = 0;
        $79 = $$0$i23;
        $$015$i = $76;$$sroa$0$0 = $79;
        break;
       }
      }
     } while(0);
     store4($$041,0);
     $80 = ((($$041)) + 4|0);
     store4($80,0);
     store4($26,$$sroa$0$0);
     store4($$015$i,$$041);
     $81 = load4($0);
     $82 = load4($81);
     $83 = ($82|0)==(0|0);
     if ($83) {
      $86 = $$041;
     } else {
      $84 = $82;
      store4($0,$84);
      $$pre$i$i = load4($$015$i);
      $86 = $$pre$i$i;
     }
     $85 = load4($15);
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($85,$86);
     $87 = load4($3);
     $88 = (($87) + 1)|0;
     store4($3,$88);
     $89 = ((($90)) + 4|0);
     $91 = load4($89);
     $92 = ($91|0)==(0|0);
     if ($92) {
      $$0$i$i26 = $90;
      while(1) {
       $95 = ((($$0$i$i26)) + 8|0);
       $96 = load4($95);
       $97 = load4($96);
       $98 = ($97|0)==($$0$i$i26|0);
       if ($98) {
        $$05$i$i29 = $96;
        break;
       } else {
        $$0$i$i26 = $96;
       }
      }
     } else {
      $$0$i$i$i24 = $91;
      while(1) {
       $93 = load4($$0$i$i$i24);
       $94 = ($93|0)==(0|0);
       if ($94) {
        $$05$i$i29 = $$0$i$i$i24;
        break;
       } else {
        $$0$i$i$i24 = $93;
       }
      }
     }
     store4($1,$$05$i$i29);
     $99 = ($$0$i|0)==(0|0);
     if ($99) {
      break L1;
     } else {
      $$041 = $$0$i;$18 = $$05$i$i29;$90 = $$05$i$i29;
     }
    }
    $19 = ((($$041)) + 8|0);
    $20 = load4($19);
    $21 = ($20|0)==(0|0);
    if ($21) {
     $$2$lcssa = $$041;
    } else {
     $101 = $20;
     while(1) {
      $100 = ((($101)) + 8|0);
      $102 = load4($100);
      $103 = ($102|0)==(0|0);
      if ($103) {
       break;
      } else {
       $101 = $102;
      }
     }
     $$2$lcssa = $101;
    }
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$$2$lcssa);
   }
  }
 } while(0);
 $104 = load4($1);
 $105 = load4($2);
 $106 = ($104|0)==($105|0);
 if ($106) {
  return;
 }
 $108 = $104;$110 = $104;
 while(1) {
  $107 = ((($108)) + 16|0);
  (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE15__emplace_multiIJRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEDpOT_($0,$107)|0);
  $109 = ((($110)) + 4|0);
  $111 = load4($109);
  $112 = ($111|0)==(0|0);
  if ($112) {
   $$0$i$i = $110;
   while(1) {
    $115 = ((($$0$i$i)) + 8|0);
    $116 = load4($115);
    $117 = load4($116);
    $118 = ($117|0)==($$0$i$i|0);
    if ($118) {
     $$05$i$i = $116;
     break;
    } else {
     $$0$i$i = $116;
    }
   }
  } else {
   $$0$i$i$i = $111;
   while(1) {
    $113 = load4($$0$i$i$i);
    $114 = ($113|0)==(0|0);
    if ($114) {
     $$05$i$i = $$0$i$i$i;
     break;
    } else {
     $$0$i$i$i = $113;
    }
   }
  }
  store4($1,$$05$i$i);
  $119 = ($$05$i$i|0)==($105|0);
  if ($119) {
   break;
  } else {
   $108 = $$05$i$i;$110 = $$05$i$i;
  }
 }
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0|0);
 if ($2) {
  return;
 } else {
  $3 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$3);
  $4 = ((($1)) + 4|0);
  $5 = load4($4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$5);
  $6 = ((($1)) + 28|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
  $7 = ((($1)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
  __ZdlPv($1);
  return;
 }
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$056 = 0, $$pre = 0, $$pre62 = 0, $$pre64 = 0, $$pre65 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==($0|0);
 $3 = ((($1)) + 12|0);
 $4 = $2&1;
 store1($3,$4);
 if ($2) {
  return;
 } else {
  $$056 = $1;
 }
 while(1) {
  $5 = ((($$056)) + 8|0);
  $6 = load4($5);
  $7 = ((($6)) + 12|0);
  $8 = load1($7);
  $9 = ($8<<24>>24)==(0);
  if (!($9)) {
   label = 37;
   break;
  }
  $10 = ((($6)) + 8|0);
  $11 = load4($10);
  $12 = load4($11);
  $13 = ($12|0)==($6|0);
  if ($13) {
   $14 = ((($11)) + 4|0);
   $15 = load4($14);
   $16 = ($15|0)==(0|0);
   if ($16) {
    label = 8;
    break;
   }
   $17 = ((($15)) + 12|0);
   $18 = load1($17);
   $19 = ($18<<24>>24)==(0);
   if (!($19)) {
    label = 8;
    break;
   }
   store1($7,1);
   $20 = ($11|0)==($0|0);
   $21 = ((($11)) + 12|0);
   $22 = $20&1;
   store1($21,$22);
   store1($17,1);
  } else {
   $54 = ($12|0)==(0|0);
   if ($54) {
    label = 24;
    break;
   }
   $55 = ((($12)) + 12|0);
   $56 = load1($55);
   $57 = ($56<<24>>24)==(0);
   if (!($57)) {
    label = 24;
    break;
   }
   store1($7,1);
   $58 = ($11|0)==($0|0);
   $59 = ((($11)) + 12|0);
   $60 = $58&1;
   store1($59,$60);
   store1($55,1);
  }
  $23 = ($11|0)==($0|0);
  if ($23) {
   label = 37;
   break;
  } else {
   $$056 = $11;
  }
 }
 if ((label|0) == 8) {
  $24 = load4($6);
  $25 = ($24|0)==($$056|0);
  if ($25) {
   $39 = $6;$41 = $11;
  } else {
   $26 = $11;
   $27 = ((($6)) + 4|0);
   $28 = load4($27);
   $29 = load4($28);
   store4($27,$29);
   $30 = ($29|0)==(0|0);
   if ($30) {
    $33 = $26;
   } else {
    $31 = ((($29)) + 8|0);
    store4($31,$6);
    $$pre64 = load4($10);
    $33 = $$pre64;
   }
   $32 = ((($28)) + 8|0);
   store4($32,$33);
   $34 = load4($10);
   $35 = load4($34);
   $36 = ($35|0)==($6|0);
   if ($36) {
    store4($34,$28);
   } else {
    $37 = ((($34)) + 4|0);
    store4($37,$28);
   }
   store4($28,$6);
   store4($10,$28);
   $$pre65 = load4($32);
   $39 = $28;$41 = $$pre65;
  }
  $38 = ((($39)) + 12|0);
  store1($38,1);
  $40 = ((($41)) + 12|0);
  store1($40,0);
  $42 = load4($41);
  $43 = ((($42)) + 4|0);
  $44 = load4($43);
  store4($41,$44);
  $45 = ($44|0)==(0|0);
  if (!($45)) {
   $46 = ((($44)) + 8|0);
   store4($46,$41);
  }
  $47 = ((($41)) + 8|0);
  $48 = load4($47);
  $49 = ((($42)) + 8|0);
  store4($49,$48);
  $50 = load4($47);
  $51 = load4($50);
  $52 = ($51|0)==($41|0);
  if ($52) {
   store4($50,$42);
  } else {
   $53 = ((($50)) + 4|0);
   store4($53,$42);
  }
  store4($43,$41);
  store4($47,$42);
  return;
 }
 else if ((label|0) == 24) {
  $61 = load4($6);
  $62 = ($61|0)==($$056|0);
  if ($62) {
   $63 = $11;
   $64 = load4($6);
   $65 = ((($64)) + 4|0);
   $66 = load4($65);
   store4($6,$66);
   $67 = ($66|0)==(0|0);
   if ($67) {
    $70 = $63;
   } else {
    $68 = ((($66)) + 8|0);
    store4($68,$6);
    $$pre = load4($10);
    $70 = $$pre;
   }
   $69 = ((($64)) + 8|0);
   store4($69,$70);
   $71 = load4($10);
   $72 = load4($71);
   $73 = ($72|0)==($6|0);
   if ($73) {
    store4($71,$64);
   } else {
    $74 = ((($71)) + 4|0);
    store4($74,$64);
   }
   store4($65,$6);
   store4($10,$64);
   $$pre62 = load4($69);
   $76 = $64;$78 = $$pre62;
  } else {
   $76 = $6;$78 = $11;
  }
  $75 = ((($76)) + 12|0);
  store1($75,1);
  $77 = ((($78)) + 12|0);
  store1($77,0);
  $79 = ((($78)) + 4|0);
  $80 = load4($79);
  $81 = load4($80);
  store4($79,$81);
  $82 = ($81|0)==(0|0);
  if (!($82)) {
   $83 = ((($81)) + 8|0);
   store4($83,$78);
  }
  $84 = ((($78)) + 8|0);
  $85 = load4($84);
  $86 = ((($80)) + 8|0);
  store4($86,$85);
  $87 = load4($84);
  $88 = load4($87);
  $89 = ($88|0)==($78|0);
  if ($89) {
   store4($87,$80);
  } else {
   $90 = ((($87)) + 4|0);
   store4($90,$80);
  }
  store4($80,$78);
  store4($84,$80);
  return;
 }
 else if ((label|0) == 37) {
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE15__emplace_multiIJRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEDpOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$0$i = 0, $$015$i = 0, $$pre$i = 0, $$sink$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (__Znwj(40)|0);
 $3 = ((($2)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$1);
 $4 = ((($2)) + 28|0);
 $5 = ((($1)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($4,$5);
 $6 = ((($0)) + 4|0);
 $7 = load4($6);
 $8 = ($7|0)==(0|0);
 do {
  if ($8) {
   $$0 = $6;$$015$i = $6;
  } else {
   $9 = ((($2)) + 27|0);
   $10 = load1($9);
   $11 = ($10<<24>>24)<(0);
   $12 = ((($2)) + 20|0);
   $13 = load4($12);
   $14 = $10&255;
   $15 = $11 ? $13 : $14;
   $16 = load4($3);
   $17 = $11 ? $16 : $3;
   $$0$i = $7;
   while(1) {
    $18 = ((($$0$i)) + 16|0);
    $19 = ((($18)) + 11|0);
    $20 = load1($19);
    $21 = ($20<<24>>24)<(0);
    $22 = ((($$0$i)) + 20|0);
    $23 = load4($22);
    $24 = $20&255;
    $25 = $21 ? $23 : $24;
    $26 = ($25>>>0)<($15>>>0);
    $$sroa$speculated$i$i$i$i$i = $26 ? $25 : $15;
    $27 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
    if ($27) {
     label = 5;
    } else {
     $28 = load4($18);
     $29 = $21 ? $28 : $18;
     $30 = (_memcmp($17,$29,$$sroa$speculated$i$i$i$i$i)|0);
     $31 = ($30|0)==(0);
     if ($31) {
      label = 5;
     } else {
      $33 = ($30|0)<(0);
      if ($33) {
       label = 7;
      } else {
       label = 9;
      }
     }
    }
    if ((label|0) == 5) {
     label = 0;
     $32 = ($15>>>0)<($25>>>0);
     if ($32) {
      label = 7;
     } else {
      label = 9;
     }
    }
    if ((label|0) == 7) {
     label = 0;
     $34 = load4($$0$i);
     $35 = ($34|0)==(0|0);
     if ($35) {
      label = 8;
      break;
     } else {
      $$sink$i = $34;
     }
    }
    else if ((label|0) == 9) {
     label = 0;
     $36 = ((($$0$i)) + 4|0);
     $37 = load4($36);
     $38 = ($37|0)==(0|0);
     if ($38) {
      label = 11;
      break;
     } else {
      $$sink$i = $37;
     }
    }
    $$0$i = $$sink$i;
   }
   if ((label|0) == 8) {
    $$0 = $$0$i;$$015$i = $$0$i;
    break;
   }
   else if ((label|0) == 11) {
    $$0 = $$0$i;$$015$i = $36;
    break;
   }
  }
 } while(0);
 store4($2,0);
 $39 = ((($2)) + 4|0);
 store4($39,0);
 $40 = ((($2)) + 8|0);
 store4($40,$$0);
 store4($$015$i,$2);
 $41 = load4($0);
 $42 = load4($41);
 $43 = ($42|0)==(0|0);
 if ($43) {
  $47 = $2;
  $45 = ((($0)) + 4|0);
  $46 = load4($45);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($46,$47);
  $48 = ((($0)) + 8|0);
  $49 = load4($48);
  $50 = (($49) + 1)|0;
  store4($48,$50);
  return ($2|0);
 }
 $44 = $42;
 store4($0,$44);
 $$pre$i = load4($$015$i);
 $47 = $$pre$i;
 $45 = ((($0)) + 4|0);
 $46 = load4($45);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($46,$47);
 $48 = ((($0)) + 8|0);
 $49 = load4($48);
 $50 = (($49) + 1)|0;
 store4($48,$50);
 return ($2|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$0$i = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i22 = 0, $$0$i$i21 = 0, $$0$i$i24 = 0, $$0$i10$i = 0, $$0$i29 = 0, $$015$i = 0, $$040 = 0, $$05$i$i = 0, $$05$i$i27 = 0, $$2$lcssa = 0, $$pre = 0, $$pre$i$i = 0, $$sink$i = 0, $$sroa$0$0 = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0;
 var $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0;
 var $119 = 0, $12 = 0, $120 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 8|0);
 $4 = load4($3);
 $5 = ($4|0)==(0);
 L1: do {
  if (!($5)) {
   $6 = load4($0);
   $7 = ((($0)) + 4|0);
   store4($0,$7);
   $8 = load4($7);
   $9 = ((($8)) + 8|0);
   store4($9,0);
   store4($7,0);
   store4($3,0);
   $10 = ((($6)) + 4|0);
   $11 = load4($10);
   $12 = ($11|0)==(0|0);
   $$$i = $12 ? $6 : $11;
   $13 = ($$$i|0)==(0|0);
   if (!($13)) {
    $14 = $7;
    $15 = ((($0)) + 4|0);
    $$pre = load4($1);
    $$040 = $$$i;$18 = $$pre;$91 = $$pre;
    while(1) {
     $16 = load4($2);
     $17 = ($18|0)==($16|0);
     if ($17) {
      break;
     }
     $22 = ((($$040)) + 16|0);
     $23 = ((($18)) + 16|0);
     (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($22,$23)|0);
     $24 = ((($18)) + 28|0);
     $25 = load1($24);
     $26 = ((($$040)) + 28|0);
     store1($26,$25);
     $27 = ((($$040)) + 8|0);
     $28 = load4($27);
     $29 = ($28|0)==(0|0);
     do {
      if ($29) {
       $$0$i = 0;
      } else {
       $30 = load4($28);
       $31 = ($30|0)==($$040|0);
       if ($31) {
        store4($28,0);
        $32 = ((($28)) + 4|0);
        $33 = load4($32);
        $34 = ($33|0)==(0|0);
        if ($34) {
         $$0$i = $28;
         break;
        } else {
         $$0$i10$i = $33;
        }
        while(1) {
         $35 = load4($$0$i10$i);
         $36 = ($35|0)==(0|0);
         if (!($36)) {
          $$0$i10$i = $35;
          continue;
         }
         $37 = ((($$0$i10$i)) + 4|0);
         $38 = load4($37);
         $39 = ($38|0)==(0|0);
         if ($39) {
          break;
         } else {
          $$0$i10$i = $38;
         }
        }
        $$0$i = $$0$i10$i;
        break;
       } else {
        $40 = ((($28)) + 4|0);
        store4($40,0);
        $41 = ($30|0)==(0|0);
        if ($41) {
         $$0$i = $28;
         break;
        } else {
         $$0$i$i21 = $30;
        }
        while(1) {
         $42 = load4($$0$i$i21);
         $43 = ($42|0)==(0|0);
         if (!($43)) {
          $$0$i$i21 = $42;
          continue;
         }
         $44 = ((($$0$i$i21)) + 4|0);
         $45 = load4($44);
         $46 = ($45|0)==(0|0);
         if ($46) {
          break;
         } else {
          $$0$i$i21 = $45;
         }
        }
        $$0$i = $$0$i$i21;
        break;
       }
      }
     } while(0);
     $47 = load4($7);
     $48 = ($47|0)==(0|0);
     do {
      if ($48) {
       $$015$i = $7;$$sroa$0$0 = $14;
      } else {
       $49 = ((($22)) + 11|0);
       $50 = load1($49);
       $51 = ($50<<24>>24)<(0);
       $52 = ((($$040)) + 20|0);
       $53 = load4($52);
       $54 = $50&255;
       $55 = $51 ? $53 : $54;
       $56 = load4($22);
       $57 = $51 ? $56 : $22;
       $$0$i29 = $47;
       while(1) {
        $58 = ((($$0$i29)) + 16|0);
        $59 = ((($58)) + 11|0);
        $60 = load1($59);
        $61 = ($60<<24>>24)<(0);
        $62 = ((($$0$i29)) + 20|0);
        $63 = load4($62);
        $64 = $60&255;
        $65 = $61 ? $63 : $64;
        $66 = ($65>>>0)<($55>>>0);
        $$sroa$speculated$i$i$i$i$i = $66 ? $65 : $55;
        $67 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
        if ($67) {
         label = 20;
        } else {
         $68 = load4($58);
         $69 = $61 ? $68 : $58;
         $70 = (_memcmp($57,$69,$$sroa$speculated$i$i$i$i$i)|0);
         $71 = ($70|0)==(0);
         if ($71) {
          label = 20;
         } else {
          $73 = ($70|0)<(0);
          if ($73) {
           label = 22;
          } else {
           label = 24;
          }
         }
        }
        if ((label|0) == 20) {
         label = 0;
         $72 = ($55>>>0)<($65>>>0);
         if ($72) {
          label = 22;
         } else {
          label = 24;
         }
        }
        if ((label|0) == 22) {
         label = 0;
         $74 = load4($$0$i29);
         $75 = ($74|0)==(0|0);
         if ($75) {
          label = 23;
          break;
         } else {
          $$sink$i = $74;
         }
        }
        else if ((label|0) == 24) {
         label = 0;
         $77 = ((($$0$i29)) + 4|0);
         $78 = load4($77);
         $79 = ($78|0)==(0|0);
         if ($79) {
          label = 26;
          break;
         } else {
          $$sink$i = $78;
         }
        }
        $$0$i29 = $$sink$i;
       }
       if ((label|0) == 23) {
        label = 0;
        $76 = $$0$i29;
        $$015$i = $$0$i29;$$sroa$0$0 = $76;
        break;
       }
       else if ((label|0) == 26) {
        label = 0;
        $80 = $$0$i29;
        $$015$i = $77;$$sroa$0$0 = $80;
        break;
       }
      }
     } while(0);
     store4($$040,0);
     $81 = ((($$040)) + 4|0);
     store4($81,0);
     store4($27,$$sroa$0$0);
     store4($$015$i,$$040);
     $82 = load4($0);
     $83 = load4($82);
     $84 = ($83|0)==(0|0);
     if ($84) {
      $87 = $$040;
     } else {
      $85 = $83;
      store4($0,$85);
      $$pre$i$i = load4($$015$i);
      $87 = $$pre$i$i;
     }
     $86 = load4($15);
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($86,$87);
     $88 = load4($3);
     $89 = (($88) + 1)|0;
     store4($3,$89);
     $90 = ((($91)) + 4|0);
     $92 = load4($90);
     $93 = ($92|0)==(0|0);
     if ($93) {
      $$0$i$i24 = $91;
      while(1) {
       $96 = ((($$0$i$i24)) + 8|0);
       $97 = load4($96);
       $98 = load4($97);
       $99 = ($98|0)==($$0$i$i24|0);
       if ($99) {
        $$05$i$i27 = $97;
        break;
       } else {
        $$0$i$i24 = $97;
       }
      }
     } else {
      $$0$i$i$i22 = $92;
      while(1) {
       $94 = load4($$0$i$i$i22);
       $95 = ($94|0)==(0|0);
       if ($95) {
        $$05$i$i27 = $$0$i$i$i22;
        break;
       } else {
        $$0$i$i$i22 = $94;
       }
      }
     }
     store4($1,$$05$i$i27);
     $100 = ($$0$i|0)==(0|0);
     if ($100) {
      break L1;
     } else {
      $$040 = $$0$i;$18 = $$05$i$i27;$91 = $$05$i$i27;
     }
    }
    $19 = ((($$040)) + 8|0);
    $20 = load4($19);
    $21 = ($20|0)==(0|0);
    if ($21) {
     $$2$lcssa = $$040;
    } else {
     $102 = $20;
     while(1) {
      $101 = ((($102)) + 8|0);
      $103 = load4($101);
      $104 = ($103|0)==(0|0);
      if ($104) {
       break;
      } else {
       $102 = $103;
      }
     }
     $$2$lcssa = $102;
    }
    __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$$2$lcssa);
   }
  }
 } while(0);
 $105 = load4($1);
 $106 = load4($2);
 $107 = ($105|0)==($106|0);
 if ($107) {
  return;
 }
 $109 = $105;$111 = $105;
 while(1) {
  $108 = ((($109)) + 16|0);
  (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE15__emplace_multiIJRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEDpOT_($0,$108)|0);
  $110 = ((($111)) + 4|0);
  $112 = load4($110);
  $113 = ($112|0)==(0|0);
  if ($113) {
   $$0$i$i = $111;
   while(1) {
    $116 = ((($$0$i$i)) + 8|0);
    $117 = load4($116);
    $118 = load4($117);
    $119 = ($118|0)==($$0$i$i|0);
    if ($119) {
     $$05$i$i = $117;
     break;
    } else {
     $$0$i$i = $117;
    }
   }
  } else {
   $$0$i$i$i = $112;
   while(1) {
    $114 = load4($$0$i$i$i);
    $115 = ($114|0)==(0|0);
    if ($115) {
     $$05$i$i = $$0$i$i$i;
     break;
    } else {
     $$0$i$i$i = $114;
    }
   }
  }
  store4($1,$$05$i$i);
  $120 = ($$05$i$i|0)==($106|0);
  if ($120) {
   break;
  } else {
   $109 = $$05$i$i;$111 = $$05$i$i;
  }
 }
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0|0);
 if ($2) {
  return;
 } else {
  $3 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$3);
  $4 = ((($1)) + 4|0);
  $5 = load4($4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$5);
  $6 = ((($1)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
  __ZdlPv($1);
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE15__emplace_multiIJRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEDpOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$0$i = 0, $$015$i = 0, $$pre$i = 0, $$sink$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (__Znwj(32)|0);
 $3 = ((($2)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($3,$1);
 $4 = ((($2)) + 28|0);
 $5 = ((($1)) + 12|0);
 $6 = load1($5);
 store1($4,$6);
 $7 = ((($0)) + 4|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 do {
  if ($9) {
   $$0 = $7;$$015$i = $7;
  } else {
   $10 = ((($2)) + 27|0);
   $11 = load1($10);
   $12 = ($11<<24>>24)<(0);
   $13 = ((($2)) + 20|0);
   $14 = load4($13);
   $15 = $11&255;
   $16 = $12 ? $14 : $15;
   $17 = load4($3);
   $18 = $12 ? $17 : $3;
   $$0$i = $8;
   while(1) {
    $19 = ((($$0$i)) + 16|0);
    $20 = ((($19)) + 11|0);
    $21 = load1($20);
    $22 = ($21<<24>>24)<(0);
    $23 = ((($$0$i)) + 20|0);
    $24 = load4($23);
    $25 = $21&255;
    $26 = $22 ? $24 : $25;
    $27 = ($26>>>0)<($16>>>0);
    $$sroa$speculated$i$i$i$i$i = $27 ? $26 : $16;
    $28 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
    if ($28) {
     label = 5;
    } else {
     $29 = load4($19);
     $30 = $22 ? $29 : $19;
     $31 = (_memcmp($18,$30,$$sroa$speculated$i$i$i$i$i)|0);
     $32 = ($31|0)==(0);
     if ($32) {
      label = 5;
     } else {
      $34 = ($31|0)<(0);
      if ($34) {
       label = 7;
      } else {
       label = 9;
      }
     }
    }
    if ((label|0) == 5) {
     label = 0;
     $33 = ($16>>>0)<($26>>>0);
     if ($33) {
      label = 7;
     } else {
      label = 9;
     }
    }
    if ((label|0) == 7) {
     label = 0;
     $35 = load4($$0$i);
     $36 = ($35|0)==(0|0);
     if ($36) {
      label = 8;
      break;
     } else {
      $$sink$i = $35;
     }
    }
    else if ((label|0) == 9) {
     label = 0;
     $37 = ((($$0$i)) + 4|0);
     $38 = load4($37);
     $39 = ($38|0)==(0|0);
     if ($39) {
      label = 11;
      break;
     } else {
      $$sink$i = $38;
     }
    }
    $$0$i = $$sink$i;
   }
   if ((label|0) == 8) {
    $$0 = $$0$i;$$015$i = $$0$i;
    break;
   }
   else if ((label|0) == 11) {
    $$0 = $$0$i;$$015$i = $37;
    break;
   }
  }
 } while(0);
 store4($2,0);
 $40 = ((($2)) + 4|0);
 store4($40,0);
 $41 = ((($2)) + 8|0);
 store4($41,$$0);
 store4($$015$i,$2);
 $42 = load4($0);
 $43 = load4($42);
 $44 = ($43|0)==(0|0);
 if ($44) {
  $48 = $2;
  $46 = ((($0)) + 4|0);
  $47 = load4($46);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($47,$48);
  $49 = ((($0)) + 8|0);
  $50 = load4($49);
  $51 = (($50) + 1)|0;
  store4($49,$51);
  return ($2|0);
 }
 $45 = $43;
 store4($0,$45);
 $$pre$i = load4($$015$i);
 $48 = $$pre$i;
 $46 = ((($0)) + 4|0);
 $47 = load4($46);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($47,$48);
 $49 = ((($0)) + 8|0);
 $50 = load4($49);
 $51 = (($50) + 1)|0;
 store4($49,$51);
 return ($2|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $$byval_copy = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy = sp + 8|0;
 $4 = sp + 4|0;
 $5 = sp;
 $6 = load4($1);
 store4($5,$6);
 ; store4($$byval_copy,load4($5,4),4);
 $7 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEESK_RKT_($0,$$byval_copy,$4,$2)|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 if (!($9)) {
  $$0 = $8;
  STACKTOP = sp;return ($$0|0);
 }
 $10 = (__Znwj(40)|0);
 $11 = ((($10)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($11,$3);
 $12 = ((($10)) + 28|0);
 $13 = ((($3)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($12,$13);
 $14 = load4($4);
 store4($10,0);
 $15 = ((($10)) + 4|0);
 store4($15,0);
 $16 = ((($10)) + 8|0);
 store4($16,$14);
 store4($7,$10);
 $17 = load4($0);
 $18 = load4($17);
 $19 = ($18|0)==(0|0);
 if ($19) {
  $23 = $10;
 } else {
  $20 = $18;
  store4($0,$20);
  $$pre$i = load4($7);
  $23 = $$pre$i;
 }
 $21 = ((($0)) + 4|0);
 $22 = load4($21);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($22,$23);
 $24 = ((($0)) + 8|0);
 $25 = load4($24);
 $26 = (($25) + 1)|0;
 store4($24,$26);
 $$0 = $10;
 STACKTOP = sp;return ($$0|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEESK_RKT_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$05$i$i = 0, $$05$i$i$i$i$i = 0, $$2 = 0, $$sroa$051$0 = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22 = 0, $$sroa$speculated$i$i$i$i27 = 0, $$sroa$speculated$i$i$i$i33 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0;
 var $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 4|0);
 $5 = load4($1);
 $6 = ($5|0)==($4|0);
 $7 = $5;
 do {
  if (!($6)) {
   $8 = ((($5)) + 16|0);
   $9 = ((($3)) + 11|0);
   $10 = load1($9);
   $11 = ($10<<24>>24)<(0);
   $12 = ((($3)) + 4|0);
   $13 = load4($12);
   $14 = $10&255;
   $15 = $11 ? $13 : $14;
   $16 = ((($8)) + 11|0);
   $17 = load1($16);
   $18 = ($17<<24>>24)<(0);
   $19 = ((($5)) + 20|0);
   $20 = load4($19);
   $21 = $17&255;
   $22 = $18 ? $20 : $21;
   $23 = ($22>>>0)<($15>>>0);
   $$sroa$speculated$i$i$i$i33 = $23 ? $22 : $15;
   $24 = ($$sroa$speculated$i$i$i$i33|0)==(0);
   if ($24) {
    label = 4;
   } else {
    $25 = load4($3);
    $26 = $11 ? $25 : $3;
    $27 = load4($8);
    $28 = $18 ? $27 : $8;
    $29 = (_memcmp($26,$28,$$sroa$speculated$i$i$i$i33)|0);
    $30 = ($29|0)==(0);
    if ($30) {
     label = 4;
    } else {
     $32 = ($29|0)<(0);
     if ($32) {
      break;
     }
    }
   }
   if ((label|0) == 4) {
    $31 = ($15>>>0)<($22>>>0);
    if ($31) {
     break;
    }
   }
   $75 = ($15>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i22 = $75 ? $15 : $22;
   $76 = ($$sroa$speculated$i$i$i$i22|0)==(0);
   if ($76) {
    label = 20;
   } else {
    $77 = load4($8);
    $78 = $18 ? $77 : $8;
    $79 = load4($3);
    $80 = $11 ? $79 : $3;
    $81 = (_memcmp($78,$80,$$sroa$speculated$i$i$i$i22)|0);
    $82 = ($81|0)==(0);
    if ($82) {
     label = 20;
    } else {
     $83 = ($81|0)<(0);
     if (!($83)) {
      label = 34;
     }
    }
   }
   if ((label|0) == 20) {
    if (!($23)) {
     label = 34;
    }
   }
   if ((label|0) == 34) {
    store4($2,$7);
    $$2 = $2;
    return ($$2|0);
   }
   $84 = ((($5)) + 4|0);
   $85 = load4($84);
   $86 = ($85|0)==(0|0);
   if ($86) {
    $$0$i$i$i$i$i = $5;
    while(1) {
     $89 = ((($$0$i$i$i$i$i)) + 8|0);
     $90 = load4($89);
     $91 = load4($90);
     $92 = ($91|0)==($$0$i$i$i$i$i|0);
     if ($92) {
      $$05$i$i$i$i$i = $90;
      break;
     } else {
      $$0$i$i$i$i$i = $90;
     }
    }
   } else {
    $$0$i$i$i$i$i$i = $85;
    while(1) {
     $87 = load4($$0$i$i$i$i$i$i);
     $88 = ($87|0)==(0|0);
     if ($88) {
      $$05$i$i$i$i$i = $$0$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i = $87;
     }
    }
   }
   $93 = ($$05$i$i$i$i$i|0)==($4|0);
   do {
    if (!($93)) {
     $94 = ((($$05$i$i$i$i$i)) + 16|0);
     $95 = ((($94)) + 11|0);
     $96 = load1($95);
     $97 = ($96<<24>>24)<(0);
     $98 = ((($$05$i$i$i$i$i)) + 20|0);
     $99 = load4($98);
     $100 = $96&255;
     $101 = $97 ? $99 : $100;
     $102 = ($101>>>0)<($15>>>0);
     $$sroa$speculated$i$i$i$i = $102 ? $101 : $15;
     $103 = ($$sroa$speculated$i$i$i$i|0)==(0);
     if ($103) {
      label = 28;
     } else {
      $104 = load4($3);
      $105 = $11 ? $104 : $3;
      $106 = load4($94);
      $107 = $97 ? $106 : $94;
      $108 = (_memcmp($105,$107,$$sroa$speculated$i$i$i$i)|0);
      $109 = ($108|0)==(0);
      if ($109) {
       label = 28;
      } else {
       $111 = ($108|0)<(0);
       if ($111) {
        break;
       }
      }
     }
     if ((label|0) == 28) {
      $110 = ($15>>>0)<($101>>>0);
      if ($110) {
       break;
      }
     }
     $112 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$2,$3)|0);
     $$2 = $112;
     return ($$2|0);
    }
   } while(0);
   if ($86) {
    store4($2,$5);
    $$2 = $84;
    return ($$2|0);
   } else {
    store4($2,$$05$i$i$i$i$i);
    $$2 = $$05$i$i$i$i$i;
    return ($$2|0);
   }
  }
 } while(0);
 $33 = load4($0);
 $34 = ($5|0)==($33|0);
 do {
  if ($34) {
   $$sroa$051$0 = $7;
  } else {
   $35 = load4($5);
   $36 = ($35|0)==(0|0);
   if ($36) {
    $$0$i$i = $5;
    while(1) {
     $40 = ((($$0$i$i)) + 8|0);
     $41 = load4($40);
     $42 = load4($41);
     $43 = ($42|0)==($$0$i$i|0);
     if ($43) {
      $$0$i$i = $41;
     } else {
      $$05$i$i = $41;
      break;
     }
    }
   } else {
    $$0$i$i$i = $35;
    while(1) {
     $37 = ((($$0$i$i$i)) + 4|0);
     $38 = load4($37);
     $39 = ($38|0)==(0|0);
     if ($39) {
      $$05$i$i = $$0$i$i$i;
      break;
     } else {
      $$0$i$i$i = $38;
     }
    }
   }
   $44 = $$05$i$i;
   $45 = ((($$05$i$i)) + 16|0);
   $46 = ((($45)) + 11|0);
   $47 = load1($46);
   $48 = ($47<<24>>24)<(0);
   $49 = ((($$05$i$i)) + 20|0);
   $50 = load4($49);
   $51 = $47&255;
   $52 = $48 ? $50 : $51;
   $53 = ((($3)) + 11|0);
   $54 = load1($53);
   $55 = ($54<<24>>24)<(0);
   $56 = ((($3)) + 4|0);
   $57 = load4($56);
   $58 = $54&255;
   $59 = $55 ? $57 : $58;
   $60 = ($59>>>0)<($52>>>0);
   $$sroa$speculated$i$i$i$i27 = $60 ? $59 : $52;
   $61 = ($$sroa$speculated$i$i$i$i27|0)==(0);
   if ($61) {
    label = 12;
   } else {
    $62 = load4($45);
    $63 = $48 ? $62 : $45;
    $64 = load4($3);
    $65 = $55 ? $64 : $3;
    $66 = (_memcmp($63,$65,$$sroa$speculated$i$i$i$i27)|0);
    $67 = ($66|0)==(0);
    if ($67) {
     label = 12;
    } else {
     $69 = ($66|0)<(0);
     if ($69) {
      $$sroa$051$0 = $44;
      break;
     }
    }
   }
   if ((label|0) == 12) {
    $68 = ($52>>>0)<($59>>>0);
    if ($68) {
     $$sroa$051$0 = $44;
     break;
    }
   }
   $74 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$2,$3)|0);
   $$2 = $74;
   return ($$2|0);
  }
 } while(0);
 $70 = load4($5);
 $71 = ($70|0)==(0|0);
 if ($71) {
  store4($2,$5);
  $$2 = $5;
  return ($$2|0);
 } else {
  $72 = $$sroa$051$0;
  store4($2,$72);
  $73 = ((($72)) + 4|0);
  $$2 = $73;
  return ($$2|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$020 = 0, $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i21 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  store4($1,$3);
  $$020 = $3;
  return ($$020|0);
 }
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($2);
 $14 = $8 ? $13 : $2;
 $$0 = $4;
 while(1) {
  $15 = ((($$0)) + 16|0);
  $16 = ((($15)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  $19 = ((($$0)) + 20|0);
  $20 = load4($19);
  $21 = $17&255;
  $22 = $18 ? $20 : $21;
  $23 = ($22>>>0)<($12>>>0);
  $$sroa$speculated$i$i$i$i21 = $23 ? $22 : $12;
  $24 = ($$sroa$speculated$i$i$i$i21|0)==(0);
  if ($24) {
   label = 5;
  } else {
   $25 = load4($15);
   $26 = $18 ? $25 : $15;
   $27 = (_memcmp($14,$26,$$sroa$speculated$i$i$i$i21)|0);
   $28 = ($27|0)==(0);
   if ($28) {
    label = 5;
   } else {
    $30 = ($27|0)<(0);
    if ($30) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $29 = ($12>>>0)<($22>>>0);
   if ($29) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $31 = load4($$0);
   $32 = ($31|0)==(0|0);
   if ($32) {
    label = 8;
    break;
   } else {
    $$sink = $31;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $33 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i = $33 ? $12 : $22;
   $34 = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($34) {
    label = 11;
   } else {
    $35 = load4($15);
    $36 = $18 ? $35 : $15;
    $37 = (_memcmp($36,$14,$$sroa$speculated$i$i$i$i)|0);
    $38 = ($37|0)==(0);
    if ($38) {
     label = 11;
    } else {
     $39 = ($37|0)<(0);
     if (!($39)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($23)) {
     label = 16;
     break;
    }
   }
   $40 = ((($$0)) + 4|0);
   $41 = load4($40);
   $42 = ($41|0)==(0|0);
   if ($42) {
    label = 15;
    break;
   } else {
    $$sink = $41;
   }
  }
  $$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($1,$$0);
  $$020 = $$0;
  return ($$020|0);
 }
 else if ((label|0) == 15) {
  store4($1,$$0);
  $$020 = $40;
  return ($$020|0);
 }
 else if ((label|0) == 16) {
  store4($1,$$0);
  $$020 = $1;
  return ($$020|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $$byval_copy = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy = sp + 8|0;
 $4 = sp + 4|0;
 $5 = sp;
 $6 = load4($1);
 store4($5,$6);
 ; store4($$byval_copy,load4($5,4),4);
 $7 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEESK_RKT_($0,$$byval_copy,$4,$2)|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 if (!($9)) {
  $$0 = $8;
  STACKTOP = sp;return ($$0|0);
 }
 $10 = (__Znwj(32)|0);
 $11 = ((($10)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($11,$3);
 $12 = ((($10)) + 28|0);
 $13 = ((($3)) + 12|0);
 $14 = load1($13);
 store1($12,$14);
 $15 = load4($4);
 store4($10,0);
 $16 = ((($10)) + 4|0);
 store4($16,0);
 $17 = ((($10)) + 8|0);
 store4($17,$15);
 store4($7,$10);
 $18 = load4($0);
 $19 = load4($18);
 $20 = ($19|0)==(0|0);
 if ($20) {
  $24 = $10;
 } else {
  $21 = $19;
  store4($0,$21);
  $$pre$i = load4($7);
  $24 = $$pre$i;
 }
 $22 = ((($0)) + 4|0);
 $23 = load4($22);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($23,$24);
 $25 = ((($0)) + 8|0);
 $26 = load4($25);
 $27 = (($26) + 1)|0;
 store4($25,$27);
 $$0 = $10;
 STACKTOP = sp;return ($$0|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EEiEESK_RKT_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0$i$i = 0, $$0$i$i$i = 0, $$0$i$i$i$i$i = 0, $$0$i$i$i$i$i$i = 0, $$05$i$i = 0, $$05$i$i$i$i$i = 0, $$2 = 0, $$sroa$051$0 = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22 = 0, $$sroa$speculated$i$i$i$i27 = 0, $$sroa$speculated$i$i$i$i33 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0;
 var $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 4|0);
 $5 = load4($1);
 $6 = ($5|0)==($4|0);
 $7 = $5;
 do {
  if (!($6)) {
   $8 = ((($5)) + 16|0);
   $9 = ((($3)) + 11|0);
   $10 = load1($9);
   $11 = ($10<<24>>24)<(0);
   $12 = ((($3)) + 4|0);
   $13 = load4($12);
   $14 = $10&255;
   $15 = $11 ? $13 : $14;
   $16 = ((($8)) + 11|0);
   $17 = load1($16);
   $18 = ($17<<24>>24)<(0);
   $19 = ((($5)) + 20|0);
   $20 = load4($19);
   $21 = $17&255;
   $22 = $18 ? $20 : $21;
   $23 = ($22>>>0)<($15>>>0);
   $$sroa$speculated$i$i$i$i33 = $23 ? $22 : $15;
   $24 = ($$sroa$speculated$i$i$i$i33|0)==(0);
   if ($24) {
    label = 4;
   } else {
    $25 = load4($3);
    $26 = $11 ? $25 : $3;
    $27 = load4($8);
    $28 = $18 ? $27 : $8;
    $29 = (_memcmp($26,$28,$$sroa$speculated$i$i$i$i33)|0);
    $30 = ($29|0)==(0);
    if ($30) {
     label = 4;
    } else {
     $32 = ($29|0)<(0);
     if ($32) {
      break;
     }
    }
   }
   if ((label|0) == 4) {
    $31 = ($15>>>0)<($22>>>0);
    if ($31) {
     break;
    }
   }
   $75 = ($15>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i22 = $75 ? $15 : $22;
   $76 = ($$sroa$speculated$i$i$i$i22|0)==(0);
   if ($76) {
    label = 20;
   } else {
    $77 = load4($8);
    $78 = $18 ? $77 : $8;
    $79 = load4($3);
    $80 = $11 ? $79 : $3;
    $81 = (_memcmp($78,$80,$$sroa$speculated$i$i$i$i22)|0);
    $82 = ($81|0)==(0);
    if ($82) {
     label = 20;
    } else {
     $83 = ($81|0)<(0);
     if (!($83)) {
      label = 34;
     }
    }
   }
   if ((label|0) == 20) {
    if (!($23)) {
     label = 34;
    }
   }
   if ((label|0) == 34) {
    store4($2,$7);
    $$2 = $2;
    return ($$2|0);
   }
   $84 = ((($5)) + 4|0);
   $85 = load4($84);
   $86 = ($85|0)==(0|0);
   if ($86) {
    $$0$i$i$i$i$i = $5;
    while(1) {
     $89 = ((($$0$i$i$i$i$i)) + 8|0);
     $90 = load4($89);
     $91 = load4($90);
     $92 = ($91|0)==($$0$i$i$i$i$i|0);
     if ($92) {
      $$05$i$i$i$i$i = $90;
      break;
     } else {
      $$0$i$i$i$i$i = $90;
     }
    }
   } else {
    $$0$i$i$i$i$i$i = $85;
    while(1) {
     $87 = load4($$0$i$i$i$i$i$i);
     $88 = ($87|0)==(0|0);
     if ($88) {
      $$05$i$i$i$i$i = $$0$i$i$i$i$i$i;
      break;
     } else {
      $$0$i$i$i$i$i$i = $87;
     }
    }
   }
   $93 = ($$05$i$i$i$i$i|0)==($4|0);
   do {
    if (!($93)) {
     $94 = ((($$05$i$i$i$i$i)) + 16|0);
     $95 = ((($94)) + 11|0);
     $96 = load1($95);
     $97 = ($96<<24>>24)<(0);
     $98 = ((($$05$i$i$i$i$i)) + 20|0);
     $99 = load4($98);
     $100 = $96&255;
     $101 = $97 ? $99 : $100;
     $102 = ($101>>>0)<($15>>>0);
     $$sroa$speculated$i$i$i$i = $102 ? $101 : $15;
     $103 = ($$sroa$speculated$i$i$i$i|0)==(0);
     if ($103) {
      label = 28;
     } else {
      $104 = load4($3);
      $105 = $11 ? $104 : $3;
      $106 = load4($94);
      $107 = $97 ? $106 : $94;
      $108 = (_memcmp($105,$107,$$sroa$speculated$i$i$i$i)|0);
      $109 = ($108|0)==(0);
      if ($109) {
       label = 28;
      } else {
       $111 = ($108|0)<(0);
       if ($111) {
        break;
       }
      }
     }
     if ((label|0) == 28) {
      $110 = ($15>>>0)<($101>>>0);
      if ($110) {
       break;
      }
     }
     $112 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$2,$3)|0);
     $$2 = $112;
     return ($$2|0);
    }
   } while(0);
   if ($86) {
    store4($2,$5);
    $$2 = $84;
    return ($$2|0);
   } else {
    store4($2,$$05$i$i$i$i$i);
    $$2 = $$05$i$i$i$i$i;
    return ($$2|0);
   }
  }
 } while(0);
 $33 = load4($0);
 $34 = ($5|0)==($33|0);
 do {
  if ($34) {
   $$sroa$051$0 = $7;
  } else {
   $35 = load4($5);
   $36 = ($35|0)==(0|0);
   if ($36) {
    $$0$i$i = $5;
    while(1) {
     $40 = ((($$0$i$i)) + 8|0);
     $41 = load4($40);
     $42 = load4($41);
     $43 = ($42|0)==($$0$i$i|0);
     if ($43) {
      $$0$i$i = $41;
     } else {
      $$05$i$i = $41;
      break;
     }
    }
   } else {
    $$0$i$i$i = $35;
    while(1) {
     $37 = ((($$0$i$i$i)) + 4|0);
     $38 = load4($37);
     $39 = ($38|0)==(0|0);
     if ($39) {
      $$05$i$i = $$0$i$i$i;
      break;
     } else {
      $$0$i$i$i = $38;
     }
    }
   }
   $44 = $$05$i$i;
   $45 = ((($$05$i$i)) + 16|0);
   $46 = ((($45)) + 11|0);
   $47 = load1($46);
   $48 = ($47<<24>>24)<(0);
   $49 = ((($$05$i$i)) + 20|0);
   $50 = load4($49);
   $51 = $47&255;
   $52 = $48 ? $50 : $51;
   $53 = ((($3)) + 11|0);
   $54 = load1($53);
   $55 = ($54<<24>>24)<(0);
   $56 = ((($3)) + 4|0);
   $57 = load4($56);
   $58 = $54&255;
   $59 = $55 ? $57 : $58;
   $60 = ($59>>>0)<($52>>>0);
   $$sroa$speculated$i$i$i$i27 = $60 ? $59 : $52;
   $61 = ($$sroa$speculated$i$i$i$i27|0)==(0);
   if ($61) {
    label = 12;
   } else {
    $62 = load4($45);
    $63 = $48 ? $62 : $45;
    $64 = load4($3);
    $65 = $55 ? $64 : $3;
    $66 = (_memcmp($63,$65,$$sroa$speculated$i$i$i$i27)|0);
    $67 = ($66|0)==(0);
    if ($67) {
     label = 12;
    } else {
     $69 = ($66|0)<(0);
     if ($69) {
      $$sroa$051$0 = $44;
      break;
     }
    }
   }
   if ((label|0) == 12) {
    $68 = ($52>>>0)<($59>>>0);
    if ($68) {
     $$sroa$051$0 = $44;
     break;
    }
   }
   $74 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$2,$3)|0);
   $$2 = $74;
   return ($$2|0);
  }
 } while(0);
 $70 = load4($5);
 $71 = ($70|0)==(0|0);
 if ($71) {
  store4($2,$5);
  $$2 = $5;
  return ($$2|0);
 } else {
  $72 = $$sroa$051$0;
  store4($2,$72);
  $73 = ((($72)) + 4|0);
  $$2 = $73;
  return ($$2|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$020 = 0, $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i21 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  store4($1,$3);
  $$020 = $3;
  return ($$020|0);
 }
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($2);
 $14 = $8 ? $13 : $2;
 $$0 = $4;
 while(1) {
  $15 = ((($$0)) + 16|0);
  $16 = ((($15)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  $19 = ((($$0)) + 20|0);
  $20 = load4($19);
  $21 = $17&255;
  $22 = $18 ? $20 : $21;
  $23 = ($22>>>0)<($12>>>0);
  $$sroa$speculated$i$i$i$i21 = $23 ? $22 : $12;
  $24 = ($$sroa$speculated$i$i$i$i21|0)==(0);
  if ($24) {
   label = 5;
  } else {
   $25 = load4($15);
   $26 = $18 ? $25 : $15;
   $27 = (_memcmp($14,$26,$$sroa$speculated$i$i$i$i21)|0);
   $28 = ($27|0)==(0);
   if ($28) {
    label = 5;
   } else {
    $30 = ($27|0)<(0);
    if ($30) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $29 = ($12>>>0)<($22>>>0);
   if ($29) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $31 = load4($$0);
   $32 = ($31|0)==(0|0);
   if ($32) {
    label = 8;
    break;
   } else {
    $$sink = $31;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $33 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i = $33 ? $12 : $22;
   $34 = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($34) {
    label = 11;
   } else {
    $35 = load4($15);
    $36 = $18 ? $35 : $15;
    $37 = (_memcmp($36,$14,$$sroa$speculated$i$i$i$i)|0);
    $38 = ($37|0)==(0);
    if ($38) {
     label = 11;
    } else {
     $39 = ($37|0)<(0);
     if (!($39)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($23)) {
     label = 16;
     break;
    }
   }
   $40 = ((($$0)) + 4|0);
   $41 = load4($40);
   $42 = ($41|0)==(0|0);
   if ($42) {
    label = 15;
    break;
   } else {
    $$sink = $41;
   }
  }
  $$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($1,$$0);
  $$020 = $$0;
  return ($$020|0);
 }
 else if ((label|0) == 15) {
  store4($1,$$0);
  $$020 = $40;
  return ($$020|0);
 }
 else if ((label|0) == 16) {
  store4($1,$$0);
  $$020 = $1;
  return ($$020|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0|0);
 if ($2) {
  return;
 } else {
  $3 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$3);
  $4 = ((($1)) + 4|0);
  $5 = load4($4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$5);
  $6 = ((($1)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
  __ZdlPv($1);
  return;
 }
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 return ($2|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$07$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_($0,$1)|0);
 $4 = ((($0)) + 4|0);
 $5 = ($3|0)==($4|0);
 if ($5) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $6 = ((($3)) + 28|0);
 $7 = ((($6)) + 11|0);
 $8 = load1($7);
 $9 = ($8<<24>>24)<(0);
 $10 = ((($3)) + 32|0);
 $11 = load4($10);
 $12 = $8&255;
 $13 = $9 ? $11 : $12;
 $14 = (($13) + 4)|0;
 $15 = (_malloc($14)|0);
 store4($15,$13);
 $16 = ((($15)) + 4|0);
 $17 = load4($6);
 $18 = $9 ? $17 : $6;
 _memcpy(($16|0),($18|0),($13|0))|0;
 store4($2,$15);
 $19 = (__emval_take_value((1080|0),($2|0))|0);
 $$sroa$07$0 = $19;
 STACKTOP = sp;return ($$sroa$07$0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp + 8|0;
 $4 = sp + 12|0;
 $5 = sp;
 store4($3,$1);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($5,$0,$1,9357,$3,$4);
 $6 = load4($5);
 $7 = ((($6)) + 28|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($7,$2)|0);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1024|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$3);
 __ZdlPv($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(12)|0);
 $1 = ((($0)) + 4|0);
 store4($1,0);
 $2 = ((($0)) + 8|0);
 store4($2,0);
 store4($0,$1);
 return ($0|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = ((($2)) + 4|0);
 $6 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($3,$5,$6);
 $7 = (FUNCTION_TABLE_iii[$4 & 15]($1,$3)|0);
 __emval_incref(($7|0));
 __emval_decref(($7|0));
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 STACKTOP = sp;return ($7|0);
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$ph$lcssa$i = 0, $$0$ph14$i = 0, $$07$ph13$i = 0, $$0710$i = 0, $$sroa$0$0 = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ($3|0)==(0|0);
 do {
  if (!($4)) {
   $5 = ((($1)) + 11|0);
   $6 = load1($5);
   $7 = ($6<<24>>24)<(0);
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = $6&255;
   $11 = $7 ? $9 : $10;
   $12 = load4($1);
   $13 = $7 ? $12 : $1;
   $$0$ph14$i = $2;$$07$ph13$i = $3;
   L3: while(1) {
    $$0710$i = $$07$ph13$i;
    while(1) {
     $14 = ((($$0710$i)) + 16|0);
     $15 = ((($14)) + 11|0);
     $16 = load1($15);
     $17 = ($16<<24>>24)<(0);
     $18 = ((($$0710$i)) + 20|0);
     $19 = load4($18);
     $20 = $16&255;
     $21 = $17 ? $19 : $20;
     $22 = ($11>>>0)<($21>>>0);
     $$sroa$speculated$i$i$i$i$i = $22 ? $11 : $21;
     $23 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     if ($23) {
      label = 6;
     } else {
      $24 = load4($14);
      $25 = $17 ? $24 : $14;
      $26 = (_memcmp($25,$13,$$sroa$speculated$i$i$i$i$i)|0);
      $27 = ($26|0)==(0);
      if ($27) {
       label = 6;
      } else {
       $29 = ($26|0)<(0);
       if (!($29)) {
        break;
       }
      }
     }
     if ((label|0) == 6) {
      label = 0;
      $28 = ($21>>>0)<($11>>>0);
      if (!($28)) {
       break;
      }
     }
     $32 = ((($$0710$i)) + 4|0);
     $33 = load4($32);
     $34 = ($33|0)==(0|0);
     if ($34) {
      $$0$ph$lcssa$i = $$0$ph14$i;
      break L3;
     } else {
      $$0710$i = $33;
     }
    }
    $30 = load4($$0710$i);
    $31 = ($30|0)==(0|0);
    if ($31) {
     $$0$ph$lcssa$i = $$0710$i;
     break;
    } else {
     $$0$ph14$i = $$0710$i;$$07$ph13$i = $30;
    }
   }
   $35 = ($$0$ph$lcssa$i|0)==($2|0);
   if (!($35)) {
    $36 = ((($$0$ph$lcssa$i)) + 16|0);
    $37 = ((($36)) + 11|0);
    $38 = load1($37);
    $39 = ($38<<24>>24)<(0);
    $40 = ((($$0$ph$lcssa$i)) + 20|0);
    $41 = load4($40);
    $42 = $38&255;
    $43 = $39 ? $41 : $42;
    $44 = ($43>>>0)<($11>>>0);
    $$sroa$speculated$i$i$i$i = $44 ? $43 : $11;
    $45 = ($$sroa$speculated$i$i$i$i|0)==(0);
    if (!($45)) {
     $46 = load4($36);
     $47 = $39 ? $46 : $36;
     $48 = (_memcmp($13,$47,$$sroa$speculated$i$i$i$i)|0);
     $49 = ($48|0)==(0);
     if (!($49)) {
      $51 = ($48|0)<(0);
      if ($51) {
       break;
      } else {
       $$sroa$0$0 = $$0$ph$lcssa$i;
      }
      return ($$sroa$0$0|0);
     }
    }
    $50 = ($11>>>0)<($43>>>0);
    if (!($50)) {
     $$sroa$0$0 = $$0$ph$lcssa$i;
     return ($$sroa$0$0|0);
    }
   }
  }
 } while(0);
 $$sroa$0$0 = $2;
 return ($$sroa$0$0|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = load4($0);
 $7 = ((($2)) + 4|0);
 $8 = load4($2);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$7,$8);
 $9 = ((($3)) + 4|0);
 $10 = load4($3);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($5,$9,$10);
 FUNCTION_TABLE_viii[$6 & 31]($1,$4,$5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $$019 = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $6 = sp;
 $7 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($1,$6,$2)|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 if (!($9)) {
  $$0 = $8;$$019 = 0;
  $27 = $$0;
  store4($0,$27);
  $28 = ((($0)) + 4|0);
  store1($28,$$019);
  STACKTOP = sp;return;
 }
 $10 = (__Znwj(40)|0);
 $11 = load4($4);
 $12 = ((($10)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($12,$11);
 $13 = ((($10)) + 28|0);
 ; store8($13,i64_const(0,0),4); store4($13+8|0,0,4);
 $14 = load4($6);
 store4($10,0);
 $15 = ((($10)) + 4|0);
 store4($15,0);
 $16 = ((($10)) + 8|0);
 store4($16,$14);
 store4($7,$10);
 $17 = load4($1);
 $18 = load4($17);
 $19 = ($18|0)==(0|0);
 if ($19) {
  $23 = $10;
 } else {
  $20 = $18;
  store4($1,$20);
  $$pre$i = load4($7);
  $23 = $$pre$i;
 }
 $21 = ((($1)) + 4|0);
 $22 = load4($21);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($22,$23);
 $24 = ((($1)) + 8|0);
 $25 = load4($24);
 $26 = (($25) + 1)|0;
 store4($24,$26);
 $$0 = $10;$$019 = 1;
 $27 = $$0;
 store4($0,$27);
 $28 = ((($0)) + 4|0);
 store1($28,$$019);
 STACKTOP = sp;return;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbNS_4lessIS6_EENS4_INS_4pairIKS6_bEEEEE4sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = load4($1);
 return ($2|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3getERKSG_RSD_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$07$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_($0,$1)|0);
 $4 = ((($0)) + 4|0);
 $5 = ($3|0)==($4|0);
 if ($5) {
  $$sroa$07$0 = (1);
  STACKTOP = sp;return ($$sroa$07$0|0);
 }
 $6 = ((($3)) + 28|0);
 $7 = load1($6);
 $8 = $7&255;
 store4($2,$8);
 $9 = (__emval_take_value((1568|0),($2|0))|0);
 $$sroa$07$0 = $9;
 STACKTOP = sp;return ($$sroa$07$0|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3setERSG_RSD_RKb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp + 8|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = load1($2);
 store4($3,$1);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($5,$0,$1,9357,$3,$4);
 $7 = load4($5);
 $8 = ((($7)) + 28|0);
 store1($8,$6);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1104|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$3);
 __ZdlPv($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(12)|0);
 $1 = ((($0)) + 4|0);
 store4($1,0);
 $2 = ((($0)) + 8|0);
 store4($2,0);
 store4($0,$1);
 return ($0|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEE6invokeEPFSH_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = ((($2)) + 4|0);
 $6 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($3,$5,$6);
 $7 = (FUNCTION_TABLE_iii[$4 & 15]($1,$3)|0);
 __emval_incref(($7|0));
 __emval_decref(($7|0));
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 STACKTOP = sp;return ($7|0);
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE4findIS7_EENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEERKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$ph$lcssa$i = 0, $$0$ph14$i = 0, $$07$ph13$i = 0, $$0710$i = 0, $$sroa$0$0 = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ($3|0)==(0|0);
 do {
  if (!($4)) {
   $5 = ((($1)) + 11|0);
   $6 = load1($5);
   $7 = ($6<<24>>24)<(0);
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = $6&255;
   $11 = $7 ? $9 : $10;
   $12 = load4($1);
   $13 = $7 ? $12 : $1;
   $$0$ph14$i = $2;$$07$ph13$i = $3;
   L3: while(1) {
    $$0710$i = $$07$ph13$i;
    while(1) {
     $14 = ((($$0710$i)) + 16|0);
     $15 = ((($14)) + 11|0);
     $16 = load1($15);
     $17 = ($16<<24>>24)<(0);
     $18 = ((($$0710$i)) + 20|0);
     $19 = load4($18);
     $20 = $16&255;
     $21 = $17 ? $19 : $20;
     $22 = ($11>>>0)<($21>>>0);
     $$sroa$speculated$i$i$i$i$i = $22 ? $11 : $21;
     $23 = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     if ($23) {
      label = 6;
     } else {
      $24 = load4($14);
      $25 = $17 ? $24 : $14;
      $26 = (_memcmp($25,$13,$$sroa$speculated$i$i$i$i$i)|0);
      $27 = ($26|0)==(0);
      if ($27) {
       label = 6;
      } else {
       $29 = ($26|0)<(0);
       if (!($29)) {
        break;
       }
      }
     }
     if ((label|0) == 6) {
      label = 0;
      $28 = ($21>>>0)<($11>>>0);
      if (!($28)) {
       break;
      }
     }
     $32 = ((($$0710$i)) + 4|0);
     $33 = load4($32);
     $34 = ($33|0)==(0|0);
     if ($34) {
      $$0$ph$lcssa$i = $$0$ph14$i;
      break L3;
     } else {
      $$0710$i = $33;
     }
    }
    $30 = load4($$0710$i);
    $31 = ($30|0)==(0|0);
    if ($31) {
     $$0$ph$lcssa$i = $$0710$i;
     break;
    } else {
     $$0$ph14$i = $$0710$i;$$07$ph13$i = $30;
    }
   }
   $35 = ($$0$ph$lcssa$i|0)==($2|0);
   if (!($35)) {
    $36 = ((($$0$ph$lcssa$i)) + 16|0);
    $37 = ((($36)) + 11|0);
    $38 = load1($37);
    $39 = ($38<<24>>24)<(0);
    $40 = ((($$0$ph$lcssa$i)) + 20|0);
    $41 = load4($40);
    $42 = $38&255;
    $43 = $39 ? $41 : $42;
    $44 = ($43>>>0)<($11>>>0);
    $$sroa$speculated$i$i$i$i = $44 ? $43 : $11;
    $45 = ($$sroa$speculated$i$i$i$i|0)==(0);
    if (!($45)) {
     $46 = load4($36);
     $47 = $39 ? $46 : $36;
     $48 = (_memcmp($13,$47,$$sroa$speculated$i$i$i$i)|0);
     $49 = ($48|0)==(0);
     if (!($49)) {
      $51 = ($48|0)<(0);
      if ($51) {
       break;
      } else {
       $$sroa$0$0 = $$0$ph$lcssa$i;
      }
      return ($$sroa$0$0|0);
     }
    }
    $50 = ($11>>>0)<($43>>>0);
    if (!($50)) {
     $$sroa$0$0 = $$0$ph$lcssa$i;
     return ($$sroa$0$0|0);
    }
   }
  }
 } while(0);
 $$sroa$0$0 = $2;
 return ($$sroa$0$0|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEERSD_RKbEvSH_JSI_SK_EE6invokeEPSM_PSG_PNS0_11BindingTypeIS9_EUt_Eb($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = sp + 12|0;
 $6 = load4($0);
 $7 = ((($2)) + 4|0);
 $8 = load4($2);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$7,$8);
 $9 = $3&1;
 store1($5,$9);
 FUNCTION_TABLE_viii[$6 & 31]($1,$4,$5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $$019 = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $6 = sp;
 $7 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($1,$6,$2)|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 if (!($9)) {
  $$0 = $8;$$019 = 0;
  $27 = $$0;
  store4($0,$27);
  $28 = ((($0)) + 4|0);
  store1($28,$$019);
  STACKTOP = sp;return;
 }
 $10 = (__Znwj(32)|0);
 $11 = load4($4);
 $12 = ((($10)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($12,$11);
 $13 = ((($10)) + 28|0);
 store1($13,0);
 $14 = load4($6);
 store4($10,0);
 $15 = ((($10)) + 4|0);
 store4($15,0);
 $16 = ((($10)) + 8|0);
 store4($16,$14);
 store4($7,$10);
 $17 = load4($1);
 $18 = load4($17);
 $19 = ($18|0)==(0|0);
 if ($19) {
  $23 = $10;
 } else {
  $20 = $18;
  store4($1,$20);
  $$pre$i = load4($7);
  $23 = $$pre$i;
 }
 $21 = ((($1)) + 4|0);
 $22 = load4($21);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($22,$23);
 $24 = ((($1)) + 8|0);
 $25 = load4($24);
 $26 = (($25) + 1)|0;
 store4($24,$26);
 $$0 = $10;$$019 = 1;
 $27 = $$0;
 store4($0,$27);
 $28 = ((($0)) + 4|0);
 store1($28,$$019);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1144|0);
}
function __ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2);
 $3 = ((($0)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 $4 = ((($0)) + 24|0);
 $5 = ((($0)) + 28|0);
 $6 = load4($5);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($4,$6);
 $7 = ((($0)) + 12|0);
 $8 = ((($0)) + 16|0);
 $9 = load4($8);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($7,$9);
 $10 = ((($0)) + 4|0);
 $11 = load4($10);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0,$11);
 __ZdlPv($0);
 return;
}
function __ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(60)|0);
 $1 = ((($0)) + 4|0);
 store4($1,0);
 $2 = ((($0)) + 8|0);
 store4($2,0);
 store4($0,$1);
 $3 = ((($0)) + 12|0);
 $4 = ((($0)) + 16|0);
 store4($4,0);
 $5 = ((($0)) + 20|0);
 store4($5,0);
 store4($3,$4);
 $6 = ((($0)) + 24|0);
 $7 = ((($0)) + 28|0);
 store4($7,0);
 $8 = ((($0)) + 32|0);
 store4($8,0);
 store4($6,$7);
 $9 = ((($0)) + 36|0);
 ; store8($9,i64_const(0,0),4); store8($9+8|0,i64_const(0,0),4); store8($9+16|0,i64_const(0,0),4);
 return ($0|0);
}
function __ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = ((($3)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 $7 = ((($3)) + 4|0);
 $8 = load4($7);
 $9 = $5&255;
 $10 = $6 ? $8 : $9;
 $11 = (($10) + 4)|0;
 $12 = (_malloc($11)|0);
 store4($12,$10);
 $13 = ((($12)) + 4|0);
 $14 = load4($3);
 $15 = $6 ? $14 : $3;
 _memcpy(($13|0),($15|0),($10|0))|0;
 return ($12|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = (($1) + ($4)|0);
 $6 = ((($2)) + 4|0);
 $7 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($3,$6,$7);
 $8 = ((($5)) + 11|0);
 $9 = load1($8);
 $10 = ($9<<24>>24)<(0);
 if ($10) {
  $11 = load4($5);
  store1($11,0);
  $12 = ((($5)) + 4|0);
  store4($12,0);
 } else {
  store1($5,0);
  store1($8,0);
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($5,0);
 ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$05$i$i$i$i$i$i = 0, $$byval_copy = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy = sp + 4|0;
 $2 = sp;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = (__Znwj(12)|0);
 $6 = ((($5)) + 4|0);
 store4($6,0);
 $7 = ((($5)) + 8|0);
 store4($7,0);
 store4($5,$6);
 $8 = load4($4);
 $9 = ((($4)) + 4|0);
 $10 = ($8|0)==($9|0);
 if ($10) {
  STACKTOP = sp;return ($5|0);
 }
 $11 = $6;
 $13 = $8;$15 = $8;
 while(1) {
  $12 = ((($13)) + 16|0);
  store4($2,$11);
  ; store4($$byval_copy,load4($2,4),4);
  (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($5,$$byval_copy,$12,$12)|0);
  $14 = ((($15)) + 4|0);
  $16 = load4($14);
  $17 = ($16|0)==(0|0);
  if ($17) {
   $$0$i$i$i$i$i$i = $15;
   while(1) {
    $20 = ((($$0$i$i$i$i$i$i)) + 8|0);
    $21 = load4($20);
    $22 = load4($21);
    $23 = ($22|0)==($$0$i$i$i$i$i$i|0);
    if ($23) {
     $$05$i$i$i$i$i$i = $21;
     break;
    } else {
     $$0$i$i$i$i$i$i = $21;
    }
   }
  } else {
   $$0$i$i$i$i$i$i$i = $16;
   while(1) {
    $18 = load4($$0$i$i$i$i$i$i$i);
    $19 = ($18|0)==(0|0);
    if ($19) {
     $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
     break;
    } else {
     $$0$i$i$i$i$i$i$i = $18;
    }
   }
  }
  $24 = ($$05$i$i$i$i$i$i|0)==($9|0);
  if ($24) {
   break;
  } else {
   $13 = $$05$i$i$i$i$i$i;$15 = $$05$i$i$i$i$i$i;
  }
 }
 STACKTOP = sp;return ($5|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$byval_copy = 0, $$byval_copy1 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy1 = sp + 12|0;
 $$byval_copy = sp + 8|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = load4($0);
 $6 = (($1) + ($5)|0);
 $7 = ($6|0)==($2|0);
 if ($7) {
  STACKTOP = sp;return;
 }
 $8 = load4($2);
 store4($3,$8);
 $9 = ((($2)) + 4|0);
 store4($4,$9);
 ; store4($$byval_copy,load4($3,4),4);
 ; store4($$byval_copy1,load4($4,4),4);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($6,$$byval_copy,$$byval_copy1);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i$i$i$i$i$i = 0, $$0$i$i$i$i$i$i$i = 0, $$05$i$i$i$i$i$i = 0, $$byval_copy = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy = sp + 4|0;
 $2 = sp;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = (__Znwj(12)|0);
 $6 = ((($5)) + 4|0);
 store4($6,0);
 $7 = ((($5)) + 8|0);
 store4($7,0);
 store4($5,$6);
 $8 = load4($4);
 $9 = ((($4)) + 4|0);
 $10 = ($8|0)==($9|0);
 if ($10) {
  STACKTOP = sp;return ($5|0);
 }
 $11 = $6;
 $13 = $8;$15 = $8;
 while(1) {
  $12 = ((($13)) + 16|0);
  store4($2,$11);
  ; store4($$byval_copy,load4($2,4),4);
  (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_bEEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($5,$$byval_copy,$12,$12)|0);
  $14 = ((($15)) + 4|0);
  $16 = load4($14);
  $17 = ($16|0)==(0|0);
  if ($17) {
   $$0$i$i$i$i$i$i = $15;
   while(1) {
    $20 = ((($$0$i$i$i$i$i$i)) + 8|0);
    $21 = load4($20);
    $22 = load4($21);
    $23 = ($22|0)==($$0$i$i$i$i$i$i|0);
    if ($23) {
     $$05$i$i$i$i$i$i = $21;
     break;
    } else {
     $$0$i$i$i$i$i$i = $21;
    }
   }
  } else {
   $$0$i$i$i$i$i$i$i = $16;
   while(1) {
    $18 = load4($$0$i$i$i$i$i$i$i);
    $19 = ($18|0)==(0|0);
    if ($19) {
     $$05$i$i$i$i$i$i = $$0$i$i$i$i$i$i$i;
     break;
    } else {
     $$0$i$i$i$i$i$i$i = $18;
    }
   }
  }
  $24 = ($$05$i$i$i$i$i$i|0)==($9|0);
  if ($24) {
   break;
  } else {
   $13 = $$05$i$i$i$i$i$i;$15 = $$05$i$i$i$i$i$i;
  }
 }
 STACKTOP = sp;return ($5|0);
}
function __ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$byval_copy = 0, $$byval_copy1 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy1 = sp + 12|0;
 $$byval_copy = sp + 8|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = load4($0);
 $6 = (($1) + ($5)|0);
 $7 = ($6|0)==($2|0);
 if ($7) {
  STACKTOP = sp;return;
 }
 $8 = load4($2);
 store4($3,$8);
 $9 = ((($2)) + 4|0);
 store4($4,$9);
 ; store4($$byval_copy,load4($3,4),4);
 ; store4($$byval_copy1,load4($4,4),4);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($6,$$byval_copy,$$byval_copy1);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(112)|0);
 $1 = ((($0)) + 36|0);
 $2 = ((($0)) + 40|0);
 store4($2,0);
 $3 = ((($0)) + 44|0);
 store4($3,0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4); store8($0+16|0,i64_const(0,0),4); store8($0+24|0,i64_const(0,0),4); store4($0+32|0,0,4);
 store4($1,$2);
 $4 = ((($0)) + 48|0);
 $5 = ((($0)) + 52|0);
 store4($5,0);
 $6 = ((($0)) + 56|0);
 store4($6,0);
 store4($4,$5);
 $7 = ((($0)) + 60|0);
 $8 = ((($0)) + 64|0);
 store4($8,0);
 $9 = ((($0)) + 68|0);
 store4($9,0);
 store4($7,$8);
 $10 = ((($0)) + 72|0);
 ; store8($10,i64_const(0,0),4); store8($10+8|0,i64_const(0,0),4); store8($10+16|0,i64_const(0,0),4);
 $11 = ((($0)) + 96|0);
 store4($11,(1));
 $12 = ((($0)) + 100|0);
 store4($12,0);
 $13 = ((($0)) + 104|0);
 store4($13,0);
 $14 = ((($0)) + 108|0);
 store4($14,0);
 return ($0|0);
}
function __ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 __ZN5VNodeD2Ev($0);
 __ZdlPv($0);
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = ((($3)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 $7 = ((($3)) + 4|0);
 $8 = load4($7);
 $9 = $5&255;
 $10 = $6 ? $8 : $9;
 $11 = (($10) + 4)|0;
 $12 = (_malloc($11)|0);
 store4($12,$10);
 $13 = ((($12)) + 4|0);
 $14 = load4($3);
 $15 = $6 ? $14 : $3;
 _memcpy(($13|0),($15|0),($10|0))|0;
 return ($12|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($0);
 $5 = (($1) + ($4)|0);
 $6 = ((($2)) + 4|0);
 $7 = load4($2);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($3,$6,$7);
 $8 = ((($5)) + 11|0);
 $9 = load1($8);
 $10 = ($9<<24>>24)<(0);
 if ($10) {
  $11 = load4($5);
  store1($11,0);
  $12 = ((($5)) + 4|0);
  store4($12,0);
 } else {
  store1($5,0);
  store1($8,0);
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($5,0);
 ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (__Znwj(60)|0);
 __ZN9VNodeDataC2ERKS_($4,$3);
 return ($4|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$byval_copy4 = 0, $$byval_copy5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $$byval_copy5 = sp + 12|0;
 $$byval_copy4 = sp + 8|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = load4($0);
 $6 = (($1) + ($5)|0);
 $7 = ($6|0)==($2|0);
 if (!($7)) {
  $8 = load4($2);
  store4($3,$8);
  $9 = ((($2)) + 4|0);
  store4($4,$9);
  ; store4($$byval_copy4,load4($3,4),4);
  ; store4($$byval_copy5,load4($4,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($6,$$byval_copy4,$$byval_copy5);
 }
 if (!($7)) {
  $10 = ((($2)) + 12|0);
  $11 = ((($6)) + 12|0);
  $12 = load4($10);
  store4($3,$12);
  $13 = ((($2)) + 16|0);
  store4($4,$13);
  ; store4($$byval_copy4,load4($3,4),4);
  ; store4($$byval_copy5,load4($4,4),4);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($11,$$byval_copy4,$$byval_copy5);
 }
 if ($7) {
  $18 = ((($6)) + 36|0);
  $19 = ((($2)) + 36|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($18,$19)|0);
  $20 = ((($6)) + 48|0);
  $21 = ((($2)) + 48|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($20,$21)|0);
  STACKTOP = sp;return;
 }
 $14 = ((($2)) + 24|0);
 $15 = ((($6)) + 24|0);
 $16 = load4($14);
 store4($3,$16);
 $17 = ((($2)) + 28|0);
 store4($4,$17);
 ; store4($$byval_copy4,load4($3,4),4);
 ; store4($$byval_copy5,load4($4,4),4);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEEEvT_SM_($15,$$byval_copy4,$$byval_copy5);
 $18 = ((($6)) + 36|0);
 $19 = ((($2)) + 36|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($18,$19)|0);
 $20 = ((($6)) + 48|0);
 $21 = ((($2)) + 48|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($20,$21)|0);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7getWireIS2_EEPNS0_7_EM_VALERKMS2_S3_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = load4($3);
 __emval_incref(($4|0));
 $5 = load4($3);
 return ($5|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7setWireIS2_EEvRKMS2_S3_RT_PNS0_7_EM_VALE($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = load4($4);
 __emval_decref(($5|0));
 $6 = $2;
 store4($4,$6);
 __emval_decref((0|0));
 return;
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = (($1) + ($2)|0);
 $4 = (__Znwj(12)|0);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($4,$3);
 return ($4|0);
}
function __ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($1) + ($3)|0);
 $5 = ($4|0)==($2|0);
 if ($5) {
  return;
 }
 $6 = load4($2);
 $7 = ((($2)) + 4|0);
 $8 = load4($7);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($4,$6,$8);
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = ((($0)) + 8|0);
 $5 = load4($4);
 $6 = ($3|0)==($5|0);
 if ($6) {
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_($0,$1);
  return;
 } else {
  __ZN5VNodeC2ERKS_($3,$1);
  $7 = load4($2);
  $8 = ((($7)) + 112|0);
  store4($2,$8);
  return;
 }
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = (($6|0) / 112)&-1;
 $8 = ($7>>>0)<($1>>>0);
 $9 = $5;
 $10 = $4;
 if ($8) {
  $11 = (($1) - ($7))|0;
  __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE8__appendEjRKS1_($0,$11,$2);
  return;
 }
 $12 = ($7>>>0)>($1>>>0);
 if (!($12)) {
  return;
 }
 $13 = (($9) + (($1*112)|0)|0);
 $14 = ($10|0)==($13|0);
 if ($14) {
  return;
 } else {
  $16 = $10;
 }
 while(1) {
  $15 = ((($16)) + -112|0);
  store4($3,$15);
  __ZN5VNodeD2Ev($15);
  $17 = load4($3);
  $18 = ($17|0)==($13|0);
  if ($18) {
   break;
  } else {
   $16 = $17;
  }
 }
 return;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$0$0 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = load4($0);
 $6 = (($4) - ($5))|0;
 $7 = (($6|0) / 112)&-1;
 $8 = ($7>>>0)>($1>>>0);
 if (!($8)) {
  $$sroa$0$0 = (1);
  STACKTOP = sp;return ($$sroa$0$0|0);
 }
 $9 = $5;
 $10 = (($9) + (($1*112)|0)|0);
 $11 = (__Znwj(112)|0);
 __ZN5VNodeC2ERKS_($11,$10);
 store4($2,$11);
 $12 = (__emval_take_value((1184|0),($2|0))|0);
 $$sroa$0$0 = $12;
 STACKTOP = sp;return ($$sroa$0$0|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (($3) + (($1*112)|0)|0);
 (__ZN5VNodeaSERKS_($4,$2)|0);
 return 1;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i = 0, $$06$i$i = 0, $$pre$i = 0, $$pre40 = 0, $$sroa$7$0 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = load4($0);
 $5 = (($3) - ($4))|0;
 $6 = (($5|0) / 112)&-1;
 $7 = (($6) + 1)|0;
 $8 = ($7>>>0)>(38347922);
 if ($8) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $9 = ((($0)) + 8|0);
 $10 = load4($9);
 $11 = (($10) - ($4))|0;
 $12 = (($11|0) / 112)&-1;
 $13 = ($12>>>0)<(19173961);
 $14 = $12 << 1;
 $15 = ($14>>>0)<($7>>>0);
 $$sroa$speculated$i = $15 ? $7 : $14;
 $$0$i = $13 ? $$sroa$speculated$i : 38347922;
 $16 = (($3) - ($4))|0;
 $17 = (($16|0) / 112)&-1;
 $18 = ($$0$i|0)==(0);
 do {
  if ($18) {
   $24 = 0;
  } else {
   $19 = ($$0$i>>>0)>(38347922);
   if ($19) {
    $20 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($20);
    ___cxa_throw(($20|0),(1488|0),(6|0));
    // unreachable;
   } else {
    $21 = ($$0$i*112)|0;
    $22 = (__Znwj($21)|0);
    $24 = $22;
    break;
   }
  }
 } while(0);
 $23 = (($24) + (($17*112)|0)|0);
 $25 = $23;
 $26 = (($24) + (($$0$i*112)|0)|0);
 $27 = $26;
 __ZN5VNodeC2ERKS_($23,$1);
 $28 = ((($23)) + 112|0);
 $29 = $28;
 $30 = load4($0);
 $31 = load4($2);
 $32 = ($31|0)==($30|0);
 if ($32) {
  $33 = $30;
  $41 = $25;$43 = $33;$45 = $30;
 } else {
  $$06$i$i = $31;$$sroa$7$0 = $25;$35 = $23;
  while(1) {
   $34 = ((($35)) + -112|0);
   $36 = ((($$06$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($34,$36);
   $37 = $$sroa$7$0;
   $38 = ((($37)) + -112|0);
   $39 = $38;
   $40 = ($36|0)==($30|0);
   if ($40) {
    break;
   } else {
    $$06$i$i = $36;$$sroa$7$0 = $39;$35 = $38;
   }
  }
  $$pre$i = load4($0);
  $$pre40 = load4($2);
  $41 = $39;$43 = $$pre$i;$45 = $$pre40;
 }
 store4($0,$41);
 store4($2,$29);
 store4($9,$27);
 $42 = $43;
 $44 = ($45|0)==($42|0);
 if (!($44)) {
  $47 = $45;
  while(1) {
   $46 = ((($47)) + -112|0);
   __ZN5VNodeD2Ev($46);
   $48 = ($46|0)==($42|0);
   if ($48) {
    break;
   } else {
    $47 = $46;
   }
  }
 }
 $49 = ($43|0)==(0);
 if ($49) {
  return;
 }
 $50 = $43;
 __ZdlPv($50);
 return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE8__appendEjRKS1_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$i = 0, $$0$i14 = 0, $$0$i16 = 0, $$06$i$i = 0, $$pre$i17 = 0, $$pre53 = 0, $$sroa$16$0 = 0, $$sroa$7$0 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 8|0);
 $4 = load4($3);
 $5 = ((($0)) + 4|0);
 $6 = load4($5);
 $7 = (($4) - ($6))|0;
 $8 = (($7|0) / 112)&-1;
 $9 = ($8>>>0)<($1>>>0);
 if (!($9)) {
  $10 = $6;
  $$0$i = $1;$11 = $10;
  while(1) {
   __ZN5VNodeC2ERKS_($11,$2);
   $12 = load4($5);
   $13 = ((($12)) + 112|0);
   store4($5,$13);
   $14 = (($$0$i) + -1)|0;
   $15 = ($14|0)==(0);
   if ($15) {
    break;
   } else {
    $$0$i = $14;$11 = $13;
   }
  }
  return;
 }
 $16 = load4($0);
 $17 = (($6) - ($16))|0;
 $18 = (($17|0) / 112)&-1;
 $19 = (($18) + ($1))|0;
 $20 = ($19>>>0)>(38347922);
 if ($20) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $21 = (($4) - ($16))|0;
 $22 = (($21|0) / 112)&-1;
 $23 = ($22>>>0)<(19173961);
 $24 = $22 << 1;
 $25 = ($24>>>0)<($19>>>0);
 $$sroa$speculated$i = $25 ? $19 : $24;
 $$0$i14 = $23 ? $$sroa$speculated$i : 38347922;
 $26 = (($6) - ($16))|0;
 $27 = (($26|0) / 112)&-1;
 $28 = ($$0$i14|0)==(0);
 do {
  if ($28) {
   $34 = 0;
  } else {
   $29 = ($$0$i14>>>0)>(38347922);
   if ($29) {
    $30 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($30);
    ___cxa_throw(($30|0),(1488|0),(6|0));
    // unreachable;
   } else {
    $31 = ($$0$i14*112)|0;
    $32 = (__Znwj($31)|0);
    $34 = $32;
    break;
   }
  }
 } while(0);
 $33 = (($34) + (($27*112)|0)|0);
 $35 = $33;
 $36 = (($34) + (($$0$i14*112)|0)|0);
 $37 = $36;
 $$0$i16 = $1;$$sroa$16$0 = $35;$38 = $33;
 while(1) {
  __ZN5VNodeC2ERKS_($38,$2);
  $39 = $$sroa$16$0;
  $40 = ((($39)) + 112|0);
  $41 = $40;
  $42 = (($$0$i16) + -1)|0;
  $43 = ($42|0)==(0);
  if ($43) {
   break;
  } else {
   $$0$i16 = $42;$$sroa$16$0 = $41;$38 = $40;
  }
 }
 $44 = load4($0);
 $45 = load4($5);
 $46 = ($45|0)==($44|0);
 if ($46) {
  $47 = $44;
  $55 = $35;$57 = $47;$59 = $44;
 } else {
  $$06$i$i = $45;$$sroa$7$0 = $35;$49 = $33;
  while(1) {
   $48 = ((($49)) + -112|0);
   $50 = ((($$06$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($48,$50);
   $51 = $$sroa$7$0;
   $52 = ((($51)) + -112|0);
   $53 = $52;
   $54 = ($50|0)==($44|0);
   if ($54) {
    break;
   } else {
    $$06$i$i = $50;$$sroa$7$0 = $53;$49 = $52;
   }
  }
  $$pre$i17 = load4($0);
  $$pre53 = load4($5);
  $55 = $53;$57 = $$pre$i17;$59 = $$pre53;
 }
 store4($0,$55);
 store4($5,$41);
 store4($3,$37);
 $56 = $57;
 $58 = ($59|0)==($56|0);
 if (!($58)) {
  $61 = $59;
  while(1) {
   $60 = ((($61)) + -112|0);
   __ZN5VNodeD2Ev($60);
   $62 = ($60|0)==($56|0);
   if ($62) {
    break;
   } else {
    $61 = $60;
   }
  }
 }
 $63 = ($57|0)==(0);
 if ($63) {
  return;
 }
 $64 = $57;
 __ZdlPv($64);
 return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1224|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_($0) {
 $0 = $0|0;
 var $$pre$i = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = load4($0);
 $3 = ($2|0)==(0|0);
 if (!($3)) {
  $4 = ((($0)) + 4|0);
  $5 = load4($4);
  $6 = ($5|0)==($2|0);
  if ($6) {
   $11 = $2;
  } else {
   $8 = $5;
   while(1) {
    $7 = ((($8)) + -112|0);
    store4($4,$7);
    __ZN5VNodeD2Ev($7);
    $9 = load4($4);
    $10 = ($9|0)==($2|0);
    if ($10) {
     break;
    } else {
     $8 = $9;
    }
   }
   $$pre$i = load4($0);
   $11 = $$pre$i;
  }
  __ZdlPv($11);
 }
 __ZdlPv($0);
 return;
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(12)|0);
 store4($0,0);
 $1 = ((($0)) + 4|0);
 store4($1,0);
 $2 = ((($0)) + 8|0);
 store4($2,0);
 return ($0|0);
}
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (FUNCTION_TABLE_i[$0 & 7]()|0);
 return ($1|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$elt3 = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt3 = ((($0)) + 4|0);
 $$unpack4 = load4($$elt3);
 $3 = $$unpack4 >> 1;
 $4 = (($1) + ($3)|0);
 $5 = $$unpack4 & 1;
 $6 = ($5|0)==(0);
 if ($6) {
  $10 = $$unpack;
  $11 = $10;
  FUNCTION_TABLE_vii[$11 & 3]($4,$2);
  return;
 } else {
  $7 = load4($4);
  $8 = (($7) + ($$unpack)|0);
  $9 = load4($8);
  $11 = $9;
  FUNCTION_TABLE_vii[$11 & 3]($4,$2);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$elt3 = 0, $$unpack = 0, $$unpack4 = 0, $10 = 0, $11 = 0, $12 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt3 = ((($0)) + 4|0);
 $$unpack4 = load4($$elt3);
 $4 = $$unpack4 >> 1;
 $5 = (($1) + ($4)|0);
 $6 = $$unpack4 & 1;
 $7 = ($6|0)==(0);
 if ($7) {
  $11 = $$unpack;
  $12 = $11;
  FUNCTION_TABLE_viii[$12 & 31]($5,$2,$3);
  return;
 } else {
  $8 = load4($5);
  $9 = (($8) + ($$unpack)|0);
  $10 = load4($9);
  $12 = $10;
  FUNCTION_TABLE_viii[$12 & 31]($5,$2,$3);
  return;
 }
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$elt2 = 0, $$unpack = 0, $$unpack3 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($0);
 $$elt2 = ((($0)) + 4|0);
 $$unpack3 = load4($$elt2);
 $2 = $$unpack3 >> 1;
 $3 = (($1) + ($2)|0);
 $4 = $$unpack3 & 1;
 $5 = ($4|0)==(0);
 if ($5) {
  $9 = $$unpack;
  $10 = $9;
 } else {
  $6 = load4($3);
  $7 = (($6) + ($$unpack)|0);
  $8 = load4($7);
  $10 = $8;
 }
 $11 = (FUNCTION_TABLE_ii[$10 & 15]($3)|0);
 return ($11|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = load4($0);
 $4 = (FUNCTION_TABLE_iii[$3 & 15]($1,$2)|0);
 __emval_incref(($4|0));
 __emval_decref(($4|0));
 return ($4|0);
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = load4($0);
 $5 = (FUNCTION_TABLE_iiii[$4 & 31]($1,$2,$3)|0);
 return ($5|0);
}
function __ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcSA_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = sp + 8|0;
 $5 = load1(8736);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  $7 = (___cxa_guard_acquire(8736)|0);
  $8 = ($7|0)==(0);
  if (!($8)) {
   $9 = (__emval_get_method_caller(2,(1832|0))|0);
   store4(8776,$9);
  }
 }
 $10 = load4(8776);
 $11 = ((($2)) + 11|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)<(0);
 $14 = ((($2)) + 4|0);
 $15 = load4($14);
 $16 = $12&255;
 $17 = $13 ? $15 : $16;
 $18 = (($17) + 4)|0;
 $19 = (_malloc($18)|0);
 store4($19,$17);
 $20 = ((($19)) + 4|0);
 $21 = load4($2);
 $22 = $13 ? $21 : $2;
 _memcpy(($20|0),($22|0),($17|0))|0;
 store4($3,$19);
 $23 = (+__emval_call_method(($10|0),($0|0),($1|0),($4|0),($3|0)));
 $24 = load4($4);
 __emval_run_destructors(($24|0));
 $25 = (~~(($23))>>>0);
 $26 = $25;
 STACKTOP = sp;return ($26|0);
}
function __ZN10emscripten8internal12MethodCallerINS_3valEJRNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_EE4callEPNS0_7_EM_VALEPKcSA_SA_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0.0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $4 = sp;
 $5 = sp + 16|0;
 $6 = load1(8744);
 $7 = ($6<<24>>24)==(0);
 if ($7) {
  $8 = (___cxa_guard_acquire(8744)|0);
  $9 = ($8|0)==(0);
  if (!($9)) {
   $10 = (__emval_get_method_caller(3,(1840|0))|0);
   store4(8780,$10);
  }
 }
 $11 = load4(8780);
 $12 = ((($2)) + 11|0);
 $13 = load1($12);
 $14 = ($13<<24>>24)<(0);
 $15 = ((($2)) + 4|0);
 $16 = load4($15);
 $17 = $13&255;
 $18 = $14 ? $16 : $17;
 $19 = (($18) + 4)|0;
 $20 = (_malloc($19)|0);
 store4($20,$18);
 $21 = ((($20)) + 4|0);
 $22 = load4($2);
 $23 = $14 ? $22 : $2;
 _memcpy(($21|0),($23|0),($18|0))|0;
 store4($4,$20);
 $24 = ((($4)) + 8|0);
 $25 = ((($3)) + 11|0);
 $26 = load1($25);
 $27 = ($26<<24>>24)<(0);
 $28 = ((($3)) + 4|0);
 $29 = load4($28);
 $30 = $26&255;
 $31 = $27 ? $29 : $30;
 $32 = (($31) + 4)|0;
 $33 = (_malloc($32)|0);
 store4($33,$31);
 $34 = ((($33)) + 4|0);
 $35 = load4($3);
 $36 = $27 ? $35 : $3;
 _memcpy(($34|0),($36|0),($31|0))|0;
 store4($24,$33);
 $37 = (+__emval_call_method(($11|0),($0|0),($1|0),($5|0),($4|0)));
 $38 = load4($5);
 __emval_run_destructors(($38|0));
 $39 = (~~(($37))>>>0);
 $40 = $39;
 STACKTOP = sp;return ($40|0);
}
function __ZN10emscripten8internal12MethodCallerIvJRNS_3valES3_EE4callEPNS0_7_EM_VALEPKcS3_S3_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $4 = sp;
 $5 = load1(8752);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  $7 = (___cxa_guard_acquire(8752)|0);
  $8 = ($7|0)==(0);
  if (!($8)) {
   $9 = (__emval_get_method_caller(3,(1852|0))|0);
   store4(8784,$9);
  }
 }
 $10 = load4(8784);
 $11 = load4($2);
 __emval_incref(($11|0));
 $12 = load4($2);
 store4($4,$12);
 $13 = ((($4)) + 8|0);
 $14 = load4($3);
 __emval_incref(($14|0));
 $15 = load4($3);
 store4($13,$15);
 __emval_call_void_method(($10|0),($0|0),($1|0),($4|0));
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6assignIPS1_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIS1_NS_15iterator_traitsIS8_E9referenceEEE5valueEvE4typeES8_S8_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0$i = 0, $$0$i24$lcssa = 0, $$0$i2432 = 0, $$0$i7$i = 0, $$0$i7$i20 = 0, $$06$i31 = 0, $$pre$i18 = 0, $$pre$i23 = 0, $$sroa$speculated$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $2;
 $4 = $1;
 $5 = (($3) - ($4))|0;
 $6 = (($5|0) / 112)&-1;
 $7 = ((($0)) + 8|0);
 $8 = load4($7);
 $9 = load4($0);
 $10 = (($8) - ($9))|0;
 $11 = (($10|0) / 112)&-1;
 $12 = ($6>>>0)>($11>>>0);
 $13 = $9;
 if (!($12)) {
  $14 = ((($0)) + 4|0);
  $15 = load4($14);
  $16 = (($15) - ($9))|0;
  $17 = (($16|0) / 112)&-1;
  $18 = ($6>>>0)>($17>>>0);
  $19 = (($1) + (($17*112)|0)|0);
  $$ = $18 ? $19 : $2;
  $20 = ($$|0)==($1|0);
  if ($20) {
   $$0$i24$lcssa = $13;
  } else {
   $$0$i2432 = $13;$$06$i31 = $1;
   while(1) {
    (__ZN5VNodeaSERKS_($$0$i2432,$$06$i31)|0);
    $21 = ((($$06$i31)) + 112|0);
    $22 = ((($$0$i2432)) + 112|0);
    $23 = ($21|0)==($$|0);
    if ($23) {
     $$0$i24$lcssa = $22;
     break;
    } else {
     $$0$i2432 = $22;$$06$i31 = $21;
    }
   }
  }
  if (!($18)) {
   $30 = load4($14);
   $31 = ($30|0)==($$0$i24$lcssa|0);
   if ($31) {
    return;
   } else {
    $33 = $30;
   }
   while(1) {
    $32 = ((($33)) + -112|0);
    store4($14,$32);
    __ZN5VNodeD2Ev($32);
    $34 = load4($14);
    $35 = ($34|0)==($$0$i24$lcssa|0);
    if ($35) {
     break;
    } else {
     $33 = $34;
    }
   }
   return;
  }
  $24 = ($$|0)==($2|0);
  if ($24) {
   return;
  }
  $$pre$i18 = load4($14);
  $$0$i7$i20 = $19;$25 = $$pre$i18;
  while(1) {
   __ZN5VNodeC2ERKS_($25,$$0$i7$i20);
   $26 = ((($$0$i7$i20)) + 112|0);
   $27 = load4($14);
   $28 = ((($27)) + 112|0);
   store4($14,$28);
   $29 = ($26|0)==($2|0);
   if ($29) {
    break;
   } else {
    $$0$i7$i20 = $26;$25 = $28;
   }
  }
  return;
 }
 $36 = ($9|0)==(0);
 if ($36) {
  $48 = $8;
 } else {
  $37 = $9;
  $38 = ((($0)) + 4|0);
  $39 = load4($38);
  $40 = ($39|0)==($13|0);
  if ($40) {
   $45 = $37;
  } else {
   $42 = $39;
   while(1) {
    $41 = ((($42)) + -112|0);
    store4($38,$41);
    __ZN5VNodeD2Ev($41);
    $43 = load4($38);
    $44 = ($43|0)==($13|0);
    if ($44) {
     break;
    } else {
     $42 = $43;
    }
   }
   $$pre$i23 = load4($0);
   $45 = $$pre$i23;
  }
  __ZdlPv($45);
  store4($7,0);
  store4($38,0);
  store4($0,0);
  $48 = 0;
 }
 $46 = ($6>>>0)>(38347922);
 if ($46) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $47 = (($48) - 0)|0;
 $49 = (($47|0) / 112)&-1;
 $50 = ($49>>>0)<(19173961);
 $51 = $49 << 1;
 $52 = ($51>>>0)<($6>>>0);
 $$sroa$speculated$i = $52 ? $6 : $51;
 $$0$i = $50 ? $$sroa$speculated$i : 38347922;
 $53 = ($$0$i>>>0)>(38347922);
 if ($53) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $54 = ($$0$i*112)|0;
 $55 = (__Znwj($54)|0);
 $56 = ((($0)) + 4|0);
 store4($56,$55);
 store4($0,$55);
 $57 = (($55) + (($$0$i*112)|0)|0);
 store4($7,$57);
 $58 = ($1|0)==($2|0);
 if ($58) {
  return;
 }
 $$0$i7$i = $1;$59 = $55;
 while(1) {
  __ZN5VNodeC2ERKS_($59,$$0$i7$i);
  $60 = ((($$0$i7$i)) + 112|0);
  $61 = load4($56);
  $62 = ((($61)) + 112|0);
  store4($56,$62);
  $63 = ($60|0)==($2|0);
  if ($63) {
   break;
  } else {
   $$0$i7$i = $60;$59 = $62;
  }
 }
 return;
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE6invokeEPFS2_S9_EPNS0_11BindingTypeIS9_EUt_E($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $2 = sp + 16|0;
 $3 = sp;
 $4 = ((($1)) + 4|0);
 $5 = load4($1);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($3,$4,$5);
 FUNCTION_TABLE_vii[$0 & 3]($2,$3);
 $6 = (__Znwj(112)|0);
 ; store8($6,load8($2,4),4); store4($6+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $7 = ((($6)) + 12|0);
 $8 = ((($2)) + 12|0);
 ; store8($7,load8($8,4),4); store4($7+8 | 0,load4($8+8 | 0,4),4);
 ; store8($8,i64_const(0,0),4); store4($8+8|0,0,4);
 $9 = ((($6)) + 24|0);
 $10 = ((($2)) + 24|0);
 ; store8($9,load8($10,4),4); store4($9+8 | 0,load4($10+8 | 0,4),4);
 ; store8($10,i64_const(0,0),4); store4($10+8|0,0,4);
 $11 = ((($6)) + 36|0);
 $12 = ((($2)) + 36|0);
 $13 = load4($12);
 store4($11,$13);
 $14 = ((($6)) + 40|0);
 $15 = ((($2)) + 40|0);
 $16 = load4($15);
 store4($14,$16);
 $17 = ((($2)) + 44|0);
 $18 = ((($6)) + 44|0);
 $19 = load4($17);
 store4($18,$19);
 $20 = ($19|0)==(0);
 if ($20) {
  store4($11,$14);
 } else {
  $21 = $16;
  $22 = ((($21)) + 8|0);
  store4($22,$14);
  $23 = ((($2)) + 40|0);
  store4($12,$23);
  store4($23,0);
  store4($17,0);
 }
 $24 = ((($6)) + 48|0);
 $25 = ((($2)) + 48|0);
 $26 = load4($25);
 store4($24,$26);
 $27 = ((($6)) + 52|0);
 $28 = ((($2)) + 52|0);
 $29 = load4($28);
 store4($27,$29);
 $30 = ((($2)) + 56|0);
 $31 = ((($6)) + 56|0);
 $32 = load4($30);
 store4($31,$32);
 $33 = ($32|0)==(0);
 if ($33) {
  store4($24,$27);
 } else {
  $34 = $29;
  $35 = ((($34)) + 8|0);
  store4($35,$27);
  $36 = ((($2)) + 52|0);
  store4($25,$36);
  store4($36,0);
  store4($30,0);
 }
 $37 = ((($6)) + 60|0);
 $38 = ((($2)) + 60|0);
 $39 = load4($38);
 store4($37,$39);
 $40 = ((($6)) + 64|0);
 $41 = ((($2)) + 64|0);
 $42 = load4($41);
 store4($40,$42);
 $43 = ((($2)) + 68|0);
 $44 = ((($6)) + 68|0);
 $45 = load4($43);
 store4($44,$45);
 $46 = ($45|0)==(0);
 if ($46) {
  store4($37,$40);
 } else {
  $47 = $42;
  $48 = ((($47)) + 8|0);
  store4($48,$40);
  $49 = ((($2)) + 64|0);
  store4($38,$49);
  store4($49,0);
  store4($43,0);
 }
 $50 = ((($6)) + 72|0);
 $51 = ((($2)) + 72|0);
 ; store8($50,load8($51,4),4); store4($50+8 | 0,load4($51+8 | 0,4),4);
 ; store8($51,i64_const(0,0),4); store4($51+8|0,0,4);
 $52 = ((($6)) + 84|0);
 $53 = ((($2)) + 84|0);
 ; store8($52,load8($53,4),4); store4($52+8 | 0,load4($53+8 | 0,4),4);
 ; store8($53,i64_const(0,0),4); store4($53+8|0,0,4);
 $54 = ((($6)) + 96|0);
 $55 = ((($2)) + 96|0);
 $56 = load4($55);
 store4($54,$56);
 store4($55,0);
 $57 = ((($6)) + 100|0);
 $58 = ((($2)) + 100|0);
 $59 = ((($6)) + 104|0);
 $60 = ((($6)) + 108|0);
 $61 = load4($58);
 store4($57,$61);
 $62 = ((($2)) + 104|0);
 $63 = load4($62);
 store4($59,$63);
 $64 = ((($2)) + 108|0);
 $65 = load4($64);
 store4($60,$65);
 store4($64,0);
 store4($62,0);
 store4($58,0);
 __ZN5VNodeD2Ev($2);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($3);
 STACKTOP = sp;return ($6|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbEE6invokeEPFS2_S9_bEPNS0_11BindingTypeIS9_EUt_Eb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 16|0;
 $4 = sp;
 $5 = ((($1)) + 4|0);
 $6 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$5,$6);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$2);
 $7 = (__Znwj(112)|0);
 ; store8($7,load8($3,4),4); store4($7+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $8 = ((($7)) + 12|0);
 $9 = ((($3)) + 12|0);
 ; store8($8,load8($9,4),4); store4($8+8 | 0,load4($9+8 | 0,4),4);
 ; store8($9,i64_const(0,0),4); store4($9+8|0,0,4);
 $10 = ((($7)) + 24|0);
 $11 = ((($3)) + 24|0);
 ; store8($10,load8($11,4),4); store4($10+8 | 0,load4($11+8 | 0,4),4);
 ; store8($11,i64_const(0,0),4); store4($11+8|0,0,4);
 $12 = ((($7)) + 36|0);
 $13 = ((($3)) + 36|0);
 $14 = load4($13);
 store4($12,$14);
 $15 = ((($7)) + 40|0);
 $16 = ((($3)) + 40|0);
 $17 = load4($16);
 store4($15,$17);
 $18 = ((($3)) + 44|0);
 $19 = ((($7)) + 44|0);
 $20 = load4($18);
 store4($19,$20);
 $21 = ($20|0)==(0);
 if ($21) {
  store4($12,$15);
 } else {
  $22 = $17;
  $23 = ((($22)) + 8|0);
  store4($23,$15);
  $24 = ((($3)) + 40|0);
  store4($13,$24);
  store4($24,0);
  store4($18,0);
 }
 $25 = ((($7)) + 48|0);
 $26 = ((($3)) + 48|0);
 $27 = load4($26);
 store4($25,$27);
 $28 = ((($7)) + 52|0);
 $29 = ((($3)) + 52|0);
 $30 = load4($29);
 store4($28,$30);
 $31 = ((($3)) + 56|0);
 $32 = ((($7)) + 56|0);
 $33 = load4($31);
 store4($32,$33);
 $34 = ($33|0)==(0);
 if ($34) {
  store4($25,$28);
 } else {
  $35 = $30;
  $36 = ((($35)) + 8|0);
  store4($36,$28);
  $37 = ((($3)) + 52|0);
  store4($26,$37);
  store4($37,0);
  store4($31,0);
 }
 $38 = ((($7)) + 60|0);
 $39 = ((($3)) + 60|0);
 $40 = load4($39);
 store4($38,$40);
 $41 = ((($7)) + 64|0);
 $42 = ((($3)) + 64|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($3)) + 68|0);
 $45 = ((($7)) + 68|0);
 $46 = load4($44);
 store4($45,$46);
 $47 = ($46|0)==(0);
 if ($47) {
  store4($38,$41);
 } else {
  $48 = $43;
  $49 = ((($48)) + 8|0);
  store4($49,$41);
  $50 = ((($3)) + 64|0);
  store4($39,$50);
  store4($50,0);
  store4($44,0);
 }
 $51 = ((($7)) + 72|0);
 $52 = ((($3)) + 72|0);
 ; store8($51,load8($52,4),4); store4($51+8 | 0,load4($52+8 | 0,4),4);
 ; store8($52,i64_const(0,0),4); store4($52+8|0,0,4);
 $53 = ((($7)) + 84|0);
 $54 = ((($3)) + 84|0);
 ; store8($53,load8($54,4),4); store4($53+8 | 0,load4($54+8 | 0,4),4);
 ; store8($54,i64_const(0,0),4); store4($54+8|0,0,4);
 $55 = ((($7)) + 96|0);
 $56 = ((($3)) + 96|0);
 $57 = load4($56);
 store4($55,$57);
 store4($56,0);
 $58 = ((($7)) + 100|0);
 $59 = ((($3)) + 100|0);
 $60 = ((($7)) + 104|0);
 $61 = ((($7)) + 108|0);
 $62 = load4($59);
 store4($58,$62);
 $63 = ((($3)) + 104|0);
 $64 = load4($63);
 store4($60,$64);
 $65 = ((($3)) + 108|0);
 $66 = load4($65);
 store4($61,$66);
 store4($65,0);
 store4($63,0);
 store4($59,0);
 __ZN5VNodeD2Ev($3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return ($7|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES2_EE6invokeEPFS2_S9_S2_EPNS0_11BindingTypeIS9_EUt_EPS2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $3 = sp + 128|0;
 $4 = sp + 112|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$6,$7);
 __ZN5VNodeC2ERKS_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $8 = (__Znwj(112)|0);
 ; store8($8,load8($3,4),4); store4($8+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $9 = ((($8)) + 12|0);
 $10 = ((($3)) + 12|0);
 ; store8($9,load8($10,4),4); store4($9+8 | 0,load4($10+8 | 0,4),4);
 ; store8($10,i64_const(0,0),4); store4($10+8|0,0,4);
 $11 = ((($8)) + 24|0);
 $12 = ((($3)) + 24|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($8)) + 36|0);
 $14 = ((($3)) + 36|0);
 $15 = load4($14);
 store4($13,$15);
 $16 = ((($8)) + 40|0);
 $17 = ((($3)) + 40|0);
 $18 = load4($17);
 store4($16,$18);
 $19 = ((($3)) + 44|0);
 $20 = ((($8)) + 44|0);
 $21 = load4($19);
 store4($20,$21);
 $22 = ($21|0)==(0);
 if ($22) {
  store4($13,$16);
 } else {
  $23 = $18;
  $24 = ((($23)) + 8|0);
  store4($24,$16);
  $25 = ((($3)) + 40|0);
  store4($14,$25);
  store4($25,0);
  store4($19,0);
 }
 $26 = ((($8)) + 48|0);
 $27 = ((($3)) + 48|0);
 $28 = load4($27);
 store4($26,$28);
 $29 = ((($8)) + 52|0);
 $30 = ((($3)) + 52|0);
 $31 = load4($30);
 store4($29,$31);
 $32 = ((($3)) + 56|0);
 $33 = ((($8)) + 56|0);
 $34 = load4($32);
 store4($33,$34);
 $35 = ($34|0)==(0);
 if ($35) {
  store4($26,$29);
 } else {
  $36 = $31;
  $37 = ((($36)) + 8|0);
  store4($37,$29);
  $38 = ((($3)) + 52|0);
  store4($27,$38);
  store4($38,0);
  store4($32,0);
 }
 $39 = ((($8)) + 60|0);
 $40 = ((($3)) + 60|0);
 $41 = load4($40);
 store4($39,$41);
 $42 = ((($8)) + 64|0);
 $43 = ((($3)) + 64|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($3)) + 68|0);
 $46 = ((($8)) + 68|0);
 $47 = load4($45);
 store4($46,$47);
 $48 = ($47|0)==(0);
 if ($48) {
  store4($39,$42);
 } else {
  $49 = $44;
  $50 = ((($49)) + 8|0);
  store4($50,$42);
  $51 = ((($3)) + 64|0);
  store4($40,$51);
  store4($51,0);
  store4($45,0);
 }
 $52 = ((($8)) + 72|0);
 $53 = ((($3)) + 72|0);
 ; store8($52,load8($53,4),4); store4($52+8 | 0,load4($53+8 | 0,4),4);
 ; store8($53,i64_const(0,0),4); store4($53+8|0,0,4);
 $54 = ((($8)) + 84|0);
 $55 = ((($3)) + 84|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($8)) + 96|0);
 $57 = ((($3)) + 96|0);
 $58 = load4($57);
 store4($56,$58);
 store4($57,0);
 $59 = ((($8)) + 100|0);
 $60 = ((($3)) + 100|0);
 $61 = ((($8)) + 104|0);
 $62 = ((($8)) + 108|0);
 $63 = load4($60);
 store4($59,$63);
 $64 = ((($3)) + 104|0);
 $65 = load4($64);
 store4($61,$65);
 $66 = ((($3)) + 108|0);
 $67 = load4($66);
 store4($62,$67);
 store4($66,0);
 store4($64,0);
 store4($60,0);
 __ZN5VNodeD2Ev($3);
 __ZN5VNodeD2Ev($5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return ($8|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_EE6invokeEPFS2_S9_S9_EPNS0_11BindingTypeIS9_EUt_ESG_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0;
 $3 = sp + 24|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$6,$7);
 $8 = ((($2)) + 4|0);
 $9 = load4($2);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($5,$8,$9);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $10 = (__Znwj(112)|0);
 ; store8($10,load8($3,4),4); store4($10+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $11 = ((($10)) + 12|0);
 $12 = ((($3)) + 12|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($10)) + 24|0);
 $14 = ((($3)) + 24|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($10)) + 36|0);
 $16 = ((($3)) + 36|0);
 $17 = load4($16);
 store4($15,$17);
 $18 = ((($10)) + 40|0);
 $19 = ((($3)) + 40|0);
 $20 = load4($19);
 store4($18,$20);
 $21 = ((($3)) + 44|0);
 $22 = ((($10)) + 44|0);
 $23 = load4($21);
 store4($22,$23);
 $24 = ($23|0)==(0);
 if ($24) {
  store4($15,$18);
 } else {
  $25 = $20;
  $26 = ((($25)) + 8|0);
  store4($26,$18);
  $27 = ((($3)) + 40|0);
  store4($16,$27);
  store4($27,0);
  store4($21,0);
 }
 $28 = ((($10)) + 48|0);
 $29 = ((($3)) + 48|0);
 $30 = load4($29);
 store4($28,$30);
 $31 = ((($10)) + 52|0);
 $32 = ((($3)) + 52|0);
 $33 = load4($32);
 store4($31,$33);
 $34 = ((($3)) + 56|0);
 $35 = ((($10)) + 56|0);
 $36 = load4($34);
 store4($35,$36);
 $37 = ($36|0)==(0);
 if ($37) {
  store4($28,$31);
 } else {
  $38 = $33;
  $39 = ((($38)) + 8|0);
  store4($39,$31);
  $40 = ((($3)) + 52|0);
  store4($29,$40);
  store4($40,0);
  store4($34,0);
 }
 $41 = ((($10)) + 60|0);
 $42 = ((($3)) + 60|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($10)) + 64|0);
 $45 = ((($3)) + 64|0);
 $46 = load4($45);
 store4($44,$46);
 $47 = ((($3)) + 68|0);
 $48 = ((($10)) + 68|0);
 $49 = load4($47);
 store4($48,$49);
 $50 = ($49|0)==(0);
 if ($50) {
  store4($41,$44);
 } else {
  $51 = $46;
  $52 = ((($51)) + 8|0);
  store4($52,$44);
  $53 = ((($3)) + 64|0);
  store4($42,$53);
  store4($53,0);
  store4($47,0);
 }
 $54 = ((($10)) + 72|0);
 $55 = ((($3)) + 72|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($10)) + 84|0);
 $57 = ((($3)) + 84|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($10)) + 96|0);
 $59 = ((($3)) + 96|0);
 $60 = load4($59);
 store4($58,$60);
 store4($59,0);
 $61 = ((($10)) + 100|0);
 $62 = ((($3)) + 100|0);
 $63 = ((($10)) + 104|0);
 $64 = ((($10)) + 108|0);
 $65 = load4($62);
 store4($61,$65);
 $66 = ((($3)) + 104|0);
 $67 = load4($66);
 store4($63,$67);
 $68 = ((($3)) + 108|0);
 $69 = load4($68);
 store4($64,$69);
 store4($68,0);
 store4($66,0);
 store4($62,0);
 __ZN5VNodeD2Ev($3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return ($10|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataEE6invokeEPFS2_S9_SA_EPNS0_11BindingTypeIS9_EUt_EPSA_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0;
 $3 = sp + 72|0;
 $4 = sp + 60|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$6,$7);
 __ZN9VNodeDataC2ERKS_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $8 = (__Znwj(112)|0);
 ; store8($8,load8($3,4),4); store4($8+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $9 = ((($8)) + 12|0);
 $10 = ((($3)) + 12|0);
 ; store8($9,load8($10,4),4); store4($9+8 | 0,load4($10+8 | 0,4),4);
 ; store8($10,i64_const(0,0),4); store4($10+8|0,0,4);
 $11 = ((($8)) + 24|0);
 $12 = ((($3)) + 24|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($8)) + 36|0);
 $14 = ((($3)) + 36|0);
 $15 = load4($14);
 store4($13,$15);
 $16 = ((($8)) + 40|0);
 $17 = ((($3)) + 40|0);
 $18 = load4($17);
 store4($16,$18);
 $19 = ((($3)) + 44|0);
 $20 = ((($8)) + 44|0);
 $21 = load4($19);
 store4($20,$21);
 $22 = ($21|0)==(0);
 if ($22) {
  store4($13,$16);
 } else {
  $23 = $18;
  $24 = ((($23)) + 8|0);
  store4($24,$16);
  $25 = ((($3)) + 40|0);
  store4($14,$25);
  store4($25,0);
  store4($19,0);
 }
 $26 = ((($8)) + 48|0);
 $27 = ((($3)) + 48|0);
 $28 = load4($27);
 store4($26,$28);
 $29 = ((($8)) + 52|0);
 $30 = ((($3)) + 52|0);
 $31 = load4($30);
 store4($29,$31);
 $32 = ((($3)) + 56|0);
 $33 = ((($8)) + 56|0);
 $34 = load4($32);
 store4($33,$34);
 $35 = ($34|0)==(0);
 if ($35) {
  store4($26,$29);
 } else {
  $36 = $31;
  $37 = ((($36)) + 8|0);
  store4($37,$29);
  $38 = ((($3)) + 52|0);
  store4($27,$38);
  store4($38,0);
  store4($32,0);
 }
 $39 = ((($8)) + 60|0);
 $40 = ((($3)) + 60|0);
 $41 = load4($40);
 store4($39,$41);
 $42 = ((($8)) + 64|0);
 $43 = ((($3)) + 64|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($3)) + 68|0);
 $46 = ((($8)) + 68|0);
 $47 = load4($45);
 store4($46,$47);
 $48 = ($47|0)==(0);
 if ($48) {
  store4($39,$42);
 } else {
  $49 = $44;
  $50 = ((($49)) + 8|0);
  store4($50,$42);
  $51 = ((($3)) + 64|0);
  store4($40,$51);
  store4($51,0);
  store4($45,0);
 }
 $52 = ((($8)) + 72|0);
 $53 = ((($3)) + 72|0);
 ; store8($52,load8($53,4),4); store4($52+8 | 0,load4($53+8 | 0,4),4);
 ; store8($53,i64_const(0,0),4); store4($53+8|0,0,4);
 $54 = ((($8)) + 84|0);
 $55 = ((($3)) + 84|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($8)) + 96|0);
 $57 = ((($3)) + 96|0);
 $58 = load4($57);
 store4($56,$58);
 store4($57,0);
 $59 = ((($8)) + 100|0);
 $60 = ((($3)) + 100|0);
 $61 = ((($8)) + 104|0);
 $62 = ((($8)) + 108|0);
 $63 = load4($60);
 store4($59,$63);
 $64 = ((($3)) + 104|0);
 $65 = load4($64);
 store4($61,$65);
 $66 = ((($3)) + 108|0);
 $67 = load4($66);
 store4($62,$67);
 store4($66,0);
 store4($64,0);
 store4($60,0);
 __ZN5VNodeD2Ev($3);
 $68 = ((($5)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($68);
 $69 = ((($5)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($69);
 $70 = ((($5)) + 24|0);
 $71 = ((($5)) + 28|0);
 $72 = load4($71);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($70,$72);
 $73 = ((($5)) + 12|0);
 $74 = ((($5)) + 16|0);
 $75 = load4($74);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($73,$75);
 $76 = ((($5)) + 4|0);
 $77 = load4($76);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($5,$77);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return ($8|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SC_EPNS0_11BindingTypeIS9_EUt_EPSC_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre$i9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0;
 $3 = sp + 24|0;
 $4 = sp + 12|0;
 $5 = sp;
 $6 = ((($1)) + 4|0);
 $7 = load4($1);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($4,$6,$7);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($5,$2);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$5);
 $8 = (__Znwj(112)|0);
 ; store8($8,load8($3,4),4); store4($8+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $9 = ((($8)) + 12|0);
 $10 = ((($3)) + 12|0);
 ; store8($9,load8($10,4),4); store4($9+8 | 0,load4($10+8 | 0,4),4);
 ; store8($10,i64_const(0,0),4); store4($10+8|0,0,4);
 $11 = ((($8)) + 24|0);
 $12 = ((($3)) + 24|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($8)) + 36|0);
 $14 = ((($3)) + 36|0);
 $15 = load4($14);
 store4($13,$15);
 $16 = ((($8)) + 40|0);
 $17 = ((($3)) + 40|0);
 $18 = load4($17);
 store4($16,$18);
 $19 = ((($3)) + 44|0);
 $20 = ((($8)) + 44|0);
 $21 = load4($19);
 store4($20,$21);
 $22 = ($21|0)==(0);
 if ($22) {
  store4($13,$16);
 } else {
  $23 = $18;
  $24 = ((($23)) + 8|0);
  store4($24,$16);
  $25 = ((($3)) + 40|0);
  store4($14,$25);
  store4($25,0);
  store4($19,0);
 }
 $26 = ((($8)) + 48|0);
 $27 = ((($3)) + 48|0);
 $28 = load4($27);
 store4($26,$28);
 $29 = ((($8)) + 52|0);
 $30 = ((($3)) + 52|0);
 $31 = load4($30);
 store4($29,$31);
 $32 = ((($3)) + 56|0);
 $33 = ((($8)) + 56|0);
 $34 = load4($32);
 store4($33,$34);
 $35 = ($34|0)==(0);
 if ($35) {
  store4($26,$29);
 } else {
  $36 = $31;
  $37 = ((($36)) + 8|0);
  store4($37,$29);
  $38 = ((($3)) + 52|0);
  store4($27,$38);
  store4($38,0);
  store4($32,0);
 }
 $39 = ((($8)) + 60|0);
 $40 = ((($3)) + 60|0);
 $41 = load4($40);
 store4($39,$41);
 $42 = ((($8)) + 64|0);
 $43 = ((($3)) + 64|0);
 $44 = load4($43);
 store4($42,$44);
 $45 = ((($3)) + 68|0);
 $46 = ((($8)) + 68|0);
 $47 = load4($45);
 store4($46,$47);
 $48 = ($47|0)==(0);
 if ($48) {
  store4($39,$42);
 } else {
  $49 = $44;
  $50 = ((($49)) + 8|0);
  store4($50,$42);
  $51 = ((($3)) + 64|0);
  store4($40,$51);
  store4($51,0);
  store4($45,0);
 }
 $52 = ((($8)) + 72|0);
 $53 = ((($3)) + 72|0);
 ; store8($52,load8($53,4),4); store4($52+8 | 0,load4($53+8 | 0,4),4);
 ; store8($53,i64_const(0,0),4); store4($53+8|0,0,4);
 $54 = ((($8)) + 84|0);
 $55 = ((($3)) + 84|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($8)) + 96|0);
 $57 = ((($3)) + 96|0);
 $58 = load4($57);
 store4($56,$58);
 store4($57,0);
 $59 = ((($8)) + 100|0);
 $60 = ((($3)) + 100|0);
 $61 = ((($8)) + 104|0);
 $62 = ((($8)) + 108|0);
 $63 = load4($60);
 store4($59,$63);
 $64 = ((($3)) + 104|0);
 $65 = load4($64);
 store4($61,$65);
 $66 = ((($3)) + 108|0);
 $67 = load4($66);
 store4($62,$67);
 store4($66,0);
 store4($64,0);
 store4($60,0);
 __ZN5VNodeD2Ev($3);
 $68 = load4($5);
 $69 = ($68|0)==(0|0);
 if ($69) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
  STACKTOP = sp;return ($8|0);
 }
 $70 = ((($5)) + 4|0);
 $71 = load4($70);
 $72 = ($71|0)==($68|0);
 if ($72) {
  $77 = $68;
 } else {
  $74 = $71;
  while(1) {
   $73 = ((($74)) + -112|0);
   store4($70,$73);
   __ZN5VNodeD2Ev($73);
   $75 = load4($70);
   $76 = ($75|0)==($68|0);
   if ($76) {
    break;
   } else {
    $74 = $75;
   }
  }
  $$pre$i9 = load4($5);
  $77 = $$pre$i9;
 }
 __ZdlPv($77);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4);
 STACKTOP = sp;return ($8|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS2_EE6invokeEPFS2_S9_SA_S2_EPNS0_11BindingTypeIS9_EUt_EPSA_PS2_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304|0;
 $4 = sp + 184|0;
 $5 = sp + 172|0;
 $6 = sp + 112|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($5,$8,$9);
 __ZN9VNodeDataC2ERKS_($6,$2);
 __ZN5VNodeC2ERKS_($7,$3);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $10 = (__Znwj(112)|0);
 ; store8($10,load8($4,4),4); store4($10+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $11 = ((($10)) + 12|0);
 $12 = ((($4)) + 12|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($10)) + 24|0);
 $14 = ((($4)) + 24|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($10)) + 36|0);
 $16 = ((($4)) + 36|0);
 $17 = load4($16);
 store4($15,$17);
 $18 = ((($10)) + 40|0);
 $19 = ((($4)) + 40|0);
 $20 = load4($19);
 store4($18,$20);
 $21 = ((($4)) + 44|0);
 $22 = ((($10)) + 44|0);
 $23 = load4($21);
 store4($22,$23);
 $24 = ($23|0)==(0);
 if ($24) {
  store4($15,$18);
 } else {
  $25 = $20;
  $26 = ((($25)) + 8|0);
  store4($26,$18);
  $27 = ((($4)) + 40|0);
  store4($16,$27);
  store4($27,0);
  store4($21,0);
 }
 $28 = ((($10)) + 48|0);
 $29 = ((($4)) + 48|0);
 $30 = load4($29);
 store4($28,$30);
 $31 = ((($10)) + 52|0);
 $32 = ((($4)) + 52|0);
 $33 = load4($32);
 store4($31,$33);
 $34 = ((($4)) + 56|0);
 $35 = ((($10)) + 56|0);
 $36 = load4($34);
 store4($35,$36);
 $37 = ($36|0)==(0);
 if ($37) {
  store4($28,$31);
 } else {
  $38 = $33;
  $39 = ((($38)) + 8|0);
  store4($39,$31);
  $40 = ((($4)) + 52|0);
  store4($29,$40);
  store4($40,0);
  store4($34,0);
 }
 $41 = ((($10)) + 60|0);
 $42 = ((($4)) + 60|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($10)) + 64|0);
 $45 = ((($4)) + 64|0);
 $46 = load4($45);
 store4($44,$46);
 $47 = ((($4)) + 68|0);
 $48 = ((($10)) + 68|0);
 $49 = load4($47);
 store4($48,$49);
 $50 = ($49|0)==(0);
 if ($50) {
  store4($41,$44);
 } else {
  $51 = $46;
  $52 = ((($51)) + 8|0);
  store4($52,$44);
  $53 = ((($4)) + 64|0);
  store4($42,$53);
  store4($53,0);
  store4($47,0);
 }
 $54 = ((($10)) + 72|0);
 $55 = ((($4)) + 72|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($10)) + 84|0);
 $57 = ((($4)) + 84|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($10)) + 96|0);
 $59 = ((($4)) + 96|0);
 $60 = load4($59);
 store4($58,$60);
 store4($59,0);
 $61 = ((($10)) + 100|0);
 $62 = ((($4)) + 100|0);
 $63 = ((($10)) + 104|0);
 $64 = ((($10)) + 108|0);
 $65 = load4($62);
 store4($61,$65);
 $66 = ((($4)) + 104|0);
 $67 = load4($66);
 store4($63,$67);
 $68 = ((($4)) + 108|0);
 $69 = load4($68);
 store4($64,$69);
 store4($68,0);
 store4($66,0);
 store4($62,0);
 __ZN5VNodeD2Ev($4);
 __ZN5VNodeD2Ev($7);
 $70 = ((($6)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($70);
 $71 = ((($6)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($71);
 $72 = ((($6)) + 24|0);
 $73 = ((($6)) + 28|0);
 $74 = load4($73);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($72,$74);
 $75 = ((($6)) + 12|0);
 $76 = ((($6)) + 16|0);
 $77 = load4($76);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($75,$77);
 $78 = ((($6)) + 4|0);
 $79 = load4($78);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($6,$79);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 STACKTOP = sp;return ($10|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS9_EE6invokeEPFS2_S9_SA_S9_EPNS0_11BindingTypeIS9_EUt_EPSA_SH_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $4 = sp + 88|0;
 $5 = sp + 72|0;
 $6 = sp + 12|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($5,$8,$9);
 __ZN9VNodeDataC2ERKS_($6,$2);
 $10 = ((($3)) + 4|0);
 $11 = load4($3);
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($7,$10,$11);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $12 = (__Znwj(112)|0);
 ; store8($12,load8($4,4),4); store4($12+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $13 = ((($12)) + 12|0);
 $14 = ((($4)) + 12|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($12)) + 24|0);
 $16 = ((($4)) + 24|0);
 ; store8($15,load8($16,4),4); store4($15+8 | 0,load4($16+8 | 0,4),4);
 ; store8($16,i64_const(0,0),4); store4($16+8|0,0,4);
 $17 = ((($12)) + 36|0);
 $18 = ((($4)) + 36|0);
 $19 = load4($18);
 store4($17,$19);
 $20 = ((($12)) + 40|0);
 $21 = ((($4)) + 40|0);
 $22 = load4($21);
 store4($20,$22);
 $23 = ((($4)) + 44|0);
 $24 = ((($12)) + 44|0);
 $25 = load4($23);
 store4($24,$25);
 $26 = ($25|0)==(0);
 if ($26) {
  store4($17,$20);
 } else {
  $27 = $22;
  $28 = ((($27)) + 8|0);
  store4($28,$20);
  $29 = ((($4)) + 40|0);
  store4($18,$29);
  store4($29,0);
  store4($23,0);
 }
 $30 = ((($12)) + 48|0);
 $31 = ((($4)) + 48|0);
 $32 = load4($31);
 store4($30,$32);
 $33 = ((($12)) + 52|0);
 $34 = ((($4)) + 52|0);
 $35 = load4($34);
 store4($33,$35);
 $36 = ((($4)) + 56|0);
 $37 = ((($12)) + 56|0);
 $38 = load4($36);
 store4($37,$38);
 $39 = ($38|0)==(0);
 if ($39) {
  store4($30,$33);
 } else {
  $40 = $35;
  $41 = ((($40)) + 8|0);
  store4($41,$33);
  $42 = ((($4)) + 52|0);
  store4($31,$42);
  store4($42,0);
  store4($36,0);
 }
 $43 = ((($12)) + 60|0);
 $44 = ((($4)) + 60|0);
 $45 = load4($44);
 store4($43,$45);
 $46 = ((($12)) + 64|0);
 $47 = ((($4)) + 64|0);
 $48 = load4($47);
 store4($46,$48);
 $49 = ((($4)) + 68|0);
 $50 = ((($12)) + 68|0);
 $51 = load4($49);
 store4($50,$51);
 $52 = ($51|0)==(0);
 if ($52) {
  store4($43,$46);
 } else {
  $53 = $48;
  $54 = ((($53)) + 8|0);
  store4($54,$46);
  $55 = ((($4)) + 64|0);
  store4($44,$55);
  store4($55,0);
  store4($49,0);
 }
 $56 = ((($12)) + 72|0);
 $57 = ((($4)) + 72|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($12)) + 84|0);
 $59 = ((($4)) + 84|0);
 ; store8($58,load8($59,4),4); store4($58+8 | 0,load4($59+8 | 0,4),4);
 ; store8($59,i64_const(0,0),4); store4($59+8|0,0,4);
 $60 = ((($12)) + 96|0);
 $61 = ((($4)) + 96|0);
 $62 = load4($61);
 store4($60,$62);
 store4($61,0);
 $63 = ((($12)) + 100|0);
 $64 = ((($4)) + 100|0);
 $65 = ((($12)) + 104|0);
 $66 = ((($12)) + 108|0);
 $67 = load4($64);
 store4($63,$67);
 $68 = ((($4)) + 104|0);
 $69 = load4($68);
 store4($65,$69);
 $70 = ((($4)) + 108|0);
 $71 = load4($70);
 store4($66,$71);
 store4($70,0);
 store4($68,0);
 store4($64,0);
 __ZN5VNodeD2Ev($4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
 $72 = ((($6)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($72);
 $73 = ((($6)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($73);
 $74 = ((($6)) + 24|0);
 $75 = ((($6)) + 28|0);
 $76 = load4($75);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($74,$76);
 $77 = ((($6)) + 12|0);
 $78 = ((($6)) + 16|0);
 $79 = load4($78);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($77,$79);
 $80 = ((($6)) + 4|0);
 $81 = load4($80);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($6,$81);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 STACKTOP = sp;return ($12|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_EPSA_PSD_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $4 = sp + 88|0;
 $5 = sp + 72|0;
 $6 = sp + 12|0;
 $7 = sp;
 $8 = ((($1)) + 4|0);
 $9 = load4($1);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($5,$8,$9);
 __ZN9VNodeDataC2ERKS_($6,$2);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($7,$3);
 FUNCTION_TABLE_viiii[$0 & 15]($4,$5,$6,$7);
 $10 = (__Znwj(112)|0);
 ; store8($10,load8($4,4),4); store4($10+8 | 0,load4($4+8 | 0,4),4);
 ; store8($4,i64_const(0,0),4); store4($4+8|0,0,4);
 $11 = ((($10)) + 12|0);
 $12 = ((($4)) + 12|0);
 ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
 ; store8($12,i64_const(0,0),4); store4($12+8|0,0,4);
 $13 = ((($10)) + 24|0);
 $14 = ((($4)) + 24|0);
 ; store8($13,load8($14,4),4); store4($13+8 | 0,load4($14+8 | 0,4),4);
 ; store8($14,i64_const(0,0),4); store4($14+8|0,0,4);
 $15 = ((($10)) + 36|0);
 $16 = ((($4)) + 36|0);
 $17 = load4($16);
 store4($15,$17);
 $18 = ((($10)) + 40|0);
 $19 = ((($4)) + 40|0);
 $20 = load4($19);
 store4($18,$20);
 $21 = ((($4)) + 44|0);
 $22 = ((($10)) + 44|0);
 $23 = load4($21);
 store4($22,$23);
 $24 = ($23|0)==(0);
 if ($24) {
  store4($15,$18);
 } else {
  $25 = $20;
  $26 = ((($25)) + 8|0);
  store4($26,$18);
  $27 = ((($4)) + 40|0);
  store4($16,$27);
  store4($27,0);
  store4($21,0);
 }
 $28 = ((($10)) + 48|0);
 $29 = ((($4)) + 48|0);
 $30 = load4($29);
 store4($28,$30);
 $31 = ((($10)) + 52|0);
 $32 = ((($4)) + 52|0);
 $33 = load4($32);
 store4($31,$33);
 $34 = ((($4)) + 56|0);
 $35 = ((($10)) + 56|0);
 $36 = load4($34);
 store4($35,$36);
 $37 = ($36|0)==(0);
 if ($37) {
  store4($28,$31);
 } else {
  $38 = $33;
  $39 = ((($38)) + 8|0);
  store4($39,$31);
  $40 = ((($4)) + 52|0);
  store4($29,$40);
  store4($40,0);
  store4($34,0);
 }
 $41 = ((($10)) + 60|0);
 $42 = ((($4)) + 60|0);
 $43 = load4($42);
 store4($41,$43);
 $44 = ((($10)) + 64|0);
 $45 = ((($4)) + 64|0);
 $46 = load4($45);
 store4($44,$46);
 $47 = ((($4)) + 68|0);
 $48 = ((($10)) + 68|0);
 $49 = load4($47);
 store4($48,$49);
 $50 = ($49|0)==(0);
 if ($50) {
  store4($41,$44);
 } else {
  $51 = $46;
  $52 = ((($51)) + 8|0);
  store4($52,$44);
  $53 = ((($4)) + 64|0);
  store4($42,$53);
  store4($53,0);
  store4($47,0);
 }
 $54 = ((($10)) + 72|0);
 $55 = ((($4)) + 72|0);
 ; store8($54,load8($55,4),4); store4($54+8 | 0,load4($55+8 | 0,4),4);
 ; store8($55,i64_const(0,0),4); store4($55+8|0,0,4);
 $56 = ((($10)) + 84|0);
 $57 = ((($4)) + 84|0);
 ; store8($56,load8($57,4),4); store4($56+8 | 0,load4($57+8 | 0,4),4);
 ; store8($57,i64_const(0,0),4); store4($57+8|0,0,4);
 $58 = ((($10)) + 96|0);
 $59 = ((($4)) + 96|0);
 $60 = load4($59);
 store4($58,$60);
 store4($59,0);
 $61 = ((($10)) + 100|0);
 $62 = ((($4)) + 100|0);
 $63 = ((($10)) + 104|0);
 $64 = ((($10)) + 108|0);
 $65 = load4($62);
 store4($61,$65);
 $66 = ((($4)) + 104|0);
 $67 = load4($66);
 store4($63,$67);
 $68 = ((($4)) + 108|0);
 $69 = load4($68);
 store4($64,$69);
 store4($68,0);
 store4($66,0);
 store4($62,0);
 __ZN5VNodeD2Ev($4);
 $70 = load4($7);
 $71 = ($70|0)==(0|0);
 if (!($71)) {
  $72 = ((($7)) + 4|0);
  $73 = load4($72);
  $74 = ($73|0)==($70|0);
  if ($74) {
   $79 = $70;
  } else {
   $76 = $73;
   while(1) {
    $75 = ((($76)) + -112|0);
    store4($72,$75);
    __ZN5VNodeD2Ev($75);
    $77 = load4($72);
    $78 = ($77|0)==($70|0);
    if ($78) {
     break;
    } else {
     $76 = $77;
    }
   }
   $$pre$i = load4($7);
   $79 = $$pre$i;
  }
  __ZdlPv($79);
 }
 $80 = ((($6)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($80);
 $81 = ((($6)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($81);
 $82 = ((($6)) + 24|0);
 $83 = ((($6)) + 28|0);
 $84 = load4($83);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($82,$84);
 $85 = ((($6)) + 12|0);
 $86 = ((($6)) + 16|0);
 $87 = load4($86);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($85,$87);
 $88 = ((($6)) + 4|0);
 $89 = load4($88);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($6,$89);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($5);
 STACKTOP = sp;return ($10|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $5 = sp + 96|0;
 $6 = sp + 84|0;
 $7 = sp + 72|0;
 $8 = sp + 12|0;
 $9 = sp;
 $10 = ((($1)) + 4|0);
 $11 = load4($1);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($6,$10,$11);
 $12 = ((($2)) + 4|0);
 $13 = load4($2);
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($7,$12,$13);
 __ZN9VNodeDataC2ERKS_($8,$3);
 __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEEC2ERKS4_($9,$4);
 FUNCTION_TABLE_viiiii[$0 & 7]($5,$6,$7,$8,$9);
 $14 = (__Znwj(112)|0);
 ; store8($14,load8($5,4),4); store4($14+8 | 0,load4($5+8 | 0,4),4);
 ; store8($5,i64_const(0,0),4); store4($5+8|0,0,4);
 $15 = ((($14)) + 12|0);
 $16 = ((($5)) + 12|0);
 ; store8($15,load8($16,4),4); store4($15+8 | 0,load4($16+8 | 0,4),4);
 ; store8($16,i64_const(0,0),4); store4($16+8|0,0,4);
 $17 = ((($14)) + 24|0);
 $18 = ((($5)) + 24|0);
 ; store8($17,load8($18,4),4); store4($17+8 | 0,load4($18+8 | 0,4),4);
 ; store8($18,i64_const(0,0),4); store4($18+8|0,0,4);
 $19 = ((($14)) + 36|0);
 $20 = ((($5)) + 36|0);
 $21 = load4($20);
 store4($19,$21);
 $22 = ((($14)) + 40|0);
 $23 = ((($5)) + 40|0);
 $24 = load4($23);
 store4($22,$24);
 $25 = ((($5)) + 44|0);
 $26 = ((($14)) + 44|0);
 $27 = load4($25);
 store4($26,$27);
 $28 = ($27|0)==(0);
 if ($28) {
  store4($19,$22);
 } else {
  $29 = $24;
  $30 = ((($29)) + 8|0);
  store4($30,$22);
  $31 = ((($5)) + 40|0);
  store4($20,$31);
  store4($31,0);
  store4($25,0);
 }
 $32 = ((($14)) + 48|0);
 $33 = ((($5)) + 48|0);
 $34 = load4($33);
 store4($32,$34);
 $35 = ((($14)) + 52|0);
 $36 = ((($5)) + 52|0);
 $37 = load4($36);
 store4($35,$37);
 $38 = ((($5)) + 56|0);
 $39 = ((($14)) + 56|0);
 $40 = load4($38);
 store4($39,$40);
 $41 = ($40|0)==(0);
 if ($41) {
  store4($32,$35);
 } else {
  $42 = $37;
  $43 = ((($42)) + 8|0);
  store4($43,$35);
  $44 = ((($5)) + 52|0);
  store4($33,$44);
  store4($44,0);
  store4($38,0);
 }
 $45 = ((($14)) + 60|0);
 $46 = ((($5)) + 60|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = ((($14)) + 64|0);
 $49 = ((($5)) + 64|0);
 $50 = load4($49);
 store4($48,$50);
 $51 = ((($5)) + 68|0);
 $52 = ((($14)) + 68|0);
 $53 = load4($51);
 store4($52,$53);
 $54 = ($53|0)==(0);
 if ($54) {
  store4($45,$48);
 } else {
  $55 = $50;
  $56 = ((($55)) + 8|0);
  store4($56,$48);
  $57 = ((($5)) + 64|0);
  store4($46,$57);
  store4($57,0);
  store4($51,0);
 }
 $58 = ((($14)) + 72|0);
 $59 = ((($5)) + 72|0);
 ; store8($58,load8($59,4),4); store4($58+8 | 0,load4($59+8 | 0,4),4);
 ; store8($59,i64_const(0,0),4); store4($59+8|0,0,4);
 $60 = ((($14)) + 84|0);
 $61 = ((($5)) + 84|0);
 ; store8($60,load8($61,4),4); store4($60+8 | 0,load4($61+8 | 0,4),4);
 ; store8($61,i64_const(0,0),4); store4($61+8|0,0,4);
 $62 = ((($14)) + 96|0);
 $63 = ((($5)) + 96|0);
 $64 = load4($63);
 store4($62,$64);
 store4($63,0);
 $65 = ((($14)) + 100|0);
 $66 = ((($5)) + 100|0);
 $67 = ((($14)) + 104|0);
 $68 = ((($14)) + 108|0);
 $69 = load4($66);
 store4($65,$69);
 $70 = ((($5)) + 104|0);
 $71 = load4($70);
 store4($67,$71);
 $72 = ((($5)) + 108|0);
 $73 = load4($72);
 store4($68,$73);
 store4($72,0);
 store4($70,0);
 store4($66,0);
 __ZN5VNodeD2Ev($5);
 $74 = load4($9);
 $75 = ($74|0)==(0|0);
 if (!($75)) {
  $76 = ((($9)) + 4|0);
  $77 = load4($76);
  $78 = ($77|0)==($74|0);
  if ($78) {
   $83 = $74;
  } else {
   $80 = $77;
   while(1) {
    $79 = ((($80)) + -112|0);
    store4($76,$79);
    __ZN5VNodeD2Ev($79);
    $81 = load4($76);
    $82 = ($81|0)==($74|0);
    if ($82) {
     break;
    } else {
     $80 = $81;
    }
   }
   $$pre$i = load4($9);
   $83 = $$pre$i;
  }
  __ZdlPv($83);
 }
 $84 = ((($8)) + 48|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($84);
 $85 = ((($8)) + 36|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($85);
 $86 = ((($8)) + 24|0);
 $87 = ((($8)) + 28|0);
 $88 = load4($87);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($86,$88);
 $89 = ((($8)) + 12|0);
 $90 = ((($8)) + 16|0);
 $91 = load4($90);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($89,$91);
 $92 = ((($8)) + 4|0);
 $93 = load4($92);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($8,$93);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($7);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($6);
 STACKTOP = sp;return ($14|0);
}
function __ZN10emscripten8internal12MethodCallerINS_3valEJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE4callEPNS0_7_EM_VALEPKcOS9_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = sp + 8|0;
 $5 = load1(8768);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  $7 = (___cxa_guard_acquire(8768)|0);
  $8 = ($7|0)==(0);
  if (!($8)) {
   $9 = (__emval_get_method_caller(2,(2008|0))|0);
   store4(8792,$9);
  }
 }
 $10 = load4(8792);
 $11 = ((($2)) + 11|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)<(0);
 $14 = ((($2)) + 4|0);
 $15 = load4($14);
 $16 = $12&255;
 $17 = $13 ? $15 : $16;
 $18 = (($17) + 4)|0;
 $19 = (_malloc($18)|0);
 store4($19,$17);
 $20 = ((($19)) + 4|0);
 $21 = load4($2);
 $22 = $13 ? $21 : $2;
 _memcpy(($20|0),($22|0),($17|0))|0;
 store4($3,$19);
 $23 = (+__emval_call_method(($10|0),($0|0),($1|0),($4|0),($3|0)));
 $24 = load4($4);
 __emval_run_destructors(($24|0));
 $25 = (~~(($23))>>>0);
 $26 = $25;
 STACKTOP = sp;return ($26|0);
}
function __ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE21__push_back_slow_pathIS1_EEvOT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$i = 0, $$06$i$i = 0, $$add = 0, $$in = 0, $$pre$i = 0, $$pre45 = 0, $$ptr39 = 0, $$sroa$7$0$idx = 0, $$sroa$speculated$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = load4($2);
 $4 = load4($0);
 $5 = (($3) - ($4))|0;
 $6 = (($5|0) / 112)&-1;
 $7 = (($6) + 1)|0;
 $8 = ($7>>>0)>(38347922);
 if ($8) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $9 = ((($0)) + 8|0);
 $10 = load4($9);
 $11 = (($10) - ($4))|0;
 $12 = (($11|0) / 112)&-1;
 $13 = ($12>>>0)<(19173961);
 $14 = $12 << 1;
 $15 = ($14>>>0)<($7>>>0);
 $$sroa$speculated$i = $15 ? $7 : $14;
 $$0$i = $13 ? $$sroa$speculated$i : 38347922;
 $16 = (($3) - ($4))|0;
 $17 = (($16|0) / 112)&-1;
 $18 = ($$0$i|0)==(0);
 do {
  if ($18) {
   $24 = 0;
  } else {
   $19 = ($$0$i>>>0)>(38347922);
   if ($19) {
    $20 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($20);
    ___cxa_throw(($20|0),(1488|0),(6|0));
    // unreachable;
   } else {
    $21 = ($$0$i*112)|0;
    $22 = (__Znwj($21)|0);
    $24 = $22;
    break;
   }
  }
 } while(0);
 $23 = (($24) + (($17*112)|0)|0);
 $25 = (($24) + (($$0$i*112)|0)|0);
 $26 = $25;
 ; store8($23,load8($1,4),4); store4($23+8 | 0,load4($1+8 | 0,4),4);
 ; store8($1,i64_const(0,0),4); store4($1+8|0,0,4);
 $27 = (((($24) + (($17*112)|0)|0)) + 12|0);
 $28 = ((($1)) + 12|0);
 ; store8($27,load8($28,4),4); store4($27+8 | 0,load4($28+8 | 0,4),4);
 ; store8($28,i64_const(0,0),4); store4($28+8|0,0,4);
 $29 = (((($24) + (($17*112)|0)|0)) + 24|0);
 $30 = ((($1)) + 24|0);
 ; store8($29,load8($30,4),4); store4($29+8 | 0,load4($30+8 | 0,4),4);
 ; store8($30,i64_const(0,0),4); store4($30+8|0,0,4);
 $31 = (((($24) + (($17*112)|0)|0)) + 36|0);
 $32 = ((($1)) + 36|0);
 $33 = load4($32);
 store4($31,$33);
 $34 = (((($24) + (($17*112)|0)|0)) + 40|0);
 $35 = ((($1)) + 40|0);
 $36 = load4($35);
 store4($34,$36);
 $37 = ((($1)) + 44|0);
 $38 = (((($24) + (($17*112)|0)|0)) + 44|0);
 $39 = load4($37);
 store4($38,$39);
 $40 = ($39|0)==(0);
 $41 = (((($24) + (($17*112)|0)|0)) + 40|0);
 if ($40) {
  store4($31,$41);
 } else {
  $42 = $36;
  $43 = ((($42)) + 8|0);
  store4($43,$41);
  $44 = ((($1)) + 40|0);
  store4($32,$44);
  store4($44,0);
  store4($37,0);
 }
 $45 = (((($24) + (($17*112)|0)|0)) + 48|0);
 $46 = ((($1)) + 48|0);
 $47 = load4($46);
 store4($45,$47);
 $48 = (((($24) + (($17*112)|0)|0)) + 52|0);
 $49 = ((($1)) + 52|0);
 $50 = load4($49);
 store4($48,$50);
 $51 = ((($1)) + 56|0);
 $52 = (((($24) + (($17*112)|0)|0)) + 56|0);
 $53 = load4($51);
 store4($52,$53);
 $54 = ($53|0)==(0);
 $55 = (((($24) + (($17*112)|0)|0)) + 52|0);
 if ($54) {
  store4($45,$55);
 } else {
  $56 = $50;
  $57 = ((($56)) + 8|0);
  store4($57,$55);
  $58 = ((($1)) + 52|0);
  store4($46,$58);
  store4($58,0);
  store4($51,0);
 }
 $59 = (((($24) + (($17*112)|0)|0)) + 60|0);
 $60 = ((($1)) + 60|0);
 $61 = load4($60);
 store4($59,$61);
 $62 = (((($24) + (($17*112)|0)|0)) + 64|0);
 $63 = ((($1)) + 64|0);
 $64 = load4($63);
 store4($62,$64);
 $65 = ((($1)) + 68|0);
 $66 = (((($24) + (($17*112)|0)|0)) + 68|0);
 $67 = load4($65);
 store4($66,$67);
 $68 = ($67|0)==(0);
 $69 = (((($24) + (($17*112)|0)|0)) + 64|0);
 if ($68) {
  store4($59,$69);
 } else {
  $70 = $64;
  $71 = ((($70)) + 8|0);
  store4($71,$69);
  $72 = ((($1)) + 64|0);
  store4($60,$72);
  store4($72,0);
  store4($65,0);
 }
 $73 = (((($24) + (($17*112)|0)|0)) + 72|0);
 $74 = ((($1)) + 72|0);
 ; store8($73,load8($74,4),4); store4($73+8 | 0,load4($74+8 | 0,4),4);
 ; store8($74,i64_const(0,0),4); store4($74+8|0,0,4);
 $75 = (((($24) + (($17*112)|0)|0)) + 84|0);
 $76 = ((($1)) + 84|0);
 ; store8($75,load8($76,4),4); store4($75+8 | 0,load4($76+8 | 0,4),4);
 ; store8($76,i64_const(0,0),4); store4($76+8|0,0,4);
 $77 = (((($24) + (($17*112)|0)|0)) + 96|0);
 $78 = ((($1)) + 96|0);
 $79 = load4($78);
 store4($77,$79);
 store4($78,0);
 $80 = (((($24) + (($17*112)|0)|0)) + 100|0);
 $81 = ((($1)) + 100|0);
 $82 = (((($24) + (($17*112)|0)|0)) + 104|0);
 $83 = (((($24) + (($17*112)|0)|0)) + 108|0);
 store4($83,0);
 $84 = load4($81);
 store4($80,$84);
 $85 = ((($1)) + 104|0);
 $86 = load4($85);
 store4($82,$86);
 $87 = ((($1)) + 108|0);
 $88 = load4($87);
 $89 = (((($24) + (($17*112)|0)|0)) + 108|0);
 store4($89,$88);
 store4($87,0);
 store4($85,0);
 store4($81,0);
 $90 = ((($23)) + 112|0);
 $91 = $90;
 $92 = load4($0);
 $93 = load4($2);
 $94 = ($93|0)==($92|0);
 if ($94) {
  $95 = $92;
  $$in = $23;$102 = $95;$104 = $92;
 } else {
  $$06$i$i = $93;$$sroa$7$0$idx = 0;$97 = $23;
  while(1) {
   $96 = ((($97)) + -112|0);
   $98 = ((($$06$i$i)) + -112|0);
   __ZN5VNodeC2ERKS_($96,$98);
   $$add = (($$sroa$7$0$idx) + -1)|0;
   $$ptr39 = (($23) + (($$add*112)|0)|0);
   $99 = ($98|0)==($92|0);
   if ($99) {
    break;
   } else {
    $$06$i$i = $98;$$sroa$7$0$idx = $$add;$97 = $$ptr39;
   }
  }
  $$pre$i = load4($0);
  $$pre45 = load4($2);
  $$in = $$ptr39;$102 = $$pre$i;$104 = $$pre45;
 }
 $100 = $$in;
 store4($0,$100);
 store4($2,$91);
 store4($9,$26);
 $101 = $102;
 $103 = ($104|0)==($101|0);
 if (!($103)) {
  $106 = $104;
  while(1) {
   $105 = ((($106)) + -112|0);
   __ZN5VNodeD2Ev($105);
   $107 = ($105|0)==($101|0);
   if ($107) {
    break;
   } else {
    $106 = $105;
   }
  }
 }
 $108 = ($102|0)==(0);
 if ($108) {
  return;
 }
 $109 = $102;
 __ZdlPv($109);
 return;
}
function __ZN10emscripten8internal7InvokerI5VNodeJNS_3valEEE6invokeEPFS2_S3_EPNS0_7_EM_VALE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $2 = sp + 8|0;
 $3 = sp;
 store4($3,$1);
 FUNCTION_TABLE_vii[$0 & 3]($2,$3);
 $4 = (__Znwj(112)|0);
 ; store8($4,load8($2,4),4); store4($4+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,i64_const(0,0),4); store4($2+8|0,0,4);
 $5 = ((($4)) + 12|0);
 $6 = ((($2)) + 12|0);
 ; store8($5,load8($6,4),4); store4($5+8 | 0,load4($6+8 | 0,4),4);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $7 = ((($4)) + 24|0);
 $8 = ((($2)) + 24|0);
 ; store8($7,load8($8,4),4); store4($7+8 | 0,load4($8+8 | 0,4),4);
 ; store8($8,i64_const(0,0),4); store4($8+8|0,0,4);
 $9 = ((($4)) + 36|0);
 $10 = ((($2)) + 36|0);
 $11 = load4($10);
 store4($9,$11);
 $12 = ((($4)) + 40|0);
 $13 = ((($2)) + 40|0);
 $14 = load4($13);
 store4($12,$14);
 $15 = ((($2)) + 44|0);
 $16 = ((($4)) + 44|0);
 $17 = load4($15);
 store4($16,$17);
 $18 = ($17|0)==(0);
 if ($18) {
  store4($9,$12);
 } else {
  $19 = $14;
  $20 = ((($19)) + 8|0);
  store4($20,$12);
  $21 = ((($2)) + 40|0);
  store4($10,$21);
  store4($21,0);
  store4($15,0);
 }
 $22 = ((($4)) + 48|0);
 $23 = ((($2)) + 48|0);
 $24 = load4($23);
 store4($22,$24);
 $25 = ((($4)) + 52|0);
 $26 = ((($2)) + 52|0);
 $27 = load4($26);
 store4($25,$27);
 $28 = ((($2)) + 56|0);
 $29 = ((($4)) + 56|0);
 $30 = load4($28);
 store4($29,$30);
 $31 = ($30|0)==(0);
 if ($31) {
  store4($22,$25);
 } else {
  $32 = $27;
  $33 = ((($32)) + 8|0);
  store4($33,$25);
  $34 = ((($2)) + 52|0);
  store4($23,$34);
  store4($34,0);
  store4($28,0);
 }
 $35 = ((($4)) + 60|0);
 $36 = ((($2)) + 60|0);
 $37 = load4($36);
 store4($35,$37);
 $38 = ((($4)) + 64|0);
 $39 = ((($2)) + 64|0);
 $40 = load4($39);
 store4($38,$40);
 $41 = ((($2)) + 68|0);
 $42 = ((($4)) + 68|0);
 $43 = load4($41);
 store4($42,$43);
 $44 = ($43|0)==(0);
 if ($44) {
  store4($35,$38);
 } else {
  $45 = $40;
  $46 = ((($45)) + 8|0);
  store4($46,$38);
  $47 = ((($2)) + 64|0);
  store4($36,$47);
  store4($47,0);
  store4($41,0);
 }
 $48 = ((($4)) + 72|0);
 $49 = ((($2)) + 72|0);
 ; store8($48,load8($49,4),4); store4($48+8 | 0,load4($49+8 | 0,4),4);
 ; store8($49,i64_const(0,0),4); store4($49+8|0,0,4);
 $50 = ((($4)) + 84|0);
 $51 = ((($2)) + 84|0);
 ; store8($50,load8($51,4),4); store4($50+8 | 0,load4($51+8 | 0,4),4);
 ; store8($51,i64_const(0,0),4); store4($51+8|0,0,4);
 $52 = ((($4)) + 96|0);
 $53 = ((($2)) + 96|0);
 $54 = load4($53);
 store4($52,$54);
 store4($53,0);
 $55 = ((($4)) + 100|0);
 $56 = ((($2)) + 100|0);
 $57 = ((($4)) + 104|0);
 $58 = ((($4)) + 108|0);
 $59 = load4($56);
 store4($55,$59);
 $60 = ((($2)) + 104|0);
 $61 = load4($60);
 store4($57,$61);
 $62 = ((($2)) + 108|0);
 $63 = load4($62);
 store4($58,$63);
 store4($62,0);
 store4($60,0);
 store4($56,0);
 __ZN5VNodeD2Ev($2);
 $64 = load4($3);
 __emval_decref(($64|0));
 STACKTOP = sp;return ($4|0);
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE25__emplace_unique_key_argsIS7_JRKNS_21piecewise_construct_tENS_5tupleIJRKS7_EEENSJ_IJEEEEEENS_4pairINS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEEbEERKT_DpOT0_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $$019 = 0, $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $6 = sp;
 $7 = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($1,$6,$2)|0);
 $8 = load4($7);
 $9 = ($8|0)==(0|0);
 if (!($9)) {
  $$0 = $8;$$019 = 0;
  $27 = $$0;
  store4($0,$27);
  $28 = ((($0)) + 4|0);
  store1($28,$$019);
  STACKTOP = sp;return;
 }
 $10 = (__Znwj(32)|0);
 $11 = load4($4);
 $12 = ((($10)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($12,$11);
 $13 = ((($10)) + 28|0);
 store4($13,0);
 $14 = load4($6);
 store4($10,0);
 $15 = ((($10)) + 4|0);
 store4($15,0);
 $16 = ((($10)) + 8|0);
 store4($16,$14);
 store4($7,$10);
 $17 = load4($1);
 $18 = load4($17);
 $19 = ($18|0)==(0|0);
 if ($19) {
  $23 = $10;
 } else {
  $20 = $18;
  store4($1,$20);
  $$pre$i = load4($7);
  $23 = $$pre$i;
 }
 $21 = ((($1)) + 4|0);
 $22 = load4($21);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($22,$23);
 $24 = ((($1)) + 8|0);
 $25 = load4($24);
 $26 = (($25) + 1)|0;
 store4($24,$26);
 $$0 = $10;$$019 = 1;
 $27 = $$0;
 store4($0,$27);
 $28 = ((($0)) + 4|0);
 store1($28,$$019);
 STACKTOP = sp;return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$020 = 0, $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i21 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  store4($1,$3);
  $$020 = $3;
  return ($$020|0);
 }
 $6 = ((($2)) + 11|0);
 $7 = load1($6);
 $8 = ($7<<24>>24)<(0);
 $9 = ((($2)) + 4|0);
 $10 = load4($9);
 $11 = $7&255;
 $12 = $8 ? $10 : $11;
 $13 = load4($2);
 $14 = $8 ? $13 : $2;
 $$0 = $4;
 while(1) {
  $15 = ((($$0)) + 16|0);
  $16 = ((($15)) + 11|0);
  $17 = load1($16);
  $18 = ($17<<24>>24)<(0);
  $19 = ((($$0)) + 20|0);
  $20 = load4($19);
  $21 = $17&255;
  $22 = $18 ? $20 : $21;
  $23 = ($22>>>0)<($12>>>0);
  $$sroa$speculated$i$i$i$i21 = $23 ? $22 : $12;
  $24 = ($$sroa$speculated$i$i$i$i21|0)==(0);
  if ($24) {
   label = 5;
  } else {
   $25 = load4($15);
   $26 = $18 ? $25 : $15;
   $27 = (_memcmp($14,$26,$$sroa$speculated$i$i$i$i21)|0);
   $28 = ($27|0)==(0);
   if ($28) {
    label = 5;
   } else {
    $30 = ($27|0)<(0);
    if ($30) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $29 = ($12>>>0)<($22>>>0);
   if ($29) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $31 = load4($$0);
   $32 = ($31|0)==(0|0);
   if ($32) {
    label = 8;
    break;
   } else {
    $$sink = $31;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $33 = ($12>>>0)<($22>>>0);
   $$sroa$speculated$i$i$i$i = $33 ? $12 : $22;
   $34 = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($34) {
    label = 11;
   } else {
    $35 = load4($15);
    $36 = $18 ? $35 : $15;
    $37 = (_memcmp($36,$14,$$sroa$speculated$i$i$i$i)|0);
    $38 = ($37|0)==(0);
    if ($38) {
     label = 11;
    } else {
     $39 = ($37|0)<(0);
     if (!($39)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($23)) {
     label = 16;
     break;
    }
   }
   $40 = ((($$0)) + 4|0);
   $41 = load4($40);
   $42 = ($41|0)==(0|0);
   if ($42) {
    label = 15;
    break;
   } else {
    $$sink = $41;
   }
  }
  $$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($1,$$0);
  $$020 = $$0;
  return ($$020|0);
 }
 else if ((label|0) == 15) {
  store4($1,$$0);
  $$020 = $40;
  return ($$020|0);
 }
 else if ((label|0) == 16) {
  store4($1,$$0);
  $$020 = $1;
  return ($$020|0);
 }
 return (0)|0;
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$0$in$be = 0, $$012 = 0, $$021 = 0, $$022 = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i13 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $$021 = load4($2);
 $3 = ($$021|0)==(0|0);
 if ($3) {
  $$012 = 0;
  return ($$012|0);
 }
 $4 = ((($1)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 $7 = ((($1)) + 4|0);
 $8 = load4($7);
 $9 = $5&255;
 $10 = $6 ? $8 : $9;
 $11 = load4($1);
 $12 = $6 ? $11 : $1;
 $$022 = $$021;
 while(1) {
  $13 = ((($$022)) + 16|0);
  $14 = ((($13)) + 11|0);
  $15 = load1($14);
  $16 = ($15<<24>>24)<(0);
  $17 = ((($$022)) + 20|0);
  $18 = load4($17);
  $19 = $15&255;
  $20 = $16 ? $18 : $19;
  $21 = ($20>>>0)<($10>>>0);
  $$sroa$speculated$i$i$i$i13 = $21 ? $20 : $10;
  $22 = ($$sroa$speculated$i$i$i$i13|0)==(0);
  if ($22) {
   label = 5;
  } else {
   $23 = load4($13);
   $24 = $16 ? $23 : $13;
   $25 = (_memcmp($12,$24,$$sroa$speculated$i$i$i$i13)|0);
   $26 = ($25|0)==(0);
   if ($26) {
    label = 5;
   } else {
    $28 = ($25|0)<(0);
    if ($28) {
     label = 7;
    } else {
     label = 8;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $27 = ($10>>>0)<($20>>>0);
   if ($27) {
    label = 7;
   } else {
    label = 8;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $$0$in$be = $$022;
  }
  else if ((label|0) == 8) {
   label = 0;
   $29 = ($10>>>0)<($20>>>0);
   $$sroa$speculated$i$i$i$i = $29 ? $10 : $20;
   $30 = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($30) {
    label = 10;
   } else {
    $31 = load4($13);
    $32 = $16 ? $31 : $13;
    $33 = (_memcmp($32,$12,$$sroa$speculated$i$i$i$i)|0);
    $34 = ($33|0)==(0);
    if ($34) {
     label = 10;
    } else {
     $35 = ($33|0)<(0);
     if (!($35)) {
      $$012 = 1;
      label = 14;
      break;
     }
    }
   }
   if ((label|0) == 10) {
    label = 0;
    if (!($21)) {
     $$012 = 1;
     label = 14;
     break;
    }
   }
   $36 = ((($$022)) + 4|0);
   $$0$in$be = $36;
  }
  $$0 = load4($$0$in$be);
  $37 = ($$0|0)==(0|0);
  if ($37) {
   $$012 = 0;
   label = 14;
   break;
  } else {
   $$022 = $$0;
  }
 }
 if ((label|0) == 14) {
  return ($$012|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal7InvokerI5VNodeJRS2_S3_EE6invokeEPFS2_S3_S3_EPS2_S7_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $3 = sp;
 FUNCTION_TABLE_viii[$0 & 31]($3,$1,$2);
 $4 = (__Znwj(112)|0);
 ; store8($4,load8($3,4),4); store4($4+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $5 = ((($4)) + 12|0);
 $6 = ((($3)) + 12|0);
 ; store8($5,load8($6,4),4); store4($5+8 | 0,load4($6+8 | 0,4),4);
 ; store8($6,i64_const(0,0),4); store4($6+8|0,0,4);
 $7 = ((($4)) + 24|0);
 $8 = ((($3)) + 24|0);
 ; store8($7,load8($8,4),4); store4($7+8 | 0,load4($8+8 | 0,4),4);
 ; store8($8,i64_const(0,0),4); store4($8+8|0,0,4);
 $9 = ((($4)) + 36|0);
 $10 = ((($3)) + 36|0);
 $11 = load4($10);
 store4($9,$11);
 $12 = ((($4)) + 40|0);
 $13 = ((($3)) + 40|0);
 $14 = load4($13);
 store4($12,$14);
 $15 = ((($3)) + 44|0);
 $16 = ((($4)) + 44|0);
 $17 = load4($15);
 store4($16,$17);
 $18 = ($17|0)==(0);
 if ($18) {
  store4($9,$12);
 } else {
  $19 = $14;
  $20 = ((($19)) + 8|0);
  store4($20,$12);
  $21 = ((($3)) + 40|0);
  store4($10,$21);
  store4($21,0);
  store4($15,0);
 }
 $22 = ((($4)) + 48|0);
 $23 = ((($3)) + 48|0);
 $24 = load4($23);
 store4($22,$24);
 $25 = ((($4)) + 52|0);
 $26 = ((($3)) + 52|0);
 $27 = load4($26);
 store4($25,$27);
 $28 = ((($3)) + 56|0);
 $29 = ((($4)) + 56|0);
 $30 = load4($28);
 store4($29,$30);
 $31 = ($30|0)==(0);
 if ($31) {
  store4($22,$25);
 } else {
  $32 = $27;
  $33 = ((($32)) + 8|0);
  store4($33,$25);
  $34 = ((($3)) + 52|0);
  store4($23,$34);
  store4($34,0);
  store4($28,0);
 }
 $35 = ((($4)) + 60|0);
 $36 = ((($3)) + 60|0);
 $37 = load4($36);
 store4($35,$37);
 $38 = ((($4)) + 64|0);
 $39 = ((($3)) + 64|0);
 $40 = load4($39);
 store4($38,$40);
 $41 = ((($3)) + 68|0);
 $42 = ((($4)) + 68|0);
 $43 = load4($41);
 store4($42,$43);
 $44 = ($43|0)==(0);
 if ($44) {
  store4($35,$38);
 } else {
  $45 = $40;
  $46 = ((($45)) + 8|0);
  store4($46,$38);
  $47 = ((($3)) + 64|0);
  store4($36,$47);
  store4($47,0);
  store4($41,0);
 }
 $48 = ((($4)) + 72|0);
 $49 = ((($3)) + 72|0);
 ; store8($48,load8($49,4),4); store4($48+8 | 0,load4($49+8 | 0,4),4);
 ; store8($49,i64_const(0,0),4); store4($49+8|0,0,4);
 $50 = ((($4)) + 84|0);
 $51 = ((($3)) + 84|0);
 ; store8($50,load8($51,4),4); store4($50+8 | 0,load4($51+8 | 0,4),4);
 ; store8($51,i64_const(0,0),4); store4($51+8|0,0,4);
 $52 = ((($4)) + 96|0);
 $53 = ((($3)) + 96|0);
 $54 = load4($53);
 store4($52,$54);
 store4($53,0);
 $55 = ((($4)) + 100|0);
 $56 = ((($3)) + 100|0);
 $57 = ((($4)) + 104|0);
 $58 = ((($4)) + 108|0);
 $59 = load4($56);
 store4($55,$59);
 $60 = ((($3)) + 104|0);
 $61 = load4($60);
 store4($57,$61);
 $62 = ((($3)) + 108|0);
 $63 = load4($62);
 store4($58,$63);
 store4($62,0);
 store4($60,0);
 store4($56,0);
 __ZN5VNodeD2Ev($3);
 STACKTOP = sp;return ($4|0);
}
function __ZN10emscripten8internal7InvokerI5VNodeJNS_3valERS2_EE6invokeEPFS2_S3_S4_EPNS0_7_EM_VALEPS2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $3 = sp + 8|0;
 $4 = sp;
 store4($4,$1);
 FUNCTION_TABLE_viii[$0 & 31]($3,$4,$2);
 $5 = (__Znwj(112)|0);
 ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,i64_const(0,0),4); store4($3+8|0,0,4);
 $6 = ((($5)) + 12|0);
 $7 = ((($3)) + 12|0);
 ; store8($6,load8($7,4),4); store4($6+8 | 0,load4($7+8 | 0,4),4);
 ; store8($7,i64_const(0,0),4); store4($7+8|0,0,4);
 $8 = ((($5)) + 24|0);
 $9 = ((($3)) + 24|0);
 ; store8($8,load8($9,4),4); store4($8+8 | 0,load4($9+8 | 0,4),4);
 ; store8($9,i64_const(0,0),4); store4($9+8|0,0,4);
 $10 = ((($5)) + 36|0);
 $11 = ((($3)) + 36|0);
 $12 = load4($11);
 store4($10,$12);
 $13 = ((($5)) + 40|0);
 $14 = ((($3)) + 40|0);
 $15 = load4($14);
 store4($13,$15);
 $16 = ((($3)) + 44|0);
 $17 = ((($5)) + 44|0);
 $18 = load4($16);
 store4($17,$18);
 $19 = ($18|0)==(0);
 if ($19) {
  store4($10,$13);
 } else {
  $20 = $15;
  $21 = ((($20)) + 8|0);
  store4($21,$13);
  $22 = ((($3)) + 40|0);
  store4($11,$22);
  store4($22,0);
  store4($16,0);
 }
 $23 = ((($5)) + 48|0);
 $24 = ((($3)) + 48|0);
 $25 = load4($24);
 store4($23,$25);
 $26 = ((($5)) + 52|0);
 $27 = ((($3)) + 52|0);
 $28 = load4($27);
 store4($26,$28);
 $29 = ((($3)) + 56|0);
 $30 = ((($5)) + 56|0);
 $31 = load4($29);
 store4($30,$31);
 $32 = ($31|0)==(0);
 if ($32) {
  store4($23,$26);
 } else {
  $33 = $28;
  $34 = ((($33)) + 8|0);
  store4($34,$26);
  $35 = ((($3)) + 52|0);
  store4($24,$35);
  store4($35,0);
  store4($29,0);
 }
 $36 = ((($5)) + 60|0);
 $37 = ((($3)) + 60|0);
 $38 = load4($37);
 store4($36,$38);
 $39 = ((($5)) + 64|0);
 $40 = ((($3)) + 64|0);
 $41 = load4($40);
 store4($39,$41);
 $42 = ((($3)) + 68|0);
 $43 = ((($5)) + 68|0);
 $44 = load4($42);
 store4($43,$44);
 $45 = ($44|0)==(0);
 if ($45) {
  store4($36,$39);
 } else {
  $46 = $41;
  $47 = ((($46)) + 8|0);
  store4($47,$39);
  $48 = ((($3)) + 64|0);
  store4($37,$48);
  store4($48,0);
  store4($42,0);
 }
 $49 = ((($5)) + 72|0);
 $50 = ((($3)) + 72|0);
 ; store8($49,load8($50,4),4); store4($49+8 | 0,load4($50+8 | 0,4),4);
 ; store8($50,i64_const(0,0),4); store4($50+8|0,0,4);
 $51 = ((($5)) + 84|0);
 $52 = ((($3)) + 84|0);
 ; store8($51,load8($52,4),4); store4($51+8 | 0,load4($52+8 | 0,4),4);
 ; store8($52,i64_const(0,0),4); store4($52+8|0,0,4);
 $53 = ((($5)) + 96|0);
 $54 = ((($3)) + 96|0);
 $55 = load4($54);
 store4($53,$55);
 store4($54,0);
 $56 = ((($5)) + 100|0);
 $57 = ((($3)) + 100|0);
 $58 = ((($5)) + 104|0);
 $59 = ((($5)) + 108|0);
 $60 = load4($57);
 store4($56,$60);
 $61 = ((($3)) + 104|0);
 $62 = load4($61);
 store4($58,$62);
 $63 = ((($3)) + 108|0);
 $64 = load4($63);
 store4($59,$64);
 store4($63,0);
 store4($61,0);
 store4($57,0);
 __ZN5VNodeD2Ev($3);
 $65 = load4($4);
 __emval_decref(($65|0));
 STACKTOP = sp;return ($5|0);
}
function __GLOBAL__sub_I_app_cpp() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZN38EmscriptenBindingInitializer_vnodedataC2Ev(0);
 __ZN34EmscriptenBindingInitializer_vnodeC2Ev(0);
 $0 = (__emval_get_global((2479|0))|0);
 store4(9352,$0);
 __ZN39EmscriptenBindingInitializer_h_functionC2Ev(0);
 __embind_register_function((2835|0),2,(2016|0),(3250|0),(15|0),(3|0));
 __embind_register_function((2853|0),3,(2024|0),(3374|0),(15|0),(17|0));
 __embind_register_function((2866|0),3,(2036|0),(3374|0),(16|0),(18|0));
 return;
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev(0);
 return;
}
function __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1552|0),(4021|0));
 __embind_register_bool((1568|0),(4026|0),1,1,0);
 __embind_register_integer((1576|0),(4031|0),1,-128,127);
 __embind_register_integer((1592|0),(4036|0),1,-128,127);
 __embind_register_integer((1584|0),(4048|0),1,0,255);
 __embind_register_integer((1600|0),(4062|0),2,-32768,32767);
 __embind_register_integer((1608|0),(4068|0),2,0,65535);
 __embind_register_integer((1616|0),(4083|0),4,-2147483648,2147483647);
 __embind_register_integer((1624|0),(4087|0),4,0,-1);
 __embind_register_integer((1632|0),(4100|0),4,-2147483648,2147483647);
 __embind_register_integer((1640|0),(4105|0),4,0,-1);
 __embind_register_float((1648|0),(4119|0),4);
 __embind_register_float((1656|0),(4125|0),8);
 __embind_register_std_string((1080|0),(4132|0));
 __embind_register_std_string((1280|0),(4144|0));
 __embind_register_std_wstring((1304|0),4,(4177|0));
 __embind_register_emval((1064|0),(4190|0));
 __embind_register_memory_view((1328|0),0,(4206|0));
 __embind_register_memory_view((1336|0),0,(4236|0));
 __embind_register_memory_view((1344|0),1,(4273|0));
 __embind_register_memory_view((1352|0),2,(4312|0));
 __embind_register_memory_view((1360|0),3,(4343|0));
 __embind_register_memory_view((1368|0),4,(4383|0));
 __embind_register_memory_view((1376|0),5,(4412|0));
 __embind_register_memory_view((1384|0),4,(4450|0));
 __embind_register_memory_view((1392|0),5,(4480|0));
 __embind_register_memory_view((1336|0),0,(4519|0));
 __embind_register_memory_view((1344|0),1,(4551|0));
 __embind_register_memory_view((1352|0),2,(4584|0));
 __embind_register_memory_view((1360|0),3,(4617|0));
 __embind_register_memory_view((1368|0),4,(4651|0));
 __embind_register_memory_view((1376|0),5,(4684|0));
 __embind_register_memory_view((1400|0),6,(4718|0));
 __embind_register_memory_view((1408|0),7,(4749|0));
 __embind_register_memory_view((1416|0),7,(4781|0));
 return;
}
function ___getTypeName($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = (___strdup($2)|0);
 return ($3|0);
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = load4($1);
 store4($vararg_buffer,$2);
 $3 = (___syscall6(6,($vararg_buffer|0))|0);
 $4 = (___syscall_ret($3)|0);
 STACKTOP = sp;return ($4|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$056 = 0, $$058 = 0, $$059 = 0, $$061 = 0, $$1 = 0, $$157 = 0, $$160 = 0, $$phi$trans$insert = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = load4($4);
 store4($3,$5);
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = load4($7);
 $9 = (($8) - ($5))|0;
 store4($6,$9);
 $10 = ((($3)) + 8|0);
 store4($10,$1);
 $11 = ((($3)) + 12|0);
 store4($11,$2);
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = ((($0)) + 44|0);
 $$056 = 2;$$058 = $12;$$059 = $3;
 while(1) {
  $15 = load4(8796);
  $16 = ($15|0)==(0|0);
  if ($16) {
   $20 = load4($13);
   store4($vararg_buffer3,$20);
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   store4($vararg_ptr6,$$059);
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   store4($vararg_ptr7,$$056);
   $21 = (___syscall146(146,($vararg_buffer3|0))|0);
   $22 = (___syscall_ret($21)|0);
   $$0 = $22;
  } else {
   _pthread_cleanup_push((16|0),($0|0));
   $17 = load4($13);
   store4($vararg_buffer,$17);
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   store4($vararg_ptr1,$$059);
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   store4($vararg_ptr2,$$056);
   $18 = (___syscall146(146,($vararg_buffer|0))|0);
   $19 = (___syscall_ret($18)|0);
   _pthread_cleanup_pop(0);
   $$0 = $19;
  }
  $23 = ($$058|0)==($$0|0);
  if ($23) {
   label = 6;
   break;
  }
  $30 = ($$0|0)<(0);
  if ($30) {
   label = 8;
   break;
  }
  $38 = (($$058) - ($$0))|0;
  $39 = ((($$059)) + 4|0);
  $40 = load4($39);
  $41 = ($$0>>>0)>($40>>>0);
  if ($41) {
   $42 = load4($14);
   store4($4,$42);
   store4($7,$42);
   $43 = (($$0) - ($40))|0;
   $44 = ((($$059)) + 8|0);
   $45 = (($$056) + -1)|0;
   $$phi$trans$insert = ((($$059)) + 12|0);
   $$pre = load4($$phi$trans$insert);
   $$1 = $43;$$157 = $45;$$160 = $44;$53 = $$pre;
  } else {
   $46 = ($$056|0)==(2);
   if ($46) {
    $47 = load4($4);
    $48 = (($47) + ($$0)|0);
    store4($4,$48);
    $$1 = $$0;$$157 = 2;$$160 = $$059;$53 = $40;
   } else {
    $$1 = $$0;$$157 = $$056;$$160 = $$059;$53 = $40;
   }
  }
  $49 = load4($$160);
  $50 = (($49) + ($$1)|0);
  store4($$160,$50);
  $51 = ((($$160)) + 4|0);
  $52 = (($53) - ($$1))|0;
  store4($51,$52);
  $$056 = $$157;$$058 = $38;$$059 = $$160;
 }
 if ((label|0) == 6) {
  $24 = load4($14);
  $25 = ((($0)) + 48|0);
  $26 = load4($25);
  $27 = (($24) + ($26)|0);
  $28 = ((($0)) + 16|0);
  store4($28,$27);
  $29 = $24;
  store4($4,$29);
  store4($7,$29);
  $$061 = $2;
 }
 else if ((label|0) == 8) {
  $31 = ((($0)) + 16|0);
  store4($31,0);
  store4($4,0);
  store4($7,0);
  $32 = load4($0);
  $33 = $32 | 32;
  store4($0,$33);
  $34 = ($$056|0)==(2);
  if ($34) {
   $$061 = 0;
  } else {
   $35 = ((($$059)) + 4|0);
   $36 = load4($35);
   $37 = (($2) - ($36))|0;
   $$061 = $37;
  }
 }
 STACKTOP = sp;return ($$061|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = load4($4);
 store4($vararg_buffer,$5);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$1);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$3);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$2);
 $6 = (___syscall140(140,($vararg_buffer|0))|0);
 $7 = (___syscall_ret($6)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  store4($3,-1);
  $9 = -1;
 } else {
  $$pre = load4($3);
  $9 = $$pre;
 }
 STACKTOP = sp;return ($9|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  store4($3,$2);
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (0|0)==(0|0);
 if ($0) {
  $$0 = 8840;
 } else {
  $1 = (_pthread_self()|0);
  $2 = ((($1)) + 64|0);
  $3 = load4($2);
  $$0 = $3;
 }
 return ($$0|0);
}
function _cleanup_387($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _tolower($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_isupper($0)|0);
 $2 = ($1|0)==(0);
 $3 = $0 | 32;
 $$0 = $2 ? $0 : $3;
 return ($$0|0);
}
function _isupper($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (($0) + -65)|0;
 $2 = ($1>>>0)<(26);
 $3 = $2&1;
 return ($3|0);
}
function _memcmp($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$01318 = 0, $$01417 = 0, $$019 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $14 = 0;
  } else {
   $$01318 = $0;$$01417 = $2;$$019 = $1;
   while(1) {
    $4 = load1($$01318);
    $5 = load1($$019);
    $6 = ($4<<24>>24)==($5<<24>>24);
    if (!($6)) {
     break;
    }
    $7 = (($$01417) + -1)|0;
    $8 = ((($$01318)) + 1|0);
    $9 = ((($$019)) + 1|0);
    $10 = ($7|0)==(0);
    if ($10) {
     $14 = 0;
     break L1;
    } else {
     $$01318 = $8;$$01417 = $7;$$019 = $9;
    }
   }
   $11 = $4&255;
   $12 = $5&255;
   $13 = (($11) - ($12))|0;
   $14 = $13;
  }
 } while(0);
 return ($14|0);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 ; store8($4,i64_const(0,0),4); store8($4+8|0,i64_const(0,0),4); store8($4+16|0,i64_const(0,0),4); store8($4+24|0,i64_const(0,0),4); store8($4+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($2);
 store4($3,$vacopy_currentptr);
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = load4($9);
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $40 = $12;
  } else {
   $40 = 0;
  }
  $13 = load4($0);
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = load1($15);
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   store4($0,$18);
  }
  $19 = ((($0)) + 48|0);
  $20 = load4($19);
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = load4($23);
   store4($23,$6);
   $25 = ((($0)) + 28|0);
   store4($25,$6);
   $26 = ((($0)) + 20|0);
   store4($26,$6);
   store4($19,80);
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   store4($28,$27);
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = load4($31);
    (FUNCTION_TABLE_iiii[$32 & 31]($0,0,0)|0);
    $33 = load4($26);
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    store4($23,$24);
    store4($19,0);
    store4($28,0);
    store4($25,0);
    store4($26,0);
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = load4($0);
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  store4($0,$38);
  $39 = ($40|0)==(0);
  if (!($39)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$3484$i = 0, $$$3484705$i = 0, $$$3484706$i = 0, $$$3501$i = 0, $$$4266 = 0, $$$4502$i = 0, $$$5 = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i300 = 0, $$0$tr$i = 0, $$0228 = 0, $$0229396 = 0, $$0232 = 0, $$0235 = 0;
 var $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa460 = 0, $$0240395 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0, $$0249383 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$ = 0, $$0259 = 0, $$0262342 = 0, $$0262390 = 0, $$0269 = 0, $$0269$phi = 0, $$0321 = 0, $$045$i = i64(), $$0463$lcssa$i = 0;
 var $$0463594$i = 0, $$0464603$i = 0, $$0466$i = 0.0, $$0470$i = 0, $$0471$i = 0.0, $$0479$i = 0, $$0487652$i = 0, $$0488$i = 0, $$0488663$i = 0, $$0488665$i = 0, $$0496$$9$i = 0, $$0497664$i = 0, $$0498$i = 0, $$05$lcssa$i = 0, $$0509592$i = 0.0, $$0510$i = 0, $$0511$i = 0, $$0514647$i = 0, $$0520$i = 0, $$0522$$i = 0;
 var $$0522$i = 0, $$0524$i = 0, $$0526$i = 0, $$0528$i = 0, $$0528639$i = 0, $$0528641$i = 0, $$0531646$i = 0, $$056$i = 0, $$06$i = 0, $$06$i290 = 0, $$06$i298 = 0, $$07$i = i64(), $$1 = 0, $$1230407 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241406 = 0, $$1244394 = 0, $$1248 = 0;
 var $$1250 = 0, $$1255 = 0, $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$1322 = 0, $$1465$i = 0, $$1467$i = 0.0, $$1469$i = 0.0, $$1472$i = 0.0, $$1480$i = 0, $$1482$lcssa$i = 0, $$1482671$i = 0, $$1489651$i = 0, $$1499$lcssa$i = 0, $$1499670$i = 0, $$1508593$i = 0, $$1512$lcssa$i = 0, $$1512617$i = 0;
 var $$1515$i = 0, $$1521$i = 0, $$1525$i = 0, $$1527$i = 0, $$1529624$i = 0, $$1532$lcssa$i = 0, $$1532640$i = 0, $$1607$i = 0, $$2 = 0, $$2$i = 0, $$2234 = 0, $$2239 = 0, $$2242381 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2261 = 0, $$2271 = 0, $$2323$lcssa = 0;
 var $$2323382 = 0, $$2473$i = 0.0, $$2476$$545$i = 0, $$2476$$547$i = 0, $$2476$i = 0, $$2483$ph$i = 0, $$2490$lcssa$i = 0, $$2490632$i = 0, $$2500$i = 0, $$2513$i = 0, $$2516628$i = 0, $$2530$i = 0, $$2533627$i = 0, $$3$i = 0.0, $$3257 = 0, $$3265 = 0, $$3272 = 0, $$331 = 0, $$332 = 0, $$333 = 0;
 var $$3379 = 0, $$3477$i = 0, $$3484$lcssa$i = 0, $$3484658$i = 0, $$3501$lcssa$i = 0, $$3501657$i = 0, $$3534623$i = 0, $$4$i = 0.0, $$4258458 = 0, $$4266 = 0, $$4325 = 0, $$4478$lcssa$i = 0, $$4478600$i = 0, $$4492$i = 0, $$4502$i = 0, $$4518$i = 0, $$5 = 0, $$5$lcssa$i = 0, $$537$i = 0, $$538$$i = 0;
 var $$538$i = 0, $$541$i = 0.0, $$544$i = 0, $$546$i = 0, $$5486$lcssa$i = 0, $$5486633$i = 0, $$5493606$i = 0, $$5519$ph$i = 0, $$553$i = 0, $$554$i = 0, $$557$i = 0.0, $$5611$i = 0, $$6 = 0, $$6$i = 0, $$6268 = 0, $$6494599$i = 0, $$7 = 0, $$7495610$i = 0, $$7505$$i = 0, $$7505$i = 0;
 var $$7505$ph$i = 0, $$8$i = 0, $$9$ph$i = 0, $$lcssa683$i = 0, $$neg$i = 0, $$neg572$i = 0, $$pn$i = 0, $$pr = 0, $$pr$i = 0, $$pr571$i = 0, $$pre = 0, $$pre$i = 0, $$pre$phi704$iZ2D = 0, $$pre452 = 0, $$pre453 = 0, $$pre454 = 0, $$pre456 = i64(), $$pre457 = i64(), $$pre697$i = 0, $$pre700$i = 0;
 var $$pre703$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = i64(), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = i64(), $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = i64(), $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = i64(), $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = i64(), $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = i64(), $192 = 0, $193 = 0, $194 = i64(), $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = i64(), $20 = 0, $200 = 0, $201 = i64(), $202 = i64(), $203 = 0, $204 = 0, $205 = i64(), $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = i64(), $214 = 0, $215 = i64(), $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = i64(), $221 = 0, $222 = 0, $223 = 0, $224 = i64(), $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = i64(), $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = i64(), $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0.0, $275 = i64(), $276 = 0, $277 = 0.0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = i64(), $283 = i64(), $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $30 = 0, $300 = 0.0, $301 = 0.0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0.0;
 var $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0.0, $321 = 0.0, $322 = 0.0, $323 = 0.0, $324 = 0.0, $325 = 0.0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = i64(), $331 = 0, $332 = 0, $333 = 0, $334 = 0;
 var $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0.0, $351 = 0.0, $352 = 0.0;
 var $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0;
 var $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0.0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0.0;
 var $39 = 0, $390 = 0.0, $391 = 0.0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = i64(), $399 = 0, $40 = 0, $400 = i64(), $401 = i64(), $402 = i64(), $403 = i64(), $404 = i64(), $405 = 0, $406 = i64(), $407 = 0;
 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
 var $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0;
 var $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0.0, $503 = 0.0, $504 = 0, $505 = 0.0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
 var $570 = 0, $571 = 0, $572 = 0, $573 = i64(), $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = i64(), $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
 var $624 = i64(), $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0;
 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = i64(), $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
 var $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = i64(), $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0;
 var $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i292 = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigit5$i = 0, $isdigit5$i288 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i291 = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $isdigittmp4$i = 0, $isdigittmp4$i287 = 0, $isdigittmp7$i = 0;
 var $isdigittmp7$i289 = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0, $or$cond3$not$i = 0, $or$cond412 = 0, $or$cond540$i = 0, $or$cond543$i = 0, $or$cond552$i = 0, $or$cond6$i = 0, $scevgep694$i = 0, $scevgep694695$i = 0, $storemerge = 0, $storemerge273345 = 0, $storemerge273389 = 0, $storemerge278 = 0;
 var $sum = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
 $5 = sp + 24|0;
 $6 = sp + 16|0;
 $7 = sp + 588|0;
 $8 = sp + 576|0;
 $9 = sp;
 $10 = sp + 536|0;
 $11 = sp + 8|0;
 $12 = sp + 528|0;
 $13 = ($0|0)!=(0|0);
 $14 = ((($10)) + 40|0);
 $15 = $14;
 $16 = ((($10)) + 39|0);
 $17 = ((($11)) + 4|0);
 $18 = $7;
 $19 = (0 - ($18))|0;
 $20 = ((($8)) + 12|0);
 $21 = ((($8)) + 11|0);
 $22 = $20;
 $23 = (($22) - ($18))|0;
 $24 = (-2 - ($18))|0;
 $25 = (($22) + 2)|0;
 $26 = ((($5)) + 288|0);
 $27 = ((($7)) + 9|0);
 $28 = $27;
 $29 = ((($7)) + 8|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$$0321 = $1;
 L1: while(1) {
  $30 = ($$0247|0)>(-1);
  do {
   if ($30) {
    $31 = (2147483647 - ($$0247))|0;
    $32 = ($$0243|0)>($31|0);
    if ($32) {
     $33 = (___errno_location()|0);
     store4($33,75);
     $$1248 = -1;
     break;
    } else {
     $34 = (($$0243) + ($$0247))|0;
     $$1248 = $34;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $35 = load1($$0321);
  $36 = ($35<<24>>24)==(0);
  if ($36) {
   label = 243;
   break;
  } else {
   $$1322 = $$0321;$37 = $35;
  }
  L9: while(1) {
   switch ($37<<24>>24) {
   case 37:  {
    $$0249383 = $$1322;$$2323382 = $$1322;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $$1322;$$2323$lcssa = $$1322;
    break L9;
    break;
   }
   default: {
   }
   }
   $38 = ((($$1322)) + 1|0);
   $$pre = load1($38);
   $$1322 = $38;$37 = $$pre;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $39 = ((($$2323382)) + 1|0);
     $40 = load1($39);
     $41 = ($40<<24>>24)==(37);
     if (!($41)) {
      $$0249$lcssa = $$0249383;$$2323$lcssa = $$2323382;
      break L12;
     }
     $42 = ((($$0249383)) + 1|0);
     $43 = ((($$2323382)) + 2|0);
     $44 = load1($43);
     $45 = ($44<<24>>24)==(37);
     if ($45) {
      $$0249383 = $42;$$2323382 = $43;
      label = 9;
     } else {
      $$0249$lcssa = $42;$$2323$lcssa = $43;
      break;
     }
    }
   }
  } while(0);
  $46 = $$0249$lcssa;
  $47 = $$0321;
  $48 = (($46) - ($47))|0;
  if ($13) {
   $49 = load4($0);
   $50 = $49 & 32;
   $51 = ($50|0)==(0);
   if ($51) {
    (___fwritex($$0321,$48,$0)|0);
   }
  }
  $52 = ($48|0)==(0);
  if (!($52)) {
   $$0269$phi = $$0269;$$0243 = $48;$$0247 = $$1248;$$0321 = $$2323$lcssa;$$0269 = $$0269$phi;
   continue;
  }
  $53 = ((($$2323$lcssa)) + 1|0);
  $54 = load1($53);
  $55 = $54 << 24 >> 24;
  $isdigittmp = (($55) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $56 = ((($$2323$lcssa)) + 2|0);
   $57 = load1($56);
   $58 = ($57<<24>>24)==(36);
   $59 = ((($$2323$lcssa)) + 3|0);
   $$331 = $58 ? $59 : $53;
   $$$0269 = $58 ? 1 : $$0269;
   $isdigittmp$ = $58 ? $isdigittmp : -1;
   $$pre452 = load1($$331);
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$61 = $$pre452;$storemerge = $$331;
  } else {
   $$0253 = -1;$$1270 = $$0269;$61 = $54;$storemerge = $53;
  }
  $60 = $61 << 24 >> 24;
  $62 = (($60) + -32)|0;
  $63 = ($62>>>0)<(32);
  L25: do {
   if ($63) {
    $$0262390 = 0;$65 = $62;$69 = $61;$storemerge273389 = $storemerge;
    while(1) {
     $64 = 1 << $65;
     $66 = $64 & 75913;
     $67 = ($66|0)==(0);
     if ($67) {
      $$0262342 = $$0262390;$79 = $69;$storemerge273345 = $storemerge273389;
      break L25;
     }
     $68 = $69 << 24 >> 24;
     $70 = (($68) + -32)|0;
     $71 = 1 << $70;
     $72 = $71 | $$0262390;
     $73 = ((($storemerge273389)) + 1|0);
     $74 = load1($73);
     $75 = $74 << 24 >> 24;
     $76 = (($75) + -32)|0;
     $77 = ($76>>>0)<(32);
     if ($77) {
      $$0262390 = $72;$65 = $76;$69 = $74;$storemerge273389 = $73;
     } else {
      $$0262342 = $72;$79 = $74;$storemerge273345 = $73;
      break;
     }
    }
   } else {
    $$0262342 = 0;$79 = $61;$storemerge273345 = $storemerge;
   }
  } while(0);
  $78 = ($79<<24>>24)==(42);
  do {
   if ($78) {
    $80 = ((($storemerge273345)) + 1|0);
    $81 = load1($80);
    $82 = $81 << 24 >> 24;
    $isdigittmp276 = (($82) + -48)|0;
    $isdigit277 = ($isdigittmp276>>>0)<(10);
    if ($isdigit277) {
     $83 = ((($storemerge273345)) + 2|0);
     $84 = load1($83);
     $85 = ($84<<24>>24)==(36);
     if ($85) {
      $86 = (($4) + ($isdigittmp276<<2)|0);
      store4($86,10);
      $87 = load1($80);
      $88 = $87 << 24 >> 24;
      $89 = (($88) + -48)|0;
      $90 = (($3) + ($89<<3)|0);
      $91 = load8($90);
      $92 = i64_trunc($91);
      $93 = ((($storemerge273345)) + 3|0);
      $$0259 = $92;$$2271 = 1;$storemerge278 = $93;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $94 = ($$1270|0)==(0);
     if (!($94)) {
      $$0 = -1;
      break L1;
     }
     if (!($13)) {
      $$1260 = 0;$$1263 = $$0262342;$$3272 = 0;$$4325 = $80;$$pr = $81;
      break;
     }
     $arglist_current = load4($2);
     $95 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $96 = (($95) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $97 = $96 & $expanded6;
     $98 = $97;
     $99 = load4($98);
     $arglist_next = ((($98)) + 4|0);
     store4($2,$arglist_next);
     $$0259 = $99;$$2271 = 0;$storemerge278 = $80;
    }
    $100 = ($$0259|0)<(0);
    $101 = $$0262342 | 8192;
    $102 = (0 - ($$0259))|0;
    $$$0262 = $100 ? $101 : $$0262342;
    $$$0259 = $100 ? $102 : $$0259;
    $$pre453 = load1($storemerge278);
    $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$$4325 = $storemerge278;$$pr = $$pre453;
   } else {
    $103 = $79 << 24 >> 24;
    $isdigittmp4$i = (($103) + -48)|0;
    $isdigit5$i = ($isdigittmp4$i>>>0)<(10);
    if ($isdigit5$i) {
     $$06$i = 0;$107 = $storemerge273345;$isdigittmp7$i = $isdigittmp4$i;
     while(1) {
      $104 = ($$06$i*10)|0;
      $105 = (($104) + ($isdigittmp7$i))|0;
      $106 = ((($107)) + 1|0);
      $108 = load1($106);
      $109 = $108 << 24 >> 24;
      $isdigittmp$i = (($109) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $$06$i = $105;$107 = $106;$isdigittmp7$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $110 = ($105|0)<(0);
     if ($110) {
      $$0 = -1;
      break L1;
     } else {
      $$1260 = $105;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $106;$$pr = $108;
     }
    } else {
     $$1260 = 0;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $storemerge273345;$$pr = $79;
    }
   }
  } while(0);
  $111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($111) {
    $112 = ((($$4325)) + 1|0);
    $113 = load1($112);
    $114 = ($113<<24>>24)==(42);
    if (!($114)) {
     $135 = $113 << 24 >> 24;
     $isdigittmp4$i287 = (($135) + -48)|0;
     $isdigit5$i288 = ($isdigittmp4$i287>>>0)<(10);
     if ($isdigit5$i288) {
      $$06$i290 = 0;$139 = $112;$isdigittmp7$i289 = $isdigittmp4$i287;
     } else {
      $$0254 = 0;$$6 = $112;
      break;
     }
     while(1) {
      $136 = ($$06$i290*10)|0;
      $137 = (($136) + ($isdigittmp7$i289))|0;
      $138 = ((($139)) + 1|0);
      $140 = load1($138);
      $141 = $140 << 24 >> 24;
      $isdigittmp$i291 = (($141) + -48)|0;
      $isdigit$i292 = ($isdigittmp$i291>>>0)<(10);
      if ($isdigit$i292) {
       $$06$i290 = $137;$139 = $138;$isdigittmp7$i289 = $isdigittmp$i291;
      } else {
       $$0254 = $137;$$6 = $138;
       break L45;
      }
     }
    }
    $115 = ((($$4325)) + 2|0);
    $116 = load1($115);
    $117 = $116 << 24 >> 24;
    $isdigittmp274 = (($117) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $118 = ((($$4325)) + 3|0);
     $119 = load1($118);
     $120 = ($119<<24>>24)==(36);
     if ($120) {
      $121 = (($4) + ($isdigittmp274<<2)|0);
      store4($121,10);
      $122 = load1($115);
      $123 = $122 << 24 >> 24;
      $124 = (($123) + -48)|0;
      $125 = (($3) + ($124<<3)|0);
      $126 = load8($125);
      $127 = i64_trunc($126);
      $128 = ((($$4325)) + 4|0);
      $$0254 = $127;$$6 = $128;
      break;
     }
    }
    $129 = ($$3272|0)==(0);
    if (!($129)) {
     $$0 = -1;
     break L1;
    }
    if ($13) {
     $arglist_current2 = load4($2);
     $130 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $131 = (($130) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $132 = $131 & $expanded13;
     $133 = $132;
     $134 = load4($133);
     $arglist_next3 = ((($133)) + 4|0);
     store4($2,$arglist_next3);
     $$0254 = $134;$$6 = $115;
    } else {
     $$0254 = 0;$$6 = $115;
    }
   } else {
    $$0254 = -1;$$6 = $$4325;
   }
  } while(0);
  $$0252 = 0;$$7 = $$6;
  while(1) {
   $142 = load1($$7);
   $143 = $142 << 24 >> 24;
   $144 = (($143) + -65)|0;
   $145 = ($144>>>0)>(57);
   if ($145) {
    $$0 = -1;
    break L1;
   }
   $146 = ((($$7)) + 1|0);
   $147 = ((5316 + (($$0252*58)|0)|0) + ($144)|0);
   $148 = load1($147);
   $149 = $148&255;
   $150 = (($149) + -1)|0;
   $151 = ($150>>>0)<(8);
   if ($151) {
    $$0252 = $149;$$7 = $146;
   } else {
    break;
   }
  }
  $152 = ($148<<24>>24)==(0);
  if ($152) {
   $$0 = -1;
   break;
  }
  $153 = ($148<<24>>24)==(19);
  $154 = ($$0253|0)>(-1);
  do {
   if ($153) {
    if ($154) {
     $$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($154) {
     $155 = (($4) + ($$0253<<2)|0);
     store4($155,$149);
     $156 = (($3) + ($$0253<<3)|0);
     $157 = load8($156);
     store8($9,$157);
     label = 51;
     break;
    }
    if (!($13)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($9,$149,$2);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($13)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue;
   }
  }
  $158 = load1($$7);
  $159 = $158 << 24 >> 24;
  $160 = ($$0252|0)!=(0);
  $161 = $159 & 15;
  $162 = ($161|0)==(3);
  $or$cond280 = $160 & $162;
  $163 = $159 & -33;
  $$0235 = $or$cond280 ? $163 : $159;
  $164 = $$1263 & 8192;
  $165 = ($164|0)==(0);
  $166 = $$1263 & -65537;
  $$1263$ = $165 ? $$1263 : $166;
  L74: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $167 = load4($9);
     store4($167,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 1:  {
     $168 = load4($9);
     store4($168,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 2:  {
     $169 = i64_sext($$1248);
     $170 = load4($9);
     store8($170,$169);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 3:  {
     $171 = $$1248&65535;
     $172 = load4($9);
     store2($172,$171);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 4:  {
     $173 = $$1248&255;
     $174 = load4($9);
     store1($174,$173);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 6:  {
     $175 = load4($9);
     store4($175,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 7:  {
     $176 = i64_sext($$1248);
     $177 = load4($9);
     store8($177,$176);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $178 = ($$0254>>>0)>(8);
    $179 = $178 ? $$0254 : 8;
    $180 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $179;$$3265 = $180;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 63;
    break;
   }
   case 111:  {
    $199 = load8($9);
    $200 = i64_eq($199,i64_const(0,0));
    if ($200) {
     $$0$lcssa$i300 = $14;
    } else {
     $$045$i = $199;$$06$i298 = $14;
     while(1) {
      $201 = i64_and($$045$i,i64_const(7,0));
      $202 = i64_or($201,i64_const(48,0));
      $203 = i64_trunc($202)&255;
      $204 = ((($$06$i298)) + -1|0);
      store1($204,$203);
      $205 = i64_lshr($$045$i,i64_const(3,0));
      $206 = i64_eq($205,i64_const(0,0));
      if ($206) {
       $$0$lcssa$i300 = $204;
       break;
      } else {
       $$045$i = $205;$$06$i298 = $204;
      }
     }
    }
    $207 = $$1263$ & 8;
    $208 = ($207|0)==(0);
    if ($208) {
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 5796;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $209 = $$0$lcssa$i300;
     $210 = (($15) - ($209))|0;
     $211 = ($$0254|0)>($210|0);
     $212 = (($210) + 1)|0;
     $$0254$ = $211 ? $$0254 : $212;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 5796;$$2256 = $$0254$;$$4266 = $$1263$;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $213 = load8($9);
    $214 = i64_slt($213,i64_const(0,0));
    if ($214) {
     $215 = i64_sub(i64_const(0,0),$213);
     store8($9,$215);
     $$0232 = 1;$$0237 = 5796;$220 = $215;
     label = 75;
     break L74;
    }
    $216 = $$1263$ & 2048;
    $217 = ($216|0)==(0);
    if ($217) {
     $218 = $$1263$ & 1;
     $219 = ($218|0)==(0);
     $$ = $219 ? 5796 : (5798);
     $$0232 = $218;$$0237 = $$;$220 = $213;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (5797);$220 = $213;
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre456 = load8($9);
    $$0232 = 0;$$0237 = 5796;$220 = $$pre456;
    label = 75;
    break;
   }
   case 99:  {
    $233 = load8($9);
    $234 = i64_trunc($233)&255;
    store1($16,$234);
    $$2 = $16;$$2234 = 0;$$2239 = 5796;$$2251 = $14;$$5 = 1;$$6268 = $166;
    break;
   }
   case 109:  {
    $235 = (___errno_location()|0);
    $236 = load4($235);
    $237 = (_strerror($236)|0);
    $$1 = $237;
    label = 81;
    break;
   }
   case 115:  {
    $238 = load4($9);
    $239 = ($238|0)!=(0|0);
    $240 = $239 ? $238 : 5806;
    $$1 = $240;
    label = 81;
    break;
   }
   case 67:  {
    $247 = load8($9);
    $248 = i64_trunc($247);
    store4($11,$248);
    store4($17,0);
    store4($9,$11);
    $$4258458 = -1;$708 = $11;
    label = 85;
    break;
   }
   case 83:  {
    $$pre454 = load4($9);
    $249 = ($$0254|0)==(0);
    if ($249) {
     _pad($0,32,$$1260,0,$$1263$);
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$4258458 = $$0254;$708 = $$pre454;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $274 = loadd($9);
    store4($6,0);
    $275 = i64_bc2i($274);
    $276 = i64_slt($275,i64_const(0,0));
    if ($276) {
     $277 = -$274;
     $$0471$i = $277;$$0520$i = 1;$$0522$i = 5813;
    } else {
     $278 = $$1263$ & 2048;
     $279 = ($278|0)==(0);
     $280 = $$1263$ & 1;
     if ($279) {
      $281 = ($280|0)==(0);
      $$$i = $281 ? (5814) : (5819);
      $$0471$i = $274;$$0520$i = $280;$$0522$i = $$$i;
     } else {
      $$0471$i = $274;$$0520$i = 1;$$0522$i = (5816);
     }
    }
    $282 = i64_bc2i($$0471$i);
    $283 = i64_and($282,i64_const(0,2146435072));
    $284 = i64_ult($283,i64_const(0,2146435072));
    do {
     if ($284) {
      $300 = (+_frexpl($$0471$i,$6));
      $301 = $300 * 2.0;
      $302 = $301 != 0.0;
      if ($302) {
       $303 = load4($6);
       $304 = (($303) + -1)|0;
       store4($6,$304);
      }
      $305 = $$0235 | 32;
      $306 = ($305|0)==(97);
      if ($306) {
       $307 = $$0235 & 32;
       $308 = ($307|0)==(0);
       $309 = ((($$0522$i)) + 9|0);
       $$0522$$i = $308 ? $$0522$i : $309;
       $310 = $$0520$i | 2;
       $311 = ($$0254>>>0)>(11);
       $312 = (12 - ($$0254))|0;
       $313 = ($312|0)==(0);
       $314 = $311 | $313;
       do {
        if ($314) {
         $$1472$i = $301;
        } else {
         $$0509592$i = 8.0;$$1508593$i = $312;
         while(1) {
          $315 = (($$1508593$i) + -1)|0;
          $316 = $$0509592$i * 16.0;
          $317 = ($315|0)==(0);
          if ($317) {
           break;
          } else {
           $$0509592$i = $316;$$1508593$i = $315;
          }
         }
         $318 = load1($$0522$$i);
         $319 = ($318<<24>>24)==(45);
         if ($319) {
          $320 = -$301;
          $321 = $320 - $316;
          $322 = $316 + $321;
          $323 = -$322;
          $$1472$i = $323;
          break;
         } else {
          $324 = $301 + $316;
          $325 = $324 - $316;
          $$1472$i = $325;
          break;
         }
        }
       } while(0);
       $326 = load4($6);
       $327 = ($326|0)<(0);
       $328 = (0 - ($326))|0;
       $329 = $327 ? $328 : $326;
       $330 = i64_sext($329);
       $331 = (_fmt_u($330,$20)|0);
       $332 = ($331|0)==($20|0);
       if ($332) {
        store1($21,48);
        $$0511$i = $21;
       } else {
        $$0511$i = $331;
       }
       $333 = $326 >> 31;
       $334 = $333 & 2;
       $335 = (($334) + 43)|0;
       $336 = $335&255;
       $337 = ((($$0511$i)) + -1|0);
       store1($337,$336);
       $338 = (($$0235) + 15)|0;
       $339 = $338&255;
       $340 = ((($$0511$i)) + -2|0);
       store1($340,$339);
       $notrhs$i = ($$0254|0)<(1);
       $341 = $$1263$ & 8;
       $342 = ($341|0)==(0);
       $$0524$i = $7;$$2473$i = $$1472$i;
       while(1) {
        $343 = (~~(($$2473$i)));
        $344 = (5780 + ($343)|0);
        $345 = load1($344);
        $346 = $345&255;
        $347 = $346 | $307;
        $348 = $347&255;
        $349 = ((($$0524$i)) + 1|0);
        store1($$0524$i,$348);
        $350 = (+($343|0));
        $351 = $$2473$i - $350;
        $352 = $351 * 16.0;
        $353 = $349;
        $354 = (($353) - ($18))|0;
        $355 = ($354|0)==(1);
        do {
         if ($355) {
          $notlhs$i = $352 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $342 & $or$cond3$not$i;
          if ($or$cond$i) {
           $$1525$i = $349;
           break;
          }
          $356 = ((($$0524$i)) + 2|0);
          store1($349,46);
          $$1525$i = $356;
         } else {
          $$1525$i = $349;
         }
        } while(0);
        $357 = $352 != 0.0;
        if ($357) {
         $$0524$i = $$1525$i;$$2473$i = $352;
        } else {
         break;
        }
       }
       $358 = ($$0254|0)!=(0);
       $$pre700$i = $$1525$i;
       $359 = (($24) + ($$pre700$i))|0;
       $360 = ($359|0)<($$0254|0);
       $or$cond412 = $358 & $360;
       $361 = $340;
       $362 = (($25) + ($$0254))|0;
       $363 = (($362) - ($361))|0;
       $364 = (($23) - ($361))|0;
       $365 = (($364) + ($$pre700$i))|0;
       $$0526$i = $or$cond412 ? $363 : $365;
       $366 = (($$0526$i) + ($310))|0;
       _pad($0,32,$$1260,$366,$$1263$);
       $367 = load4($0);
       $368 = $367 & 32;
       $369 = ($368|0)==(0);
       if ($369) {
        (___fwritex($$0522$$i,$310,$0)|0);
       }
       $370 = $$1263$ ^ 65536;
       _pad($0,48,$$1260,$366,$370);
       $371 = (($$pre700$i) - ($18))|0;
       $372 = load4($0);
       $373 = $372 & 32;
       $374 = ($373|0)==(0);
       if ($374) {
        (___fwritex($7,$371,$0)|0);
       }
       $375 = (($22) - ($361))|0;
       $sum = (($371) + ($375))|0;
       $376 = (($$0526$i) - ($sum))|0;
       _pad($0,48,$376,0,0);
       $377 = load4($0);
       $378 = $377 & 32;
       $379 = ($378|0)==(0);
       if ($379) {
        (___fwritex($340,$375,$0)|0);
       }
       $380 = $$1263$ ^ 8192;
       _pad($0,32,$$1260,$366,$380);
       $381 = ($366|0)<($$1260|0);
       $$537$i = $381 ? $$1260 : $366;
       $$0470$i = $$537$i;
       break;
      }
      $382 = ($$0254|0)<(0);
      $$538$i = $382 ? 6 : $$0254;
      if ($302) {
       $383 = $301 * 268435456.0;
       $384 = load4($6);
       $385 = (($384) + -28)|0;
       store4($6,$385);
       $$3$i = $383;$$pr$i = $385;
      } else {
       $$pre697$i = load4($6);
       $$3$i = $301;$$pr$i = $$pre697$i;
      }
      $386 = ($$pr$i|0)<(0);
      $$554$i = $386 ? $5 : $26;
      $$0498$i = $$554$i;$$4$i = $$3$i;
      while(1) {
       $387 = (~~(($$4$i))>>>0);
       store4($$0498$i,$387);
       $388 = ((($$0498$i)) + 4|0);
       $389 = (+($387>>>0));
       $390 = $$4$i - $389;
       $391 = $390 * 1.0E+9;
       $392 = $391 != 0.0;
       if ($392) {
        $$0498$i = $388;$$4$i = $391;
       } else {
        break;
       }
      }
      $393 = ($$pr$i|0)>(0);
      if ($393) {
       $$1482671$i = $$554$i;$$1499670$i = $388;$395 = $$pr$i;
       while(1) {
        $394 = ($395|0)>(29);
        $396 = $394 ? 29 : $395;
        $$0488663$i = ((($$1499670$i)) + -4|0);
        $397 = ($$0488663$i>>>0)<($$1482671$i>>>0);
        do {
         if ($397) {
          $$2483$ph$i = $$1482671$i;
         } else {
          $398 = i64_zext($396>>>0);
          $$0488665$i = $$0488663$i;$$0497664$i = 0;
          while(1) {
           $399 = load4($$0488665$i);
           $400 = i64_zext($399>>>0);
           $401 = i64_shl($400,$398);
           $402 = i64_zext($$0497664$i>>>0);
           $403 = i64_add($401,$402);
           $404 = i64_urem($403,i64_const(1000000000,0));
           $405 = i64_trunc($404);
           store4($$0488665$i,$405);
           $406 = i64_udiv($403,i64_const(1000000000,0));
           $407 = i64_trunc($406);
           $$0488$i = ((($$0488665$i)) + -4|0);
           $408 = ($$0488$i>>>0)<($$1482671$i>>>0);
           if ($408) {
            break;
           } else {
            $$0488665$i = $$0488$i;$$0497664$i = $407;
           }
          }
          $409 = ($407|0)==(0);
          if ($409) {
           $$2483$ph$i = $$1482671$i;
           break;
          }
          $410 = ((($$1482671$i)) + -4|0);
          store4($410,$407);
          $$2483$ph$i = $410;
         }
        } while(0);
        $$2500$i = $$1499670$i;
        while(1) {
         $411 = ($$2500$i>>>0)>($$2483$ph$i>>>0);
         if (!($411)) {
          break;
         }
         $412 = ((($$2500$i)) + -4|0);
         $413 = load4($412);
         $414 = ($413|0)==(0);
         if ($414) {
          $$2500$i = $412;
         } else {
          break;
         }
        }
        $415 = load4($6);
        $416 = (($415) - ($396))|0;
        store4($6,$416);
        $417 = ($416|0)>(0);
        if ($417) {
         $$1482671$i = $$2483$ph$i;$$1499670$i = $$2500$i;$395 = $416;
        } else {
         $$1482$lcssa$i = $$2483$ph$i;$$1499$lcssa$i = $$2500$i;$$pr571$i = $416;
         break;
        }
       }
      } else {
       $$1482$lcssa$i = $$554$i;$$1499$lcssa$i = $388;$$pr571$i = $$pr$i;
      }
      $418 = ($$pr571$i|0)<(0);
      if ($418) {
       $419 = (($$538$i) + 25)|0;
       $420 = (($419|0) / 9)&-1;
       $421 = (($420) + 1)|0;
       $422 = ($305|0)==(102);
       $$3484658$i = $$1482$lcssa$i;$$3501657$i = $$1499$lcssa$i;$424 = $$pr571$i;
       while(1) {
        $423 = (0 - ($424))|0;
        $425 = ($423|0)>(9);
        $426 = $425 ? 9 : $423;
        $427 = ($$3484658$i>>>0)<($$3501657$i>>>0);
        do {
         if ($427) {
          $431 = 1 << $426;
          $432 = (($431) + -1)|0;
          $433 = 1000000000 >>> $426;
          $$0487652$i = 0;$$1489651$i = $$3484658$i;
          while(1) {
           $434 = load4($$1489651$i);
           $435 = $434 & $432;
           $436 = $434 >>> $426;
           $437 = (($436) + ($$0487652$i))|0;
           store4($$1489651$i,$437);
           $438 = Math_imul($435, $433)|0;
           $439 = ((($$1489651$i)) + 4|0);
           $440 = ($439>>>0)<($$3501657$i>>>0);
           if ($440) {
            $$0487652$i = $438;$$1489651$i = $439;
           } else {
            break;
           }
          }
          $441 = load4($$3484658$i);
          $442 = ($441|0)==(0);
          $443 = ((($$3484658$i)) + 4|0);
          $$$3484$i = $442 ? $443 : $$3484658$i;
          $444 = ($438|0)==(0);
          if ($444) {
           $$$3484706$i = $$$3484$i;$$4502$i = $$3501657$i;
           break;
          }
          $445 = ((($$3501657$i)) + 4|0);
          store4($$3501657$i,$438);
          $$$3484706$i = $$$3484$i;$$4502$i = $445;
         } else {
          $428 = load4($$3484658$i);
          $429 = ($428|0)==(0);
          $430 = ((($$3484658$i)) + 4|0);
          $$$3484705$i = $429 ? $430 : $$3484658$i;
          $$$3484706$i = $$$3484705$i;$$4502$i = $$3501657$i;
         }
        } while(0);
        $446 = $422 ? $$554$i : $$$3484706$i;
        $447 = $$4502$i;
        $448 = $446;
        $449 = (($447) - ($448))|0;
        $450 = $449 >> 2;
        $451 = ($450|0)>($421|0);
        $452 = (($446) + ($421<<2)|0);
        $$$4502$i = $451 ? $452 : $$4502$i;
        $453 = load4($6);
        $454 = (($453) + ($426))|0;
        store4($6,$454);
        $455 = ($454|0)<(0);
        if ($455) {
         $$3484658$i = $$$3484706$i;$$3501657$i = $$$4502$i;$424 = $454;
        } else {
         $$3484$lcssa$i = $$$3484706$i;$$3501$lcssa$i = $$$4502$i;
         break;
        }
       }
      } else {
       $$3484$lcssa$i = $$1482$lcssa$i;$$3501$lcssa$i = $$1499$lcssa$i;
      }
      $456 = ($$3484$lcssa$i>>>0)<($$3501$lcssa$i>>>0);
      $457 = $$554$i;
      do {
       if ($456) {
        $458 = $$3484$lcssa$i;
        $459 = (($457) - ($458))|0;
        $460 = $459 >> 2;
        $461 = ($460*9)|0;
        $462 = load4($$3484$lcssa$i);
        $463 = ($462>>>0)<(10);
        if ($463) {
         $$1515$i = $461;
         break;
        } else {
         $$0514647$i = $461;$$0531646$i = 10;
        }
        while(1) {
         $464 = ($$0531646$i*10)|0;
         $465 = (($$0514647$i) + 1)|0;
         $466 = ($462>>>0)<($464>>>0);
         if ($466) {
          $$1515$i = $465;
          break;
         } else {
          $$0514647$i = $465;$$0531646$i = $464;
         }
        }
       } else {
        $$1515$i = 0;
       }
      } while(0);
      $467 = ($305|0)!=(102);
      $468 = $467 ? $$1515$i : 0;
      $469 = (($$538$i) - ($468))|0;
      $470 = ($305|0)==(103);
      $471 = ($$538$i|0)!=(0);
      $472 = $471 & $470;
      $$neg$i = $472 << 31 >> 31;
      $473 = (($469) + ($$neg$i))|0;
      $474 = $$3501$lcssa$i;
      $475 = (($474) - ($457))|0;
      $476 = $475 >> 2;
      $477 = ($476*9)|0;
      $478 = (($477) + -9)|0;
      $479 = ($473|0)<($478|0);
      if ($479) {
       $480 = ((($$554$i)) + 4|0);
       $481 = (($473) + 9216)|0;
       $482 = (($481|0) / 9)&-1;
       $483 = (($482) + -1024)|0;
       $484 = (($480) + ($483<<2)|0);
       $485 = (($481|0) % 9)&-1;
       $$0528639$i = (($485) + 1)|0;
       $486 = ($$0528639$i|0)<(9);
       if ($486) {
        $$0528641$i = $$0528639$i;$$1532640$i = 10;
        while(1) {
         $487 = ($$1532640$i*10)|0;
         $$0528$i = (($$0528641$i) + 1)|0;
         $exitcond$i = ($$0528$i|0)==(9);
         if ($exitcond$i) {
          $$1532$lcssa$i = $487;
          break;
         } else {
          $$0528641$i = $$0528$i;$$1532640$i = $487;
         }
        }
       } else {
        $$1532$lcssa$i = 10;
       }
       $488 = load4($484);
       $489 = (($488>>>0) % ($$1532$lcssa$i>>>0))&-1;
       $490 = ($489|0)==(0);
       $491 = ((($484)) + 4|0);
       $492 = ($491|0)==($$3501$lcssa$i|0);
       $or$cond540$i = $492 & $490;
       do {
        if ($or$cond540$i) {
         $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
        } else {
         $493 = (($488>>>0) / ($$1532$lcssa$i>>>0))&-1;
         $494 = $493 & 1;
         $495 = ($494|0)==(0);
         $$541$i = $495 ? 9007199254740992.0 : 9007199254740994.0;
         $496 = (($$1532$lcssa$i|0) / 2)&-1;
         $497 = ($489>>>0)<($496>>>0);
         if ($497) {
          $$0466$i = 0.5;
         } else {
          $498 = ($489|0)==($496|0);
          $or$cond543$i = $492 & $498;
          $$557$i = $or$cond543$i ? 1.0 : 1.5;
          $$0466$i = $$557$i;
         }
         $499 = ($$0520$i|0)==(0);
         do {
          if ($499) {
           $$1467$i = $$0466$i;$$1469$i = $$541$i;
          } else {
           $500 = load1($$0522$i);
           $501 = ($500<<24>>24)==(45);
           if (!($501)) {
            $$1467$i = $$0466$i;$$1469$i = $$541$i;
            break;
           }
           $502 = -$$541$i;
           $503 = -$$0466$i;
           $$1467$i = $503;$$1469$i = $502;
          }
         } while(0);
         $504 = (($488) - ($489))|0;
         store4($484,$504);
         $505 = $$1469$i + $$1467$i;
         $506 = $505 != $$1469$i;
         if (!($506)) {
          $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
          break;
         }
         $507 = (($504) + ($$1532$lcssa$i))|0;
         store4($484,$507);
         $508 = ($507>>>0)>(999999999);
         if ($508) {
          $$2490632$i = $484;$$5486633$i = $$3484$lcssa$i;
          while(1) {
           $509 = ((($$2490632$i)) + -4|0);
           store4($$2490632$i,0);
           $510 = ($509>>>0)<($$5486633$i>>>0);
           if ($510) {
            $511 = ((($$5486633$i)) + -4|0);
            store4($511,0);
            $$6$i = $511;
           } else {
            $$6$i = $$5486633$i;
           }
           $512 = load4($509);
           $513 = (($512) + 1)|0;
           store4($509,$513);
           $514 = ($513>>>0)>(999999999);
           if ($514) {
            $$2490632$i = $509;$$5486633$i = $$6$i;
           } else {
            $$2490$lcssa$i = $509;$$5486$lcssa$i = $$6$i;
            break;
           }
          }
         } else {
          $$2490$lcssa$i = $484;$$5486$lcssa$i = $$3484$lcssa$i;
         }
         $515 = $$5486$lcssa$i;
         $516 = (($457) - ($515))|0;
         $517 = $516 >> 2;
         $518 = ($517*9)|0;
         $519 = load4($$5486$lcssa$i);
         $520 = ($519>>>0)<(10);
         if ($520) {
          $$4492$i = $$2490$lcssa$i;$$4518$i = $518;$$8$i = $$5486$lcssa$i;
          break;
         } else {
          $$2516628$i = $518;$$2533627$i = 10;
         }
         while(1) {
          $521 = ($$2533627$i*10)|0;
          $522 = (($$2516628$i) + 1)|0;
          $523 = ($519>>>0)<($521>>>0);
          if ($523) {
           $$4492$i = $$2490$lcssa$i;$$4518$i = $522;$$8$i = $$5486$lcssa$i;
           break;
          } else {
           $$2516628$i = $522;$$2533627$i = $521;
          }
         }
        }
       } while(0);
       $524 = ((($$4492$i)) + 4|0);
       $525 = ($$3501$lcssa$i>>>0)>($524>>>0);
       $$$3501$i = $525 ? $524 : $$3501$lcssa$i;
       $$5519$ph$i = $$4518$i;$$7505$ph$i = $$$3501$i;$$9$ph$i = $$8$i;
      } else {
       $$5519$ph$i = $$1515$i;$$7505$ph$i = $$3501$lcssa$i;$$9$ph$i = $$3484$lcssa$i;
      }
      $526 = (0 - ($$5519$ph$i))|0;
      $$7505$i = $$7505$ph$i;
      while(1) {
       $527 = ($$7505$i>>>0)>($$9$ph$i>>>0);
       if (!($527)) {
        $$lcssa683$i = 0;
        break;
       }
       $528 = ((($$7505$i)) + -4|0);
       $529 = load4($528);
       $530 = ($529|0)==(0);
       if ($530) {
        $$7505$i = $528;
       } else {
        $$lcssa683$i = 1;
        break;
       }
      }
      do {
       if ($470) {
        $531 = $471&1;
        $532 = $531 ^ 1;
        $$538$$i = (($532) + ($$538$i))|0;
        $533 = ($$538$$i|0)>($$5519$ph$i|0);
        $534 = ($$5519$ph$i|0)>(-5);
        $or$cond6$i = $533 & $534;
        if ($or$cond6$i) {
         $535 = (($$0235) + -1)|0;
         $$neg572$i = (($$538$$i) + -1)|0;
         $536 = (($$neg572$i) - ($$5519$ph$i))|0;
         $$0479$i = $535;$$2476$i = $536;
        } else {
         $537 = (($$0235) + -2)|0;
         $538 = (($$538$$i) + -1)|0;
         $$0479$i = $537;$$2476$i = $538;
        }
        $539 = $$1263$ & 8;
        $540 = ($539|0)==(0);
        if (!($540)) {
         $$1480$i = $$0479$i;$$3477$i = $$2476$i;$$pre$phi704$iZ2D = $539;
         break;
        }
        do {
         if ($$lcssa683$i) {
          $541 = ((($$7505$i)) + -4|0);
          $542 = load4($541);
          $543 = ($542|0)==(0);
          if ($543) {
           $$2530$i = 9;
           break;
          }
          $544 = (($542>>>0) % 10)&-1;
          $545 = ($544|0)==(0);
          if ($545) {
           $$1529624$i = 0;$$3534623$i = 10;
          } else {
           $$2530$i = 0;
           break;
          }
          while(1) {
           $546 = ($$3534623$i*10)|0;
           $547 = (($$1529624$i) + 1)|0;
           $548 = (($542>>>0) % ($546>>>0))&-1;
           $549 = ($548|0)==(0);
           if ($549) {
            $$1529624$i = $547;$$3534623$i = $546;
           } else {
            $$2530$i = $547;
            break;
           }
          }
         } else {
          $$2530$i = 9;
         }
        } while(0);
        $550 = $$0479$i | 32;
        $551 = ($550|0)==(102);
        $552 = $$7505$i;
        $553 = (($552) - ($457))|0;
        $554 = $553 >> 2;
        $555 = ($554*9)|0;
        $556 = (($555) + -9)|0;
        if ($551) {
         $557 = (($556) - ($$2530$i))|0;
         $558 = ($557|0)<(0);
         $$544$i = $558 ? 0 : $557;
         $559 = ($$2476$i|0)<($$544$i|0);
         $$2476$$545$i = $559 ? $$2476$i : $$544$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$545$i;$$pre$phi704$iZ2D = 0;
         break;
        } else {
         $560 = (($556) + ($$5519$ph$i))|0;
         $561 = (($560) - ($$2530$i))|0;
         $562 = ($561|0)<(0);
         $$546$i = $562 ? 0 : $561;
         $563 = ($$2476$i|0)<($$546$i|0);
         $$2476$$547$i = $563 ? $$2476$i : $$546$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$547$i;$$pre$phi704$iZ2D = 0;
         break;
        }
       } else {
        $$pre703$i = $$1263$ & 8;
        $$1480$i = $$0235;$$3477$i = $$538$i;$$pre$phi704$iZ2D = $$pre703$i;
       }
      } while(0);
      $564 = $$3477$i | $$pre$phi704$iZ2D;
      $565 = ($564|0)!=(0);
      $566 = $565&1;
      $567 = $$1480$i | 32;
      $568 = ($567|0)==(102);
      if ($568) {
       $569 = ($$5519$ph$i|0)>(0);
       $570 = $569 ? $$5519$ph$i : 0;
       $$2513$i = 0;$$pn$i = $570;
      } else {
       $571 = ($$5519$ph$i|0)<(0);
       $572 = $571 ? $526 : $$5519$ph$i;
       $573 = i64_sext($572);
       $574 = (_fmt_u($573,$20)|0);
       $575 = $574;
       $576 = (($22) - ($575))|0;
       $577 = ($576|0)<(2);
       if ($577) {
        $$1512617$i = $574;
        while(1) {
         $578 = ((($$1512617$i)) + -1|0);
         store1($578,48);
         $579 = $578;
         $580 = (($22) - ($579))|0;
         $581 = ($580|0)<(2);
         if ($581) {
          $$1512617$i = $578;
         } else {
          $$1512$lcssa$i = $578;
          break;
         }
        }
       } else {
        $$1512$lcssa$i = $574;
       }
       $582 = $$5519$ph$i >> 31;
       $583 = $582 & 2;
       $584 = (($583) + 43)|0;
       $585 = $584&255;
       $586 = ((($$1512$lcssa$i)) + -1|0);
       store1($586,$585);
       $587 = $$1480$i&255;
       $588 = ((($$1512$lcssa$i)) + -2|0);
       store1($588,$587);
       $589 = $588;
       $590 = (($22) - ($589))|0;
       $$2513$i = $588;$$pn$i = $590;
      }
      $591 = (($$0520$i) + 1)|0;
      $592 = (($591) + ($$3477$i))|0;
      $$1527$i = (($592) + ($566))|0;
      $593 = (($$1527$i) + ($$pn$i))|0;
      _pad($0,32,$$1260,$593,$$1263$);
      $594 = load4($0);
      $595 = $594 & 32;
      $596 = ($595|0)==(0);
      if ($596) {
       (___fwritex($$0522$i,$$0520$i,$0)|0);
      }
      $597 = $$1263$ ^ 65536;
      _pad($0,48,$$1260,$593,$597);
      do {
       if ($568) {
        $598 = ($$9$ph$i>>>0)>($$554$i>>>0);
        $$0496$$9$i = $598 ? $$554$i : $$9$ph$i;
        $$5493606$i = $$0496$$9$i;
        while(1) {
         $599 = load4($$5493606$i);
         $600 = i64_zext($599>>>0);
         $601 = (_fmt_u($600,$27)|0);
         $602 = ($$5493606$i|0)==($$0496$$9$i|0);
         do {
          if ($602) {
           $608 = ($601|0)==($27|0);
           if (!($608)) {
            $$1465$i = $601;
            break;
           }
           store1($29,48);
           $$1465$i = $29;
          } else {
           $603 = ($601>>>0)>($7>>>0);
           if (!($603)) {
            $$1465$i = $601;
            break;
           }
           $604 = $601;
           $605 = (($604) - ($18))|0;
           _memset(($7|0),48,($605|0))|0;
           $$0464603$i = $601;
           while(1) {
            $606 = ((($$0464603$i)) + -1|0);
            $607 = ($606>>>0)>($7>>>0);
            if ($607) {
             $$0464603$i = $606;
            } else {
             $$1465$i = $606;
             break;
            }
           }
          }
         } while(0);
         $609 = load4($0);
         $610 = $609 & 32;
         $611 = ($610|0)==(0);
         if ($611) {
          $612 = $$1465$i;
          $613 = (($28) - ($612))|0;
          (___fwritex($$1465$i,$613,$0)|0);
         }
         $614 = ((($$5493606$i)) + 4|0);
         $615 = ($614>>>0)>($$554$i>>>0);
         if ($615) {
          break;
         } else {
          $$5493606$i = $614;
         }
        }
        $616 = ($564|0)==(0);
        do {
         if (!($616)) {
          $617 = load4($0);
          $618 = $617 & 32;
          $619 = ($618|0)==(0);
          if (!($619)) {
           break;
          }
          (___fwritex(5848,1,$0)|0);
         }
        } while(0);
        $620 = ($614>>>0)<($$7505$i>>>0);
        $621 = ($$3477$i|0)>(0);
        $622 = $621 & $620;
        if ($622) {
         $$4478600$i = $$3477$i;$$6494599$i = $614;
         while(1) {
          $623 = load4($$6494599$i);
          $624 = i64_zext($623>>>0);
          $625 = (_fmt_u($624,$27)|0);
          $626 = ($625>>>0)>($7>>>0);
          if ($626) {
           $627 = $625;
           $628 = (($627) - ($18))|0;
           _memset(($7|0),48,($628|0))|0;
           $$0463594$i = $625;
           while(1) {
            $629 = ((($$0463594$i)) + -1|0);
            $630 = ($629>>>0)>($7>>>0);
            if ($630) {
             $$0463594$i = $629;
            } else {
             $$0463$lcssa$i = $629;
             break;
            }
           }
          } else {
           $$0463$lcssa$i = $625;
          }
          $631 = load4($0);
          $632 = $631 & 32;
          $633 = ($632|0)==(0);
          if ($633) {
           $634 = ($$4478600$i|0)>(9);
           $635 = $634 ? 9 : $$4478600$i;
           (___fwritex($$0463$lcssa$i,$635,$0)|0);
          }
          $636 = ((($$6494599$i)) + 4|0);
          $637 = (($$4478600$i) + -9)|0;
          $638 = ($636>>>0)<($$7505$i>>>0);
          $639 = ($$4478600$i|0)>(9);
          $640 = $639 & $638;
          if ($640) {
           $$4478600$i = $637;$$6494599$i = $636;
          } else {
           $$4478$lcssa$i = $637;
           break;
          }
         }
        } else {
         $$4478$lcssa$i = $$3477$i;
        }
        $641 = (($$4478$lcssa$i) + 9)|0;
        _pad($0,48,$641,9,0);
       } else {
        $642 = ((($$9$ph$i)) + 4|0);
        $$7505$$i = $$lcssa683$i ? $$7505$i : $642;
        $643 = ($$3477$i|0)>(-1);
        if ($643) {
         $644 = ($$pre$phi704$iZ2D|0)==(0);
         $$5611$i = $$3477$i;$$7495610$i = $$9$ph$i;
         while(1) {
          $645 = load4($$7495610$i);
          $646 = i64_zext($645>>>0);
          $647 = (_fmt_u($646,$27)|0);
          $648 = ($647|0)==($27|0);
          if ($648) {
           store1($29,48);
           $$0$i = $29;
          } else {
           $$0$i = $647;
          }
          $649 = ($$7495610$i|0)==($$9$ph$i|0);
          do {
           if ($649) {
            $653 = ((($$0$i)) + 1|0);
            $654 = load4($0);
            $655 = $654 & 32;
            $656 = ($655|0)==(0);
            if ($656) {
             (___fwritex($$0$i,1,$0)|0);
            }
            $657 = ($$5611$i|0)<(1);
            $or$cond552$i = $644 & $657;
            if ($or$cond552$i) {
             $$2$i = $653;
             break;
            }
            $658 = load4($0);
            $659 = $658 & 32;
            $660 = ($659|0)==(0);
            if (!($660)) {
             $$2$i = $653;
             break;
            }
            (___fwritex(5848,1,$0)|0);
            $$2$i = $653;
           } else {
            $650 = ($$0$i>>>0)>($7>>>0);
            if (!($650)) {
             $$2$i = $$0$i;
             break;
            }
            $scevgep694$i = (($$0$i) + ($19)|0);
            $scevgep694695$i = $scevgep694$i;
            _memset(($7|0),48,($scevgep694695$i|0))|0;
            $$1607$i = $$0$i;
            while(1) {
             $651 = ((($$1607$i)) + -1|0);
             $652 = ($651>>>0)>($7>>>0);
             if ($652) {
              $$1607$i = $651;
             } else {
              $$2$i = $651;
              break;
             }
            }
           }
          } while(0);
          $661 = $$2$i;
          $662 = (($28) - ($661))|0;
          $663 = load4($0);
          $664 = $663 & 32;
          $665 = ($664|0)==(0);
          if ($665) {
           $666 = ($$5611$i|0)>($662|0);
           $667 = $666 ? $662 : $$5611$i;
           (___fwritex($$2$i,$667,$0)|0);
          }
          $668 = (($$5611$i) - ($662))|0;
          $669 = ((($$7495610$i)) + 4|0);
          $670 = ($669>>>0)<($$7505$$i>>>0);
          $671 = ($668|0)>(-1);
          $672 = $670 & $671;
          if ($672) {
           $$5611$i = $668;$$7495610$i = $669;
          } else {
           $$5$lcssa$i = $668;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$3477$i;
        }
        $673 = (($$5$lcssa$i) + 18)|0;
        _pad($0,48,$673,18,0);
        $674 = load4($0);
        $675 = $674 & 32;
        $676 = ($675|0)==(0);
        if (!($676)) {
         break;
        }
        $677 = $$2513$i;
        $678 = (($22) - ($677))|0;
        (___fwritex($$2513$i,$678,$0)|0);
       }
      } while(0);
      $679 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$593,$679);
      $680 = ($593|0)<($$1260|0);
      $$553$i = $680 ? $$1260 : $593;
      $$0470$i = $$553$i;
     } else {
      $285 = $$0235 & 32;
      $286 = ($285|0)!=(0);
      $287 = $286 ? 5832 : 5836;
      $288 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $289 = $286 ? 5840 : 5844;
      $$1521$i = $288 ? 0 : $$0520$i;
      $$0510$i = $288 ? $289 : $287;
      $290 = (($$1521$i) + 3)|0;
      _pad($0,32,$$1260,$290,$166);
      $291 = load4($0);
      $292 = $291 & 32;
      $293 = ($292|0)==(0);
      if ($293) {
       (___fwritex($$0522$i,$$1521$i,$0)|0);
       $$pre$i = load4($0);
       $295 = $$pre$i;
      } else {
       $295 = $291;
      }
      $294 = $295 & 32;
      $296 = ($294|0)==(0);
      if ($296) {
       (___fwritex($$0510$i,3,$0)|0);
      }
      $297 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$290,$297);
      $298 = ($290|0)<($$1260|0);
      $299 = $298 ? $$1260 : $290;
      $$0470$i = $299;
     }
    } while(0);
    $$0243 = $$0470$i;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue L1;
    break;
   }
   default: {
    $$2 = $$0321;$$2234 = 0;$$2239 = 5796;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $181 = load8($9);
    $182 = $$1236 & 32;
    $183 = i64_eq($181,i64_const(0,0));
    if ($183) {
     $$05$lcssa$i = $14;$194 = i64_const(0,0);
    } else {
     $$056$i = $14;$$07$i = $181;
     while(1) {
      $$0$tr$i = i64_trunc($$07$i);
      $184 = $$0$tr$i & 15;
      $185 = (5780 + ($184)|0);
      $186 = load1($185);
      $187 = $186&255;
      $188 = $187 | $182;
      $189 = $188&255;
      $190 = ((($$056$i)) + -1|0);
      store1($190,$189);
      $191 = i64_lshr($$07$i,i64_const(4,0));
      $192 = i64_eq($191,i64_const(0,0));
      if ($192) {
       break;
      } else {
       $$056$i = $190;$$07$i = $191;
      }
     }
     $$pre457 = load8($9);
     $$05$lcssa$i = $190;$194 = $$pre457;
    }
    $193 = i64_eq($194,i64_const(0,0));
    $195 = $$3265 & 8;
    $196 = ($195|0)==(0);
    $or$cond282 = $196 | $193;
    $197 = $$1236 >> 4;
    $198 = (5796 + ($197)|0);
    $$332 = $or$cond282 ? 5796 : $198;
    $$333 = $or$cond282 ? 0 : 2;
    $$0228 = $$05$lcssa$i;$$1233 = $$333;$$1238 = $$332;$$2256 = $$1255;$$4266 = $$3265;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $221 = (_fmt_u($220,$14)|0);
    $$0228 = $221;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $241 = (_memchr($$1,0,$$0254)|0);
    $242 = ($241|0)==(0|0);
    $243 = $241;
    $244 = $$1;
    $245 = (($243) - ($244))|0;
    $246 = (($$1) + ($$0254)|0);
    $$3257 = $242 ? $$0254 : $245;
    $$1250 = $242 ? $246 : $241;
    $$2 = $$1;$$2234 = 0;$$2239 = 5796;$$2251 = $$1250;$$5 = $$3257;$$6268 = $166;
   }
   else if ((label|0) == 85) {
    label = 0;
    $$0229396 = $708;$$0240395 = 0;$$1244394 = 0;
    while(1) {
     $250 = load4($$0229396);
     $251 = ($250|0)==(0);
     if ($251) {
      $$0240$lcssa = $$0240395;$$2245 = $$1244394;
      break;
     }
     $252 = (_wctomb($12,$250)|0);
     $253 = ($252|0)<(0);
     $254 = (($$4258458) - ($$0240395))|0;
     $255 = ($252>>>0)>($254>>>0);
     $or$cond285 = $253 | $255;
     if ($or$cond285) {
      $$0240$lcssa = $$0240395;$$2245 = $252;
      break;
     }
     $256 = ((($$0229396)) + 4|0);
     $257 = (($252) + ($$0240395))|0;
     $258 = ($$4258458>>>0)>($257>>>0);
     if ($258) {
      $$0229396 = $256;$$0240395 = $257;$$1244394 = $252;
     } else {
      $$0240$lcssa = $257;$$2245 = $252;
      break;
     }
    }
    $259 = ($$2245|0)<(0);
    if ($259) {
     $$0 = -1;
     break L1;
    }
    _pad($0,32,$$1260,$$0240$lcssa,$$1263$);
    $260 = ($$0240$lcssa|0)==(0);
    if ($260) {
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$1230407 = $708;$$1241406 = 0;
     while(1) {
      $261 = load4($$1230407);
      $262 = ($261|0)==(0);
      if ($262) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $263 = ((($$1230407)) + 4|0);
      $264 = (_wctomb($12,$261)|0);
      $265 = (($264) + ($$1241406))|0;
      $266 = ($265|0)>($$0240$lcssa|0);
      if ($266) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $267 = load4($0);
      $268 = $267 & 32;
      $269 = ($268|0)==(0);
      if ($269) {
       (___fwritex($12,$264,$0)|0);
      }
      $270 = ($265>>>0)<($$0240$lcssa>>>0);
      if ($270) {
       $$1230407 = $263;$$1241406 = $265;
      } else {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $271 = $$1263$ ^ 8192;
   _pad($0,32,$$1260,$$0240$lcssa460,$271);
   $272 = ($$1260|0)>($$0240$lcssa460|0);
   $273 = $272 ? $$1260 : $$0240$lcssa460;
   $$0243 = $273;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $222 = ($$2256|0)>(-1);
   $223 = $$4266 & -65537;
   $$$4266 = $222 ? $223 : $$4266;
   $224 = load8($9);
   $225 = i64_ne($224,i64_const(0,0));
   $226 = ($$2256|0)!=(0);
   $or$cond = $226 | $225;
   if ($or$cond) {
    $227 = $$0228;
    $228 = (($15) - ($227))|0;
    $229 = $225&1;
    $230 = $229 ^ 1;
    $231 = (($230) + ($228))|0;
    $232 = ($$2256|0)>($231|0);
    $$2256$ = $232 ? $$2256 : $231;
    $$2 = $$0228;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = $$2256$;$$6268 = $$$4266;
   } else {
    $$2 = $14;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = 0;$$6268 = $$$4266;
   }
  }
  $681 = $$2251;
  $682 = $$2;
  $683 = (($681) - ($682))|0;
  $684 = ($$5|0)<($683|0);
  $$$5 = $684 ? $683 : $$5;
  $685 = (($$$5) + ($$2234))|0;
  $686 = ($$1260|0)<($685|0);
  $$2261 = $686 ? $685 : $$1260;
  _pad($0,32,$$2261,$685,$$6268);
  $687 = load4($0);
  $688 = $687 & 32;
  $689 = ($688|0)==(0);
  if ($689) {
   (___fwritex($$2239,$$2234,$0)|0);
  }
  $690 = $$6268 ^ 65536;
  _pad($0,48,$$2261,$685,$690);
  _pad($0,48,$$$5,$683,0);
  $691 = load4($0);
  $692 = $691 & 32;
  $693 = ($692|0)==(0);
  if ($693) {
   (___fwritex($$2,$683,$0)|0);
  }
  $694 = $$6268 ^ 8192;
  _pad($0,32,$$2261,$685,$694);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
 }
 L345: do {
  if ((label|0) == 243) {
   $695 = ($0|0)==(0|0);
   if ($695) {
    $696 = ($$0269|0)==(0);
    if ($696) {
     $$0 = 0;
    } else {
     $$2242381 = 1;
     while(1) {
      $697 = (($4) + ($$2242381<<2)|0);
      $698 = load4($697);
      $699 = ($698|0)==(0);
      if ($699) {
       $$3379 = $$2242381;
       break;
      }
      $700 = (($3) + ($$2242381<<3)|0);
      _pop_arg($700,$698,$2);
      $701 = (($$2242381) + 1)|0;
      $702 = ($701|0)<(10);
      if ($702) {
       $$2242381 = $701;
      } else {
       $$0 = 1;
       break L345;
      }
     }
     while(1) {
      $705 = (($4) + ($$3379<<2)|0);
      $706 = load4($705);
      $707 = ($706|0)==(0);
      $704 = (($$3379) + 1)|0;
      if (!($707)) {
       $$0 = -1;
       break L345;
      }
      $703 = ($704|0)<(10);
      if ($703) {
       $$3379 = $704;
      } else {
       $$0 = 1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$032 = 0, $$033 = 0, $$034 = 0, $$1 = 0, $$pre = 0, $$pre38 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($3);
   $12 = $$pre;
   label = 5;
  } else {
   $$032 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = load4($9);
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = load4($15);
    $17 = (FUNCTION_TABLE_iiii[$16 & 31]($2,$0,$1)|0);
    $$032 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = load1($18);
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$0 = $1;
     while(1) {
      $21 = ($$0|0)==(0);
      if ($21) {
       $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
       break L10;
      }
      $22 = (($$0) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = load1($23);
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$0 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = load4($26);
     $28 = (FUNCTION_TABLE_iiii[$27 & 31]($2,$0,$$0)|0);
     $29 = ($28>>>0)<($$0>>>0);
     if ($29) {
      $$032 = $$0;
      break L5;
     }
     $30 = (($0) + ($$0)|0);
     $31 = (($1) - ($$0))|0;
     $$pre38 = load4($9);
     $$033 = $31;$$034 = $30;$$1 = $$0;$32 = $$pre38;
    } else {
     $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
    }
   } while(0);
   _memcpy(($32|0),($$034|0),($$033|0))|0;
   $33 = load4($9);
   $34 = (($33) + ($$033)|0);
   store4($9,$34);
   $35 = (($$1) + ($$033))|0;
   $$032 = $35;
  }
 } while(0);
 return ($$032|0);
}
function _pop_arg($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = i64(), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = i64(), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = i64(), $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = i64(), $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = i64();
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = i64(), $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0.0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $7 = 0, $8 = 0;
 var $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0;
 var $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = load4($2);
     $4 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $5 = (($4) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $6 = $5 & $expanded30;
     $7 = $6;
     $8 = load4($7);
     $arglist_next = ((($7)) + 4|0);
     store4($2,$arglist_next);
     store4($0,$8);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($2);
     $9 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $10 = (($9) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $11 = $10 & $expanded37;
     $12 = $11;
     $13 = load4($12);
     $arglist_next3 = ((($12)) + 4|0);
     store4($2,$arglist_next3);
     $14 = i64_sext($13);
     store8($0,$14);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($2);
     $15 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $16 = (($15) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $17 = $16 & $expanded44;
     $18 = $17;
     $19 = load4($18);
     $arglist_next6 = ((($18)) + 4|0);
     store4($2,$arglist_next6);
     $20 = i64_zext($19>>>0);
     store8($0,$20);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($2);
     $21 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $22 = (($21) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $23 = $22 & $expanded51;
     $24 = $23;
     $25 = load8($24);
     $arglist_next9 = ((($24)) + 8|0);
     store4($2,$arglist_next9);
     store8($0,$25);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($2);
     $26 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $27 = (($26) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $28 = $27 & $expanded58;
     $29 = $28;
     $30 = load4($29);
     $arglist_next12 = ((($29)) + 4|0);
     store4($2,$arglist_next12);
     $31 = $30&65535;
     $32 = i64_sext($31 << 16 >> 16);
     store8($0,$32);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($2);
     $33 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $34 = (($33) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $35 = $34 & $expanded65;
     $36 = $35;
     $37 = load4($36);
     $arglist_next15 = ((($36)) + 4|0);
     store4($2,$arglist_next15);
     $$mask31 = $37 & 65535;
     $38 = i64_zext($$mask31>>>0);
     store8($0,$38);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($2);
     $39 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $40 = (($39) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $41 = $40 & $expanded72;
     $42 = $41;
     $43 = load4($42);
     $arglist_next18 = ((($42)) + 4|0);
     store4($2,$arglist_next18);
     $44 = $43&255;
     $45 = i64_sext($44 << 24 >> 24);
     store8($0,$45);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($2);
     $46 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $47 = (($46) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $48 = $47 & $expanded79;
     $49 = $48;
     $50 = load4($49);
     $arglist_next21 = ((($49)) + 4|0);
     store4($2,$arglist_next21);
     $$mask = $50 & 255;
     $51 = i64_zext($$mask>>>0);
     store8($0,$51);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($2);
     $52 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $53 = (($52) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $54 = $53 & $expanded86;
     $55 = $54;
     $56 = loadd($55);
     $arglist_next24 = ((($55)) + 8|0);
     store4($2,$arglist_next24);
     stored($0,$56);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($2);
     $57 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $58 = (($57) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $59 = $58 & $expanded93;
     $60 = $59;
     $61 = loadd($60);
     $arglist_next27 = ((($60)) + 8|0);
     store4($2,$arglist_next27);
     stored($0,$61);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1) {
 $0 = i64($0);
 $1 = $1|0;
 var $$010$lcssa$off0 = 0, $$01013 = i64(), $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = i64(), $4 = i64(), $5 = 0, $6 = 0, $7 = i64(), $8 = 0;
 var $9 = 0, $extract$t = 0, $extract$t20 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_ugt($0,i64_const(4294967295,0));
 $extract$t = i64_trunc($0);
 if ($2) {
  $$01013 = $0;$$0914 = $1;
  while(1) {
   $3 = i64_urem($$01013,i64_const(10,0));
   $4 = i64_or($3,i64_const(48,0));
   $5 = i64_trunc($4)&255;
   $6 = ((($$0914)) + -1|0);
   store1($6,$5);
   $7 = i64_udiv($$01013,i64_const(10,0));
   $8 = i64_ugt($$01013,i64_const(4294967295,9));
   if ($8) {
    $$01013 = $7;$$0914 = $6;
   } else {
    break;
   }
  }
  $extract$t20 = i64_trunc($7);
  $$010$lcssa$off0 = $extract$t20;$$09$lcssa = $6;
 } else {
  $$010$lcssa$off0 = $extract$t;$$09$lcssa = $1;
 }
 $9 = ($$010$lcssa$off0|0)==(0);
 if ($9) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $10 = (($$012>>>0) % 10)&-1;
   $11 = $10 | 48;
   $12 = $11&255;
   $13 = ((($$111)) + -1|0);
   store1($13,$12);
   $14 = (($$012>>>0) / 10)&-1;
   $15 = ($$012>>>0)<(10);
   if ($15) {
    $$1$lcssa = $13;
    break;
   } else {
    $$012 = $14;$$111 = $13;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $$011$lcssa = 0, $$01113 = 0, $$015 = 0, $$112 = 0, $$114 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$015 = 0;
 while(1) {
  $2 = (5850 + ($$015)|0);
  $3 = load1($2);
  $4 = $3&255;
  $5 = ($4|0)==($0|0);
  if ($5) {
   label = 2;
   break;
  }
  $6 = (($$015) + 1)|0;
  $7 = ($6|0)==(87);
  if ($7) {
   $$01113 = 5938;$$114 = 87;
   label = 5;
   break;
  } else {
   $$015 = $6;
  }
 }
 if ((label|0) == 2) {
  $1 = ($$015|0)==(0);
  if ($1) {
   $$011$lcssa = 5938;
  } else {
   $$01113 = 5938;$$114 = $$015;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$112 = $$01113;
   while(1) {
    $8 = load1($$112);
    $9 = ($8<<24>>24)==(0);
    $10 = ((($$112)) + 1|0);
    if ($9) {
     break;
    } else {
     $$112 = $10;
    }
   }
   $11 = (($$114) + -1)|0;
   $12 = ($11|0)==(0);
   if ($12) {
    $$011$lcssa = $10;
    break;
   } else {
    $$01113 = $10;$$114 = $11;
    label = 5;
   }
  }
 }
 return ($$011$lcssa|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = load1($$03555);
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = load1($$035$lcssa65);
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = load4($$046);
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = load1($$140);
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa16 = 0, $$012 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 do {
  if ($or$cond) {
   $9 = (($2) - ($3))|0;
   $10 = ($9>>>0)>(256);
   $11 = $10 ? 256 : $9;
   _memset(($5|0),($1|0),($11|0))|0;
   $12 = ($9>>>0)>(255);
   $13 = load4($0);
   $14 = $13 & 32;
   $15 = ($14|0)==(0);
   if ($12) {
    $16 = (($2) - ($3))|0;
    $$012 = $9;$23 = $13;$24 = $15;
    while(1) {
     if ($24) {
      (___fwritex($5,256,$0)|0);
      $$pre = load4($0);
      $20 = $$pre;
     } else {
      $20 = $23;
     }
     $17 = (($$012) + -256)|0;
     $18 = ($17>>>0)>(255);
     $19 = $20 & 32;
     $21 = ($19|0)==(0);
     if ($18) {
      $$012 = $17;$23 = $20;$24 = $21;
     } else {
      break;
     }
    }
    $22 = $16 & 255;
    if ($21) {
     $$0$lcssa16 = $22;
    } else {
     break;
    }
   } else {
    if ($15) {
     $$0$lcssa16 = $9;
    } else {
     break;
    }
   }
   (___fwritex($5,$$0$lcssa16,$0)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $$tr = 0, $10 = 0, $11 = i64(), $12 = i64(), $13 = 0.0, $2 = i64(), $3 = i64(), $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, $storemerge = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_bc2i($0);
 $3 = i64_lshr($2,i64_const(52,0));
 $trunc = i64_trunc($3)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $4 = $0 != 0.0;
  if ($4) {
   $5 = $0 * 1.8446744073709552E+19;
   $6 = (+_frexp($5,$1));
   $7 = load4($1);
   $8 = (($7) + -64)|0;
   $$016 = $6;$storemerge = $8;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  store4($1,$storemerge);
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $$tr = i64_trunc($3);
  $9 = $$tr & 2047;
  $10 = (($9) + -1022)|0;
  store4($1,$10);
  $11 = i64_and($2,i64_const(4294967295,2148532223));
  $12 = i64_or($11,i64_const(0,1071644672));
  $13 = i64_bc2d($12);
  $$0 = $13;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    store1($0,$5);
    $$0 = 1;
    break;
   }
   $6 = ($1>>>0)<(2048);
   if ($6) {
    $7 = $1 >>> 6;
    $8 = $7 | 192;
    $9 = $8&255;
    $10 = ((($0)) + 1|0);
    store1($0,$9);
    $11 = $1 & 63;
    $12 = $11 | 128;
    $13 = $12&255;
    store1($10,$13);
    $$0 = 2;
    break;
   }
   $14 = ($1>>>0)<(55296);
   $15 = $1 & -8192;
   $16 = ($15|0)==(57344);
   $or$cond = $14 | $16;
   if ($or$cond) {
    $17 = $1 >>> 12;
    $18 = $17 | 224;
    $19 = $18&255;
    $20 = ((($0)) + 1|0);
    store1($0,$19);
    $21 = $1 >>> 6;
    $22 = $21 & 63;
    $23 = $22 | 128;
    $24 = $23&255;
    $25 = ((($0)) + 2|0);
    store1($20,$24);
    $26 = $1 & 63;
    $27 = $26 | 128;
    $28 = $27&255;
    store1($25,$28);
    $$0 = 3;
    break;
   }
   $29 = (($1) + -65536)|0;
   $30 = ($29>>>0)<(1048576);
   if ($30) {
    $31 = $1 >>> 18;
    $32 = $31 | 240;
    $33 = $32&255;
    $34 = ((($0)) + 1|0);
    store1($0,$33);
    $35 = $1 >>> 12;
    $36 = $35 & 63;
    $37 = $36 | 128;
    $38 = $37&255;
    $39 = ((($0)) + 2|0);
    store1($34,$38);
    $40 = $1 >>> 6;
    $41 = $40 & 63;
    $42 = $41 | 128;
    $43 = $42&255;
    $44 = ((($0)) + 3|0);
    store1($39,$43);
    $45 = $1 & 63;
    $46 = $45 | 128;
    $47 = $46&255;
    store1($44,$47);
    $$0 = 4;
    break;
   } else {
    $48 = (___errno_location()|0);
    store4($48,84);
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 store1($1,$6);
 $7 = load4($0);
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  store4($11,0);
  $12 = ((($0)) + 4|0);
  store4($12,0);
  $13 = ((($0)) + 44|0);
  $14 = load4($13);
  $15 = ((($0)) + 28|0);
  store4($15,$14);
  $16 = ((($0)) + 20|0);
  store4($16,$14);
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = load4($18);
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  store4($21,$20);
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  store4($0,$10);
  $$0 = -1;
 }
 return ($$0|0);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$014 = 0, $$015$lcssa = 0, $$01518 = 0, $$1$lcssa = 0, $$pn = 0, $$pn29 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01518 = $0;$22 = $1;
   while(1) {
    $4 = load1($$01518);
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$pn = $22;
     break L1;
    }
    $6 = ((($$01518)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01518 = $6;$22 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = load4($$0);
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn29 = $$0;
   while(1) {
    $19 = ((($$pn29)) + 1|0);
    $$pre = load1($19);
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn29 = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$pn = $21;
 }
 $$014 = (($$pn) - ($1))|0;
 return ($$014|0);
}
function ___strdup($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_strlen($0)|0);
 $2 = (($1) + 1)|0;
 $3 = (_malloc($2)|0);
 $4 = ($3|0)==(0|0);
 if ($4) {
  $$0 = 0;
 } else {
  _memcpy(($3|0),($0|0),($2|0))|0;
  $$0 = $3;
 }
 return ($$0|0);
}
function ___overflow($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = $1&255;
 store1($2,$3);
 $4 = ((($0)) + 16|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 if ($6) {
  $7 = (___towrite($0)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($4);
   $12 = $$pre;
   label = 4;
  } else {
   $$0 = -1;
  }
 } else {
  $12 = $5;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $9 = ((($0)) + 20|0);
   $10 = load4($9);
   $11 = ($10>>>0)<($12>>>0);
   if ($11) {
    $13 = $1 & 255;
    $14 = ((($0)) + 75|0);
    $15 = load1($14);
    $16 = $15 << 24 >> 24;
    $17 = ($13|0)==($16|0);
    if (!($17)) {
     $18 = ((($10)) + 1|0);
     store4($9,$18);
     store1($10,$3);
     $$0 = $13;
     break;
    }
   }
   $19 = ((($0)) + 36|0);
   $20 = load4($19);
   $21 = (FUNCTION_TABLE_iiii[$20 & 31]($0,$2,1)|0);
   $22 = ($21|0)==(1);
   if ($22) {
    $23 = load1($2);
    $24 = $23&255;
    $$0 = $24;
   } else {
    $$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _fputc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($1)) + 76|0);
 $3 = load4($2);
 $4 = ($3|0)<(0);
 if ($4) {
  label = 3;
 } else {
  $5 = (___lockfile($1)|0);
  $6 = ($5|0)==(0);
  if ($6) {
   label = 3;
  } else {
   $20 = ((($1)) + 75|0);
   $21 = load1($20);
   $22 = $21 << 24 >> 24;
   $23 = ($22|0)==($0|0);
   if ($23) {
    label = 10;
   } else {
    $24 = ((($1)) + 20|0);
    $25 = load4($24);
    $26 = ((($1)) + 16|0);
    $27 = load4($26);
    $28 = ($25>>>0)<($27>>>0);
    if ($28) {
     $29 = $0&255;
     $30 = ((($25)) + 1|0);
     store4($24,$30);
     store1($25,$29);
     $31 = $0 & 255;
     $33 = $31;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $32 = (___overflow($1,$0)|0);
    $33 = $32;
   }
   ___unlockfile($1);
   $$0 = $33;
  }
 }
 do {
  if ((label|0) == 3) {
   $7 = ((($1)) + 75|0);
   $8 = load1($7);
   $9 = $8 << 24 >> 24;
   $10 = ($9|0)==($0|0);
   if (!($10)) {
    $11 = ((($1)) + 20|0);
    $12 = load4($11);
    $13 = ((($1)) + 16|0);
    $14 = load4($13);
    $15 = ($12>>>0)<($14>>>0);
    if ($15) {
     $16 = $0&255;
     $17 = ((($12)) + 1|0);
     store4($11,$17);
     store1($12,$16);
     $18 = $0 & 255;
     $$0 = $18;
     break;
    }
   }
   $19 = (___overflow($1,$0)|0);
   $$0 = $19;
  }
 } while(0);
 return ($$0|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0190$i = 0, $$$0191$i = 0, $$$4349$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0;
 var $$024370$i = 0, $$0286$i$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$0342$i = 0, $$0343$i = 0, $$0345$i = 0, $$0351$i = 0, $$0356$i = 0, $$0357$$i = 0, $$0357$i = 0, $$0359$i = 0, $$0360$i = 0, $$0366$i = 0, $$1194$i = 0, $$1196$i = 0, $$124469$i = 0;
 var $$1290$i$i = 0, $$1292$i$i = 0, $$1341$i = 0, $$1346$i = 0, $$1361$i = 0, $$1368$i = 0, $$1372$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3348$i = 0, $$3370$i = 0, $$4$lcssa$i = 0, $$413$i = 0, $$4349$lcssa$i = 0, $$434912$i = 0, $$4355$$4$i = 0;
 var $$4355$ph$i = 0, $$435511$i = 0, $$5256$i = 0, $$723947$i = 0, $$748$i = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i205 = 0, $$pre$i208 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i206Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre9$i$i = 0, $1 = 0;
 var $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0;
 var $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0;
 var $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0;
 var $1053 = 0, $1054 = 0, $1055 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0;
 var $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0;
 var $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0;
 var $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0;
 var $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0;
 var $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0;
 var $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0;
 var $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0;
 var $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0;
 var $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0;
 var $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0;
 var $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0;
 var $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0;
 var $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0;
 var $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0;
 var $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0;
 var $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0;
 var $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0;
 var $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0;
 var $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0;
 var $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0;
 var $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0;
 var $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0;
 var $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0;
 var $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0;
 var $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0;
 var $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0;
 var $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0;
 var $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0;
 var $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0;
 var $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0;
 var $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0;
 var $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0;
 var $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0;
 var $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0;
 var $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i204 = 0, $exitcond$i$i = 0, $not$$i$i = 0, $not$$i22$i = 0;
 var $not$7$i = 0, $or$cond$i = 0, $or$cond$i211 = 0, $or$cond1$i = 0, $or$cond1$i210 = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = load4(8844);
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (8884 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = load4($17);
    $19 = ((($18)) + 8|0);
    $20 = load4($19);
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      store4(8844,$24);
     } else {
      $25 = load4((8860));
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = load4($27);
      $29 = ($28|0)==($18|0);
      if ($29) {
       store4($27,$16);
       store4($17,$20);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    store4($32,$31);
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = load4($34);
    $36 = $35 | 1;
    store4($34,$36);
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = load4((8852));
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (8884 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = load4($70);
     $72 = ((($71)) + 8|0);
     $73 = load4($72);
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       store4(8844,$77);
       $98 = $77;
      } else {
       $78 = load4((8860));
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = load4($80);
       $82 = ($81|0)==($71|0);
       if ($82) {
        store4($80,$69);
        store4($70,$73);
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     store4($86,$85);
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     store4($89,$88);
     $90 = (($87) + ($84)|0);
     store4($90,$84);
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = load4((8864));
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (8884 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       store4(8844,$100);
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = load4($101);
       $103 = load4((8860));
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      store4($$pre$phiZ2D,$92);
      $105 = ((($$0199)) + 12|0);
      store4($105,$92);
      $106 = ((($92)) + 8|0);
      store4($106,$$0199);
      $107 = ((($92)) + 12|0);
      store4($107,$95);
     }
     store4((8852),$84);
     store4((8864),$87);
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = load4((8848));
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (9148 + ($132<<2)|0);
     $134 = load4($133);
     $135 = ((($134)) + 4|0);
     $136 = load4($135);
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $$0189$i = $134;$$0190$i = $134;$$0191$i = $138;
     while(1) {
      $139 = ((($$0189$i)) + 16|0);
      $140 = load4($139);
      $141 = ($140|0)==(0|0);
      if ($141) {
       $142 = ((($$0189$i)) + 20|0);
       $143 = load4($142);
       $144 = ($143|0)==(0|0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = ((($146)) + 4|0);
      $147 = load4($145);
      $148 = $147 & -8;
      $149 = (($148) - ($6))|0;
      $150 = ($149>>>0)<($$0191$i>>>0);
      $$$0191$i = $150 ? $149 : $$0191$i;
      $$$0190$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;$$0190$i = $$$0190$i;$$0191$i = $$$0191$i;
     }
     $151 = load4((8860));
     $152 = ($$0190$i>>>0)<($151>>>0);
     if ($152) {
      _abort();
      // unreachable;
     }
     $153 = (($$0190$i) + ($6)|0);
     $154 = ($$0190$i>>>0)<($153>>>0);
     if (!($154)) {
      _abort();
      // unreachable;
     }
     $155 = ((($$0190$i)) + 24|0);
     $156 = load4($155);
     $157 = ((($$0190$i)) + 12|0);
     $158 = load4($157);
     $159 = ($158|0)==($$0190$i|0);
     do {
      if ($159) {
       $169 = ((($$0190$i)) + 20|0);
       $170 = load4($169);
       $171 = ($170|0)==(0|0);
       if ($171) {
        $172 = ((($$0190$i)) + 16|0);
        $173 = load4($172);
        $174 = ($173|0)==(0|0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i = $173;$$1196$i = $172;
        }
       } else {
        $$1194$i = $170;$$1196$i = $169;
       }
       while(1) {
        $175 = ((($$1194$i)) + 20|0);
        $176 = load4($175);
        $177 = ($176|0)==(0|0);
        if (!($177)) {
         $$1194$i = $176;$$1196$i = $175;
         continue;
        }
        $178 = ((($$1194$i)) + 16|0);
        $179 = load4($178);
        $180 = ($179|0)==(0|0);
        if ($180) {
         break;
        } else {
         $$1194$i = $179;$$1196$i = $178;
        }
       }
       $181 = ($$1196$i>>>0)<($151>>>0);
       if ($181) {
        _abort();
        // unreachable;
       } else {
        store4($$1196$i,0);
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = ((($$0190$i)) + 8|0);
       $161 = load4($160);
       $162 = ($161>>>0)<($151>>>0);
       if ($162) {
        _abort();
        // unreachable;
       }
       $163 = ((($161)) + 12|0);
       $164 = load4($163);
       $165 = ($164|0)==($$0190$i|0);
       if (!($165)) {
        _abort();
        // unreachable;
       }
       $166 = ((($158)) + 8|0);
       $167 = load4($166);
       $168 = ($167|0)==($$0190$i|0);
       if ($168) {
        store4($163,$158);
        store4($166,$161);
        $$3$i = $158;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $182 = ($156|0)==(0|0);
     do {
      if (!($182)) {
       $183 = ((($$0190$i)) + 28|0);
       $184 = load4($183);
       $185 = (9148 + ($184<<2)|0);
       $186 = load4($185);
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        store4($185,$$3$i);
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         store4((8848),$190);
         break;
        }
       } else {
        $191 = load4((8860));
        $192 = ($156>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($156)) + 16|0);
        $194 = load4($193);
        $195 = ($194|0)==($$0190$i|0);
        if ($195) {
         store4($193,$$3$i);
        } else {
         $196 = ((($156)) + 20|0);
         store4($196,$$3$i);
        }
        $197 = ($$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = load4((8860));
       $199 = ($$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($$3$i)) + 24|0);
       store4($200,$156);
       $201 = ((($$0190$i)) + 16|0);
       $202 = load4($201);
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($$3$i)) + 16|0);
          store4($205,$202);
          $206 = ((($202)) + 24|0);
          store4($206,$$3$i);
          break;
         }
        }
       } while(0);
       $207 = ((($$0190$i)) + 20|0);
       $208 = load4($207);
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = load4((8860));
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($$3$i)) + 20|0);
         store4($212,$208);
         $213 = ((($208)) + 24|0);
         store4($213,$$3$i);
         break;
        }
       }
      }
     } while(0);
     $214 = ($$0191$i>>>0)<(16);
     if ($214) {
      $215 = (($$0191$i) + ($6))|0;
      $216 = $215 | 3;
      $217 = ((($$0190$i)) + 4|0);
      store4($217,$216);
      $218 = (($$0190$i) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = load4($219);
      $221 = $220 | 1;
      store4($219,$221);
     } else {
      $222 = $6 | 3;
      $223 = ((($$0190$i)) + 4|0);
      store4($223,$222);
      $224 = $$0191$i | 1;
      $225 = ((($153)) + 4|0);
      store4($225,$224);
      $226 = (($153) + ($$0191$i)|0);
      store4($226,$$0191$i);
      $227 = ($37|0)==(0);
      if (!($227)) {
       $228 = load4((8864));
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (8884 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $8 & $232;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $8 | $232;
        store4(8844,$235);
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = load4($236);
        $238 = load4((8860));
        $239 = ($237>>>0)<($238>>>0);
        if ($239) {
         _abort();
         // unreachable;
        } else {
         $$0187$i = $237;$$pre$phi$iZ2D = $236;
        }
       }
       store4($$pre$phi$iZ2D,$228);
       $240 = ((($$0187$i)) + 12|0);
       store4($240,$228);
       $241 = ((($228)) + 8|0);
       store4($241,$$0187$i);
       $242 = ((($228)) + 12|0);
       store4($242,$231);
      }
      store4((8852),$$0191$i);
      store4((8864),$153);
     }
     $243 = ((($$0190$i)) + 8|0);
     $$0 = $243;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = ($0>>>0)>(4294967231);
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = (($0) + 11)|0;
    $246 = $245 & -8;
    $247 = load4((8848));
    $248 = ($247|0)==(0);
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = (0 - ($246))|0;
     $250 = $245 >>> 8;
     $251 = ($250|0)==(0);
     if ($251) {
      $$0356$i = 0;
     } else {
      $252 = ($246>>>0)>(16777215);
      if ($252) {
       $$0356$i = 31;
      } else {
       $253 = (($250) + 1048320)|0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = (($256) + 520192)|0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = (($261) + 245760)|0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = (14 - ($265))|0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = (($266) + ($268))|0;
       $270 = $269 << 1;
       $271 = (($269) + 7)|0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0356$i = $274;
      }
     }
     $275 = (9148 + ($$0356$i<<2)|0);
     $276 = load4($275);
     $277 = ($276|0)==(0|0);
     L123: do {
      if ($277) {
       $$2353$i = 0;$$3$i201 = 0;$$3348$i = $249;
       label = 86;
      } else {
       $278 = ($$0356$i|0)==(31);
       $279 = $$0356$i >>> 1;
       $280 = (25 - ($279))|0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;$$0345$i = $249;$$0351$i = $276;$$0357$i = $282;$$0360$i = 0;
       while(1) {
        $283 = ((($$0351$i)) + 4|0);
        $284 = load4($283);
        $285 = $284 & -8;
        $286 = (($285) - ($246))|0;
        $287 = ($286>>>0)<($$0345$i>>>0);
        if ($287) {
         $288 = ($286|0)==(0);
         if ($288) {
          $$413$i = $$0351$i;$$434912$i = 0;$$435511$i = $$0351$i;
          label = 90;
          break L123;
         } else {
          $$1341$i = $$0351$i;$$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;$$1346$i = $$0345$i;
        }
        $289 = ((($$0351$i)) + 20|0);
        $290 = load4($289);
        $291 = $$0357$i >>> 31;
        $292 = (((($$0351$i)) + 16|0) + ($291<<2)|0);
        $293 = load4($292);
        $294 = ($290|0)==(0|0);
        $295 = ($290|0)==($293|0);
        $or$cond1$i = $294 | $295;
        $$1361$i = $or$cond1$i ? $$0360$i : $290;
        $296 = ($293|0)==(0|0);
        $297 = $296&1;
        $298 = $297 ^ 1;
        $$0357$$i = $$0357$i << $298;
        if ($296) {
         $$2353$i = $$1361$i;$$3$i201 = $$1341$i;$$3348$i = $$1346$i;
         label = 86;
         break;
        } else {
         $$0340$i = $$1341$i;$$0345$i = $$1346$i;$$0351$i = $293;$$0357$i = $$0357$$i;$$0360$i = $$1361$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $299 = ($$2353$i|0)==(0|0);
      $300 = ($$3$i201|0)==(0|0);
      $or$cond$i = $299 & $300;
      if ($or$cond$i) {
       $301 = 2 << $$0356$i;
       $302 = (0 - ($301))|0;
       $303 = $301 | $302;
       $304 = $247 & $303;
       $305 = ($304|0)==(0);
       if ($305) {
        $$0197 = $246;
        break;
       }
       $306 = (0 - ($304))|0;
       $307 = $304 & $306;
       $308 = (($307) + -1)|0;
       $309 = $308 >>> 12;
       $310 = $309 & 16;
       $311 = $308 >>> $310;
       $312 = $311 >>> 5;
       $313 = $312 & 8;
       $314 = $313 | $310;
       $315 = $311 >>> $313;
       $316 = $315 >>> 2;
       $317 = $316 & 4;
       $318 = $314 | $317;
       $319 = $315 >>> $317;
       $320 = $319 >>> 1;
       $321 = $320 & 2;
       $322 = $318 | $321;
       $323 = $319 >>> $321;
       $324 = $323 >>> 1;
       $325 = $324 & 1;
       $326 = $322 | $325;
       $327 = $323 >>> $325;
       $328 = (($326) + ($327))|0;
       $329 = (9148 + ($328<<2)|0);
       $330 = load4($329);
       $$4355$ph$i = $330;
      } else {
       $$4355$ph$i = $$2353$i;
      }
      $331 = ($$4355$ph$i|0)==(0|0);
      if ($331) {
       $$4$lcssa$i = $$3$i201;$$4349$lcssa$i = $$3348$i;
      } else {
       $$413$i = $$3$i201;$$434912$i = $$3348$i;$$435511$i = $$4355$ph$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $332 = ((($$435511$i)) + 4|0);
       $333 = load4($332);
       $334 = $333 & -8;
       $335 = (($334) - ($246))|0;
       $336 = ($335>>>0)<($$434912$i>>>0);
       $$$4349$i = $336 ? $335 : $$434912$i;
       $$4355$$4$i = $336 ? $$435511$i : $$413$i;
       $337 = ((($$435511$i)) + 16|0);
       $338 = load4($337);
       $339 = ($338|0)==(0|0);
       if (!($339)) {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $338;
        label = 90;
        continue;
       }
       $340 = ((($$435511$i)) + 20|0);
       $341 = load4($340);
       $342 = ($341|0)==(0|0);
       if ($342) {
        $$4$lcssa$i = $$4355$$4$i;$$4349$lcssa$i = $$$4349$i;
        break;
       } else {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $341;
        label = 90;
       }
      }
     }
     $343 = ($$4$lcssa$i|0)==(0|0);
     if ($343) {
      $$0197 = $246;
     } else {
      $344 = load4((8852));
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = load4((8860));
       $348 = ($$4$lcssa$i>>>0)<($347>>>0);
       if ($348) {
        _abort();
        // unreachable;
       }
       $349 = (($$4$lcssa$i) + ($246)|0);
       $350 = ($$4$lcssa$i>>>0)<($349>>>0);
       if (!($350)) {
        _abort();
        // unreachable;
       }
       $351 = ((($$4$lcssa$i)) + 24|0);
       $352 = load4($351);
       $353 = ((($$4$lcssa$i)) + 12|0);
       $354 = load4($353);
       $355 = ($354|0)==($$4$lcssa$i|0);
       do {
        if ($355) {
         $365 = ((($$4$lcssa$i)) + 20|0);
         $366 = load4($365);
         $367 = ($366|0)==(0|0);
         if ($367) {
          $368 = ((($$4$lcssa$i)) + 16|0);
          $369 = load4($368);
          $370 = ($369|0)==(0|0);
          if ($370) {
           $$3370$i = 0;
           break;
          } else {
           $$1368$i = $369;$$1372$i = $368;
          }
         } else {
          $$1368$i = $366;$$1372$i = $365;
         }
         while(1) {
          $371 = ((($$1368$i)) + 20|0);
          $372 = load4($371);
          $373 = ($372|0)==(0|0);
          if (!($373)) {
           $$1368$i = $372;$$1372$i = $371;
           continue;
          }
          $374 = ((($$1368$i)) + 16|0);
          $375 = load4($374);
          $376 = ($375|0)==(0|0);
          if ($376) {
           break;
          } else {
           $$1368$i = $375;$$1372$i = $374;
          }
         }
         $377 = ($$1372$i>>>0)<($347>>>0);
         if ($377) {
          _abort();
          // unreachable;
         } else {
          store4($$1372$i,0);
          $$3370$i = $$1368$i;
          break;
         }
        } else {
         $356 = ((($$4$lcssa$i)) + 8|0);
         $357 = load4($356);
         $358 = ($357>>>0)<($347>>>0);
         if ($358) {
          _abort();
          // unreachable;
         }
         $359 = ((($357)) + 12|0);
         $360 = load4($359);
         $361 = ($360|0)==($$4$lcssa$i|0);
         if (!($361)) {
          _abort();
          // unreachable;
         }
         $362 = ((($354)) + 8|0);
         $363 = load4($362);
         $364 = ($363|0)==($$4$lcssa$i|0);
         if ($364) {
          store4($359,$354);
          store4($362,$357);
          $$3370$i = $354;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $378 = ($352|0)==(0|0);
       do {
        if ($378) {
         $470 = $247;
        } else {
         $379 = ((($$4$lcssa$i)) + 28|0);
         $380 = load4($379);
         $381 = (9148 + ($380<<2)|0);
         $382 = load4($381);
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          store4($381,$$3370$i);
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           store4((8848),$386);
           $470 = $386;
           break;
          }
         } else {
          $387 = load4((8860));
          $388 = ($352>>>0)<($387>>>0);
          if ($388) {
           _abort();
           // unreachable;
          }
          $389 = ((($352)) + 16|0);
          $390 = load4($389);
          $391 = ($390|0)==($$4$lcssa$i|0);
          if ($391) {
           store4($389,$$3370$i);
          } else {
           $392 = ((($352)) + 20|0);
           store4($392,$$3370$i);
          }
          $393 = ($$3370$i|0)==(0|0);
          if ($393) {
           $470 = $247;
           break;
          }
         }
         $394 = load4((8860));
         $395 = ($$3370$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3370$i)) + 24|0);
         store4($396,$352);
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = load4($397);
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3370$i)) + 16|0);
            store4($401,$398);
            $402 = ((($398)) + 24|0);
            store4($402,$$3370$i);
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = load4($403);
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $247;
         } else {
          $406 = load4((8860));
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3370$i)) + 20|0);
           store4($408,$404);
           $409 = ((($404)) + 24|0);
           store4($409,$$3370$i);
           $470 = $247;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4349$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4349$lcssa$i) + ($246))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         store4($413,$412);
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = load4($415);
         $417 = $416 | 1;
         store4($415,$417);
        } else {
         $418 = $246 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         store4($419,$418);
         $420 = $$4349$lcssa$i | 1;
         $421 = ((($349)) + 4|0);
         store4($421,$420);
         $422 = (($349) + ($$4349$lcssa$i)|0);
         store4($422,$$4349$lcssa$i);
         $423 = $$4349$lcssa$i >>> 3;
         $424 = ($$4349$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (8884 + ($425<<2)|0);
          $427 = load4(8844);
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           store4(8844,$431);
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = load4($432);
           $434 = load4((8860));
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0366$i = $433;$$pre$phi$i206Z2D = $432;
           }
          }
          store4($$pre$phi$i206Z2D,$349);
          $436 = ((($$0366$i)) + 12|0);
          store4($436,$349);
          $437 = ((($349)) + 8|0);
          store4($437,$$0366$i);
          $438 = ((($349)) + 12|0);
          store4($438,$426);
          break;
         }
         $439 = $$4349$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0359$i = 0;
         } else {
          $441 = ($$4349$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0359$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4349$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0359$i = $463;
          }
         }
         $464 = (9148 + ($$0359$i<<2)|0);
         $465 = ((($349)) + 28|0);
         store4($465,$$0359$i);
         $466 = ((($349)) + 16|0);
         $467 = ((($466)) + 4|0);
         store4($467,0);
         store4($466,0);
         $468 = 1 << $$0359$i;
         $469 = $470 & $468;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $470 | $468;
          store4((8848),$472);
          store4($464,$349);
          $473 = ((($349)) + 24|0);
          store4($473,$464);
          $474 = ((($349)) + 12|0);
          store4($474,$349);
          $475 = ((($349)) + 8|0);
          store4($475,$349);
          break;
         }
         $476 = load4($464);
         $477 = ($$0359$i|0)==(31);
         $478 = $$0359$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4349$lcssa$i << $480;
         $$0342$i = $481;$$0343$i = $476;
         while(1) {
          $482 = ((($$0343$i)) + 4|0);
          $483 = load4($482);
          $484 = $483 & -8;
          $485 = ($484|0)==($$4349$lcssa$i|0);
          if ($485) {
           label = 148;
           break;
          }
          $486 = $$0342$i >>> 31;
          $487 = (((($$0343$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0342$i << 1;
          $489 = load4($487);
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 145;
           break;
          } else {
           $$0342$i = $488;$$0343$i = $489;
          }
         }
         if ((label|0) == 145) {
          $491 = load4((8860));
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           store4($487,$349);
           $493 = ((($349)) + 24|0);
           store4($493,$$0343$i);
           $494 = ((($349)) + 12|0);
           store4($494,$349);
           $495 = ((($349)) + 8|0);
           store4($495,$349);
           break;
          }
         }
         else if ((label|0) == 148) {
          $496 = ((($$0343$i)) + 8|0);
          $497 = load4($496);
          $498 = load4((8860));
          $499 = ($497>>>0)>=($498>>>0);
          $not$7$i = ($$0343$i>>>0)>=($498>>>0);
          $500 = $499 & $not$7$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           store4($501,$349);
           store4($496,$349);
           $502 = ((($349)) + 8|0);
           store4($502,$497);
           $503 = ((($349)) + 12|0);
           store4($503,$$0343$i);
           $504 = ((($349)) + 24|0);
           store4($504,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while(0);
 $506 = load4((8852));
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = load4((8864));
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   store4((8864),$511);
   store4((8852),$508);
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   store4($513,$512);
   $514 = (($511) + ($508)|0);
   store4($514,$508);
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   store4($516,$515);
  } else {
   store4((8852),0);
   store4((8864),0);
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   store4($518,$517);
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = load4($520);
   $522 = $521 | 1;
   store4($520,$522);
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = load4((8856));
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  store4((8856),$526);
  $527 = load4((8868));
  $528 = (($527) + ($$0197)|0);
  store4((8868),$528);
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  store4($530,$529);
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  store4($532,$531);
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = load4(9316);
 $535 = ($534|0)==(0);
 if ($535) {
  store4((9324),4096);
  store4((9320),4096);
  store4((9328),-1);
  store4((9332),-1);
  store4((9336),0);
  store4((9288),0);
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  store4($1,$538);
  store4(9316,$538);
  $542 = 4096;
 } else {
  $$pre$i208 = load4((9324));
  $542 = $$pre$i208;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = load4((9284));
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = load4((9276));
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = load4((9288));
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = load4((8868));
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (9292);
     while(1) {
      $557 = load4($$0$i17$i);
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i17$i)) + 4|0);
       $560 = load4($559);
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i17$i)) + 8|0);
      $564 = load4($563);
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 172;
       break L257;
      } else {
       $$0$i17$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = load4($$0$i17$i);
      $593 = load4($559);
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if (!($596)) {
        $$723947$i = $589;$$748$i = $591;
        label = 190;
        break L255;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if (!($567)) {
      $568 = $566;
      $569 = load4((9320));
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = load4((9276));
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = load4((9284));
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i = $584 | $585;
        if ($or$cond2$i) {
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723947$i = $$$i;$$748$i = $566;
        label = 190;
        break L255;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     do {
      if ($or$cond10$i) {
       $601 = load4((9324));
       $602 = (($540) - ($$2253$ph$i))|0;
       $603 = (($602) + ($601))|0;
       $604 = (0 - ($601))|0;
       $605 = $603 & $604;
       $606 = ($605>>>0)<(2147483647);
       if ($606) {
        $607 = (_sbrk(($605|0))|0);
        $608 = ($607|0)==((-1)|0);
        if ($608) {
         (_sbrk(($597|0))|0);
         break L274;
        } else {
         $609 = (($605) + ($$2253$ph$i))|0;
         $$5256$i = $609;
         break;
        }
       } else {
        $$5256$i = $$2253$ph$i;
       }
      } else {
       $$5256$i = $$2253$ph$i;
      }
     } while(0);
     $610 = ($$2247$ph$i|0)==((-1)|0);
     if (!($610)) {
      $$723947$i = $$5256$i;$$748$i = $$2247$ph$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $611 = load4((9288));
   $612 = $611 | 4;
   store4((9288),$612);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   if ($or$cond11$i) {
    $619 = $615;
    $620 = $614;
    $621 = (($619) - ($620))|0;
    $622 = (($$0197) + 40)|0;
    $$not$i = ($621>>>0)>($622>>>0);
    if ($$not$i) {
     $$723947$i = $621;$$748$i = $614;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $623 = load4((9276));
  $624 = (($623) + ($$723947$i))|0;
  store4((9276),$624);
  $625 = load4((9280));
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   store4((9280),$624);
  }
  $627 = load4((8868));
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = load4((8860));
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     store4((8860),$$748$i);
    }
    store4((9292),$$748$i);
    store4((9296),$$723947$i);
    store4((9304),0);
    $632 = load4(9316);
    store4((8880),$632);
    store4((8876),-1);
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (8884 + ($633<<2)|0);
     $635 = ((($634)) + 12|0);
     store4($635,$634);
     $636 = ((($634)) + 8|0);
     store4($636,$634);
     $637 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($637|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $637;
     }
    }
    $638 = (($$723947$i) + -40)|0;
    $639 = ((($$748$i)) + 8|0);
    $640 = $639;
    $641 = $640 & 7;
    $642 = ($641|0)==(0);
    $643 = (0 - ($640))|0;
    $644 = $643 & 7;
    $645 = $642 ? 0 : $644;
    $646 = (($$748$i) + ($645)|0);
    $647 = (($638) - ($645))|0;
    store4((8868),$646);
    store4((8856),$647);
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    store4($649,$648);
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    store4($651,40);
    $652 = load4((9332));
    store4((8872),$652);
   } else {
    $$024370$i = (9292);
    while(1) {
     $653 = load4($$024370$i);
     $654 = ((($$024370$i)) + 4|0);
     $655 = load4($654);
     $656 = (($653) + ($655)|0);
     $657 = ($$748$i|0)==($656|0);
     if ($657) {
      label = 200;
      break;
     }
     $658 = ((($$024370$i)) + 8|0);
     $659 = load4($658);
     $660 = ($659|0)==(0|0);
     if ($660) {
      break;
     } else {
      $$024370$i = $659;
     }
    }
    if ((label|0) == 200) {
     $661 = ((($$024370$i)) + 12|0);
     $662 = load4($661);
     $663 = $662 & 8;
     $664 = ($663|0)==(0);
     if ($664) {
      $665 = ($627>>>0)>=($653>>>0);
      $666 = ($627>>>0)<($$748$i>>>0);
      $or$cond50$i = $666 & $665;
      if ($or$cond50$i) {
       $667 = (($655) + ($$723947$i))|0;
       store4($654,$667);
       $668 = load4((8856));
       $669 = ((($627)) + 8|0);
       $670 = $669;
       $671 = $670 & 7;
       $672 = ($671|0)==(0);
       $673 = (0 - ($670))|0;
       $674 = $673 & 7;
       $675 = $672 ? 0 : $674;
       $676 = (($627) + ($675)|0);
       $677 = (($$723947$i) - ($675))|0;
       $678 = (($677) + ($668))|0;
       store4((8868),$676);
       store4((8856),$678);
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       store4($680,$679);
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       store4($682,40);
       $683 = load4((9332));
       store4((8872),$683);
       break;
      }
     }
    }
    $684 = load4((8860));
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     store4((8860),$$748$i);
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (9292);
    while(1) {
     $687 = load4($$124469$i);
     $688 = ($687|0)==($686|0);
     if ($688) {
      label = 208;
      break;
     }
     $689 = ((($$124469$i)) + 8|0);
     $690 = load4($689);
     $691 = ($690|0)==(0|0);
     if ($691) {
      $$0$i$i$i = (9292);
      break;
     } else {
      $$124469$i = $690;
     }
    }
    if ((label|0) == 208) {
     $692 = ((($$124469$i)) + 12|0);
     $693 = load4($692);
     $694 = $693 & 8;
     $695 = ($694|0)==(0);
     if ($695) {
      store4($$124469$i,$$748$i);
      $696 = ((($$124469$i)) + 4|0);
      $697 = load4($696);
      $698 = (($697) + ($$723947$i))|0;
      store4($696,$698);
      $699 = ((($$748$i)) + 8|0);
      $700 = $699;
      $701 = $700 & 7;
      $702 = ($701|0)==(0);
      $703 = (0 - ($700))|0;
      $704 = $703 & 7;
      $705 = $702 ? 0 : $704;
      $706 = (($$748$i) + ($705)|0);
      $707 = ((($686)) + 8|0);
      $708 = $707;
      $709 = $708 & 7;
      $710 = ($709|0)==(0);
      $711 = (0 - ($708))|0;
      $712 = $711 & 7;
      $713 = $710 ? 0 : $712;
      $714 = (($686) + ($713)|0);
      $715 = $714;
      $716 = $706;
      $717 = (($715) - ($716))|0;
      $718 = (($706) + ($$0197)|0);
      $719 = (($717) - ($$0197))|0;
      $720 = $$0197 | 3;
      $721 = ((($706)) + 4|0);
      store4($721,$720);
      $722 = ($714|0)==($627|0);
      do {
       if ($722) {
        $723 = load4((8856));
        $724 = (($723) + ($719))|0;
        store4((8856),$724);
        store4((8868),$718);
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        store4($726,$725);
       } else {
        $727 = load4((8864));
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = load4((8852));
         $730 = (($729) + ($719))|0;
         store4((8852),$730);
         store4((8864),$718);
         $731 = $730 | 1;
         $732 = ((($718)) + 4|0);
         store4($732,$731);
         $733 = (($718) + ($730)|0);
         store4($733,$730);
         break;
        }
        $734 = ((($714)) + 4|0);
        $735 = load4($734);
        $736 = $735 & 3;
        $737 = ($736|0)==(1);
        if ($737) {
         $738 = $735 & -8;
         $739 = $735 >>> 3;
         $740 = ($735>>>0)<(256);
         L326: do {
          if ($740) {
           $741 = ((($714)) + 8|0);
           $742 = load4($741);
           $743 = ((($714)) + 12|0);
           $744 = load4($743);
           $745 = $739 << 1;
           $746 = (8884 + ($745<<2)|0);
           $747 = ($742|0)==($746|0);
           do {
            if (!($747)) {
             $748 = ($742>>>0)<($749>>>0);
             if ($748) {
              _abort();
              // unreachable;
             }
             $750 = ((($742)) + 12|0);
             $751 = load4($750);
             $752 = ($751|0)==($714|0);
             if ($752) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $753 = ($744|0)==($742|0);
           if ($753) {
            $754 = 1 << $739;
            $755 = $754 ^ -1;
            $756 = load4(8844);
            $757 = $756 & $755;
            store4(8844,$757);
            break;
           }
           $758 = ($744|0)==($746|0);
           do {
            if ($758) {
             $$pre9$i$i = ((($744)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $759 = ($744>>>0)<($749>>>0);
             if ($759) {
              _abort();
              // unreachable;
             }
             $760 = ((($744)) + 8|0);
             $761 = load4($760);
             $762 = ($761|0)==($714|0);
             if ($762) {
              $$pre$phi10$i$iZ2D = $760;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $763 = ((($742)) + 12|0);
           store4($763,$744);
           store4($$pre$phi10$i$iZ2D,$742);
          } else {
           $764 = ((($714)) + 24|0);
           $765 = load4($764);
           $766 = ((($714)) + 12|0);
           $767 = load4($766);
           $768 = ($767|0)==($714|0);
           do {
            if ($768) {
             $778 = ((($714)) + 16|0);
             $779 = ((($778)) + 4|0);
             $780 = load4($779);
             $781 = ($780|0)==(0|0);
             if ($781) {
              $782 = load4($778);
              $783 = ($782|0)==(0|0);
              if ($783) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i = $782;$$1292$i$i = $778;
              }
             } else {
              $$1290$i$i = $780;$$1292$i$i = $779;
             }
             while(1) {
              $784 = ((($$1290$i$i)) + 20|0);
              $785 = load4($784);
              $786 = ($785|0)==(0|0);
              if (!($786)) {
               $$1290$i$i = $785;$$1292$i$i = $784;
               continue;
              }
              $787 = ((($$1290$i$i)) + 16|0);
              $788 = load4($787);
              $789 = ($788|0)==(0|0);
              if ($789) {
               break;
              } else {
               $$1290$i$i = $788;$$1292$i$i = $787;
              }
             }
             $790 = ($$1292$i$i>>>0)<($749>>>0);
             if ($790) {
              _abort();
              // unreachable;
             } else {
              store4($$1292$i$i,0);
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $769 = ((($714)) + 8|0);
             $770 = load4($769);
             $771 = ($770>>>0)<($749>>>0);
             if ($771) {
              _abort();
              // unreachable;
             }
             $772 = ((($770)) + 12|0);
             $773 = load4($772);
             $774 = ($773|0)==($714|0);
             if (!($774)) {
              _abort();
              // unreachable;
             }
             $775 = ((($767)) + 8|0);
             $776 = load4($775);
             $777 = ($776|0)==($714|0);
             if ($777) {
              store4($772,$767);
              store4($775,$770);
              $$3$i$i = $767;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $791 = ($765|0)==(0|0);
           if ($791) {
            break;
           }
           $792 = ((($714)) + 28|0);
           $793 = load4($792);
           $794 = (9148 + ($793<<2)|0);
           $795 = load4($794);
           $796 = ($714|0)==($795|0);
           do {
            if ($796) {
             store4($794,$$3$i$i);
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $797 = 1 << $793;
             $798 = $797 ^ -1;
             $799 = load4((8848));
             $800 = $799 & $798;
             store4((8848),$800);
             break L326;
            } else {
             $801 = load4((8860));
             $802 = ($765>>>0)<($801>>>0);
             if ($802) {
              _abort();
              // unreachable;
             }
             $803 = ((($765)) + 16|0);
             $804 = load4($803);
             $805 = ($804|0)==($714|0);
             if ($805) {
              store4($803,$$3$i$i);
             } else {
              $806 = ((($765)) + 20|0);
              store4($806,$$3$i$i);
             }
             $807 = ($$3$i$i|0)==(0|0);
             if ($807) {
              break L326;
             }
            }
           } while(0);
           $808 = load4((8860));
           $809 = ($$3$i$i>>>0)<($808>>>0);
           if ($809) {
            _abort();
            // unreachable;
           }
           $810 = ((($$3$i$i)) + 24|0);
           store4($810,$765);
           $811 = ((($714)) + 16|0);
           $812 = load4($811);
           $813 = ($812|0)==(0|0);
           do {
            if (!($813)) {
             $814 = ($812>>>0)<($808>>>0);
             if ($814) {
              _abort();
              // unreachable;
             } else {
              $815 = ((($$3$i$i)) + 16|0);
              store4($815,$812);
              $816 = ((($812)) + 24|0);
              store4($816,$$3$i$i);
              break;
             }
            }
           } while(0);
           $817 = ((($811)) + 4|0);
           $818 = load4($817);
           $819 = ($818|0)==(0|0);
           if ($819) {
            break;
           }
           $820 = load4((8860));
           $821 = ($818>>>0)<($820>>>0);
           if ($821) {
            _abort();
            // unreachable;
           } else {
            $822 = ((($$3$i$i)) + 20|0);
            store4($822,$818);
            $823 = ((($818)) + 24|0);
            store4($823,$$3$i$i);
            break;
           }
          }
         } while(0);
         $824 = (($714) + ($738)|0);
         $825 = (($738) + ($719))|0;
         $$0$i18$i = $824;$$0286$i$i = $825;
        } else {
         $$0$i18$i = $714;$$0286$i$i = $719;
        }
        $826 = ((($$0$i18$i)) + 4|0);
        $827 = load4($826);
        $828 = $827 & -2;
        store4($826,$828);
        $829 = $$0286$i$i | 1;
        $830 = ((($718)) + 4|0);
        store4($830,$829);
        $831 = (($718) + ($$0286$i$i)|0);
        store4($831,$$0286$i$i);
        $832 = $$0286$i$i >>> 3;
        $833 = ($$0286$i$i>>>0)<(256);
        if ($833) {
         $834 = $832 << 1;
         $835 = (8884 + ($834<<2)|0);
         $836 = load4(8844);
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           store4(8844,$840);
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = load4($841);
           $843 = load4((8860));
           $844 = ($842>>>0)<($843>>>0);
           if (!($844)) {
            $$0294$i$i = $842;$$pre$phi$i20$iZ2D = $841;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i20$iZ2D,$718);
         $845 = ((($$0294$i$i)) + 12|0);
         store4($845,$718);
         $846 = ((($718)) + 8|0);
         store4($846,$$0294$i$i);
         $847 = ((($718)) + 12|0);
         store4($847,$835);
         break;
        }
        $848 = $$0286$i$i >>> 8;
        $849 = ($848|0)==(0);
        do {
         if ($849) {
          $$0295$i$i = 0;
         } else {
          $850 = ($$0286$i$i>>>0)>(16777215);
          if ($850) {
           $$0295$i$i = 31;
           break;
          }
          $851 = (($848) + 1048320)|0;
          $852 = $851 >>> 16;
          $853 = $852 & 8;
          $854 = $848 << $853;
          $855 = (($854) + 520192)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 4;
          $858 = $857 | $853;
          $859 = $854 << $857;
          $860 = (($859) + 245760)|0;
          $861 = $860 >>> 16;
          $862 = $861 & 2;
          $863 = $858 | $862;
          $864 = (14 - ($863))|0;
          $865 = $859 << $862;
          $866 = $865 >>> 15;
          $867 = (($864) + ($866))|0;
          $868 = $867 << 1;
          $869 = (($867) + 7)|0;
          $870 = $$0286$i$i >>> $869;
          $871 = $870 & 1;
          $872 = $871 | $868;
          $$0295$i$i = $872;
         }
        } while(0);
        $873 = (9148 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        store4($874,$$0295$i$i);
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        store4($876,0);
        store4($875,0);
        $877 = load4((8848));
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         store4((8848),$881);
         store4($873,$718);
         $882 = ((($718)) + 24|0);
         store4($882,$873);
         $883 = ((($718)) + 12|0);
         store4($883,$718);
         $884 = ((($718)) + 8|0);
         store4($884,$718);
         break;
        }
        $885 = load4($873);
        $886 = ($$0295$i$i|0)==(31);
        $887 = $$0295$i$i >>> 1;
        $888 = (25 - ($887))|0;
        $889 = $886 ? 0 : $888;
        $890 = $$0286$i$i << $889;
        $$0287$i$i = $890;$$0288$i$i = $885;
        while(1) {
         $891 = ((($$0288$i$i)) + 4|0);
         $892 = load4($891);
         $893 = $892 & -8;
         $894 = ($893|0)==($$0286$i$i|0);
         if ($894) {
          label = 278;
          break;
         }
         $895 = $$0287$i$i >>> 31;
         $896 = (((($$0288$i$i)) + 16|0) + ($895<<2)|0);
         $897 = $$0287$i$i << 1;
         $898 = load4($896);
         $899 = ($898|0)==(0|0);
         if ($899) {
          label = 275;
          break;
         } else {
          $$0287$i$i = $897;$$0288$i$i = $898;
         }
        }
        if ((label|0) == 275) {
         $900 = load4((8860));
         $901 = ($896>>>0)<($900>>>0);
         if ($901) {
          _abort();
          // unreachable;
         } else {
          store4($896,$718);
          $902 = ((($718)) + 24|0);
          store4($902,$$0288$i$i);
          $903 = ((($718)) + 12|0);
          store4($903,$718);
          $904 = ((($718)) + 8|0);
          store4($904,$718);
          break;
         }
        }
        else if ((label|0) == 278) {
         $905 = ((($$0288$i$i)) + 8|0);
         $906 = load4($905);
         $907 = load4((8860));
         $908 = ($906>>>0)>=($907>>>0);
         $not$$i22$i = ($$0288$i$i>>>0)>=($907>>>0);
         $909 = $908 & $not$$i22$i;
         if ($909) {
          $910 = ((($906)) + 12|0);
          store4($910,$718);
          store4($905,$718);
          $911 = ((($718)) + 8|0);
          store4($911,$906);
          $912 = ((($718)) + 12|0);
          store4($912,$$0288$i$i);
          $913 = ((($718)) + 24|0);
          store4($913,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1044 = ((($706)) + 8|0);
      $$0 = $1044;
      STACKTOP = sp;return ($$0|0);
     } else {
      $$0$i$i$i = (9292);
     }
    }
    while(1) {
     $914 = load4($$0$i$i$i);
     $915 = ($914>>>0)>($627>>>0);
     if (!($915)) {
      $916 = ((($$0$i$i$i)) + 4|0);
      $917 = load4($916);
      $918 = (($914) + ($917)|0);
      $919 = ($918>>>0)>($627>>>0);
      if ($919) {
       break;
      }
     }
     $920 = ((($$0$i$i$i)) + 8|0);
     $921 = load4($920);
     $$0$i$i$i = $921;
    }
    $922 = ((($918)) + -47|0);
    $923 = ((($922)) + 8|0);
    $924 = $923;
    $925 = $924 & 7;
    $926 = ($925|0)==(0);
    $927 = (0 - ($924))|0;
    $928 = $927 & 7;
    $929 = $926 ? 0 : $928;
    $930 = (($922) + ($929)|0);
    $931 = ((($627)) + 16|0);
    $932 = ($930>>>0)<($931>>>0);
    $933 = $932 ? $627 : $930;
    $934 = ((($933)) + 8|0);
    $935 = ((($933)) + 24|0);
    $936 = (($$723947$i) + -40)|0;
    $937 = ((($$748$i)) + 8|0);
    $938 = $937;
    $939 = $938 & 7;
    $940 = ($939|0)==(0);
    $941 = (0 - ($938))|0;
    $942 = $941 & 7;
    $943 = $940 ? 0 : $942;
    $944 = (($$748$i) + ($943)|0);
    $945 = (($936) - ($943))|0;
    store4((8868),$944);
    store4((8856),$945);
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    store4($947,$946);
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    store4($949,40);
    $950 = load4((9332));
    store4((8872),$950);
    $951 = ((($933)) + 4|0);
    store4($951,27);
    ; store8($934,load8((9292),4),4); store8($934+8 | 0,load8((9292)+8 | 0,4),4);
    store4((9292),$$748$i);
    store4((9296),$$723947$i);
    store4((9304),0);
    store4((9300),$934);
    $$0$i$i = $935;
    while(1) {
     $952 = ((($$0$i$i)) + 4|0);
     store4($952,7);
     $953 = ((($952)) + 4|0);
     $954 = ($953>>>0)<($918>>>0);
     if ($954) {
      $$0$i$i = $952;
     } else {
      break;
     }
    }
    $955 = ($933|0)==($627|0);
    if (!($955)) {
     $956 = $933;
     $957 = $627;
     $958 = (($956) - ($957))|0;
     $959 = load4($951);
     $960 = $959 & -2;
     store4($951,$960);
     $961 = $958 | 1;
     $962 = ((($627)) + 4|0);
     store4($962,$961);
     store4($933,$958);
     $963 = $958 >>> 3;
     $964 = ($958>>>0)<(256);
     if ($964) {
      $965 = $963 << 1;
      $966 = (8884 + ($965<<2)|0);
      $967 = load4(8844);
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       store4(8844,$971);
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = load4($972);
       $974 = load4((8860));
       $975 = ($973>>>0)<($974>>>0);
       if ($975) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $973;$$pre$phi$i$iZ2D = $972;
       }
      }
      store4($$pre$phi$i$iZ2D,$627);
      $976 = ((($$0211$i$i)) + 12|0);
      store4($976,$627);
      $977 = ((($627)) + 8|0);
      store4($977,$$0211$i$i);
      $978 = ((($627)) + 12|0);
      store4($978,$966);
      break;
     }
     $979 = $958 >>> 8;
     $980 = ($979|0)==(0);
     if ($980) {
      $$0212$i$i = 0;
     } else {
      $981 = ($958>>>0)>(16777215);
      if ($981) {
       $$0212$i$i = 31;
      } else {
       $982 = (($979) + 1048320)|0;
       $983 = $982 >>> 16;
       $984 = $983 & 8;
       $985 = $979 << $984;
       $986 = (($985) + 520192)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 4;
       $989 = $988 | $984;
       $990 = $985 << $988;
       $991 = (($990) + 245760)|0;
       $992 = $991 >>> 16;
       $993 = $992 & 2;
       $994 = $989 | $993;
       $995 = (14 - ($994))|0;
       $996 = $990 << $993;
       $997 = $996 >>> 15;
       $998 = (($995) + ($997))|0;
       $999 = $998 << 1;
       $1000 = (($998) + 7)|0;
       $1001 = $958 >>> $1000;
       $1002 = $1001 & 1;
       $1003 = $1002 | $999;
       $$0212$i$i = $1003;
      }
     }
     $1004 = (9148 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     store4($1005,$$0212$i$i);
     $1006 = ((($627)) + 20|0);
     store4($1006,0);
     store4($931,0);
     $1007 = load4((8848));
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      store4((8848),$1011);
      store4($1004,$627);
      $1012 = ((($627)) + 24|0);
      store4($1012,$1004);
      $1013 = ((($627)) + 12|0);
      store4($1013,$627);
      $1014 = ((($627)) + 8|0);
      store4($1014,$627);
      break;
     }
     $1015 = load4($1004);
     $1016 = ($$0212$i$i|0)==(31);
     $1017 = $$0212$i$i >>> 1;
     $1018 = (25 - ($1017))|0;
     $1019 = $1016 ? 0 : $1018;
     $1020 = $958 << $1019;
     $$0206$i$i = $1020;$$0207$i$i = $1015;
     while(1) {
      $1021 = ((($$0207$i$i)) + 4|0);
      $1022 = load4($1021);
      $1023 = $1022 & -8;
      $1024 = ($1023|0)==($958|0);
      if ($1024) {
       label = 304;
       break;
      }
      $1025 = $$0206$i$i >>> 31;
      $1026 = (((($$0207$i$i)) + 16|0) + ($1025<<2)|0);
      $1027 = $$0206$i$i << 1;
      $1028 = load4($1026);
      $1029 = ($1028|0)==(0|0);
      if ($1029) {
       label = 301;
       break;
      } else {
       $$0206$i$i = $1027;$$0207$i$i = $1028;
      }
     }
     if ((label|0) == 301) {
      $1030 = load4((8860));
      $1031 = ($1026>>>0)<($1030>>>0);
      if ($1031) {
       _abort();
       // unreachable;
      } else {
       store4($1026,$627);
       $1032 = ((($627)) + 24|0);
       store4($1032,$$0207$i$i);
       $1033 = ((($627)) + 12|0);
       store4($1033,$627);
       $1034 = ((($627)) + 8|0);
       store4($1034,$627);
       break;
      }
     }
     else if ((label|0) == 304) {
      $1035 = ((($$0207$i$i)) + 8|0);
      $1036 = load4($1035);
      $1037 = load4((8860));
      $1038 = ($1036>>>0)>=($1037>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1037>>>0);
      $1039 = $1038 & $not$$i$i;
      if ($1039) {
       $1040 = ((($1036)) + 12|0);
       store4($1040,$627);
       store4($1035,$627);
       $1041 = ((($627)) + 8|0);
       store4($1041,$1036);
       $1042 = ((($627)) + 12|0);
       store4($1042,$$0207$i$i);
       $1043 = ((($627)) + 24|0);
       store4($1043,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1045 = load4((8856));
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   store4((8856),$1047);
   $1048 = load4((8868));
   $1049 = (($1048) + ($$0197)|0);
   store4((8868),$1049);
   $1050 = $1047 | 1;
   $1051 = ((($1049)) + 4|0);
   store4($1051,$1050);
   $1052 = $$0197 | 3;
   $1053 = ((($1048)) + 4|0);
   store4($1053,$1052);
   $1054 = ((($1048)) + 8|0);
   $$0 = $1054;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1055 = (___errno_location()|0);
 store4($1055,12);
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381 = 0, $$0382 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1388 = 0, $$1396 = 0, $$1400 = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi439Z2D = 0, $$pre$phi441Z2D = 0, $$pre$phiZ2D = 0, $$pre438 = 0;
 var $$pre440 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond418 = 0, $cond419 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = load4((8860));
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = load4($5);
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 do {
  if ($12) {
   $13 = load4($2);
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = load4((8864));
   $20 = ($16|0)==($19|0);
   if ($20) {
    $105 = ((($10)) + 4|0);
    $106 = load4($105);
    $107 = $106 & 3;
    $108 = ($107|0)==(3);
    if (!($108)) {
     $$1 = $16;$$1380 = $17;
     break;
    }
    store4((8852),$17);
    $109 = $106 & -2;
    store4($105,$109);
    $110 = $17 | 1;
    $111 = ((($16)) + 4|0);
    store4($111,$110);
    $112 = (($16) + ($17)|0);
    store4($112,$17);
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = load4($23);
    $25 = ((($16)) + 12|0);
    $26 = load4($25);
    $27 = $21 << 1;
    $28 = (8884 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = load4($31);
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = load4(8844);
     $38 = $37 & $36;
     store4(8844,$38);
     $$1 = $16;$$1380 = $17;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre440 = ((($26)) + 8|0);
     $$pre$phi441Z2D = $$pre440;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = load4($41);
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi441Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    store4($44,$26);
    store4($$pre$phi441Z2D,$24);
    $$1 = $16;$$1380 = $17;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = load4($45);
   $47 = ((($16)) + 12|0);
   $48 = load4($47);
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = load4($60);
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = load4($59);
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385 = $63;$$1388 = $59;
      }
     } else {
      $$1385 = $61;$$1388 = $60;
     }
     while(1) {
      $65 = ((($$1385)) + 20|0);
      $66 = load4($65);
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1385 = $66;$$1388 = $65;
       continue;
      }
      $68 = ((($$1385)) + 16|0);
      $69 = load4($68);
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1385 = $69;$$1388 = $68;
      }
     }
     $71 = ($$1388>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      store4($$1388,0);
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = load4($50);
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = load4($53);
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = load4($56);
     $58 = ($57|0)==($16|0);
     if ($58) {
      store4($53,$48);
      store4($56,$51);
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1380 = $17;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = load4($73);
    $75 = (9148 + ($74<<2)|0);
    $76 = load4($75);
    $77 = ($16|0)==($76|0);
    if ($77) {
     store4($75,$$3);
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = load4((8848));
      $81 = $80 & $79;
      store4((8848),$81);
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = load4((8860));
     $83 = ($46>>>0)<($82>>>0);
     if ($83) {
      _abort();
      // unreachable;
     }
     $84 = ((($46)) + 16|0);
     $85 = load4($84);
     $86 = ($85|0)==($16|0);
     if ($86) {
      store4($84,$$3);
     } else {
      $87 = ((($46)) + 20|0);
      store4($87,$$3);
     }
     $88 = ($$3|0)==(0|0);
     if ($88) {
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
    $89 = load4((8860));
    $90 = ($$3>>>0)<($89>>>0);
    if ($90) {
     _abort();
     // unreachable;
    }
    $91 = ((($$3)) + 24|0);
    store4($91,$46);
    $92 = ((($16)) + 16|0);
    $93 = load4($92);
    $94 = ($93|0)==(0|0);
    do {
     if (!($94)) {
      $95 = ($93>>>0)<($89>>>0);
      if ($95) {
       _abort();
       // unreachable;
      } else {
       $96 = ((($$3)) + 16|0);
       store4($96,$93);
       $97 = ((($93)) + 24|0);
       store4($97,$$3);
       break;
      }
     }
    } while(0);
    $98 = ((($92)) + 4|0);
    $99 = load4($98);
    $100 = ($99|0)==(0|0);
    if ($100) {
     $$1 = $16;$$1380 = $17;
    } else {
     $101 = load4((8860));
     $102 = ($99>>>0)<($101>>>0);
     if ($102) {
      _abort();
      // unreachable;
     } else {
      $103 = ((($$3)) + 20|0);
      store4($103,$99);
      $104 = ((($99)) + 24|0);
      store4($104,$$3);
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1380 = $9;
  }
 } while(0);
 $113 = ($$1>>>0)<($10>>>0);
 if (!($113)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = load4($114);
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = load4((8868));
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = load4((8856));
   $123 = (($122) + ($$1380))|0;
   store4((8856),$123);
   store4((8868),$$1);
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   store4($125,$124);
   $126 = load4((8864));
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   store4((8864),0);
   store4((8852),0);
   return;
  }
  $128 = load4((8864));
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = load4((8852));
   $131 = (($130) + ($$1380))|0;
   store4((8852),$131);
   store4((8864),$$1);
   $132 = $131 | 1;
   $133 = ((($$1)) + 4|0);
   store4($133,$132);
   $134 = (($$1) + ($131)|0);
   store4($134,$131);
   return;
  }
  $135 = $115 & -8;
  $136 = (($135) + ($$1380))|0;
  $137 = $115 >>> 3;
  $138 = ($115>>>0)<(256);
  do {
   if ($138) {
    $139 = ((($10)) + 8|0);
    $140 = load4($139);
    $141 = ((($10)) + 12|0);
    $142 = load4($141);
    $143 = $137 << 1;
    $144 = (8884 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = load4((8860));
     $147 = ($140>>>0)<($146>>>0);
     if ($147) {
      _abort();
      // unreachable;
     }
     $148 = ((($140)) + 12|0);
     $149 = load4($148);
     $150 = ($149|0)==($10|0);
     if (!($150)) {
      _abort();
      // unreachable;
     }
    }
    $151 = ($142|0)==($140|0);
    if ($151) {
     $152 = 1 << $137;
     $153 = $152 ^ -1;
     $154 = load4(8844);
     $155 = $154 & $153;
     store4(8844,$155);
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = load4((8860));
     $158 = ($142>>>0)<($157>>>0);
     if ($158) {
      _abort();
      // unreachable;
     }
     $159 = ((($142)) + 8|0);
     $160 = load4($159);
     $161 = ($160|0)==($10|0);
     if ($161) {
      $$pre$phi439Z2D = $159;
     } else {
      _abort();
      // unreachable;
     }
    }
    $162 = ((($140)) + 12|0);
    store4($162,$142);
    store4($$pre$phi439Z2D,$140);
   } else {
    $163 = ((($10)) + 24|0);
    $164 = load4($163);
    $165 = ((($10)) + 12|0);
    $166 = load4($165);
    $167 = ($166|0)==($10|0);
    do {
     if ($167) {
      $178 = ((($10)) + 16|0);
      $179 = ((($178)) + 4|0);
      $180 = load4($179);
      $181 = ($180|0)==(0|0);
      if ($181) {
       $182 = load4($178);
       $183 = ($182|0)==(0|0);
       if ($183) {
        $$3398 = 0;
        break;
       } else {
        $$1396 = $182;$$1400 = $178;
       }
      } else {
       $$1396 = $180;$$1400 = $179;
      }
      while(1) {
       $184 = ((($$1396)) + 20|0);
       $185 = load4($184);
       $186 = ($185|0)==(0|0);
       if (!($186)) {
        $$1396 = $185;$$1400 = $184;
        continue;
       }
       $187 = ((($$1396)) + 16|0);
       $188 = load4($187);
       $189 = ($188|0)==(0|0);
       if ($189) {
        break;
       } else {
        $$1396 = $188;$$1400 = $187;
       }
      }
      $190 = load4((8860));
      $191 = ($$1400>>>0)<($190>>>0);
      if ($191) {
       _abort();
       // unreachable;
      } else {
       store4($$1400,0);
       $$3398 = $$1396;
       break;
      }
     } else {
      $168 = ((($10)) + 8|0);
      $169 = load4($168);
      $170 = load4((8860));
      $171 = ($169>>>0)<($170>>>0);
      if ($171) {
       _abort();
       // unreachable;
      }
      $172 = ((($169)) + 12|0);
      $173 = load4($172);
      $174 = ($173|0)==($10|0);
      if (!($174)) {
       _abort();
       // unreachable;
      }
      $175 = ((($166)) + 8|0);
      $176 = load4($175);
      $177 = ($176|0)==($10|0);
      if ($177) {
       store4($172,$166);
       store4($175,$169);
       $$3398 = $166;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $192 = ($164|0)==(0|0);
    if (!($192)) {
     $193 = ((($10)) + 28|0);
     $194 = load4($193);
     $195 = (9148 + ($194<<2)|0);
     $196 = load4($195);
     $197 = ($10|0)==($196|0);
     if ($197) {
      store4($195,$$3398);
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = load4((8848));
       $201 = $200 & $199;
       store4((8848),$201);
       break;
      }
     } else {
      $202 = load4((8860));
      $203 = ($164>>>0)<($202>>>0);
      if ($203) {
       _abort();
       // unreachable;
      }
      $204 = ((($164)) + 16|0);
      $205 = load4($204);
      $206 = ($205|0)==($10|0);
      if ($206) {
       store4($204,$$3398);
      } else {
       $207 = ((($164)) + 20|0);
       store4($207,$$3398);
      }
      $208 = ($$3398|0)==(0|0);
      if ($208) {
       break;
      }
     }
     $209 = load4((8860));
     $210 = ($$3398>>>0)<($209>>>0);
     if ($210) {
      _abort();
      // unreachable;
     }
     $211 = ((($$3398)) + 24|0);
     store4($211,$164);
     $212 = ((($10)) + 16|0);
     $213 = load4($212);
     $214 = ($213|0)==(0|0);
     do {
      if (!($214)) {
       $215 = ($213>>>0)<($209>>>0);
       if ($215) {
        _abort();
        // unreachable;
       } else {
        $216 = ((($$3398)) + 16|0);
        store4($216,$213);
        $217 = ((($213)) + 24|0);
        store4($217,$$3398);
        break;
       }
      }
     } while(0);
     $218 = ((($212)) + 4|0);
     $219 = load4($218);
     $220 = ($219|0)==(0|0);
     if (!($220)) {
      $221 = load4((8860));
      $222 = ($219>>>0)<($221>>>0);
      if ($222) {
       _abort();
       // unreachable;
      } else {
       $223 = ((($$3398)) + 20|0);
       store4($223,$219);
       $224 = ((($219)) + 24|0);
       store4($224,$$3398);
       break;
      }
     }
    }
   }
  } while(0);
  $225 = $136 | 1;
  $226 = ((($$1)) + 4|0);
  store4($226,$225);
  $227 = (($$1) + ($136)|0);
  store4($227,$136);
  $228 = load4((8864));
  $229 = ($$1|0)==($228|0);
  if ($229) {
   store4((8852),$136);
   return;
  } else {
   $$2 = $136;
  }
 } else {
  $230 = $115 & -2;
  store4($114,$230);
  $231 = $$1380 | 1;
  $232 = ((($$1)) + 4|0);
  store4($232,$231);
  $233 = (($$1) + ($$1380)|0);
  store4($233,$$1380);
  $$2 = $$1380;
 }
 $234 = $$2 >>> 3;
 $235 = ($$2>>>0)<(256);
 if ($235) {
  $236 = $234 << 1;
  $237 = (8884 + ($236<<2)|0);
  $238 = load4(8844);
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   store4(8844,$242);
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = load4($243);
   $245 = load4((8860));
   $246 = ($244>>>0)<($245>>>0);
   if ($246) {
    _abort();
    // unreachable;
   } else {
    $$0401 = $244;$$pre$phiZ2D = $243;
   }
  }
  store4($$pre$phiZ2D,$$1);
  $247 = ((($$0401)) + 12|0);
  store4($247,$$1);
  $248 = ((($$1)) + 8|0);
  store4($248,$$0401);
  $249 = ((($$1)) + 12|0);
  store4($249,$237);
  return;
 }
 $250 = $$2 >>> 8;
 $251 = ($250|0)==(0);
 if ($251) {
  $$0394 = 0;
 } else {
  $252 = ($$2>>>0)>(16777215);
  if ($252) {
   $$0394 = 31;
  } else {
   $253 = (($250) + 1048320)|0;
   $254 = $253 >>> 16;
   $255 = $254 & 8;
   $256 = $250 << $255;
   $257 = (($256) + 520192)|0;
   $258 = $257 >>> 16;
   $259 = $258 & 4;
   $260 = $259 | $255;
   $261 = $256 << $259;
   $262 = (($261) + 245760)|0;
   $263 = $262 >>> 16;
   $264 = $263 & 2;
   $265 = $260 | $264;
   $266 = (14 - ($265))|0;
   $267 = $261 << $264;
   $268 = $267 >>> 15;
   $269 = (($266) + ($268))|0;
   $270 = $269 << 1;
   $271 = (($269) + 7)|0;
   $272 = $$2 >>> $271;
   $273 = $272 & 1;
   $274 = $273 | $270;
   $$0394 = $274;
  }
 }
 $275 = (9148 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 store4($276,$$0394);
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 store4($278,0);
 store4($277,0);
 $279 = load4((8848));
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   store4((8848),$283);
   store4($275,$$1);
   $284 = ((($$1)) + 24|0);
   store4($284,$275);
   $285 = ((($$1)) + 12|0);
   store4($285,$$1);
   $286 = ((($$1)) + 8|0);
   store4($286,$$1);
  } else {
   $287 = load4($275);
   $288 = ($$0394|0)==(31);
   $289 = $$0394 >>> 1;
   $290 = (25 - ($289))|0;
   $291 = $288 ? 0 : $290;
   $292 = $$2 << $291;
   $$0381 = $292;$$0382 = $287;
   while(1) {
    $293 = ((($$0382)) + 4|0);
    $294 = load4($293);
    $295 = $294 & -8;
    $296 = ($295|0)==($$2|0);
    if ($296) {
     label = 130;
     break;
    }
    $297 = $$0381 >>> 31;
    $298 = (((($$0382)) + 16|0) + ($297<<2)|0);
    $299 = $$0381 << 1;
    $300 = load4($298);
    $301 = ($300|0)==(0|0);
    if ($301) {
     label = 127;
     break;
    } else {
     $$0381 = $299;$$0382 = $300;
    }
   }
   if ((label|0) == 127) {
    $302 = load4((8860));
    $303 = ($298>>>0)<($302>>>0);
    if ($303) {
     _abort();
     // unreachable;
    } else {
     store4($298,$$1);
     $304 = ((($$1)) + 24|0);
     store4($304,$$0382);
     $305 = ((($$1)) + 12|0);
     store4($305,$$1);
     $306 = ((($$1)) + 8|0);
     store4($306,$$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $307 = ((($$0382)) + 8|0);
    $308 = load4($307);
    $309 = load4((8860));
    $310 = ($308>>>0)>=($309>>>0);
    $not$ = ($$0382>>>0)>=($309>>>0);
    $311 = $310 & $not$;
    if ($311) {
     $312 = ((($308)) + 12|0);
     store4($312,$$1);
     store4($307,$$1);
     $313 = ((($$1)) + 8|0);
     store4($313,$308);
     $314 = ((($$1)) + 12|0);
     store4($314,$$0382);
     $315 = ((($$1)) + 24|0);
     store4($315,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $316 = load4((8876));
 $317 = (($316) + -1)|0;
 store4((8876),$317);
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (9300);
 } else {
  return;
 }
 while(1) {
  $$0211$i = load4($$0211$in$i);
  $319 = ($$0211$i|0)==(0|0);
  $320 = ((($$0211$i)) + 8|0);
  if ($319) {
   break;
  } else {
   $$0211$in$i = $320;
  }
 }
 store4((8876),-1);
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((7742|0),(7765|0),304,(7988|0));
 // unreachable;
}
function __ZNSt3__211char_traitsIcE7compareEPKcS3_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(0);
 if ($3) {
  $5 = 0;
 } else {
  $4 = (_memcmp($0,$1,$2)|0);
  $5 = $4;
 }
 return ($5|0);
}
function __Znwj($0) {
 $0 = $0|0;
 var $$ = 0, $$lcssa = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0);
 $$ = $1 ? 1 : $0;
 while(1) {
  $2 = (_malloc($$)|0);
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   $$lcssa = $2;
   break;
  }
  $4 = (__ZSt15get_new_handlerv()|0);
  $5 = ($4|0)==(0|0);
  if ($5) {
   $$lcssa = 0;
   break;
  }
  FUNCTION_TABLE_v[$4 & 3]();
 }
 return ($$lcssa|0);
}
function __ZdlPv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((7862|0),(7891|0),1183,(7988|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((8009|0),(7891|0),1194,(8038|0));
 // unreachable;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 $2 = ((($1)) + 11|0);
 $3 = load1($2);
 $4 = ($3<<24>>24)<(0);
 if ($4) {
  $5 = load4($1);
  $6 = ((($1)) + 4|0);
  $7 = load4($6);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($0,$5,$7);
 } else {
  ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$016 = 0, $$017 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2>>>0)>(4294967279);
 if ($3) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $4 = ($2>>>0)<(11);
 if ($4) {
  $11 = $2&255;
  $12 = ((($0)) + 11|0);
  store1($12,$11);
  $13 = ($2|0)==(0);
  if ($13) {
   $$017 = $0;
  } else {
   $$016 = $0;
   label = 6;
  }
 } else {
  $5 = (($2) + 16)|0;
  $6 = $5 & -16;
  $7 = (__Znwj($6)|0);
  store4($0,$7);
  $8 = $6 | -2147483648;
  $9 = ((($0)) + 8|0);
  store4($9,$8);
  $10 = ((($0)) + 4|0);
  store4($10,$2);
  $$016 = $7;
  label = 6;
 }
 if ((label|0) == 6) {
  _memcpy(($$016|0),($1|0),($2|0))|0;
  $$017 = $$016;
 }
 $14 = (($$017) + ($2)|0);
 store1($14,0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_jjRKS4_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($0,i64_const(0,0),4); store4($0+8|0,0,4);
 $5 = ((($1)) + 11|0);
 $6 = load1($5);
 $7 = ($6<<24>>24)<(0);
 $8 = ((($1)) + 4|0);
 $9 = load4($8);
 $10 = $6&255;
 $11 = $7 ? $9 : $10;
 $12 = ($11>>>0)<($2>>>0);
 if ($12) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv($0);
  // unreachable;
 } else {
  $13 = load4($1);
  $14 = $7 ? $13 : $1;
  $15 = (($14) + ($2)|0);
  $16 = (($11) - ($2))|0;
  $17 = ($16>>>0)<($3>>>0);
  $$sroa$speculated = $17 ? $16 : $3;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($0,$15,$$sroa$speculated);
  return;
 }
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 11|0);
 $2 = load1($1);
 $3 = ($2<<24>>24)<(0);
 if ($3) {
  $4 = load4($0);
  __ZdlPv($4);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==($1|0);
 if (!($2)) {
  $3 = ((($1)) + 11|0);
  $4 = load1($3);
  $5 = ($4<<24>>24)<(0);
  $6 = load4($1);
  $7 = $5 ? $6 : $1;
  $8 = ((($1)) + 4|0);
  $9 = load4($8);
  $10 = $4&255;
  $11 = $5 ? $9 : $10;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($0,$7,$11)|0);
 }
 return ($0|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $phitmp$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = ((($0)) + 8|0);
  $7 = load4($6);
  $8 = $7 & 2147483647;
  $phitmp$i = (($8) + -1)|0;
  $10 = $phitmp$i;
 } else {
  $10 = 10;
 }
 $9 = ($10>>>0)<($2>>>0);
 do {
  if ($9) {
   if ($5) {
    $19 = ((($0)) + 4|0);
    $20 = load4($19);
    $23 = $20;
   } else {
    $21 = $4&255;
    $23 = $21;
   }
   $22 = (($2) - ($10))|0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($0,$10,$22,$23,0,$23,$2,$1);
  } else {
   if ($5) {
    $11 = load4($0);
    $13 = $11;
   } else {
    $13 = $0;
   }
   $12 = ($2|0)==(0);
   if (!($12)) {
    _memmove(($13|0),($1|0),($2|0))|0;
   }
   $14 = (($13) + ($2)|0);
   store1($14,0);
   $15 = load1($3);
   $16 = ($15<<24>>24)<(0);
   if ($16) {
    $17 = ((($0)) + 4|0);
    store4($17,$2);
    break;
   } else {
    $18 = $2&255;
    store1($3,$18);
    break;
   }
  }
 } while(0);
 return ($0|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($0,$1,$2,$3,$4,$5,$6,$7) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = $6|0;
 $7 = $7|0;
 var $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $8 = (-18 - ($1))|0;
 $9 = ($8>>>0)<($2>>>0);
 if ($9) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $10 = ((($0)) + 11|0);
 $11 = load1($10);
 $12 = ($11<<24>>24)<(0);
 if ($12) {
  $13 = load4($0);
  $24 = $13;
 } else {
  $24 = $0;
 }
 $14 = ($1>>>0)<(2147483623);
 if ($14) {
  $15 = (($2) + ($1))|0;
  $16 = $1 << 1;
  $17 = ($15>>>0)<($16>>>0);
  $$sroa$speculated = $17 ? $16 : $15;
  $18 = ($$sroa$speculated>>>0)<(11);
  $19 = (($$sroa$speculated) + 16)|0;
  $20 = $19 & -16;
  $phitmp = $18 ? 11 : $20;
  $21 = $phitmp;
 } else {
  $21 = -17;
 }
 $22 = (__Znwj($21)|0);
 $23 = ($4|0)==(0);
 if (!($23)) {
  _memcpy(($22|0),($24|0),($4|0))|0;
 }
 $25 = ($6|0)==(0);
 if (!($25)) {
  $26 = (($22) + ($4)|0);
  _memcpy(($26|0),($7|0),($6|0))|0;
 }
 $27 = (($3) - ($5))|0;
 $28 = (($27) - ($4))|0;
 $29 = ($28|0)==(0);
 if (!($29)) {
  $30 = (($22) + ($4)|0);
  $31 = (($30) + ($6)|0);
  $32 = (($24) + ($4)|0);
  $33 = (($32) + ($5)|0);
  _memcpy(($31|0),($33|0),($28|0))|0;
 }
 $34 = ($1|0)==(10);
 if (!($34)) {
  __ZdlPv($24);
 }
 store4($0,$22);
 $35 = $21 | -2147483648;
 $36 = ((($0)) + 8|0);
 store4($36,$35);
 $37 = (($27) + ($6))|0;
 $38 = ((($0)) + 4|0);
 store4($38,$37);
 $39 = (($22) + ($37)|0);
 store1($39,0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$017$off041 = 0, $$017$off042 = 0, $$017$off047 = 0, $$018$off039 = 0, $$018$off046 = 0, $$01937 = 0, $$01938 = 0, $$01945 = 0, $$02035 = 0, $$02036 = 0, $$02044 = 0, $$phitmp$i = 0, $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i = 0, $phitmp$i22 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1>>>0)>(4294967279);
 if ($2) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = ((($0)) + 8|0);
  $7 = load4($6);
  $8 = $7 & 2147483647;
  $phitmp$i = (($8) + -1)|0;
  $9 = ((($0)) + 4|0);
  $10 = load4($9);
  $13 = $10;$18 = $phitmp$i;
 } else {
  $11 = $4&255;
  $13 = $11;$18 = 10;
 }
 $12 = ($13>>>0)>($1>>>0);
 $$sroa$speculated = $12 ? $13 : $1;
 $14 = ($$sroa$speculated>>>0)<(11);
 $15 = (($$sroa$speculated) + 16)|0;
 $16 = $15 & -16;
 $phitmp$i22 = (($16) + -1)|0;
 $$phitmp$i = $14 ? 10 : $phitmp$i22;
 $17 = ($$phitmp$i|0)==($18|0);
 do {
  if (!($17)) {
   do {
    if ($14) {
     $22 = load4($0);
     if ($5) {
      $$017$off042 = 0;$$01938 = $22;$$02036 = $0;
      label = 12;
     } else {
      $$017$off047 = 0;$$018$off046 = 1;$$01945 = $22;$$02044 = $0;
      label = 13;
     }
    } else {
     $19 = (($$phitmp$i) + 1)|0;
     $20 = (__Znwj($19)|0);
     if ($5) {
      $21 = load4($0);
      $$017$off042 = 1;$$01938 = $21;$$02036 = $20;
      label = 12;
      break;
     } else {
      $$017$off047 = 1;$$018$off046 = 0;$$01945 = $0;$$02044 = $20;
      label = 13;
      break;
     }
    }
   } while(0);
   if ((label|0) == 12) {
    $23 = ((($0)) + 4|0);
    $24 = load4($23);
    $$017$off041 = $$017$off042;$$018$off039 = 1;$$01937 = $$01938;$$02035 = $$02036;$27 = $24;
   }
   else if ((label|0) == 13) {
    $25 = $4&255;
    $$017$off041 = $$017$off047;$$018$off039 = $$018$off046;$$01937 = $$01945;$$02035 = $$02044;$27 = $25;
   }
   $26 = (($27) + 1)|0;
   $28 = ($26|0)==(0);
   if (!($28)) {
    _memcpy(($$02035|0),($$01937|0),($26|0))|0;
   }
   if ($$018$off039) {
    __ZdlPv($$01937);
   }
   if ($$017$off041) {
    $29 = (($$phitmp$i) + 1)|0;
    $30 = $29 | -2147483648;
    $31 = ((($0)) + 8|0);
    store4($31,$30);
    $32 = ((($0)) + 4|0);
    store4($32,$13);
    store4($0,$$02035);
    break;
   } else {
    $33 = $13&255;
    store1($3,$33);
    break;
   }
  }
 } while(0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($0,$1,$2,$3,$4,$5,$6) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = $6|0;
 var $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $7 = (-17 - ($1))|0;
 $8 = ($7>>>0)<($2>>>0);
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0);
  // unreachable;
 }
 $9 = ((($0)) + 11|0);
 $10 = load1($9);
 $11 = ($10<<24>>24)<(0);
 if ($11) {
  $12 = load4($0);
  $23 = $12;
 } else {
  $23 = $0;
 }
 $13 = ($1>>>0)<(2147483623);
 if ($13) {
  $14 = (($2) + ($1))|0;
  $15 = $1 << 1;
  $16 = ($14>>>0)<($15>>>0);
  $$sroa$speculated = $16 ? $15 : $14;
  $17 = ($$sroa$speculated>>>0)<(11);
  $18 = (($$sroa$speculated) + 16)|0;
  $19 = $18 & -16;
  $phitmp = $17 ? 11 : $19;
  $20 = $phitmp;
 } else {
  $20 = -17;
 }
 $21 = (__Znwj($20)|0);
 $22 = ($4|0)==(0);
 if (!($22)) {
  _memcpy(($21|0),($23|0),($4|0))|0;
 }
 $24 = (($3) - ($5))|0;
 $25 = (($24) - ($4))|0;
 $26 = ($25|0)==(0);
 if (!($26)) {
  $27 = (($21) + ($4)|0);
  $28 = (($27) + ($6)|0);
  $29 = (($23) + ($4)|0);
  $30 = (($29) + ($5)|0);
  _memcpy(($28|0),($30|0),($25|0))|0;
 }
 $31 = ($1|0)==(10);
 if (!($31)) {
  __ZdlPv($23);
 }
 store4($0,$21);
 $32 = $20 | -2147483648;
 $33 = ((($0)) + 8|0);
 store4($33,$32);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 11|0);
 $4 = load1($3);
 $5 = ($4<<24>>24)<(0);
 if ($5) {
  $6 = ((($0)) + 8|0);
  $7 = load4($6);
  $8 = $7 & 2147483647;
  $phitmp$i = (($8) + -1)|0;
  $9 = ((($0)) + 4|0);
  $10 = load4($9);
  $13 = $phitmp$i;$14 = $10;
 } else {
  $11 = $4&255;
  $13 = 10;$14 = $11;
 }
 $12 = (($13) - ($14))|0;
 $15 = ($12>>>0)<($2>>>0);
 if ($15) {
  $26 = (($2) - ($13))|0;
  $27 = (($26) + ($14))|0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($0,$13,$27,$14,$14,0,$2,$1);
 } else {
  $16 = ($2|0)==(0);
  if (!($16)) {
   if ($5) {
    $17 = load4($0);
    $19 = $17;
   } else {
    $19 = $0;
   }
   $18 = (($19) + ($14)|0);
   _memcpy(($18|0),($1|0),($2|0))|0;
   $20 = (($14) + ($2))|0;
   $21 = load1($3);
   $22 = ($21<<24>>24)<(0);
   if ($22) {
    $23 = ((($0)) + 4|0);
    store4($23,$20);
   } else {
    $24 = $20&255;
    store1($3,$24);
   }
   $25 = (($19) + ($20)|0);
   store1($25,0);
  }
 }
 return ($0|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$018 = 0, $$019 = 0, $$pn = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 11|0);
 $3 = load1($2);
 $4 = ($3<<24>>24)<(0);
 if ($4) {
  $6 = ((($0)) + 8|0);
  $7 = load4($6);
  $8 = $7 & 2147483647;
  $9 = (($8) + -1)|0;
  $10 = ((($0)) + 4|0);
  $11 = load4($10);
  $$018 = $11;$$019 = $9;
 } else {
  $5 = $3&255;
  $$018 = $5;$$019 = 10;
 }
 $12 = ($$018|0)==($$019|0);
 if ($12) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($0,$$019,1,$$019,$$019,0,0);
  $13 = load1($2);
  $14 = ($13<<24>>24)>(-1);
  if ($14) {
   label = 7;
  } else {
   label = 8;
  }
 } else {
  if ($4) {
   label = 8;
  } else {
   label = 7;
  }
 }
 if ((label|0) == 7) {
  $15 = (($$018) + 1)|0;
  $16 = $15&255;
  store1($2,$16);
  $$pn = $0;
 }
 else if ((label|0) == 8) {
  $17 = load4($0);
  $18 = (($$018) + 1)|0;
  $19 = ((($0)) + 4|0);
  store4($19,$18);
  $$pn = $17;
 }
 $$0 = (($$pn) + ($$018)|0);
 store1($$0,$1);
 $20 = ((($$0)) + 1|0);
 store1($20,0);
 return;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcj($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$i = 0, $$1$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = ((($0)) + 11|0);
 $5 = load1($4);
 $6 = ($5<<24>>24)<(0);
 if ($6) {
  $7 = load4($0);
  $8 = ((($0)) + 4|0);
  $9 = load4($8);
  $12 = $9;$14 = $7;
 } else {
  $10 = $5&255;
  $12 = $10;$14 = $0;
 }
 store1($3,$1);
 $11 = ($12>>>0)>($2>>>0);
 if ($11) {
  $13 = (($14) + ($2)|0);
  $15 = (($12) - ($2))|0;
  $16 = (__ZNSt3__211char_traitsIcE4findEPKcjRS2_($13,$15,$3)|0);
  $17 = ($16|0)==(0|0);
  $18 = $16;
  $19 = $14;
  $20 = (($18) - ($19))|0;
  $$0$i = $17 ? -1 : $20;
  $$1$i = $$0$i;
 } else {
  $$1$i = -1;
 }
 STACKTOP = sp;return ($$1$i|0);
}
function __ZNSt3__211char_traitsIcE4findEPKcjRS2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1|0)==(0);
 if ($3) {
  $7 = 0;
 } else {
  $4 = load1($2);
  $5 = $4&255;
  $6 = (_memchr($0,$5,$1)|0);
  $7 = $6;
 }
 return ($7|0);
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$ = 0, $$sroa$speculated = 0, $$sroa$speculated19 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 11|0);
 $6 = load1($5);
 $7 = ($6<<24>>24)<(0);
 if ($7) {
  $8 = ((($0)) + 4|0);
  $9 = load4($8);
  $12 = $9;
 } else {
  $10 = $6&255;
  $12 = $10;
 }
 $11 = ($12>>>0)<($1>>>0);
 $13 = ($4|0)==(-1);
 $or$cond = $13 | $11;
 if ($or$cond) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv($0);
  // unreachable;
 }
 $14 = (($12) - ($1))|0;
 $15 = ($14>>>0)<($2>>>0);
 $$sroa$speculated = $15 ? $14 : $2;
 if ($7) {
  $16 = load4($0);
  $18 = $16;
 } else {
  $18 = $0;
 }
 $17 = (($18) + ($1)|0);
 $19 = ($$sroa$speculated>>>0)>($4>>>0);
 $$sroa$speculated19 = $19 ? $4 : $$sroa$speculated;
 $20 = (__ZNSt3__211char_traitsIcE7compareEPKcS3_j($17,$3,$$sroa$speculated19)|0);
 $21 = ($20|0)==(0);
 if ($21) {
  $22 = ($$sroa$speculated>>>0)<($4>>>0);
  $$ = $19&1;
  $$$ = $22 ? -1 : $$;
  return ($$$|0);
 } else {
  return ($20|0);
 }
 return (0)|0;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_strlen($1)|0);
 $3 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($0,0,-1,$1,$2)|0);
 return ($3|0);
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = i64(), $8 = i64(), $9 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $0 = sp + 36|0;
 $1 = (___cxa_get_globals_fast()|0);
 $2 = ($1|0)==(0|0);
 if (!($2)) {
  $3 = load4($1);
  $4 = ($3|0)==(0|0);
  if (!($4)) {
   $5 = ((($3)) + 80|0);
   $6 = ((($3)) + 48|0);
   $7 = load8($6);
   $8 = i64_and($7,i64_const(4294967040,4294967295));
   $9 = i64_eq($8,i64_const(1126902528,1129074247));
   if (!($9)) {
    store4($vararg_buffer7,8195);
    _abort_message(8145,$vararg_buffer7);
    // unreachable;
   }
   $10 = i64_eq($7,i64_const(1126902529,1129074247));
   if ($10) {
    $11 = ((($3)) + 44|0);
    $12 = load4($11);
    $13 = $12;
   } else {
    $13 = $5;
   }
   store4($0,$13);
   $14 = load4($3);
   $15 = ((($14)) + 4|0);
   $16 = load4($15);
   $17 = load4(1424);
   $18 = ((($17)) + 16|0);
   $19 = load4($18);
   $20 = (FUNCTION_TABLE_iiii[$19 & 31](1424,$14,$0)|0);
   if ($20) {
    $21 = load4($0);
    $22 = load4($21);
    $23 = ((($22)) + 8|0);
    $24 = load4($23);
    $25 = (FUNCTION_TABLE_ii[$24 & 15]($21)|0);
    store4($vararg_buffer,8195);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$16);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$25);
    _abort_message(8059,$vararg_buffer);
    // unreachable;
   } else {
    store4($vararg_buffer3,8195);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$16);
    _abort_message(8104,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(8183,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_once((9340|0),(2|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  $2 = load4(9344);
  $3 = (_pthread_getspecific(($2|0))|0);
  STACKTOP = sp;return ($3|0);
 } else {
  _abort_message(8334,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 store4($1,$varargs);
 $2 = load4(2048);
 (_vfprintf($2,$0,$1)|0);
 (_fputc(10,$2)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp;
 $4 = ($0|0)==($1|0);
 if ($4) {
  $$2 = 1;
 } else {
  $5 = ($1|0)==(0|0);
  if ($5) {
   $$2 = 0;
  } else {
   $6 = (___dynamic_cast($1,1448,1432,0)|0);
   $7 = ($6|0)==(0|0);
   if ($7) {
    $$2 = 0;
   } else {
    $8 = ((($3)) + 4|0);
    ; store8($8,i64_const(0,0),4); store8($8+8|0,i64_const(0,0),4); store8($8+16|0,i64_const(0,0),4); store8($8+24|0,i64_const(0,0),4); store8($8+32|0,i64_const(0,0),4); store8($8+40|0,i64_const(0,0),4); store4($8+48|0,0,4);
    store4($3,$6);
    $9 = ((($3)) + 8|0);
    store4($9,$0);
    $10 = ((($3)) + 12|0);
    store4($10,-1);
    $11 = ((($3)) + 48|0);
    store4($11,1);
    $12 = load4($6);
    $13 = ((($12)) + 28|0);
    $14 = load4($13);
    $15 = load4($2);
    FUNCTION_TABLE_viiii[$14 & 15]($6,$3,$15,1);
    $16 = ((($3)) + 24|0);
    $17 = load4($16);
    $18 = ($17|0)==(1);
    if ($18) {
     $19 = ((($3)) + 16|0);
     $20 = load4($19);
     store4($2,$20);
     $$0 = 1;
    } else {
     $$0 = 0;
    }
    $$2 = $$0;
   }
  }
 }
 STACKTOP = sp;return ($$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if ($15) {
    $16 = ((($1)) + 16|0);
    $17 = load4($16);
    $18 = ($17|0)==($2|0);
    if (!($18)) {
     $19 = ((($1)) + 20|0);
     $20 = load4($19);
     $21 = ($20|0)==($2|0);
     if (!($21)) {
      $24 = ((($1)) + 32|0);
      store4($24,$3);
      store4($19,$2);
      $25 = ((($1)) + 40|0);
      $26 = load4($25);
      $27 = (($26) + 1)|0;
      store4($25,$27);
      $28 = ((($1)) + 36|0);
      $29 = load4($28);
      $30 = ($29|0)==(1);
      if ($30) {
       $31 = ((($1)) + 24|0);
       $32 = load4($31);
       $33 = ($32|0)==(2);
       if ($33) {
        $34 = ((($1)) + 54|0);
        store1($34,1);
       }
      }
      $35 = ((($1)) + 44|0);
      store4($35,4);
      break;
     }
    }
    $22 = ($3|0)==(1);
    if ($22) {
     $23 = ((($1)) + 32|0);
     store4($23,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 16|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 do {
  if ($6) {
   store4($4,$2);
   $7 = ((($1)) + 24|0);
   store4($7,$3);
   $8 = ((($1)) + 36|0);
   store4($8,1);
  } else {
   $9 = ($5|0)==($2|0);
   if (!($9)) {
    $13 = ((($1)) + 36|0);
    $14 = load4($13);
    $15 = (($14) + 1)|0;
    store4($13,$15);
    $16 = ((($1)) + 24|0);
    store4($16,2);
    $17 = ((($1)) + 54|0);
    store1($17,1);
    break;
   }
   $10 = ((($1)) + 24|0);
   $11 = load4($10);
   $12 = ($11|0)==(2);
   if ($12) {
    store4($10,$3);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond22 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 53|0);
 store1($5,1);
 $6 = ((($1)) + 4|0);
 $7 = load4($6);
 $8 = ($7|0)==($3|0);
 do {
  if ($8) {
   $9 = ((($1)) + 52|0);
   store1($9,1);
   $10 = ((($1)) + 16|0);
   $11 = load4($10);
   $12 = ($11|0)==(0|0);
   if ($12) {
    store4($10,$2);
    $13 = ((($1)) + 24|0);
    store4($13,$4);
    $14 = ((($1)) + 36|0);
    store4($14,1);
    $15 = ((($1)) + 48|0);
    $16 = load4($15);
    $17 = ($16|0)==(1);
    $18 = ($4|0)==(1);
    $or$cond = $17 & $18;
    if (!($or$cond)) {
     break;
    }
    $19 = ((($1)) + 54|0);
    store1($19,1);
    break;
   }
   $20 = ($11|0)==($2|0);
   if (!($20)) {
    $30 = ((($1)) + 36|0);
    $31 = load4($30);
    $32 = (($31) + 1)|0;
    store4($30,$32);
    $33 = ((($1)) + 54|0);
    store1($33,1);
    break;
   }
   $21 = ((($1)) + 24|0);
   $22 = load4($21);
   $23 = ($22|0)==(2);
   if ($23) {
    store4($21,$4);
    $28 = $4;
   } else {
    $28 = $22;
   }
   $24 = ((($1)) + 48|0);
   $25 = load4($24);
   $26 = ($25|0)==(1);
   $27 = ($28|0)==(1);
   $or$cond22 = $26 & $27;
   if ($or$cond22) {
    $29 = ((($1)) + 54|0);
    store1($29,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond28 = 0, $or$cond30 = 0, $or$cond32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $4 = sp;
 $5 = load4($0);
 $6 = ((($5)) + -8|0);
 $7 = load4($6);
 $8 = (($0) + ($7)|0);
 $9 = ((($5)) + -4|0);
 $10 = load4($9);
 store4($4,$2);
 $11 = ((($4)) + 4|0);
 store4($11,$0);
 $12 = ((($4)) + 8|0);
 store4($12,$1);
 $13 = ((($4)) + 12|0);
 store4($13,$3);
 $14 = ((($4)) + 16|0);
 $15 = ((($4)) + 20|0);
 $16 = ((($4)) + 24|0);
 $17 = ((($4)) + 28|0);
 $18 = ((($4)) + 32|0);
 $19 = ((($4)) + 40|0);
 $20 = ($10|0)==($2|0);
 ; store8($14,i64_const(0,0),4); store8($14+8|0,i64_const(0,0),4); store8($14+16|0,i64_const(0,0),4); store8($14+24|0,i64_const(0,0),4); store4($14+32|0,0,4); store2($14+36|0,0,2); store1($14+38|0,0,1);
 L1: do {
  if ($20) {
   $21 = ((($4)) + 48|0);
   store4($21,1);
   $22 = load4($2);
   $23 = ((($22)) + 20|0);
   $24 = load4($23);
   FUNCTION_TABLE_viiiiii[$24 & 3]($2,$4,$8,$8,1,0);
   $25 = load4($16);
   $26 = ($25|0)==(1);
   $$ = $26 ? $8 : 0;
   $$0 = $$;
  } else {
   $27 = ((($4)) + 36|0);
   $28 = load4($10);
   $29 = ((($28)) + 24|0);
   $30 = load4($29);
   FUNCTION_TABLE_viiiii[$30 & 7]($10,$4,$8,1,0);
   $31 = load4($27);
   switch ($31|0) {
   case 0:  {
    $32 = load4($19);
    $33 = ($32|0)==(1);
    $34 = load4($17);
    $35 = ($34|0)==(1);
    $or$cond = $33 & $35;
    $36 = load4($18);
    $37 = ($36|0)==(1);
    $or$cond28 = $or$cond & $37;
    $38 = load4($15);
    $$33 = $or$cond28 ? $38 : 0;
    $$0 = $$33;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $$0 = 0;
    break L1;
   }
   }
   $39 = load4($16);
   $40 = ($39|0)==(1);
   if (!($40)) {
    $41 = load4($19);
    $42 = ($41|0)==(0);
    $43 = load4($17);
    $44 = ($43|0)==(1);
    $or$cond30 = $42 & $44;
    $45 = load4($18);
    $46 = ($45|0)==(1);
    $or$cond32 = $or$cond30 & $46;
    if (!($or$cond32)) {
     $$0 = 0;
     break;
    }
   }
   $47 = load4($14);
   $$0 = $47;
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 } else {
  $9 = ((($0)) + 8|0);
  $10 = load4($9);
  $11 = load4($10);
  $12 = ((($11)) + 20|0);
  $13 = load4($12);
  FUNCTION_TABLE_viiiiii[$13 & 3]($10,$1,$2,$3,$4,$5);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$037$off039 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $49 = ((($0)) + 8|0);
    $50 = load4($49);
    $51 = load4($50);
    $52 = ((($51)) + 24|0);
    $53 = load4($52);
    FUNCTION_TABLE_viiiii[$53 & 7]($50,$1,$2,$3,$4);
    break;
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($1)) + 52|0);
     store1($28,0);
     $29 = ((($1)) + 53|0);
     store1($29,0);
     $30 = ((($0)) + 8|0);
     $31 = load4($30);
     $32 = load4($31);
     $33 = ((($32)) + 20|0);
     $34 = load4($33);
     FUNCTION_TABLE_viiiiii[$34 & 3]($31,$1,$2,$2,1,$4);
     $35 = load1($29);
     $36 = ($35<<24>>24)==(0);
     if ($36) {
      $$037$off039 = 0;
      label = 13;
     } else {
      $37 = load1($28);
      $not$ = ($37<<24>>24)==(0);
      if ($not$) {
       $$037$off039 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       store4($19,$2);
       $38 = ((($1)) + 40|0);
       $39 = load4($38);
       $40 = (($39) + 1)|0;
       store4($38,$40);
       $41 = ((($1)) + 36|0);
       $42 = load4($41);
       $43 = ($42|0)==(1);
       if ($43) {
        $44 = ((($1)) + 24|0);
        $45 = load4($44);
        $46 = ($45|0)==(2);
        if ($46) {
         $47 = ((($1)) + 54|0);
         store1($47,1);
         if ($$037$off039) {
          label = 17;
          break;
         } else {
          $48 = 4;
          break;
         }
        }
       }
       if ($$037$off039) {
        label = 17;
       } else {
        $48 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $48 = 3;
     }
     store4($25,$48);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 } else {
  $7 = ((($0)) + 8|0);
  $8 = load4($7);
  $9 = load4($8);
  $10 = ((($9)) + 28|0);
  $11 = load4($10);
  FUNCTION_TABLE_viiii[$11 & 15]($8,$1,$2,$3);
 }
 return;
}
function __ZNSt9type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_key_create((9344|0),(17|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  STACKTOP = sp;return;
 } else {
  _abort_message(8383,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($0);
 $1 = load4(9344);
 $2 = (_pthread_setspecific(($1|0),(0|0))|0);
 $3 = ($2|0)==(0);
 if ($3) {
  STACKTOP = sp;return;
 } else {
  _abort_message(8433,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = i64(), $6 = i64(), $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___cxa_get_globals_fast()|0);
 $1 = ($0|0)==(0|0);
 if (!($1)) {
  $2 = load4($0);
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   $4 = ((($2)) + 48|0);
   $5 = load8($4);
   $6 = i64_and($5,i64_const(4294967040,4294967295));
   $7 = i64_eq($6,i64_const(1126902528,1129074247));
   if ($7) {
    $8 = ((($2)) + 12|0);
    $9 = load4($8);
    __ZSt11__terminatePFvvE($9);
    // unreachable;
   }
  }
 }
 $10 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($10);
 // unreachable;
}
function __ZSt11__terminatePFvvE($0) {
 $0 = $0|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$0 & 3]();
 _abort_message(8486,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2164);
 $1 = (($0) + 0)|0;
 store4(2164,$1);
 $2 = $0;
 return ($2|0);
}
function __ZNSt9bad_allocD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNKSt9bad_alloc4whatEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (8526|0);
}
function __ZNSt9exceptionD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==($1|0);
 return ($3|0);
}
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$i = 0, $$0 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp;
 $4 = load4($2);
 $5 = load4($4);
 store4($2,$5);
 $6 = ($0|0)==($1|0);
 $7 = ($1|0)==(1560|0);
 $$$i = $6 | $7;
 if ($$$i) {
  $$4 = 1;
 } else {
  $8 = ($1|0)==(0|0);
  if ($8) {
   $$4 = 0;
  } else {
   $9 = (___dynamic_cast($1,1448,1520,0)|0);
   $10 = ($9|0)==(0|0);
   if ($10) {
    $$4 = 0;
   } else {
    $11 = ((($9)) + 8|0);
    $12 = load4($11);
    $13 = ((($0)) + 8|0);
    $14 = load4($13);
    $15 = $14 ^ -1;
    $16 = $12 & $15;
    $17 = ($16|0)==(0);
    if ($17) {
     $18 = ((($0)) + 12|0);
     $19 = load4($18);
     $20 = ((($9)) + 12|0);
     $21 = load4($20);
     $22 = ($19|0)==($21|0);
     $23 = ($19|0)==(1552|0);
     $or$cond = $23 | $22;
     if ($or$cond) {
      $$4 = 1;
     } else {
      $24 = ($19|0)==(0|0);
      if ($24) {
       $$4 = 0;
      } else {
       $25 = (___dynamic_cast($19,1448,1432,0)|0);
       $26 = ($25|0)==(0|0);
       if ($26) {
        $$4 = 0;
       } else {
        $27 = load4($20);
        $28 = ($27|0)==(0|0);
        if ($28) {
         $$4 = 0;
        } else {
         $29 = (___dynamic_cast($27,1448,1432,0)|0);
         $30 = ($29|0)==(0|0);
         if ($30) {
          $$4 = 0;
         } else {
          $31 = ((($3)) + 4|0);
          ; store8($31,i64_const(0,0),4); store8($31+8|0,i64_const(0,0),4); store8($31+16|0,i64_const(0,0),4); store8($31+24|0,i64_const(0,0),4); store8($31+32|0,i64_const(0,0),4); store8($31+40|0,i64_const(0,0),4); store4($31+48|0,0,4);
          store4($3,$29);
          $32 = ((($3)) + 8|0);
          store4($32,$25);
          $33 = ((($3)) + 12|0);
          store4($33,-1);
          $34 = ((($3)) + 48|0);
          store4($34,1);
          $35 = load4($29);
          $36 = ((($35)) + 28|0);
          $37 = load4($36);
          $38 = load4($2);
          FUNCTION_TABLE_viiii[$37 & 15]($29,$3,$38,1);
          $39 = ((($3)) + 24|0);
          $40 = load4($39);
          $41 = ($40|0)==(1);
          if ($41) {
           $42 = ((($3)) + 16|0);
           $43 = load4($42);
           store4($2,$43);
           $$0 = 1;
          } else {
           $$0 = 0;
          }
          $$4 = $$0;
         }
        }
       }
      }
     }
    } else {
     $$4 = 0;
    }
   }
  }
 }
 STACKTOP = sp;return ($$4|0);
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 } else {
  $9 = ((($1)) + 52|0);
  $10 = load2($9);
  $11 = $10&255;
  $12 = ((($1)) + 53|0);
  $13 = ($10&65535) >>> 8;
  $14 = $13&255;
  $15 = ((($0)) + 16|0);
  $16 = ((($0)) + 12|0);
  $17 = load4($16);
  $18 = (((($0)) + 16|0) + ($17<<3)|0);
  store1($9,0);
  store1($12,0);
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($15,$1,$2,$3,$4,$5);
  $19 = ($17|0)>(1);
  L4: do {
   if ($19) {
    $20 = ((($0)) + 24|0);
    $21 = ((($1)) + 24|0);
    $22 = ((($0)) + 8|0);
    $23 = ((($1)) + 54|0);
    $$0 = $20;
    while(1) {
     $24 = load1($23);
     $25 = ($24<<24>>24)==(0);
     if (!($25)) {
      break L4;
     }
     $26 = load2($9);
     $27 = $26&255;
     $28 = ($27<<24>>24)==(0);
     if ($28) {
      $34 = ($26&65535)<(256);
      if (!($34)) {
       $35 = load4($22);
       $36 = $35 & 1;
       $37 = ($36|0)==(0);
       if ($37) {
        break L4;
       }
      }
     } else {
      $29 = load4($21);
      $30 = ($29|0)==(1);
      if ($30) {
       break L4;
      }
      $31 = load4($22);
      $32 = $31 & 2;
      $33 = ($32|0)==(0);
      if ($33) {
       break L4;
      }
     }
     store1($9,0);
     store1($12,0);
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$0,$1,$2,$3,$4,$5);
     $38 = ((($$0)) + 8|0);
     $39 = ($38>>>0)<($18>>>0);
     if ($39) {
      $$0 = $38;
     } else {
      break;
     }
    }
   }
  } while(0);
  store1($9,$11);
  store1($12,$14);
 }
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $$081$off0 = 0, $$084 = 0, $$085$off0 = 0, $$1 = 0, $$182$off0 = 0, $$186$off0 = 0, $$2 = 0, $$283$off0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 L1: do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $62 = ((($0)) + 16|0);
    $63 = ((($0)) + 12|0);
    $64 = load4($63);
    $65 = (((($0)) + 16|0) + ($64<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($62,$1,$2,$3,$4);
    $66 = ((($0)) + 24|0);
    $67 = ($64|0)>(1);
    if (!($67)) {
     break;
    }
    $68 = ((($0)) + 8|0);
    $69 = load4($68);
    $70 = $69 & 2;
    $71 = ($70|0)==(0);
    if ($71) {
     $72 = ((($1)) + 36|0);
     $73 = load4($72);
     $74 = ($73|0)==(1);
     if (!($74)) {
      $80 = $69 & 1;
      $81 = ($80|0)==(0);
      if ($81) {
       $84 = ((($1)) + 54|0);
       $$2 = $66;
       while(1) {
        $93 = load1($84);
        $94 = ($93<<24>>24)==(0);
        if (!($94)) {
         break L1;
        }
        $95 = load4($72);
        $96 = ($95|0)==(1);
        if ($96) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$2,$1,$2,$3,$4);
        $97 = ((($$2)) + 8|0);
        $98 = ($97>>>0)<($65>>>0);
        if ($98) {
         $$2 = $97;
        } else {
         break L1;
        }
       }
      }
      $82 = ((($1)) + 24|0);
      $83 = ((($1)) + 54|0);
      $$1 = $66;
      while(1) {
       $85 = load1($83);
       $86 = ($85<<24>>24)==(0);
       if (!($86)) {
        break L1;
       }
       $87 = load4($72);
       $88 = ($87|0)==(1);
       if ($88) {
        $89 = load4($82);
        $90 = ($89|0)==(1);
        if ($90) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$1,$1,$2,$3,$4);
       $91 = ((($$1)) + 8|0);
       $92 = ($91>>>0)<($65>>>0);
       if ($92) {
        $$1 = $91;
       } else {
        break L1;
       }
      }
     }
    }
    $75 = ((($1)) + 54|0);
    $$0 = $66;
    while(1) {
     $76 = load1($75);
     $77 = ($76<<24>>24)==(0);
     if (!($77)) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$0,$1,$2,$3,$4);
     $78 = ((($$0)) + 8|0);
     $79 = ($78>>>0)<($65>>>0);
     if ($79) {
      $$0 = $78;
     } else {
      break L1;
     }
    }
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($0)) + 16|0);
     $29 = ((($0)) + 12|0);
     $30 = load4($29);
     $31 = (((($0)) + 16|0) + ($30<<3)|0);
     $32 = ((($1)) + 52|0);
     $33 = ((($1)) + 53|0);
     $34 = ((($1)) + 54|0);
     $35 = ((($0)) + 8|0);
     $36 = ((($1)) + 24|0);
     $$081$off0 = 0;$$084 = $28;$$085$off0 = 0;
     L34: while(1) {
      $37 = ($$084>>>0)<($31>>>0);
      if (!($37)) {
       $$283$off0 = $$081$off0;
       label = 20;
       break;
      }
      store1($32,0);
      store1($33,0);
      __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$084,$1,$2,$2,1,$4);
      $38 = load1($34);
      $39 = ($38<<24>>24)==(0);
      if (!($39)) {
       $$283$off0 = $$081$off0;
       label = 20;
       break;
      }
      $40 = load1($33);
      $41 = ($40<<24>>24)==(0);
      do {
       if ($41) {
        $$182$off0 = $$081$off0;$$186$off0 = $$085$off0;
       } else {
        $42 = load1($32);
        $43 = ($42<<24>>24)==(0);
        if ($43) {
         $49 = load4($35);
         $50 = $49 & 1;
         $51 = ($50|0)==(0);
         if ($51) {
          $$283$off0 = 1;
          label = 20;
          break L34;
         } else {
          $$182$off0 = 1;$$186$off0 = $$085$off0;
          break;
         }
        }
        $44 = load4($36);
        $45 = ($44|0)==(1);
        if ($45) {
         label = 25;
         break L34;
        }
        $46 = load4($35);
        $47 = $46 & 2;
        $48 = ($47|0)==(0);
        if ($48) {
         label = 25;
         break L34;
        } else {
         $$182$off0 = 1;$$186$off0 = 1;
        }
       }
      } while(0);
      $52 = ((($$084)) + 8|0);
      $$081$off0 = $$182$off0;$$084 = $52;$$085$off0 = $$186$off0;
     }
     do {
      if ((label|0) == 20) {
       if (!($$085$off0)) {
        store4($19,$2);
        $53 = ((($1)) + 40|0);
        $54 = load4($53);
        $55 = (($54) + 1)|0;
        store4($53,$55);
        $56 = ((($1)) + 36|0);
        $57 = load4($56);
        $58 = ($57|0)==(1);
        if ($58) {
         $59 = load4($36);
         $60 = ($59|0)==(2);
         if ($60) {
          store1($34,1);
          if ($$283$off0) {
           label = 25;
           break;
          } else {
           $61 = 4;
           break;
          }
         }
        }
       }
       if ($$283$off0) {
        label = 25;
       } else {
        $61 = 4;
       }
      }
     } while(0);
     if ((label|0) == 25) {
      $61 = 3;
     }
     store4($25,$61);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 L1: do {
  if ($6) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
  } else {
   $7 = ((($0)) + 16|0);
   $8 = ((($0)) + 12|0);
   $9 = load4($8);
   $10 = (((($0)) + 16|0) + ($9<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($7,$1,$2,$3);
   $11 = ($9|0)>(1);
   if ($11) {
    $12 = ((($0)) + 24|0);
    $13 = ((($1)) + 54|0);
    $$0 = $12;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($$0,$1,$2,$3);
     $14 = load1($13);
     $15 = ($14<<24>>24)==(0);
     if (!($15)) {
      break L1;
     }
     $16 = ((($$0)) + 8|0);
     $17 = ($16>>>0)<($10>>>0);
     if ($17) {
      $$0 = $16;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 4|0);
 $5 = load4($4);
 $6 = $5 >> 8;
 $7 = $5 & 1;
 $8 = ($7|0)==(0);
 if ($8) {
  $$0 = $6;
 } else {
  $9 = load4($2);
  $10 = (($9) + ($6)|0);
  $11 = load4($10);
  $$0 = $11;
 }
 $12 = load4($0);
 $13 = load4($12);
 $14 = ((($13)) + 28|0);
 $15 = load4($14);
 $16 = (($2) + ($$0)|0);
 $17 = $5 & 2;
 $18 = ($17|0)!=(0);
 $19 = $18 ? $3 : 2;
 FUNCTION_TABLE_viiii[$15 & 15]($12,$1,$16,$19);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($0)) + 4|0);
 $7 = load4($6);
 $8 = $7 >> 8;
 $9 = $7 & 1;
 $10 = ($9|0)==(0);
 if ($10) {
  $$0 = $8;
 } else {
  $11 = load4($3);
  $12 = (($11) + ($8)|0);
  $13 = load4($12);
  $$0 = $13;
 }
 $14 = load4($0);
 $15 = load4($14);
 $16 = ((($15)) + 20|0);
 $17 = load4($16);
 $18 = (($3) + ($$0)|0);
 $19 = $7 & 2;
 $20 = ($19|0)!=(0);
 $21 = $20 ? $4 : 2;
 FUNCTION_TABLE_viiiiii[$17 & 3]($14,$1,$2,$18,$21,$5);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 4|0);
 $6 = load4($5);
 $7 = $6 >> 8;
 $8 = $6 & 1;
 $9 = ($8|0)==(0);
 if ($9) {
  $$0 = $7;
 } else {
  $10 = load4($2);
  $11 = (($10) + ($7)|0);
  $12 = load4($11);
  $$0 = $12;
 }
 $13 = load4($0);
 $14 = load4($13);
 $15 = ((($14)) + 24|0);
 $16 = load4($15);
 $17 = (($2) + ($$0)|0);
 $18 = $6 & 2;
 $19 = ($18|0)!=(0);
 $20 = $19 ? $3 : 2;
 FUNCTION_TABLE_viiiii[$16 & 7]($13,$1,$17,$20,$4);
 return;
}
function ___cxa_guard_acquire($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load1($0);
 $2 = ($1<<24>>24)==(1);
 if ($2) {
  $$0 = 0;
 } else {
  store1($0,1);
  $$0 = 1;
 }
 return ($$0|0);
}
function ___cxa_guard_release($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___cxa_guard_abort($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocC2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,(2256));
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(9348);
 $1 = (($0) + 0)|0;
 store4(9348,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($2);
 store4($3,$4);
 $5 = load4($0);
 $6 = ((($5)) + 16|0);
 $7 = load4($6);
 $8 = (FUNCTION_TABLE_iiii[$7 & 31]($0,$1,$3)|0);
 $9 = $8&1;
 if ($8) {
  $10 = load4($3);
  store4($2,$10);
 }
 STACKTOP = sp;return ($9|0);
}
function ___cxa_is_pointer_type($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $4 = 0;
 } else {
  $2 = (___dynamic_cast($0,1448,1520,0)|0);
  $phitmp = ($2|0)!=(0|0);
  $4 = $phitmp;
 }
 $3 = $4&1;
 return ($3|0);
}
function runPostSets() {
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memmove(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if (((src|0) < (dest|0)) & ((dest|0) < ((src + num)|0))) {
      // Unlikely case: Copy backwards in a safe manner
      ret = dest;
      src = (src + num)|0;
      dest = (dest + num)|0;
      while ((num|0) > 0) {
        dest = (dest - 1)|0;
        src = (src - 1)|0;
        num = (num - 1)|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      }
      dest = ret;
    } else {
      _memcpy(dest, src, num) | 0;
    }
    return dest | 0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&7](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&7]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&3](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&15](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&31](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&3]();
}


function dynCall_iiiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  return FUNCTION_TABLE_iiiii[index&7](a1|0,a2|0,a3|0,a4|0)|0;
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&15](a1|0,a2|0)|0;
}


function dynCall_iiiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  return FUNCTION_TABLE_iiiiii[index&1](a1|0,a2|0,a3|0,a4|0,a5|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&15](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(1);
}
function b2() {
 ; abort(2);return 0;
}
function b3(p0) {
 p0 = p0|0; abort(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(4);
}
function b5(p0) {
 p0 = p0|0; abort(5);return 0;
}
function b6(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(6);
}
function b7() {
 ; abort(7);
}
function b8(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(8);return 0;
}
function b9(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(9);
}
function b10(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(10);return 0;
}
function b11(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(11);return 0;
}
function b12(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(12);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorI5VNodeNS3_9allocatorIS5_EEEEjES2_SA_JjEE6invokeEPSC_PS8_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3setERS7_jRKS4_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbEE6invokeEPFS2_S9_bEPNS0_11BindingTypeIS9_EUt_Eb,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES2_EE6invokeEPFS2_S9_S2_EPNS0_11BindingTypeIS9_EUt_EPS2_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_EE6invokeEPFS2_S9_S9_EPNS0_11BindingTypeIS9_EUt_ESG_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataEE6invokeEPFS2_S9_SA_EPNS0_11BindingTypeIS9_EUt_EPSA_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SC_EPNS0_11BindingTypeIS9_EUt_EPSC_,__ZN10emscripten8internal7InvokerI5VNodeJRS2_S3_EE6invokeEPFS2_S3_S3_EPS2_S7_,__ZN10emscripten8internal7InvokerI5VNodeJNS_3valERS2_EE6invokeEPFS2_S3_S4_EPNS0_7_EM_VALEPS2_,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__Z6h_stdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE,b1,b1,b1];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newI9VNodeDataJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal15raw_constructorI5VNodeJEEEPT_DpNS0_11BindingTypeIT0_E8WireTypeE,__ZN10emscripten8internal12operator_newINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEEEPT_DpOT0_,b2,b2];
var FUNCTION_TABLE_vi = [b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorI9VNodeDataEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorI5VNodeEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEvPT_,_cleanup_387,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE9push_backERKS1_,__Z3h_sNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE,__Z8to_VNodeN10emscripten3valE];
var FUNCTION_TABLE_ii = [b5,___stdio_close,__ZNKSt9bad_alloc4whatEv,__ZN10emscripten8internal13getActualTypeI9VNodeDataEEPKvPT_,__ZN10emscripten8internal7InvokerIP9VNodeDataJEE6invokeEPFS3_vE,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEbNS_4lessIS6_EENS4_INS_4pairIKS6_bEEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEJEE6invokeEPFS8_vE,__ZNKSt3__26vectorI5VNodeNS_9allocatorIS1_EEE4sizeEv,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7setWireIS2_EEvRKMS2_SH_RT_PSH_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3setERSG_RSD_RKb,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7setWireIS2_EEvRKMS2_S9_RT_PNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7setWireIS2_EEvRKMS2_S3_RT_PS3_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7setWireIS2_EEvRKMS2_S3_RT_PNS0_7_EM_VALE,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7setWireIS2_EEvRKMS2_S7_RT_PS7_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvRKS4_EvPS7_JS9_EE6invokeERKSB_SC_PS4_,__ZNSt3__26vectorI5VNodeNS_9allocatorIS1_EEE6resizeEjRKS1_,__Z4h_tiNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEb,__Z4h_snNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE5VNode,__Z4h_stNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_,__Z4h_sdNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData,__Z4h_scNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_6vectorI5VNodeNS3_IS7_EEEE,__Z11patch_vnodeR5VNodeS0_,__Z13patch_elementN10emscripten3valER5VNode,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiii = [b8,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEjRKS4_EbS8_JjSA_EE6invokeEPSC_PS7_jPS4_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS2_EE6invokeEPFS2_S9_SA_S2_EPNS0_11BindingTypeIS9_EUt_EPSA_PS2_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataS9_EE6invokeEPFS2_S9_SA_S9_EPNS0_11BindingTypeIS9_EUt_EPSA_SH_,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_EPSA_PSD_,b8,b8,b8];
var FUNCTION_TABLE_viiiiii = [b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b10,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal12MemberAccessI9VNodeDataNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEbNS3_4lessISA_EENS8_INS3_4pairIKSA_bEEEEEEE7getWireIS2_EEPSH_RKMS2_SH_RKT_,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEE7getWireIS2_EEPNS0_11BindingTypeIS9_EUt_ERKMS2_S9_RKT_,__ZN10emscripten8internal12MemberAccessI5VNode9VNodeDataE7getWireIS2_EEPS3_RKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNS_3valEE7getWireIS2_EEPNS0_7_EM_VALERKMS2_S3_RKT_,__ZN10emscripten8internal12MemberAccessI5VNodeNSt3__26vectorIS2_NS3_9allocatorIS2_EEEEE7getWireIS2_EEPS7_RKMS2_S7_RKT_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEKFjvEjPKS7_JEE6invokeERKS9_SB_,__ZN10emscripten8internal12VectorAccessINSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEE3getERKS7_j,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEEE6invokeEPFS2_S9_EPNS0_11BindingTypeIS9_EUt_E,__ZN10emscripten8internal7InvokerI5VNodeJNS_3valEEE6invokeEPFS2_S3_EPNS0_7_EM_VALE];
var FUNCTION_TABLE_iiiiii = [b11,__ZN10emscripten8internal7InvokerI5VNodeJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEES9_9VNodeDataNS3_6vectorIS2_NS7_IS2_EEEEEE6invokeEPFS2_S9_S9_SA_SD_EPNS0_11BindingTypeIS9_EUt_ESK_PSA_PSD_];
var FUNCTION_TABLE_viiii = [b12,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEbNS2_4lessIS9_EENS7_INS2_4pairIKS9_bEEEEEERSD_RKbEvSH_JSI_SK_EE6invokeEPSM_PSG_PNS0_11BindingTypeIS9_EUt_Eb,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorI5VNodeNS2_9allocatorIS4_EEEEFvjRKS4_EvPS7_JjS9_EE6invokeERKSB_SC_jPS4_,__Z5h_sdnNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeData5VNode,__Z5h_sdtNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataS5_,__Z5h_sdcNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE9VNodeDataNS_6vectorI5VNodeNS3_IS8_EEEE,b12,b12,b12,b12,b12,b12];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _pthread_self: _pthread_self, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, __GLOBAL__sub_I_app_cpp: __GLOBAL__sub_I_app_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;