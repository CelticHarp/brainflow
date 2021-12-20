/* automatically generated by rust-bindgen 0.59.1 */

#![allow(non_camel_case_types)]


extern "C" {
    pub fn prepare(json_params: *const ::std::os::raw::c_char) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn predict(
        data: *mut f64,
        data_len: ::std::os::raw::c_int,
        output: *mut f64,
        json_params: *const ::std::os::raw::c_char,
    ) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn release(json_params: *const ::std::os::raw::c_char) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn release_all() -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn set_log_level_ml_module(log_level: ::std::os::raw::c_int) -> ::std::os::raw::c_int;
}
extern "C" {
    pub fn set_log_file_ml_module(log_file: *const ::std::os::raw::c_char)
        -> ::std::os::raw::c_int;
}
