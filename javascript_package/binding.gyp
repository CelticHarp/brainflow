{
  "targets": [
    {
      "target_name": "data_handler",
      "type": "shared_library",
      'include_dirs': [
        "../src/utils/inc",
        "../src/data_handler/inc",
        "../third_party",
        "../third_party/DSPFilters/include",
        "../third_party/wavelib/header",
        ],
      "sources": [
        "../src/data_handler/data_handler.cpp"
      ],
      "libraries": [
        "<(module_root_dir)/tobii/lib/x64/tobii_stream_engine.lib"
      ],
    }
  ]
}